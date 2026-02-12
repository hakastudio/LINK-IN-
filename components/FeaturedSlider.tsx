
import React, { useEffect, useRef, useState } from 'react';
import { FeaturedCard } from '../types';

const SliderCard: React.FC<{ item: FeaturedCard }> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We removed unobserve to allow the exit animation to trigger when scrolling away
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`
        flex-shrink-0 w-full max-w-[340px] md:max-w-[400px] bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-[#0035C1]/5 group hover:shadow-2xl 
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 blur-[2px] pointer-events-none'}
      `}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        {/* Animated Yellow Tag */}
        <div className="absolute top-5 left-5 bg-[#FECE00] text-[#0035C1] text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg tracking-widest uppercase z-20 animate-profile-pulse shadow-[#FECE00]/20">
          {item.tag}
        </div>
        {/* Subtle overlay glow for the tag */}
        <div className="absolute top-5 left-5 bg-[#FECE00] rounded-full blur-md opacity-40 w-16 h-6 animate-profile-pulse pointer-events-none" style={{ animationDelay: '0.2s' }}></div>
      </div>
      <div className="p-8">
        <h3 className="font-heading font-black text-xl text-[#0035C1] mb-3 leading-tight lowercase">
          {item.title.toLowerCase()}
        </h3>
        <p className="text-sm text-[#0035C1]/60 font-medium mb-8 line-clamp-2">
          {item.description}
        </p>
        <a 
          href={item.url}
          className="inline-block w-full text-center bg-[#FF7300] hover:bg-[#0035C1] text-white font-black text-xs py-4 rounded-2xl transition-all duration-300 tracking-[0.2em] uppercase shadow-lg hover:shadow-orange-500/20"
        >
          {item.ctaText}
        </a>
      </div>
    </div>
  );
};

const FeaturedSlider: React.FC<{ items: FeaturedCard[] }> = ({ items }) => {
  return (
    <div className="w-full mb-10 flex justify-center">
      <div className={`flex gap-4 px-6 pb-4 ${items.length > 1 ? 'overflow-x-auto scroll-smooth no-scrollbar' : 'justify-center w-full'}`}>
        {items.map((item) => (
          <SliderCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;
