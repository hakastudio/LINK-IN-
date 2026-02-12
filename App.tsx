
import React, { useState } from 'react';
import IntroOverlay from './components/IntroOverlay';
import ProfileHeader from './components/ProfileHeader';
import FeaturedSlider from './components/FeaturedSlider';
import LinkList from './components/LinkList';
import { MOCK_DATA } from './constants';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-[#0035C1] selection:text-[#FECE00] bg-[#FECE00]">
      {/* Intro Overlay - Inspired by the blue box logo */}
      <IntroOverlay 
        name={MOCK_DATA.name} 
        onComplete={() => setShowContent(true)} 
      />

      {/* Main Content Area */}
      <main className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Animated Background Waves & Decorative Blobs */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* Top-Right Decorative Blob - Blue contrast */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0035C1]/15 rounded-full blur-[120px] animate-float-slow"></div>
          
          {/* Middle-Left Decorative Blob - Orange pop */}
          <div className="absolute top-1/2 left-[-10%] w-[350px] h-[350px] bg-[#FF7300]/15 rounded-full blur-[90px] animate-blob animation-delay-2000"></div>
          
          {/* Middle-Right Subtle Glow - White */}
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-white/20 rounded-full blur-[80px] animate-float-slow" style={{ animationDelay: '5s' }}></div>

          {/* Subtle Wave Layer 1 - Darker blue */}
          <div className="absolute top-1/3 left-0 w-[200%] h-[400px] opacity-[0.08] animate-wave">
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full fill-[#0035C1]">
              <path d="M0,50 C150,150 350,0 500,50 C650,100 850,0 1000,50 L1000,100 L0,100 Z"></path>
            </svg>
          </div>
          
          {/* Subtle Wave Layer 2 - Vibrant Orange */}
          <div className="absolute bottom-1/4 left-[-50%] w-[200%] h-[500px] opacity-[0.06] animate-wave" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full fill-[#FF7300]">
              <path d="M0,30 C200,80 400,-20 600,30 C800,80 1000,0 1200,30 L1200,100 L0,100 Z"></path>
            </svg>
          </div>

          {/* Bottom-Left Accent Blur - White for depth on yellow */}
          <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-white/40 rounded-full blur-[140px] animate-blob animation-delay-2000"></div>
          
          {/* Center-Bottom Orange Accent */}
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#FF7300]/10 rounded-full blur-[100px] animate-float-slow"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-screen-md mx-auto min-h-screen flex flex-col items-center">
          <ProfileHeader data={MOCK_DATA} />
          
          <div className="w-full overflow-hidden mb-4">
             <div className="px-6 mb-4 flex justify-between items-end">
                <h2 className="font-heading font-black text-xs tracking-[0.2em] text-[#0035C1] uppercase">Spotlight</h2>
                <span className="text-[10px] text-[#0035C1] font-bold uppercase tracking-widest opacity-60">Featured</span>
             </div>
             <FeaturedSlider items={MOCK_DATA.featured} />
          </div>

          <LinkList links={MOCK_DATA.links} />

          {/* Footer Branding */}
          <footer className="mt-auto py-12 flex flex-col items-center">
            <div className="w-12 h-[2px] bg-[#0035C1]/30 mb-6"></div>
            <p className="text-[10px] tracking-[0.5em] font-black text-[#0035C1]/50 uppercase">
              Powered by Heri Kurniawan
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
