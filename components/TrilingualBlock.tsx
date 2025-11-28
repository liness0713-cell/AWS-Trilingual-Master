import React from 'react';
import { TrilingualText } from '../types';

interface TrilingualBlockProps {
  content: TrilingualText;
  showFurigana: boolean;
  className?: string;
  variant?: 'title' | 'body' | 'option';
}

const TrilingualBlock: React.FC<TrilingualBlockProps> = ({ content, showFurigana, className = "", variant = 'body' }) => {
  const baseStyles = "space-y-1";
  
  const enStyle = variant === 'title' ? "font-bold text-lg text-slate-800" : "text-slate-700";
  const zhStyle = variant === 'title' ? "font-medium text-slate-600 text-base" : "text-slate-500 text-sm";
  // Increased line-height (leading-9) to ensure ruby text doesn't overlap lines
  const jaStyle = variant === 'title' ? "font-medium text-slate-600 text-base" : "text-slate-500 text-sm leading-9";

  return (
    <div className={`${baseStyles} ${className}`}>
      {/* English */}
      <div className={enStyle}>{content.en}</div>
      
      {/* Container for Asian languages */}
      <div className="flex flex-col gap-1 border-l-2 border-orange-200 pl-3 mt-1">
        {/* Chinese */}
        <div className={zhStyle}>{content.zh}</div>
        
        {/* Japanese with Ruby Toggle */}
        <div 
          className={`${jaStyle} ${!showFurigana ? 'furigana-hidden' : ''}`}
          dangerouslySetInnerHTML={{ __html: content.ja }}
        />
      </div>
    </div>
  );
};

export default TrilingualBlock;