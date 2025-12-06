import React, { useEffect, useRef } from 'react';
import { Volume2 } from 'lucide-react';
import { createRoot } from 'react-dom/client';

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

  // Helper: Extract text from a DOM node, ignoring <rt> tags (furigana readings)
  const getTextContentExcludingRuby = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || '';
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      // Skip ruby text annotations for TTS
      if (element.tagName.toLowerCase() === 'rt') {
        return '';
      }
      // Process children
      let text = '';
      element.childNodes.forEach(child => {
        text += getTextContentExcludingRuby(child);
      });
      return text;
    }
    return '';
  };

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

    blocks.forEach(block => {
      // Skip if block only contains other blocks (approximate check)
      if (block.querySelector('p, li')) return;

      const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];
      while (walker.nextNode()) {
        textNodes.push(walker.currentNode as Text);
      }

      // We modify the DOM while iterating, so we need to be careful.
      // We will iterate text nodes, find delimiters, split nodes, and insert placeholders.
      // Then we will replace placeholders with React buttons.
      
      const insertLocations: { node: Text, offset: number, charLen: number }[] = [];

      textNodes.forEach(node => {
        const text = node.textContent || '';
        let match;
        // Reset regex state if global (not strictly needed here as we create new regex or don't use global flag)
        
        // Simple approach: Split by delimiter
        const parts = text.split(delimiterRegex);
        
        if (parts.length > 1) {
          // If we found delimiters, we need to process this node
          // This logic is tricky with raw text nodes. 
          // Alternative: Replace text node with a fragment containing text and spans.
          
          const fragment = document.createDocumentFragment();
          let currentBuffer = "";
          let injected = false;

          for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            
            // Reconstruct the text. 
            // If regex has capturing groups, delimiters are in the array.
            // Even indices are content, Odd indices are delimiters (for Asian regex)
            // For English regex /([\.\?\!])(\s+|$)/, groups are: 1=punct, 2=space
            
            // Let's use a simpler iterative match to avoid complex split logic
          }
        }
      });
    });

    // --- SIMPLIFIED DOM MANIPULATION STRATEGY ---
    // Instead of complex regex splits on TextNodes which breaks easily,
    // let's walk the nodes, find delimiters, split the TextNode right there, 
    // insert a SPAN, and continue.

    const processBlock = (block: Element) => {
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
          // We use a small self-contained logic to render or just InnerHTML for performance
          btnContainer.innerHTML = `<button class="tts-small-btn" aria-label="Play sentence"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></button>`;

          // Move walker to the next node (which is the remaining part)
          currentNode = remainingTextNode;
        } else {
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
                // Visual cleanup: if text is empty, maybe hide button? 
                // But usually there's text.
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
      
      // If there is leftover text at the end of the block (no final punctuation), 
      // we usually don't have a button for it unless we force one.
      // The prompt asked for "every sentence", implying usually punctuated ones. 
      // We'll leave un-punctuated trailing fragments alone to avoid clutter.
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