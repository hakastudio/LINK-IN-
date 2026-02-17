
import React, { useState, useEffect } from 'react';
import IntroOverlay from './components/IntroOverlay';
import ProfileHeader from './components/ProfileHeader';
import LinkList from './components/LinkList';
import { MOCK_DATA } from './constants';
import { BioData } from './types';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [bioData, setBioData] = useState<BioData>(MOCK_DATA);

  useEffect(() => {
    const savedData = localStorage.getItem('bio_experience_data_v2');
    if (savedData) {
      try {
        setBioData(JSON.parse(savedData));
      } catch (e) {
        setBioData(MOCK_DATA);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#0035C1] selection:text-[#FECE00] bg-[#FECE00] overflow-x-hidden">
      <IntroOverlay 
        name={bioData.name} 
        onComplete={() => setShowContent(true)} 
      />

      <main className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Animated Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ 
                 backgroundImage: 'radial-gradient(#0035C1 1.5px, transparent 1.5px)', 
                 backgroundSize: '32px 32px',
                 maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
               }}>
          </div>

          {/* Large Rotating Retro Star */}
          <div className="absolute top-[-15%] right-[-15%] w-[60vh] h-[60vh] animate-spin-slow opacity-[0.07] text-[#FF7300]">
             <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                <path d="M50 0 L62 38 L100 50 L62 62 L50 100 L38 62 L0 50 L38 38 Z" />
             </svg>
          </div>

          {/* Counter-Rotating Dashed Circle */}
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vh] h-[50vh] animate-spin-slow opacity-[0.05] text-[#0035C1]" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
             <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1]">
                <circle cx="50" cy="50" r="45" strokeDasharray="8 8" />
                <circle cx="50" cy="50" r="30" strokeDasharray="4 4" opacity="0.5" />
             </svg>
          </div>

          {/* Floating Blobs */}
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[#FF7300]/20 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#0035C1]/15 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
          
          {/* Drift Particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#0035C1] rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#FF7300] rounded-full opacity-20 animate-float-bob"></div>
        </div>

        <div className="max-w-screen-md mx-auto min-h-screen flex flex-col items-center relative z-10">
          <ProfileHeader data={bioData} />

          <div className="w-full">
            <LinkList links={bioData.links} />
          </div>

          <footer className="mt-auto py-12 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-1 bg-[#0035C1] mb-6 rounded-full"></div>
            <p className="text-[9px] tracking-[0.6em] font-black text-[#0035C1] uppercase">
              {bioData.name} © {new Date().getFullYear()}
            </p>
          </footer>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`
            fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-[#0035C1] text-[#FECE00] shadow-2xl transition-all duration-500 transform
            flex items-center justify-center active:scale-90 hover:scale-110 hover:shadow-orange-500/20
            ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}
          `}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
      </main>
    </div>
  );
};

export default App;
