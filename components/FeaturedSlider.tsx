
import React, { useEffect, useRef, useState } from 'react';
import { FeaturedCard } from '../types';

interface SliderCardProps {
  item: FeaturedCard;
  isEditMode?: boolean;
  onUpdate?: (updated: FeaturedCard) => void;
}

const SliderCard: React.FC<SliderCardProps> = ({ item, isEditMode, onUpdate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => onUpdate?.({ ...item, image: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`
        flex-shrink-0 w-[320px] md:w-[420px] bg-white/95 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 group 
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 blur-[2px]'}
        hover:shadow-[0_50px_100px_-20px_rgba(0,53,193,0.3)]
      `}
    >
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
      
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Image Zoom Effect */}
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {isEditMode && (
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 z-30 bg-[#0035C1]/40 flex items-center justify-center text-white font-bold text-[11px] uppercase tracking-widest backdrop-blur-[2px]"
          >
            Ganti Gambar
          </button>
        )}
      </div>
      
      <div className="p-8 flex flex-col items-center text-center">
        {isEditMode ? (
          <input 
            className="font-heading font-black text-2xl text-[#0035C1] leading-tight lowercase bg-transparent border-b border-[#0035C1]/20 focus:outline-none text-center w-full mb-6"
            value={item.title}
            onChange={(e) => onUpdate?.({ ...item, title: e.target.value })}
          />
        ) : (
          <h3 className="font-heading font-black text-2xl text-[#0035C1] leading-tight lowercase mb-6 transition-colors duration-300 group-hover:text-[#FF7300]">
            {item.title.toLowerCase()}
          </h3>
        )}

        {/* Action Button: Lihat Detail */}
        <a 
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center w-full py-4 px-8 rounded-full overflow-hidden group/btn transition-all duration-300 transform active:scale-95 shadow-lg"
        >
          {/* Liquid Background for Button */}
          <div className="absolute inset-0 bg-[#0035C1] transition-all duration-500 ease-out group-hover/btn:bg-[#FF7300]"></div>
          
          {/* Shine effect */}
          <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] group-hover/btn:animate-shine"></div>

          <span className="relative z-10 text-[11px] font-black tracking-[0.4em] text-white uppercase transition-all duration-300 group-hover/btn:tracking-[0.5em]">
            {item.ctaText || 'Lihat Detail'}
          </span>
          
          <svg className="relative z-10 w-5 h-5 ml-3 text-white transition-transform duration-300 transform group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const FeaturedSlider: React.FC<{ 
  items: FeaturedCard[], 
  isEditMode?: boolean,
  onUpdate?: (items: FeaturedCard[]) => void 
}> = ({ items, isEditMode, onUpdate }) => {
  
  const updateItem = (index: number, updatedItem: FeaturedCard) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    onUpdate?.(newItems);
  };

  return (
    <div className="w-full mb-16">
      {/* Centered Section Label with Animated Border and Hover Interaction */}
      <div className="flex items-center justify-center gap-6 px-8 mb-12 overflow-hidden">
        {/* Left Decorative Line */}
        <div className="relative flex items-center">
          <div className="h-[3px] w-16 md:w-28 bg-gradient-to-r from-transparent to-[#0035C1]/30 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-[#FF7300] rounded-full ml-2 animate-pulse shadow-[0_0_15px_#FF7300]"></div>
        </div>
        
        {/* Title with Larger Size and Interactive FX */}
        <div className="group relative px-12 py-5 flex items-center justify-center cursor-default transition-all duration-500 hover:scale-110">
          {/* Pulsing Border Layers */}
          <div className="absolute inset-0 rounded-full border-2 border-[#0035C1]/15 animate-profile-pulse opacity-60 group-hover:border-[#0035C1]/50 group-hover:bg-white/70 transition-all duration-500"></div>
          <div className="absolute inset-0 rounded-full border border-[#FF7300]/15 animate-profile-pulse animation-delay-2000 opacity-40"></div>
          
          {/* Interactive Shadow Glow on Hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_15px_50px_-10px_rgba(0,53,193,0.4)] transition-all duration-500"></div>

          <h2 
            className="relative z-10 text-lg md:text-xl font-heading font-black tracking-[0.7em] text-[#0035C1] uppercase whitespace-nowrap drop-shadow-sm transition-all duration-500 group-hover:tracking-[0.9em]"
            style={{ textShadow: '0 3px 10px rgba(0,53,193,0.12)' }}
          >
            Spotlight
          </h2>
        </div>
        
        {/* Right Decorative Line */}
        <div className="relative flex items-center">
          <div className="w-3.5 h-3.5 bg-[#FF7300] rounded-full mr-2 animate-pulse shadow-[0_0_15px_#FF7300]"></div>
          <div className="h-[3px] w-16 md:w-28 bg-gradient-to-l from-transparent to-[#0035C1]/30 rounded-full"></div>
        </div>
      </div>

      {/* Fully Centered Container */}
      <div className="flex justify-center w-full px-6">
        <div className="flex gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory justify-center items-center py-8 max-w-full">
          {items.map((item, idx) => (
            <div key={item.id} className="snap-center pb-6">
              <SliderCard 
                item={item} 
                isEditMode={isEditMode} 
                onUpdate={(updated) => updateItem(idx, updated)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSlider;
