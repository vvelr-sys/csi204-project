import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE5DB] text-[#353A24]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo Column */}
          <div className="space-y-4 col-span-1">
            <Link to="/" className="font-serif text-xl font-bold tracking-tight text-[#353A24]">
              Re-Wear
            </Link>
            <p className="text-xs text-[#8B8B88] leading-relaxed max-w-xs font-light">
              Pioneering the shift towards a more intentional and ethical fashion future through curation and restoration.
            </p>
          </div>

          {/* Navigate Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#353A24] uppercase">NAVIGATE</h3>
            <ul className="space-y-2.5 text-xs text-[#8B8B88]">
              <li>
                <Link to="/" className="hover:text-[#353A24] transition-colors font-light">Shop All</Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#353A24] transition-colors font-light">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#353A24] transition-colors font-light">Our Story</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#353A24] transition-colors font-light">Restoration Lab</a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#353A24] uppercase">SUPPORT</h3>
            <ul className="space-y-2.5 text-xs text-[#8B8B88]">
              <li>
                <a href="#" className="hover:text-[#353A24] transition-colors font-light">Shipping</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#353A24] transition-colors font-light">Returns</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#353A24] transition-colors font-light">Sizing Guide</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#353A24] transition-colors font-light">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#353A24] uppercase">SOCIAL</h3>
            <div className="flex space-x-3.5 pt-1">
              <a href="#" className="p-2 bg-[#EAE5DB]/50 hover:bg-[#EAE5DB] text-[#353A24] rounded-full transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-[#EAE5DB]/50 hover:bg-[#EAE5DB] text-[#353A24] rounded-full transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-[#EAE5DB] my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-[#8B8B88] font-light">
          <p>© {new Date().getFullYear()} Re-Wear Collective. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#353A24] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#353A24] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
