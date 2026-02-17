
import React from 'react';
import { ActionLink } from '../types';

const LinkList: React.FC<{ links: ActionLink[] }> = ({ links }) => {
  return (
    <div className="flex flex-col gap-4 px-6 mb-24 w-full max-w-md mx-auto">
      {links.map((link, index) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group relative flex items-center justify-between w-full min-h-[72px] py-4 px-7 rounded-[2rem] 
            text-[11px] font-black tracking-[0.3em] uppercase 
            transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
            active:scale-[0.96] active:opacity-90
            hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
            animate-fade-up overflow-hidden border-2
            ${link.isPriority 
              ? 'bg-[#0035C1] text-white shadow-lg shadow-blue-900/20 border-transparent hover:border-[#FECE00] hover:animate-none animate-btn-pulse' 
              : 'bg-white text-[#0035C1] border-[#0035C1]/10 hover:border-[#FF7300] hover:bg-[#FFFBF5]'
            }
          `}
          style={{ 
            animationDelay: `${0.2 + index * 0.08}s`,
          }}
        >
          {/* Hover Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 skew-x-[-20deg] pointer-events-none"></div>

          {/* Subtle Background Flare on Hover/Touch */}
          <div className={`
            absolute inset-0 z-0 opacity-0 group-hover:opacity-10 group-active:opacity-20 transition-all duration-500 ease-out transform scale-90 group-hover:scale-110
            ${link.isPriority ? 'bg-[#FECE00]' : 'bg-[#FF7300]'}
          `}></div>

          {/* Icon & Label */}
          <div className="relative z-10 flex items-center gap-4">
            <div className={`
              w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110
              ${link.isPriority ? 'bg-white/10 text-[#FECE00]' : 'bg-[#0035C1]/5 text-[#FF7300] group-hover:bg-[#FF7300]/10'}
            `}>
              <div 
                className="animate-profile-pulse flex items-center justify-center"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
            </div>
            
            <span className={`
              truncate max-w-[180px] transition-all duration-300 ease-out origin-left
              group-hover:scale-105 
              ${link.isPriority ? 'group-hover:text-[#FECE00]' : 'group-hover:text-[#FF7300]'}
            `}>
              {link.title}
            </span>
          </div>
          
          {/* Arrow */}
          <div className={`
            w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110
            ${link.isPriority 
              ? 'bg-white/10 group-hover:bg-[#FECE00]/20 text-white' 
              : 'bg-[#0035C1]/5 group-hover:bg-[#FF7300]/10 text-[#0035C1] group-hover:text-[#FF7300]'}
          `}>
            <svg className="w-5 h-5 transition-transform duration-300 group-active:translate-x-1 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LinkList;
