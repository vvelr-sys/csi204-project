import React from 'react';
import { Leaf } from 'lucide-react';

export default function CircularityQuote() {
  return (
    <section id="ethics" className="py-20 px-6 sm:px-8 animate-fade-up delay-200">
      <div className="bg-[#FAF6F0] rounded-[2.5rem] border border-[#F2E9DC] p-10 md:p-16 max-w-4xl mx-auto text-center space-y-6 shadow-premium relative overflow-hidden">
        {/* Subtle natural accent graphics */}
        <div className="absolute -left-6 -top-6 text-primary/5 pointer-events-none">
          <Leaf className="w-24 h-24 rotate-45" />
        </div>
        <div className="absolute -right-6 -bottom-6 text-primary/5 pointer-events-none">
          <Leaf className="w-24 h-24 -rotate-45" />
        </div>

        <div className="flex justify-center z-10 relative">
          <div className="p-3 bg-white rounded-full shadow-md border border-[#F2E9DC]">
            <Leaf className="h-6 w-6 text-[#5F6B4E]" />
          </div>
        </div>

        <h2 className="font-serif italic text-2xl md:text-3xl max-w-2xl mx-auto leading-relaxed text-[#2D2D2A] z-10 relative">
          "The most sustainable garment is the one that already exists."
        </h2>

        <div className="w-16 h-px bg-[#EAE5DB] mx-auto my-2 z-10 relative" />

        <p className="text-xs md:text-sm text-[#8B8B88] max-w-xl mx-auto leading-relaxed font-light font-sans z-10 relative">
          We believe in circularity. Every piece in our collection is meticulously inspected, cleaned, and restored to ensure it lives a second, even more beautiful life.
        </p>
      </div>
    </section>
  );
}
