
import React from 'react';
import { BioData } from '../types';

const ProfileHeader: React.FC<{ data: BioData }> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-12 pb-8">
      {/* Avatar Assembly with Layered Animations */}
      <div className="relative mb-10 group">
        {/* Floating Wrapper */}
        <div className="relative animate-float-slow">
          
          {/* Background Glow Rings */}
          {/* Outer Orange Glow - Fast pulse, Slow spin */}
          <div className="absolute -inset-4 bg-[#FF7300] rounded-full blur-2xl opacity-20 animate-spin-slow group-hover:opacity-40 transition-opacity duration-700"></div>
          
          {/* Middle White Glow - Breathing effect */}
          <div className="absolute -inset-2 bg-white rounded-full blur-xl opacity-30 animate-profile-pulse"></div>

          {/* Main Image Container */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-[0_20px_50px_rgba(0,53,193,0.15)] overflow-hidden z-10 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2">
            <img 
              src={data.profilePic} 
              alt={data.name} 
              className="w-full h-full object-cover animate-profile-pulse transition-transform duration-700 group-hover:scale-110"
              style={{ animationDuration: '6s' }}
            />
          </div>

          {/* Decorative Small Dot - Yellow Brand Accent */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#FECE00] border-4 border-white rounded-full z-20 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
        </div>
      </div>

      {/* Name and Role */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tighter text-[#0035C1] mb-2 lowercase">
          {data.name.toLowerCase()}
        </h1>
        <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#FF7300] mb-4 uppercase">
          {data.role}
        </p>
      </div>
      
      {/* Bio Text Area with Hover Interaction */}
      <p className="max-w-md text-sm md:text-base text-[#0035C1] font-bold leading-relaxed mb-8 transition-all duration-500 hover:scale-[1.01] cursor-default hover:drop-shadow-md origin-center relative z-10">
        {data.bio}
      </p>

      {/* Social Icons with Tooltips and Enhanced Dynamic Animations */}
      <div className="flex gap-6 items-center mb-4 relative z-10">
        {data.socials.map((social, index) => (
          <div 
            key={social.id} 
            className="relative group/tooltip flex flex-col items-center opacity-0 animate-social-entrance"
            style={{ animationDelay: `${0.8 + index * 0.15}s` }}
          >
            {/* Tooltip */}
            <div className="absolute bottom-full mb-3 px-3 py-1 bg-[#0035C1] text-white text-[10px] font-bold tracking-widest uppercase rounded shadow-lg opacity-0 pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1 transition-all duration-300 z-10 whitespace-nowrap">
              {social.platform}
            </div>

            {/* Icon Button */}
            <a 
              href={social.url} 
              className="p-3 bg-white rounded-2xl shadow-sm text-[#0035C1] hover:text-white hover:bg-[#FF7300] hover:shadow-[0_10px_25px_rgba(255,115,0,0.3)] transition-all duration-300 transform group-hover/tooltip:scale-110 group-hover/tooltip:-translate-y-2 border border-[#0035C1]/5 active:scale-95 animate-float-bob"
              style={{ animationDelay: `${index * 0.5}s`, animationDuration: `${3 + index * 0.5}s` }}
              aria-label={social.platform}
            >
              <div className="w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover/tooltip:rotate-12">
                {social.platform === 'Instagram' && (
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                )}
                {social.platform === 'TikTok' && (
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.591.214 3.75.606V7.06c-1.027-.64-2.23-1.01-3.516-1.01V9.3c3.637 0 6.586 2.949 6.586 6.586s-2.949 6.586-6.586 6.586-6.586-2.949-6.586-6.586c0-1.286.37-2.489 1.01-3.516H0V0h12.525zM12.525 2.106V0c1.237 0 2.447.202 3.536.572V5.11c-.968-.603-2.1-.951-3.31-.951V6.265c2.722 0 4.929 2.207 4.929 4.929s-2.207 4.929-4.929 4.929-4.929-2.207-4.929-4.929c0-.964.278-1.867.758-2.637H2.106v11.877h11.877V2.106h-1.458z"/></svg>
                )}
                {social.platform === 'Facebook' && (
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                )}
                {social.platform === 'Pinterest' && (
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/></svg>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;
