import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F2] border-b border-[#EAE5DB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo - Serif Font styled like Figma */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-[#353A24] tracking-tight hover:opacity-90 transition-opacity">
              Re-Wear
            </Link>
          </div>

          {/* Desktop Menu - Matches Figma exactly */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              to="/" 
              className={`text-sm font-semibold tracking-wide transition-all pb-1 ${
                isActive('/') 
                  ? 'text-[#353A24] border-b-2 border-[#353A24]' 
                  : 'text-[#8B8B88] hover:text-[#353A24]'
              }`}
            >
              Shop
            </Link>
            <a 
              href="#" 
              className="text-sm font-semibold tracking-wide text-[#8B8B88] hover:text-[#353A24] transition-all pb-1"
            >
              About
            </a>
            <Link 
              to="/eco-impact" 
              className={`text-sm font-semibold tracking-wide transition-all pb-1 ${
                isActive('/eco-impact') 
                  ? 'text-[#353A24] border-b-2 border-[#353A24]' 
                  : 'text-[#8B8B88] hover:text-[#353A24]'
              }`}
            >
              Sustainability
            </Link>
          </div>

          {/* Desktop Search & Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Figma-style Search Bar */}
            <div className="relative">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-[#8B8B88]" />
              <input
                type="text"
                placeholder="Search unique pieces..."
                className="w-56 bg-[#FAF7F2] border border-[#EAE5DB] hover:border-[#D0C9BC] focus:border-[#353A24] focus:outline-none rounded-full py-1.5 pl-10 pr-4 text-xs text-[#353A24] transition-all placeholder:text-[#8B8B88]"
              />
            </div>

            {/* Shopping Cart Icon */}
            <Link to="/wardrobe" className="text-[#353A24] hover:opacity-80 transition-opacity relative">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-[#4B5E4A] text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">0</span>
            </Link>

            {/* Profile Avatar */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-7 h-7 rounded-full overflow-hidden border border-[#EAE5DB] hover:ring-2 hover:ring-[#4B5E4A]/30 transition-all focus:outline-none"
              >
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                />
              </button>
              
              <ProfileDropdown 
                isOpen={isDropdownOpen} 
                onClose={() => setIsDropdownOpen(false)} 
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#353A24] focus:outline-none p-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in bg-[#FAF7F2] border-t border-[#EAE5DB]">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-[#8B8B88]" />
              <input
                type="text"
                placeholder="Search unique pieces..."
                className="w-full bg-[#FAF7F2] border border-[#EAE5DB] focus:border-[#353A24] focus:outline-none rounded-full py-1.5 pl-10 pr-4 text-xs text-[#353A24]"
              />
            </div>

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                isActive('/') ? 'bg-[#EAE5DB]/40 text-[#353A24]' : 'text-[#8B8B88]'
              }`}
            >
              Shop
            </Link>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#8B8B88]"
            >
              About
            </a>
            <Link
              to="/eco-impact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                isActive('/eco-impact') ? 'bg-[#EAE5DB]/40 text-[#353A24]' : 'text-[#8B8B88]'
              }`}
            >
              Sustainability
            </Link>

            <hr className="border-[#EAE5DB]" />

            <div className="flex items-center justify-between px-3 pt-2">
              <span className="text-xs text-[#8B8B88]">Profile Menu</span>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(true);
                }}
                className="w-8 h-8 rounded-full overflow-hidden border border-[#EAE5DB]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
