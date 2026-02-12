
import React, { useEffect, useState } from 'react';

interface IntroOverlayProps {
  onComplete: () => void;
  name: string;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete, name }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsFinished(true);
              onComplete();
            }, 800);
          }, 300);
          
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div 
      className={`
        fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0035C1] 
        transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)]
        ${isExiting ? 'translate-y-full' : 'translate-y-0'}
      `}
    >
      <div 
        className={`
          relative transition-all duration-500 flex flex-col items-center
          ${isExiting ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}
        `}
      >
        <h1 className="text-white text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8 lowercase">
          {name.toLowerCase()}
          <span className="text-[#FECE00]">.</span>
        </h1>
        
        <div className="relative w-48 md:w-64 h-[2px] bg-white/20 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-[#FECE00] transition-all duration-300 ease-out shadow-[0_0_15px_#FECE00]" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        <p className="mt-8 text-white/60 text-[10px] tracking-[0.4em] font-bold uppercase">
          {progress < 100 ? 'Initializing...' : 'Complete'}
        </p>
      </div>
    </div>
  );
};

export default IntroOverlay;
