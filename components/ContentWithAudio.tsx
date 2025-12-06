
import React, { useEffect, useRef } from 'react';

interface ContentWithAudioProps {
  htmlContent: string;
  lang: string; // 'en-US', 'zh-CN', 'ja-JP'
  className?: string;
  showFurigana?: boolean;
}

const ContentWithAudio: React.FC<ContentWithAudioProps> = ({ 
  htmlContent, 
  lang, 
  className = "",
  showFurigana = true 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSpeak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // 1. Set initial HTML
    container.innerHTML = htmlContent;

    // 2. Identify delimiters based on language
    // En: . ? ! (followed by space or end of line)
    // Zh/Ja: 。 ？ ！
    const isAsian = lang === 'zh-CN' || lang === 'ja-JP';
    const delimiterRegex = isAsian ? /([。？！])/ : /([\.\?\!])(\s+|$)/;

    // 3. Process block elements (p, li, etc) to scope sentences
    const blocks = container.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6, blockquote, div');

    const processBlock = (block: Element) => {
      // Skip if block only contains other blocks (approximate check)
      if (block.querySelector('p, li')) return;

      // Snapshot child nodes because we will be adding nodes
      const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
      let currentNode: Node | null = walker.nextNode();
      
      while (currentNode) {
        const text = currentNode.textContent || '';
        const match = delimiterRegex.exec(text);

        if (match) {
          // Found a sentence end.
          const index = match.index;
          const punctuationLength = match[0].length; 
          const splitIndex = index + punctuationLength;

          // Split the text node
          const textNode = currentNode as Text;
          // splitText divides the node. original textNode keeps the first part (sentence + punct).
          // remainingTextNode is the new node with the rest of the text.
          const remainingTextNode = textNode.splitText(splitIndex);
          
          // Insert the button container after the current text node (which now ends with punctuation)
          const btnContainer = document.createElement('span');
          btnContainer.className = 'inline-audio-wrapper';
          btnContainer.style.marginLeft = '4px';
          btnContainer.style.marginRight = '4px';
          btnContainer.style.verticalAlign = 'middle';
          btnContainer.style.display = 'inline-block';
          
          block.insertBefore(btnContainer, remainingTextNode);

          // Render the React icon into this span
          btnContainer.innerHTML = `<button class="tts-small-btn" aria-label="Play sentence"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></button>`;

          // Move current processing to the remaining part
          currentNode = remainingTextNode;
        } else {
          // If no match in this node, move to the next text node in the tree
          currentNode = walker.nextNode();
        }
      }

      // After injecting buttons, we need to attach data-text to them.
      // We iterate the block's children, accumulating text.
      // When we hit a .inline-audio-wrapper, we assign the accumulator to it and reset.
      
      let textAccumulator = '';
      
      // Helper recursive walker for extraction
      const walkForExtraction = (node: Node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          if (el.classList.contains('inline-audio-wrapper')) {
            // Found a button! Assign text and reset.
            const btn = el.querySelector('button');
            if (btn) {
              const sentenceText = textAccumulator.trim();
              if (sentenceText) {
                btn.onclick = (e) => {
                  e.stopPropagation();
                  handleSpeak(sentenceText);
                };
              } else {
                el.style.display = 'none'; // Hide orphan buttons
              }
            }
            textAccumulator = ''; // Reset for next sentence
            return;
          }
          
          if (el.tagName.toLowerCase() === 'rt') return; // Skip ruby
          
          node.childNodes.forEach(walkForExtraction);
        } else if (node.nodeType === Node.TEXT_NODE) {
          textAccumulator += node.textContent;
        }
      };

      // Run extraction
      block.childNodes.forEach(walkForExtraction);
    };

    blocks.forEach(processBlock);

  }, [htmlContent, lang]);

  return (
    <div 
      ref={containerRef}
      className={`${className} ${!showFurigana ? 'furigana-hidden' : ''}`}
    />
  );
};

export default ContentWithAudio;
