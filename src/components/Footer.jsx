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

          {/* NAVIGATE Column */}
          <div className="md:col-span-3 lg:col-span-2 space-y-5">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#2D2D2A] uppercase">NAVIGATE</h3>
            <ul className="space-y-3.5 text-xs text-[#5C5C5A] font-medium">
              <li>
                <Link href="/" className="hover:text-[#4A543C] transition-colors">Shop All</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#4A543C] transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#4A543C] transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#4A543C] transition-colors">Restoration Lab</Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT Column */}
          <div className="md:col-span-3 lg:col-span-2 space-y-5">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#2D2D2A] uppercase">SUPPORT</h3>
            <ul className="space-y-3.5 text-xs text-[#5C5C5A] font-medium">
              <li>
                <Link href="/" className="hover:text-[#4A543C] transition-colors">Shipping</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#4A543C] transition-colors">Returns</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#4A543C] transition-colors">Sizing Guide</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#4A543C] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL Column */}
          <div className="md:col-span-12 lg:col-span-4 space-y-5 lg:pl-8">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#2D2D2A] uppercase">SOCIAL</h3>
            <div className="flex gap-3">
              <Link href="/" className="w-8 h-8 rounded-full border border-[#EAE5DB] flex items-center justify-center text-[#5C5C5A] hover:bg-[#EAE5DB] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" /></svg>
              </Link>
              <Link href="/" className="w-8 h-8 rounded-full border border-[#EAE5DB] flex items-center justify-center text-[#5C5C5A] hover:bg-[#EAE5DB] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-[#F2E9DC] flex flex-col md:flex-row justify-between items-center text-[9px] text-[#8B8B88] font-medium">
          <p>© {new Date().getFullYear()} Re-Wear Collective. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-[#2D2D2A] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#2D2D2A] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
