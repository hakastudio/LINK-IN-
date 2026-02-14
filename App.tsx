
import React, { useState, useEffect } from 'react';
import IntroOverlay from './components/IntroOverlay';
import ProfileHeader from './components/ProfileHeader';
import LinkList from './components/LinkList';
import FeaturedSlider from './components/FeaturedSlider';
import { MOCK_DATA } from './constants';
import { BioData } from './types';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [bioData, setBioData] = useState<BioData>(MOCK_DATA);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('bio_experience_data');
    if (savedData) {
      try {
        setBioData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  // Save data to localStorage whenever bioData changes
  const updateBioData = (newData: BioData) => {
    setBioData(newData);
    localStorage.setItem('bio_experience_data', JSON.stringify(newData));
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-[#0035C1] selection:text-[#FECE00] bg-[#FECE00]">
      <IntroOverlay 
        name={bioData.name} 
        onComplete={() => setShowContent(true)} 
      />

      <main className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Decorations */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0035C1]/15 rounded-full blur-[120px] animate-float-slow"></div>
          <div className="absolute top-1/2 left-[-10%] w-[350px] h-[350px] bg-[#FF7300]/15 rounded-full blur-[90px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 left-0 w-[200%] h-[400px] opacity-[0.08] animate-wave">
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full fill-[#0035C1]">
              <path d="M0,50 C150,150 350,0 500,50 C650,100 850,0 1000,50 L1000,100 L0,100 Z"></path>
            </svg>
          </div>
        </div>

        <div className="max-w-screen-md mx-auto min-h-screen flex flex-col items-center">
          <ProfileHeader 
            data={bioData} 
            isEditMode={isEditMode} 
            onUpdate={(updated) => updateBioData({ ...bioData, ...updated })} 
          />
          
          {bioData.featured && bioData.featured.length > 0 && (
            <div className="w-full mt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <FeaturedSlider 
                items={bioData.featured} 
                isEditMode={isEditMode}
                onUpdate={(updatedFeatured) => updateBioData({ ...bioData, featured: updatedFeatured })}
              />
            </div>
          )}

          <div className="w-full mt-2 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <LinkList links={bioData.links} />
          </div>

          <footer className="mt-auto py-12 flex flex-col items-center">
            <div className="w-12 h-[2px] bg-[#0035C1]/30 mb-6"></div>
            <p className="text-[10px] tracking-[0.5em] font-black text-[#0035C1]/50 uppercase">
              Powered by {bioData.name}
            </p>
          </footer>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-[#0035C1] text-white shadow-2xl transition-all duration-500 transform
            hover:bg-[#FF7300] hover:-translate-y-2 active:scale-95 group
            ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}
          `}
        >
          <svg className="w-6 h-6 transition-transform duration-500 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </main>
    </div>
  );
};

export default App;
