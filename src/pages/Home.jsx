import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    title: '1992 Archive Straight-Leg',
    brandCategory: 'Vintage Denim • Reclaimed Wash',
    price: 128,
    badge: 'RARE FIND',
    badgeColor: 'bg-[#F2D7CD] text-[#A66E5B]',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    title: 'Midnight Silk Circuit Shirt',
    brandCategory: 'Y2K Archive • Pure Silk',
    price: 84,
    badge: 'SUSTAINABLE SILK',
    badgeColor: 'bg-[#D2E2D7] text-[#5B7F67]',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    title: 'Reconstructed Chore Coat',
    brandCategory: 'Workwear • Upcycled Canvas',
    price: 210,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-[#EAE2D2] text-[#8C7A5E]',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 4,
    title: 'Solar Flare Baby Tee',
    brandCategory: 'Y2K Archive • 100% Cotton',
    price: 45,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-[#EAE2D2] text-[#8C7A5E]',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 5,
    title: 'Founders Carpenter Overall',
    brandCategory: 'Vintage Denim • Raw Indigo',
    price: 155,
    badge: 'RARE FIND',
    badgeColor: 'bg-[#F2D7CD] text-[#A66E5B]',
    image: 'https://images.unsplash.com/photo-1519242220831-09410926fbff?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 6,
    title: 'Washed Sail Archive Parka',
    brandCategory: 'Jackets • Waxed Cotton',
    price: 195,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-[#EAE2D2] text-[#8C7A5E]',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=500',
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All Pieces');
  const filters = ['All Pieces', 'Vintage Denim', 'Y2K Shirts', 'Jackets'];

  return (
    <div className="bg-[#FAF8F5] min-h-screen -mx-4 md:-mx-8 py-2">
      {/* 1. Hero Section - Exact layout matching Figma */}
      <section className="mx-4 md:mx-8 relative h-[650px] rounded-[2rem] overflow-hidden shadow-sm border border-[#EAE5DB]">
        {/* Background Image of Model */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1200"
            alt="Re-Wear Curated Sustainability"
            className="w-full h-full object-cover object-center brightness-[0.85]"
          />
          {/* Subtle dark gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
        </div>

        {/* Text Contents */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white max-w-xl space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#EAE5DB]/90">
            CURATED SUSTAINABILITY
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.15] text-[#FAF8F5]">
            Archive Textiles,<br />
            Modern Souls.
          </h1>
          
          <p className="text-sm md:text-base text-[#EAE5DB]/90 leading-relaxed font-light">
            Experience the future of fashion through the lens of the past. Our collection features hand-picked vintage denim and Y2K artifacts, restored for the conscious individual.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#4B5E4A] hover:bg-[#3E4D3C] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-colors">
              SHOP COLLECTION
            </button>
            <button className="bg-transparent hover:bg-white/10 text-[#FAF8F5] border border-white/60 text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-colors">
              OUR ETHICS
            </button>
          </div>
        </div>
      </section>

      {/* 2. Product Showcase ("The Collection") */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE5DB]/65 pb-6">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#353A24]">The Collection</h2>
            <p className="text-xs text-[#8B8B88] mt-2">Consciously sourced. Timelessly designed.</p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs font-semibold px-5 py-2.5 rounded-full transition-all border ${
                  activeFilter === filter
                    ? 'bg-[#4B5E4A] border-[#4B5E4A] text-white'
                    : 'bg-white border-[#EAE5DB] text-[#353A24] hover:bg-[#FAF7F2]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {mockProducts.map((product) => (
            <div key={product.id} className="flex flex-col space-y-4 group">
              {/* Product Image Area */}
              <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-[#FAF7F2] border border-[#EAE5DB]/60">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Custom Badge */}
                {product.badge && (
                  <span className={`absolute top-4 left-4 text-[9px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${product.badgeColor} border border-white/20`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start pt-1">
                <div className="space-y-1">
                  <h3 className="font-semibold text-base text-[#353A24] leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#8B8B88]">
                    {product.brandCategory}
                  </p>
                </div>
                <span className="font-serif font-bold text-base text-[#353A24]">
                  ${product.price}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-white hover:bg-[#FAF7F2] text-[#353A24] border border-[#EAE5DB] font-semibold text-xs py-3.5 rounded-xl uppercase tracking-wider transition-all active:scale-98">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Circularity Quote Section */}
      <section className="bg-[#FAF8F5] border-t border-b border-[#EAE5DB] py-20 px-6 sm:px-8 text-center space-y-6">
        <div className="flex justify-center">
          <Leaf className="h-8 w-8 text-[#4B5E4A]" />
        </div>
        
        <h2 className="font-serif italic text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed text-[#353A24]">
          "The most sustainable garment is the one that already exists."
        </h2>
        
        <div className="w-16 h-px bg-[#EAE5DB] mx-auto my-2" />
        
        <p className="text-xs md:text-sm text-[#8B8B88] max-w-xl mx-auto leading-relaxed font-light">
          We believe in circularity. Every piece in our collection is meticulously inspected, cleaned, and restored to ensure it lives a second, even more beautiful life.
        </p>
      </section>

      {/* 4. Newsletter Section ("Join the Archive.") */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="bg-[#4B5E4A] rounded-[2rem] p-8 md:p-14 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
          <div className="space-y-3 text-center md:text-left max-w-lg">
            <h2 className="font-serif text-3xl font-bold">Join the Archive.</h2>
            <p className="text-xs text-[#EAE5DB]/90 leading-relaxed font-light">
              Get early access to weekly drops and exclusive sustainability reports. No spam, just heritage.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 flex-shrink-0">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#EAE5DB]/20 border border-[#FAF8F5]/30 text-white placeholder-[#FAF8F5]/70 focus:outline-none focus:ring-1 focus:ring-[#FAF8F5] rounded-xl px-5 py-3.5 text-xs w-full sm:w-64"
            />
            <button className="bg-[#2D3F2B] hover:bg-[#1D2A1C] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all flex-shrink-0">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
