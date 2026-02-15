
import React from 'react';
import { ActionLink } from '../types';

const LinkList: React.FC<{ links: ActionLink[] }> = ({ links }) => {
  return (
    <div className="flex flex-col gap-6 px-6 mb-24 w-full max-w-lg mx-auto">
      {links.map((link, index) => (
        <a
          key={link.id}
          href={link.url}
          className={`
            group relative flex items-center justify-between w-full py-5 px-8 rounded-3xl 
            text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase 
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform
            hover:scale-[1.02] hover:-translate-y-1
            hover:shadow-[0_40px_80px_-20px_rgba(0,53,193,0.25)]
            active:scale-[0.98] animate-fade-up overflow-hidden
            ${link.isPriority 
              ? 'bg-[#0035C1] text-white' 
              : 'bg-white text-[#0035C1] border border-[#0035C1]/10'
            }
          `}
          style={{ 
            animationDelay: `${0.2 + index * 0.1}s`,
          }}
        >
          {/* Subtle Background Scaling Layer */}
          <div className={`
            absolute inset-0 z-0 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
            scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100
            ${link.isPriority 
              ? 'bg-gradient-to-br from-[#0055FF] via-[#0035C1] to-[#001A61]' 
              : 'bg-gradient-to-br from-[#F8FAFF] via-white to-[#EBF1FF]'
            }
          `}></div>

          {/* Color-Changing Border Overlay */}
          <div className={`
            absolute inset-0 border-2 rounded-3xl transition-all duration-500 z-30 pointer-events-none
            border-transparent 
            group-hover:border-[#FF7300]
            ${link.isPriority ? 'group-hover:border-[#FECE00]' : ''}
          `}></div>

          {/* Accent Slide Effect */}
          <div className={`
            absolute inset-0 z-0 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] -translate-x-full group-hover:translate-x-0
            opacity-5
            ${link.isPriority ? 'bg-[#FECE00]' : 'bg-[#FF7300]'}
          `}></div>

          {/* Content Section */}
          <div className="relative z-10 flex items-center gap-5">
            {/* Pulsing Sparkle Icon */}
            <div className="relative w-5 h-5 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[180deg]">
              <svg 
                className={`
                  w-full h-full transition-all duration-500 transform
                  group-hover:scale-125
                  ${link.isPriority ? 'text-[#FECE00]' : 'text-[#FF7300]'}
                `} 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
            </div>
            
            <span className="transition-all duration-500 group-hover:tracking-[0.55em] group-hover:translate-x-1">
              {link.title}
            </span>
          </div>
          
          {/* Action Area */}
          <div className="relative z-10 flex items-center gap-4">
             <div className={`
                text-[8px] font-black tracking-[0.4em] transition-all duration-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                ${link.isPriority ? 'text-white/60' : 'text-[#0035C1]/60'}
              `}>
                EXPLORE
              </div>
              <div className={`
                h-10 w-10 rounded-2xl flex items-center justify-center transition-all duration-500 transform
                ${link.isPriority ? 'bg-white/10 group-hover:bg-[#FECE00] group-hover:text-[#0035C1]' : 'bg-[#0035C1]/5 group-hover:bg-[#FF7300] group-hover:text-white'}
                shadow-inner
              `}>
                <svg 
                  className="w-5 h-5 transition-transform duration-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
          </div>

          {/* Glossy Reflective Sweep */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            <div className="absolute top-0 -left-[100%] w-[40%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:animate-[shine_2s_infinite]"></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LinkList;
