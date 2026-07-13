import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#F2E9DC] text-[#2D2D2A] mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo & Intro */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-[#4A543C]">
              Re-Wear
            </Link>
            <p className="text-[11px] text-[#5C5C5A] leading-relaxed max-w-[260px] font-medium pr-4">
              Curating the finest textile archives for a conscious future. Every piece tells a story worth preserving.
            </p>
          </div>

          {/* Spacer for wide screens */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* SHOP Column */}
          <div className="md:col-span-3 lg:col-span-2 space-y-5">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#2D2D2A] uppercase">SHOP</h3>
            <ul className="space-y-3.5 text-xs text-[#5C5C5A] font-medium">
              <li>
                <a href="#" className="hover:text-[#4A543C] transition-colors">Latest Drops</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4A543C] transition-colors">Outerwear</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4A543C] transition-colors">Archives</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4A543C] transition-colors">Collections</a>
              </li>
            </ul>
          </div>

          {/* ETHOS Column */}
          <div className="md:col-span-3 lg:col-span-2 space-y-5">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#2D2D2A] uppercase">ETHOS</h3>
            <ul className="space-y-3.5 text-xs text-[#5C5C5A] font-medium">
              <li>
                <a href="#" className="hover:text-[#4A543C] transition-colors">Sustainability Report</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4A543C] transition-colors">The Lab</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4A543C] transition-colors">Our Sourcing</a>
              </li>
            </ul>
          </div>

          {/* JOIN THE CIRCLE Column */}
          <div className="md:col-span-12 lg:col-span-4 space-y-5 lg:pl-8">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#2D2D2A] uppercase">JOIN THE CIRCLE</h3>
            <p className="text-[11px] text-[#5C5C5A] leading-relaxed max-w-[280px] font-medium">
              Receive early access to weekly archival drops.
            </p>
            <div className="mt-4 relative max-w-sm">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-[#2D2D2A]/30 pb-3 text-xs placeholder:text-[#8B8B88] focus:outline-none focus:border-[#4A543C] transition-colors"
              />
              <button className="absolute right-0 top-0 bottom-3 text-[#2D2D2A] hover:text-[#4A543C] transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-[#F2E9DC] flex flex-col md:flex-row justify-between items-center text-[9px] text-[#8B8B88] font-medium">
          <p>© {new Date().getFullYear()} Re-Wear Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#2D2D2A] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#2D2D2A] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#2D2D2A] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
