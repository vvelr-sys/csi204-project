import React from 'react';

export default function BannerTicker() {
  return (
    <div className="bg-[#FAF6F0] border-b border-[#F2E9DC] py-2 overflow-hidden z-20 relative">
      <div className="animate-marquee whitespace-nowrap flex text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#5F6B4E]">
        <span className="mx-8 flex items-center gap-2">🌱 Complimentary shipping on orders over $150</span>
        <span className="mx-8 flex items-center gap-2">🔄 Send back used garments for 15% off</span>
        <span className="mx-8 flex items-center gap-2">🌍 100% Carbon-Neutral delivery & packaging</span>
        {/* Duplicate for seamless scrolling */}
        <span className="mx-8 flex items-center gap-2">🌱 Complimentary shipping on orders over $150</span>
        <span className="mx-8 flex items-center gap-2">🔄 Send back used garments for 15% off</span>
        <span className="mx-8 flex items-center gap-2">🌍 100% Carbon-Neutral delivery & packaging</span>
      </div>
    </div>
  );
}
