
import React from 'react';
import { ActionLink } from '../types';

const LinkList: React.FC<{ links: ActionLink[] }> = ({ links }) => {
  return (
    <div className="flex flex-col gap-4 px-6 mb-24 w-full max-w-lg mx-auto">
      {links.map((link, index) => (
        <a
          key={link.id}
          href={link.url}
          className={`
            group relative flex items-center justify-between w-full py-4 px-7 rounded-2xl 
            text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase 
            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform
            hover:scale-[1.025] hover:shadow-[0_20px_40px_-10px_rgba(0,53,193,0.2)]
            active:scale-95 animate-fade-up overflow-hidden
            ${link.isPriority 
              ? 'bg-[#0035C1] text-white' 
              : 'bg-white text-[#0035C1] border border-[#0035C1]/10'
            }
          `}
          style={{ 
            animationDelay: `${0.2 + index * 0.1}s`,
          }}
        >
          {/* Vibrant Gradient Transition Overlay */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0
            ${link.isPriority 
              ? 'bg-gradient-to-r from-[#0035C1] via-[#0055FF] to-[#0035C1]' 
              : 'bg-gradient-to-r from-white via-[#F0F4FF] to-white'
            }
          `}></div>

          {/* Accent Color Slide (More Vibrant Hue) */}
          <div className={`
            absolute inset-0 z-0 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] -translate-x-full group-hover:translate-x-0
            opacity-10
            ${link.isPriority ? 'bg-[#FECE00]' : 'bg-[#FF7300]'}
          `}></div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex items-center gap-4">
            {/* Pulsing Sparkle Icon (Only pulses on hover) */}
            <div className="relative w-4 h-4 flex items-center justify-center">
              <svg 
                className={`
                  w-full h-full transition-all duration-500 transform
                  group-hover:animate-[btn-pulse_1s_infinite] group-hover:scale-125
                  ${link.isPriority ? 'text-[#FECE00]' : 'text-[#FF7300]'}
                `} 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
            </div>
            
            <span className="transition-all duration-500 group-hover:tracking-[0.5em]">
              {link.title}
            </span>
          </div>
          
          {/* Interaction Indicator */}
          <div className="relative z-10 flex items-center gap-2">
             <div className={`
                text-[9px] font-bold tracking-widest transition-opacity duration-300 opacity-0 group-hover:opacity-100 mr-2
                ${link.isPriority ? 'text-white/70' : 'text-[#0035C1]/70'}
              `}>
                OPEN
              </div>
              <div className={`
                h-8 w-8 rounded-xl flex items-center justify-center transition-all duration-500 transform
                ${link.isPriority ? 'bg-white/10 group-hover:bg-white/20' : 'bg-[#0035C1]/5 group-hover:bg-[#0035C1]/10'}
                group-hover:rotate-45
              `}>
                <svg 
                  className="w-4 h-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
          </div>

          {/* Subtle Reflection Glint */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:animate-[shine_2s_infinite]"></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LinkList;
