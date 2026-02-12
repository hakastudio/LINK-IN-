
import React from 'react';
import { ActionLink } from '../types';

const LinkList: React.FC<{ links: ActionLink[] }> = ({ links }) => {
  return (
    <div className="flex flex-col gap-4 px-6 mb-12 w-full max-w-xl mx-auto">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          className={`
            group relative flex items-center justify-center w-full py-5 px-6 rounded-3xl text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 transform overflow-hidden
            hover:-translate-y-1 hover:scale-[1.02] animate-btn-pulse hover:animate-none
            ${link.isPriority 
              ? 'bg-[#0035C1] text-white border-2 border-[#0035C1] shadow-xl hover:shadow-[#0035C1]/40' 
              : 'bg-white text-[#0035C1] border-2 border-[#0035C1]/10 hover:border-[#0035C1] shadow-sm hover:shadow-md'
            }
          `}
        >
          {/* Enhanced Yellow Shine Sweep for Priority Links */}
          {link.isPriority && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <div 
                className="absolute top-0 -left-[150%] w-[100%] h-full bg-gradient-to-r from-transparent via-[#FECE00]/40 to-transparent skew-x-[-25deg] group-hover:animate-shine transition-all duration-1000"
              />
              <div 
                className="absolute top-0 -left-[150%] w-[60%] h-full bg-gradient-to-r from-transparent via-[#FECE00]/20 to-transparent skew-x-[-25deg] group-hover:animate-shine transition-all duration-1000 delay-100"
              />
            </div>
          )}

          {/* Hover color transition for non-priority (Standard Orange Sweep) */}
          {!link.isPriority && (
            <div className="absolute inset-0 bg-[#FF7300] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          )}

          <span className={`relative z-10 transition-colors duration-300 ${!link.isPriority ? 'group-hover:text-white' : ''}`}>
            {link.title}
          </span>
          
          <span className={`absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all z-10 ${!link.isPriority ? 'group-hover:text-white' : 'text-[#FECE00]'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
};

export default LinkList;
