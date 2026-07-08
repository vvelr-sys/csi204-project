import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShoppingCart, Heart, ShieldCheck, RefreshCw } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    title: 'เสื้อคาร์ดิแกนผ้าถักสีเบจ',
    price: 390,
    originalPrice: 1290,
    condition: 'สภาพดีเยี่ยม (95%)',
    carbonSaved: '4.2 kg CO₂e',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    tag: 'หมวดหมู่อบอุ่น',
  },
  {
    id: 2,
    title: 'เสื้อเชิ้ตผ้าลินินสีเขียวมะกอก',
    price: 290,
    originalPrice: 890,
    condition: 'สภาพดี (90%)',
    carbonSaved: '3.1 kg CO₂e',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400',
    tag: 'มินิมอล',
  },
  {
    id: 3,
    title: 'เสื้อแจ็คเก็ตยีนส์ฟอกสีครามโบราณ',
    price: 650,
    originalPrice: 2490,
    condition: 'สภาพสะสม (98%)',
    carbonSaved: '8.5 kg CO₂e',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=400',
    tag: 'วินเทจ',
  },
  {
    id: 4,
    title: 'เสื้อสเวตเตอร์ถักไหมพรมสีครีม',
    price: 420,
    originalPrice: 1590,
    condition: 'มีร่องรอยการใช้งานเล็กน้อย (85%)',
    carbonSaved: '5.0 kg CO₂e',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400',
    tag: 'สตรีทแวร์',
  },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-earth-200 via-earth-100 to-sage-100/50 rounded-3xl p-8 md:p-16 mx-4 md:mx-0 mt-6 shadow-sm border border-earth-200/40">
        <div className="max-w-2xl space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-200/60 rounded-full text-xs font-semibold text-sage-800">
            <Leaf className="h-3.5 w-3.5" />
            100% Eco-Friendly Circular Fashion
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-earth-900 leading-tight">
            ส่งต่อความรักษ์โลก<br />ผ่านแฟชั่นหมุนเวียนคุณภาพดี
          </h1>
          <p className="text-base text-earth-700 max-w-lg leading-relaxed">
            ค้นหาเสื้อผ้ามือสองแบรนด์เนมและของสะสมวินเทจที่ถูกคัดสรรมาเป็นอย่างดี ช็อปปิ้งอย่างเป็นมิตรต่อสิ่งแวดล้อม และรับคะแนนสะสมเพื่อรับสิทธิพิเศษมากมาย
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/wardrobe" className="bg-sage-600 hover:bg-sage-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover-lift hover-glow transition-all">
              ตู้เสื้อผ้าของฉัน
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/eco-impact" className="bg-white hover:bg-earth-100 text-earth-800 font-medium px-6 py-3 rounded-full border border-earth-300 hover-lift transition-all">
              ดูคะแนนรักษ์โลก
            </Link>
          </div>
        </div>

        {/* Decorative Graphic Background Elements */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sage-200/50 rounded-full blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=600"
            alt="Eco Clothing Background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay rounded-l-full"
          />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
        <div className="flex gap-4 p-6 bg-white rounded-2xl border border-earth-200/60 shadow-sm items-start">
          <div className="p-3 bg-sage-50 rounded-xl text-sage-600">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-earth-800 text-sm">การันตีคุณภาพ 100%</h3>
            <p className="text-xs text-earth-500 mt-1 leading-normal">
              สินค้าทุกชิ้นผ่านการตรวจสอบสภาพ ทำความสะอาด และฆ่าเชื้อเรียบร้อยพร้อมสวมใส่
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-6 bg-white rounded-2xl border border-earth-200/60 shadow-sm items-start">
          <div className="p-3 bg-clay-50 rounded-xl text-clay-600">
            <RefreshCw className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-earth-800 text-sm">ส่งต่อของใช้แล้วง่ายๆ</h3>
            <p className="text-xs text-earth-500 mt-1 leading-normal">
              ลงทะเบียนส่งต่อเสื้อผ้าที่ไม่ได้ใช้แล้วของคุณให้เราช่วยดูแล พร้อมรับส่วนลดค่าช็อปทันที
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-6 bg-white rounded-2xl border border-earth-200/60 shadow-sm items-start">
          <div className="p-3 bg-earth-50 rounded-xl text-earth-600">
            <Leaf className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-earth-800 text-sm">สะสมแต้มกู้ภัยธรรมชาติ</h3>
            <p className="text-xs text-earth-500 mt-1 leading-normal">
              เสื้อผ้าทุกตัวระบุมูลค่าคาร์บอนที่ช่วยกู้โลก ยิ่งช็อป ยิ่งลดการปล่อยของเสีย
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="space-y-6 px-4 md:px-0">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-earth-900">สินค้ามาใหม่รักษ์โลก</h2>
            <p className="text-xs text-earth-500 mt-1">อัปเดตเสื้อผ้าม้วนใหม่เพื่อเศรษฐกิจหมุนเวียนที่ยั่งยืน</p>
          </div>
          <button className="text-xs font-semibold text-sage-700 hover:text-sage-800 flex items-center gap-1 hover:underline">
            ดูทั้งหมด
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-earth-200/60 overflow-hidden shadow-sm hover-lift flex flex-col group">
              {/* Product Image */}
              <div className="relative aspect-square bg-earth-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-earth-800 text-[10px] font-bold px-2 py-1 rounded-full border border-earth-200">
                  {product.tag}
                </span>
                <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm text-earth-400 hover:text-clay-500 hover:scale-110 rounded-full transition-all border border-earth-200">
                  <Heart className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-clay-600 bg-clay-50 px-2 py-0.5 rounded border border-clay-100">
                      {product.condition}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-sage-700">
                      <Leaf className="h-3 w-3" />
                      {product.carbonSaved}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-earth-800 line-clamp-1 group-hover:text-sage-700 transition-colors">
                    {product.title}
                  </h3>
                </div>

                <div className="flex items-end justify-between pt-4 mt-auto border-t border-earth-50">
                  <div className="flex flex-col">
                    <span className="text-xs text-earth-400 line-through">
                      ฿{product.originalPrice}
                    </span>
                    <span className="text-base font-bold text-earth-900">
                      ฿{product.price}
                    </span>
                  </div>
                  
                  <button className="bg-sage-50 text-sage-800 hover:bg-sage-600 hover:text-white p-2 rounded-xl transition-all border border-sage-200/50 hover:shadow-md">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
