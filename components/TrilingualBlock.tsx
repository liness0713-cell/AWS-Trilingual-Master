import React from 'react';
import { TrilingualText } from '../types';
import { Volume2 } from 'lucide-react';

interface TrilingualBlockProps {
  content: TrilingualText;
  showFurigana: boolean;
  className?: string;
  variant?: 'title' | 'body' | 'option';
}

const TrilingualBlock: React.FC<TrilingualBlockProps> = ({ content, showFurigana, className = "", variant = 'body' }) => {
  const baseStyles = "space-y-1 w-full";
  
  const enStyle = variant === 'title' ? "font-bold text-lg text-slate-800" : "text-slate-700";
  const zhStyle = variant === 'title' ? "font-medium text-slate-600 text-base" : "text-slate-500 text-sm";
  // Increased line-height (leading-9) to ensure ruby text doesn't overlap lines
  const jaStyle = variant === 'title' ? "font-medium text-slate-600 text-base" : "text-slate-500 text-sm leading-9";

  // Clean text for TTS: remove <rt> content (furigana readings) and then strip all tags
  const cleanTextForSpeech = (htmlOrText: string) => {
    // 1. Remove the ruby text content inside <rt>...</rt>
    const noRuby = htmlOrText.replace(/<rt>.*?<\/rt>/g, '');
    // 2. Strip remaining HTML tags (like <ruby>, <b>, etc.)
    return noRuby.replace(/<[^>]*>/g, '');
  };

  const handleSpeak = (e: React.MouseEvent, text: string, lang: string) => {
    e.stopPropagation(); // Prevent triggering parent click (e.g., selecting a quiz answer)
    
    // Cancel any current speech
    window.speechSynthesis.cancel();

    const textToSpeak = cleanTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang; // 'en-US', 'zh-CN', 'ja-JP'
    utterance.rate = 1.0; 
    
    window.speechSynthesis.speak(utterance);
  };

  const SpeakButton = ({ text, lang }: { text: string, lang: string }) => (
    <div
      role="button"
      onClick={(e) => handleSpeak(e, text, lang)}
      className="ml-2 opacity-60 hover:opacity-100 text-slate-400 hover:text-orange-600 cursor-pointer p-1 rounded-full hover:bg-orange-100 transition-all shrink-0 flex items-center justify-center"
      title={`Read in ${lang === 'zh-CN' ? 'Chinese' : lang === 'ja-JP' ? 'Japanese' : 'English'}`}
    >
      <Volume2 size={16} />
    </div>
  );

  return (
    <div className={`${baseStyles} ${className}`}>
      {/* English */}
      <div className="flex justify-between items-start gap-2 group">
        <div className={`flex-1 ${enStyle}`}>{content.en}</div>
        <SpeakButton text={content.en} lang="en-US" />
      </div>
      
      {/* Container for Asian languages */}
      <div className="flex flex-col gap-1 border-l-2 border-orange-200 pl-3 mt-1">
        {/* Chinese */}
        <div className="flex justify-between items-start gap-2 group">
          <div className={`flex-1 ${zhStyle}`}>{content.zh}</div>
          <SpeakButton text={content.zh} lang="zh-CN" />
        </div>
        
        {/* Japanese with Ruby Toggle */}
        <div className="flex justify-between items-start gap-2 group">
          <div 
            className={`flex-1 ${jaStyle} ${!showFurigana ? 'furigana-hidden' : ''}`}
            dangerouslySetInnerHTML={{ __html: content.ja }}
          />
          <SpeakButton text={content.ja} lang="ja-JP" />
        </div>
      </div>
    </div>
  );
};

export default TrilingualBlock;