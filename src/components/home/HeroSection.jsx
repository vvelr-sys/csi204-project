import React from 'react';
import { Leaf } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[650px] overflow-hidden shadow-premium">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=85&w=1600"
          alt="Re-Wear — Archive Textiles, Modern Souls"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.78)' }}
        />
        {/* Left-heavy gradient keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Floating Rotating Premium Badge (Only on desktop) */}
      <div className="absolute right-16 top-16 hidden lg:block z-20">
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Spinning Circular Text */}
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fill="#FAF8F5" fontSize="7.5" fontWeight="600" letterSpacing="2.8">
              <textPath href="#circlePath">
                🌱 CIRCULAR FASHION • RE-WEAR COLLECTIVE • 
              </textPath>
            </text>
          </svg>
          <div className="absolute w-12 h-12 bg-[#FAF8F5] rounded-full flex items-center justify-center shadow-md">
            <Leaf className="h-5 w-5 text-[#5F6B4E]" />
          </div>
        </div>
      </div>

      {/* Text Contents with smooth entrance animation */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white max-w-xl space-y-6 z-10 animate-fade-up">
        <span className="text-xs font-semibold tracking-[0.3em] text-[#FAF8F5]/90 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
          CURATED SUSTAINABILITY
        </span>
        
        <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.12] tracking-tight text-[#FAF8F5] drop-shadow-sm">
          Archive Textiles,<br />
          Modern Souls.
        </h1>
        
        <p className="text-sm md:text-base text-[#FAF8F5]/85 leading-relaxed font-light font-sans max-w-md">
          Experience the future of fashion through the lens of the past. Our collection features hand-picked vintage denim and Y2K artifacts, restored for the conscious individual.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            onClick={() => scrollTo('collection')}
            className="btn-slide-primary bg-primary text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md"
          >
            SHOP COLLECTION
          </button>
          <button 
            onClick={() => scrollTo('ethics')}
            className="bg-transparent hover:bg-white/10 text-white border border-white/60 text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-xl transition-all active:scale-95"
          >
            OUR ETHICS
          </button>
        </div>
      </div>
    </section>
  );
}
