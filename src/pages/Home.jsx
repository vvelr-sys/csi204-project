import React, { useState } from 'react';
import { Leaf, Eye, Heart, ShoppingBag, X, Check, Info, ShieldCheck } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    title: '1992 Archive Straight-Leg',
    brandCategory: 'Vintage Denim • Reclaimed Wash',
    price: 128,
    badge: 'RARE FIND',
    badgeColor: 'bg-secondary-light text-secondary-dark border-secondary-light/35',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=500',
    hoverImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '5.4 kg CO₂e',
    waterSaved: '3,800 Liters',
    treeEquivalent: '0.5 Tree Years',
    description: 'เสื้อกางเกงยีนส์ฟอกวินเทจแท้ทรงกระบอกตรง ผลิตในปี 1992 ได้รับการซ่อมแซมกระเป๋าด้านหลังและทำความสะอาดอย่างเชี่ยวชาญ สวมใส่ได้ยาวนานหลายทศวรรษ',
    sizes: ['28', '30', '32'],
  },
  {
    id: 2,
    title: 'Midnight Silk Circuit Shirt',
    brandCategory: 'Y2K Archive • Pure Silk',
    price: 84,
    badge: 'SUSTAINABLE SILK',
    badgeColor: 'bg-primary-light text-primary-dark border-primary-light/35',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=500',
    hoverImage: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '3.1 kg CO₂e',
    waterSaved: '1,200 Liters',
    treeEquivalent: '0.3 Tree Years',
    description: 'เชิ้ตผ้าไหมแท้ 100% สีกากีเข้ม ลื่น สบายผิว ผสมผสานสไตล์มินิมอลกับแฟชั่นยุค 2000 ได้อย่างลงตัว ผ่านกระบวนการถนอมเส้นใยโบราณ',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 3,
    title: 'Reconstructed Chore Coat',
    brandCategory: 'Workwear • Upcycled Canvas',
    price: 210,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-tertiary text-neutral-muted border-tertiary-dark/35',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500',
    hoverImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '8.7 kg CO₂e',
    waterSaved: '5,500 Liters',
    treeEquivalent: '0.9 Tree Years',
    description: 'เสื้อโค้ตสไตล์ช่างทำมือ ดัดแปลงจากผ้าใบกันใบเรือเก่าและกางเกงคาร์โก้ทหาร มีความหนา ทนทาน และมีเอกลักษณ์ลวดลายเฉพาะตัวเพียงตัวเดียวในโลก',
    sizes: ['M', 'L'],
  },
  {
    id: 4,
    title: 'Solar Flare Baby Tee',
    brandCategory: 'Y2K Archive • 100% Cotton',
    price: 45,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-tertiary text-neutral-muted border-tertiary-dark/35',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=500',
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '2.4 kg CO₂e',
    waterSaved: '900 Liters',
    treeEquivalent: '0.2 Tree Years',
    description: 'เสื้อครอปเบบี้ทีสีเทารุ่นพิเศษ สกรีนลายดาวกางเกงวินเทจ น่ารักสไตล์ Y2K ผ้าฝ้ายออร์แกนิก 100% มีความนุ่มยืดหยุ่นและน้ำหนักเบา',
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 5,
    title: 'Founders Carpenter Overall',
    brandCategory: 'Vintage Denim • Raw Indigo',
    price: 155,
    badge: 'RARE FIND',
    badgeColor: 'bg-secondary-light text-secondary-dark border-secondary-light/35',
    image: 'https://images.unsplash.com/photo-1519242220831-09410926fbff?auto=format&fit=crop&q=80&w=500',
    hoverImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '6.8 kg CO₂e',
    waterSaved: '4,200 Liters',
    treeEquivalent: '0.7 Tree Years',
    description: 'เอี๊ยมยีนส์สไตล์คาร์เพนเตอร์ ผ้าดิบเข้ม หนาทนทาน กระดุมทองเหลืองแท้ ทรงโอเวอร์ไซส์คลาสสิกที่ใช้งานได้ทุกยุคทุกสมัย',
    sizes: ['30', '32', '34'],
  },
  {
    id: 6,
    title: 'Washed Sail Archive Parka',
    brandCategory: 'Jackets • Waxed Cotton',
    price: 195,
    badge: 'LIMITED RUN',
    badgeColor: 'bg-tertiary text-neutral-muted border-tertiary-dark/35',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=500',
    hoverImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=500',
    carbonSaved: '7.9 kg CO₂e',
    waterSaved: '4,900 Liters',
    treeEquivalent: '0.8 Tree Years',
    description: 'พาร์กาผ้าแคนวาสเคลือบแว็กซ์กันน้ำ สีส้มอิฐฟอกธรรมชาติแบบสนิมวินเทจ ปกป้องคุณจากสายฝนและลมหนาวด้วยเสน่ห์แบบเอาต์ดอร์',
    sizes: ['M', 'L', 'XL'],
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All Pieces');
  const [selectedProduct, setSelectedProduct] = useState(null); // Quick View State
  const [selectedSize, setSelectedSize] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const filters = ['All Pieces', 'Vintage Denim', 'Y2K Shirts', 'Jackets'];

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setSelectedProduct(null);
    }, 2000);
  };

  return (
    <div className="bg-grain min-h-screen -mx-4 md:-mx-8 py-0 transition-all">
      {/* 1. Premium Infinite Running Banner Ticker */}
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

      {/* 2. Hero Section - With Loading Fade-up & Slow Spin Circular Stamp Badge */}
      <section className="mx-4 md:mx-8 relative h-[650px] rounded-[2.2rem] overflow-hidden shadow-premium border border-[#EAE5DB] mt-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1200"
            alt="Re-Wear Curated Sustainability"
            className="w-full h-full object-cover object-center brightness-[0.82] transition-transform duration-[10s] ease-out hover:scale-105"
          />
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
            <button className="btn-slide-primary bg-primary text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md">
              SHOP COLLECTION
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/60 text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-xl transition-all active:scale-95">
              OUR ETHICS
            </button>
          </div>
        </div>
      </section>

      {/* 3. Product Showcase ("The Collection") - Slide Up Delay */}
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

        {/* Product Cards Grid - With Image Crossfade Swap & Quick View Trigger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {mockProducts.map((product) => (
            <div key={product.id} className="flex flex-col space-y-4 group relative">
              {/* Product Image Area */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#FAF7F2] border border-[#EAE5DB]/60 shadow-premium">
                
                {/* Default Catalog Image (Fades out on hover) */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                />

                {/* Model/Hover Image (Swaps in on hover) */}
                <img
                  src={product.hoverImage}
                  alt={`${product.title} model view`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 scale-102 group-hover:scale-105"
                />
                
                {/* Custom Condition Badge */}
                {product.badge && (
                  <span className="absolute top-5 left-5 text-[9px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#2D2D2A] border border-[#EAE5DB]/65 shadow-sm z-10">
                    {product.badge}
                  </span>
                )}

                {/* Eco Leaf Offset Badge on top-right */}
                <span className="absolute top-5 right-5 text-[9px] font-bold px-3 py-1.5 rounded-full bg-[#5F6B4E] text-[#FAF8F5] border border-primary-dark/20 shadow-sm z-10 flex items-center gap-1">
                  <Leaf className="h-3 w-3 fill-current text-[#FAF8F5]" />
                  -{product.carbonSaved.split(' ')[0]} kg
                </span>

                {/* Bottom Overlay: Quick View Button */}
                <div className="absolute inset-0 bg-[#2D2D2A]/15 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-end justify-center pb-6">
                  <button 
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedSize('');
                    }}
                    className="bg-[#FCFBF7] text-[#2D2D2A] text-xs font-semibold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500"
                  >
                    <Eye className="h-4 w-4" />
                    Quick View
                  </button>
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
                <span className="font-serif font-semibold text-base text-[#2D2D2A]">
                  ${product.price}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedSize('');
                }}
                className="btn-slide-outline w-full bg-transparent text-[#2D2D2A] border border-[#2D2D2A] font-semibold text-xs py-3.5 rounded-xl uppercase tracking-wider"
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Circularity Quote Section - Housed in a Premium Organic Card */}
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

      {/* 5. Newsletter Section */}
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
            <button className="bg-neutral hover:bg-[#1A1A18] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all active:scale-95 flex-shrink-0 shadow-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* ==================== 6. Quick View Interactive Modal ==================== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#FCFBF7] rounded-[2.5rem] border border-[#F2E9DC] overflow-hidden shadow-2xl animate-fade-up max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute right-6 top-6 z-20 p-2 text-[#8B8B88] hover:text-[#2D2D2A] hover:bg-[#F2E9DC]/60 rounded-full transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column: Product Images (Figma styled) */}
              <div className="relative aspect-[4/5] bg-tertiary/40">
                <img 
                  src={selectedProduct.hoverImage} 
                  alt={selectedProduct.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-6 left-6 text-[9px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/95 text-[#2D2D2A] border border-[#EAE5DB]/65">
                  {selectedProduct.badge}
                </span>
              </div>

              {/* Right Column: Detail Form */}
              <div className="p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">{selectedProduct.brandCategory.split(' • ')[0]}</span>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#2D2D2A] mt-1">{selectedProduct.title}</h2>
                    <span className="block font-serif text-xl font-bold text-[#2D2D2A] mt-2">${selectedProduct.price}</span>
                  </div>

                  <p className="text-xs text-[#8B8B88] leading-relaxed font-light">
                    {selectedProduct.description}
                  </p>

                  <hr className="border-[#F2E9DC]" />

                  {/* Size Selector */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#2D2D2A]">เลือกไซส์วินเทจ:</span>
                    <div className="flex gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button 
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-11 h-11 text-xs rounded-xl border flex items-center justify-center font-bold tracking-wide transition-all ${
                            selectedSize === size
                              ? 'bg-primary border-primary text-white shadow-md'
                              : 'bg-white border-[#EAE5DB] text-[#2D2D2A] hover:bg-tertiary/40'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Eco Scorecard */}
                <div className="bg-[#FAF6F0] border border-[#F2E9DC] p-4 rounded-2xl space-y-2">
                  <span className="text-[10px] font-bold text-primary flex items-center gap-1.5">
                    <Leaf className="h-3.5 w-3.5 fill-current" />
                    ECO-IMPACT SCORECARD
                  </span>
                  <div className="grid grid-cols-3 gap-2 pt-1.5 text-center">
                    <div className="space-y-0.5">
                      <span className="block text-[8px] text-[#8B8B88] uppercase">CO₂ Offset</span>
                      <span className="block text-xs font-bold text-[#2D2D2A]">{selectedProduct.carbonSaved}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[8px] text-[#8B8B88] uppercase">Water Saved</span>
                      <span className="block text-xs font-bold text-[#2D2D2A]">{selectedProduct.waterSaved}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[8px] text-[#8B8B88] uppercase">Tree Equiv.</span>
                      <span className="block text-xs font-bold text-[#2D2D2A]">{selectedProduct.treeEquivalent}</span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Actions */}
                <div className="pt-2 flex gap-3">
                  <button 
                    disabled={!selectedSize || isAdded}
                    onClick={handleAddToCart}
                    className={`flex-1 py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isAdded 
                        ? 'bg-sage-600 text-white' 
                        : selectedSize 
                          ? 'btn-slide-primary bg-primary text-white shadow-md' 
                          : 'bg-earth-100 text-[#8B8B88] border border-[#EAE5DB] cursor-not-allowed'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-4 w-4" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" />
                        Add to Bag
                      </>
                    )}
                  </button>
                  <button className="p-3.5 border border-[#EAE5DB] hover:border-clay hover:text-clay text-[#8B8B88] rounded-xl transition-all">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                {/* Guarantee Label */}
                <span className="flex items-center justify-center gap-1 text-[9px] text-[#8B8B88] font-light">
                  <ShieldCheck className="h-3 w-3 text-primary" />
                  Inspected, washed, and certified circular by Re-Wear Collective.
                </span>

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
