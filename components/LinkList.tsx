
import React from 'react';
import { ActionLink } from '../types';

const LinkList: React.FC<{ links: ActionLink[] }> = ({ links }) => {
  return (
    <div className="flex flex-col gap-5 px-6 mb-24 w-full max-w-lg mx-auto">
      {links.map((link, index) => (
        <a
          key={link.id}
          href={link.url}
          className={`
            group relative flex items-center justify-between w-full py-5 px-8 rounded-[2rem] text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] transform
            hover:-translate-y-2 hover:scale-[1.02] active:scale-95 animate-fade-up overflow-hidden
            ${link.isPriority 
              ? 'bg-[#0035C1] text-white shadow-[0_20px_40px_-10px_rgba(0,53,193,0.4)]' 
              : 'bg-white/80 backdrop-blur-md text-[#0035C1] border border-[#0035C1]/10 shadow-[0_10px_30px_rgba(0,53,193,0.05)]'
            }
          `}
          style={{ 
            animationDelay: `${0.2 + index * 0.1}s`,
          }}
        >
          {/* Magnetic Spotlight Background Effect */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0
            bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.8)_0%,transparent_70%)]
            ${link.isPriority ? 'bg-[radial-gradient(circle_at_center,rgba(254,206,0,0.4)_0%,transparent_70%)]' : ''}
          `}></div>

          {/* Liquid Wave Overlay */}
          <div className={`
            absolute inset-0 z-0 transition-transform duration-1000 ease-in-out translate-y-full group-hover:translate-y-0
            ${link.isPriority ? 'bg-[#FF7300]' : 'bg-[#0035C1]'}
          `}></div>

          {/* Glass Texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none z-10"></div>

          {/* Label Content */}
          <div className="relative z-20 flex items-center gap-4">
            {/* Dynamic Pulse Dot */}
            <div className="relative">
              <div className={`
                w-2 h-2 rounded-full transition-transform duration-500 group-hover:scale-150
                ${link.isPriority ? 'bg-[#FECE00]' : 'bg-[#FF7300]'}
              `}></div>
              <div className={`
                absolute inset-0 rounded-full animate-ping
                ${link.isPriority ? 'bg-white' : 'bg-[#FF7300]/40'}
              `}></div>
            </div>
            
            <span className={`
              transition-all duration-500 transform
              group-hover:translate-x-2 group-hover:text-white
              ${link.isPriority ? 'text-white' : 'text-[#0035C1]'}
            `}>
              {link.title}
            </span>
          </div>
          
          {/* Animated 3D Icon Assembly */}
          <div className="relative z-20 h-10 w-10 flex items-center justify-center">
            {/* Background Circle */}
            <div className={`
              absolute inset-0 rounded-xl transition-all duration-500 transform
              ${link.isPriority ? 'bg-white/20' : 'bg-[#0035C1]/5 group-hover:bg-white/20'}
              group-hover:rotate-[135deg] group-hover:scale-110
            `}></div>
            
            {/* Main Arrow */}
            <svg 
              className={`
                w-5 h-5 transition-all duration-500 transform
                ${link.isPriority ? 'text-white' : 'text-[#0035C1] group-hover:text-white'}
                group-hover:translate-x-1 group-hover:-translate-y-1
              `} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>

            {/* Ghost Shadow Arrow */}
            <svg 
              className="absolute w-5 h-5 text-white opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:translate-x-3 group-hover:-translate-y-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>

          {/* Border Glow Inset */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-[2rem] transition-all duration-500 pointer-events-none z-30"></div>
        </a>
      ))}
    </div>
  );
};

export default LinkList;
