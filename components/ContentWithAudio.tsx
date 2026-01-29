
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
    const isAsian = lang === 'zh-CN' || lang === 'ja-JP';
    const delimiterRegex = isAsian ? /([。？！])/ : /([\.\?\!])(\s+|$)/;

    // 3. Process block elements to find text nodes
    const blocks = container.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6, blockquote, div');

    const processBlock = (block: Element) => {
      // Skip if block contains other block-level elements (approximate check)
      if (block.querySelector('p, li')) return;

      // 3a. Snapshot all text nodes first. 
      // Modifying the DOM while walking it with TreeWalker can be dangerous/buggy.
      const textNodes: Text[] = [];
      const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        textNodes.push(walker.currentNode as Text);
      }

      // 3b. Process each original text node
      textNodes.forEach(originalNode => {
        let currentNode = originalNode;
        
        // Loop to handle multiple sentences within a single text node
        while (true) {
          const text = currentNode.textContent || '';
          const match = delimiterRegex.exec(text);

          if (match) {
            const index = match.index;
            const punctuationLength = match[0].length; 
            const splitIndex = index + punctuationLength;

            // Split the text node:
            // Part 1 (currentNode): "Sentence."
            // Part 2 (remainingTextNode): " Next sentence."
            const remainingTextNode = currentNode.splitText(splitIndex);
            
            // Insert the button container after the sentence
            const btnContainer = document.createElement('span');
            btnContainer.className = 'inline-audio-wrapper';
            btnContainer.style.marginLeft = '4px';
            btnContainer.style.marginRight = '4px';
            btnContainer.style.verticalAlign = 'middle';
            btnContainer.style.display = 'inline-block';
            
            // Insert in DOM: [Sentence.] [Button] [ Next Sentence.]
            // CRITICAL FIX: Insert into the specific parent of the text node, not the block container.
            // The text node might be inside a <b>, <i>, or <rt> tag nested within the block.
            if (currentNode.parentNode) {
              currentNode.parentNode.insertBefore(btnContainer, remainingTextNode);
            }

            btnContainer.innerHTML = `<button class="tts-small-btn" aria-label="Play sentence"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></button>`;

            // Continue the loop with the remaining part of the text
            currentNode = remainingTextNode;
          } else {
            // No more delimiters in this node, move to the next original node in outer loop
            break;
          }
        }
      });

      // 4. Attach click handlers to the injected buttons
      // We traverse the block again to reconstruct the full sentences for the buttons
      let textAccumulator = '';
      
      const walkForExtraction = (node: Node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          if (el.classList.contains('inline-audio-wrapper')) {
            // Found a button! Assign accumulated text and reset.
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
          
          if (el.tagName.toLowerCase() === 'rt') return; // Skip ruby text
          
          node.childNodes.forEach(walkForExtraction);
        } else if (node.nodeType === Node.TEXT_NODE) {
          textAccumulator += node.textContent;
        }
      };

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
