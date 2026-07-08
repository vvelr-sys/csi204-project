import React, { useState } from 'react';
import { Leaf, Eye, Heart, ShoppingCart } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    title: '1992 Archive Straight-Leg',
    brandCategory: 'Vintage Denim • Reclaimed Wash',
    price: 128,
    badge: 'RARE FIND',
    badgeColor: 'bg-secondary-light text-secondary-dark border-secondary-light/35',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '5.4 kg CO₂e',
  },
  {
    id: 2,
    title: 'Midnight Silk Circuit Shirt',
    brandCategory: 'Y2K Archive • Pure Silk',
    price: 84,
    badge: 'SUSTAINABLE SILK',
    badgeColor: 'bg-primary-light text-primary-dark border-primary-light/35',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '3.1 kg CO₂e',
  },
  {
    id: 3,
    title: 'Reconstructed Chore Coat',
    brandCategory: 'Workwear • Upcycled Canvas',
    price: 210,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-tertiary text-neutral-muted border-tertiary-dark/35',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '8.7 kg CO₂e',
  },
  {
    id: 4,
    title: 'Solar Flare Baby Tee',
    brandCategory: 'Y2K Archive • 100% Cotton',
    price: 45,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-tertiary text-neutral-muted border-tertiary-dark/35',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '2.4 kg CO₂e',
  },
  {
    id: 5,
    title: 'Founders Carpenter Overall',
    brandCategory: 'Vintage Denim • Raw Indigo',
    price: 155,
    badge: 'RARE FIND',
    badgeColor: 'bg-secondary-light text-secondary-dark border-secondary-light/35',
    image: 'https://images.unsplash.com/photo-1519242220831-09410926fbff?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '6.8 kg CO₂e',
  },
  {
    id: 6,
    title: 'Washed Sail Archive Parka',
    brandCategory: 'Jackets • Waxed Cotton',
    price: 195,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-tertiary text-neutral-muted border-tertiary-dark/35',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '7.9 kg CO₂e',
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All Pieces');
  const filters = ['All Pieces', 'Vintage Denim', 'Y2K Shirts', 'Jackets'];

  return (
    <div className="bg-grain min-h-screen -mx-4 md:-mx-8 py-4 transition-all">
      {/* 1. Hero Section - With Loading Fade-up & Slide Button Hover */}
      <section className="mx-4 md:mx-8 relative h-[650px] rounded-[2.2rem] overflow-hidden shadow-premium border border-[#EAE5DB]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1200"
            alt="Re-Wear Curated Sustainability"
            className="w-full h-full object-cover object-center brightness-[0.82] transition-transform duration-[10s] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
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
            {/* Slide green hover button */}
            <button className="btn-slide-primary bg-primary text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md">
              SHOP COLLECTION
            </button>
            {/* Outline transparent hover button */}
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/60 text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-xl transition-all active:scale-95">
              OUR ETHICS
            </button>
          </div>
        </div>
      </section>

      {/* 2. Product Showcase ("The Collection") - Slide Up Delay */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 space-y-12 animate-fade-up delay-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE5DB]/75 pb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D2D2A]">The Collection</h2>
            <p className="text-xs text-[#8B8B88] mt-2 font-sans font-light">Consciously sourced. Timelessly designed.</p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs font-semibold px-5 py-2.5 rounded-full transition-all border ${
                  activeFilter === filter
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-[#EAE5DB] text-[#2D2D2A] hover:bg-tertiary/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - Premium Hover zooms and overlay details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {mockProducts.map((product) => (
            <div key={product.id} className="flex flex-col space-y-4 group">
              {/* Product Image Area */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#FAF7F2] border border-[#EAE5DB]/60 shadow-premium">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] cubic-bezier-out group-hover:scale-105"
                />
                
                {/* Custom Badge */}
                {product.badge && (
                  <span className={`absolute top-5 left-5 text-[9px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full ${product.badgeColor} border border-white/20 shadow-sm z-10`}>
                    {product.badge}
                  </span>
                )}

                {/* Eco Impact Overlay on Image Hover */}
                <div className="absolute inset-0 bg-neutral/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-3">
                  <div className="bg-[#FCFBF7] text-[#2D2D2A] text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Leaf className="h-3.5 w-3.5 text-primary" />
                    ช่วยลด {product.carbonSaved}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start pt-1 font-sans">
                <div className="space-y-1">
                  <h3 className="font-semibold text-base text-[#2D2D2A] leading-snug group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#8B8B88] font-light">
                    {product.brandCategory}
                  </p>
                </div>
                <span className="font-serif font-bold text-base text-[#2D2D2A]">
                  ${product.price}
                </span>
              </div>

              {/* Add to Cart Button with Background Slide Effect on Hover */}
              <button className="btn-slide-outline w-full bg-transparent text-[#2D2D2A] border border-[#2D2D2A] font-semibold text-xs py-3.5 rounded-xl uppercase tracking-wider active:scale-98">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Circularity Quote Section - Housed in a Premium Organic Card */}
      <section className="py-20 px-6 sm:px-8 animate-fade-up delay-200">
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

      {/* 4. Newsletter Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 animate-fade-up delay-300">
        <div className="bg-primary rounded-[2.5rem] p-8 md:p-14 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-premium border border-primary-dark/20 relative overflow-hidden">
          {/* Background leaf graphic */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 pointer-events-none">
            <Leaf className="w-full h-full text-white" />
          </div>

          <div className="space-y-3 text-center md:text-left max-w-lg z-10 relative">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Join the Archive.</h2>
            <p className="text-xs text-[#FAF8F5]/85 leading-relaxed font-sans font-light">
              Get early access to weekly drops and exclusive sustainability reports. No spam, just heritage.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 flex-shrink-0 z-10 relative">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white rounded-xl px-5 py-3.5 text-xs w-full sm:w-64 backdrop-blur-sm"
            />
            {/* Inverted style button with press-down scale */}
            <button className="bg-neutral hover:bg-[#1A1A18] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all active:scale-95 flex-shrink-0 shadow-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
