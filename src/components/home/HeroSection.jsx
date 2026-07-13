import React from 'react';
import { Leaf } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[700px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=85&w=1600"
          alt="Re-Wear — Archive Textiles, Modern Souls"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Very light gradient just to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Text Contents with smooth entrance animation */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white max-w-xl space-y-6 z-10 animate-fade-up">
        <span className="text-xs font-semibold tracking-widest text-[#FAF8F5] uppercase">
          Curated Sustainability
        </span>
        
        <h1 className="font-serif text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight text-[#FAF8F5]">
          Archive Textiles,<br />
          Modern Souls.
        </h1>
        
        <p className="text-sm md:text-base text-[#FAF8F5]/90 leading-relaxed font-sans font-light max-w-md">
          Experience the future of fashion through the lens of the past. Our collection features hand-picked vintage denim and Y2K artifacts, restored for the conscious individual.
        </p>

        <div className="flex flex-wrap gap-4 pt-6">
          <button 
            onClick={() => scrollTo('collection')}
            className="bg-[#4A543C] hover:bg-[#3A422F] text-white text-xs font-semibold tracking-wider px-8 py-3.5 transition-colors"
          >
            SHOP COLLECTION
          </button>
          <button 
            onClick={() => scrollTo('ethics')}
            className="bg-transparent hover:bg-white/10 text-white border border-white/60 text-xs font-semibold tracking-wider px-8 py-3.5 transition-all"
          >
            OUR ETHICS
          </button>
        </div>
      </div>
    </section>
  );
}
