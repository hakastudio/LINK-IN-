
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
    // Faster increment for "fast response" feel
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsFinished(true);
              onComplete();
            }, 600); // Shorter exit animation
          }, 200);
          
          return 100;
        }
        return prev + 4; // Faster steps (4 instead of 2)
      });
    }, 20); // Faster interval (20ms instead of 30ms)

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div 
      className={`
        fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0035C1] 
        transition-all duration-[600ms] ease-[cubic-bezier(0.7,0,0.3,1)]
        ${isExiting ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
      `}
    >
      <div 
        className={`
          relative transition-all duration-500 flex flex-col items-center
          ${isExiting ? 'scale-110 blur-xl' : 'scale-100 blur-0'}
        `}
      >
        <h1 className="text-white text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8 lowercase">
          {name.toLowerCase()}
          <span className="text-[#FECE00]">.</span>
        </h1>
        
        <div className="relative w-48 md:w-64 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-[#FECE00] transition-all duration-200 ease-out shadow-[0_0_20px_#FECE00]" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        <p className="mt-8 text-white/40 text-[9px] tracking-[0.6em] font-black uppercase">
          {progress < 100 ? 'loading experience' : 'ready'}
        </p>
      </div>
    </div>
  );
};

export default IntroOverlay;
