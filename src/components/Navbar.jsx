import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Heart, Leaf, Menu, X, Search } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'หน้าแรก', path: '/' },
    { name: 'ตู้เสื้อผ้าของฉัน', path: '/wardrobe' },
    { name: 'คะแนนรักษ์โลก', path: '/eco-impact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glassmorphism shadow-sm border-b border-earth-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-moss hover:opacity-90 transition-opacity">
              <Leaf className="h-7 w-7 text-sage-600 animate-pulse" />
              <span className="tracking-wide text-earth-800">re<span className="text-sage-600 font-extrabold">-wear</span></span>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md items-center justify-center px-6">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="ค้นหาเสื้อผ้ารักษ์โลก..."
                className="w-full bg-earth-100/80 border border-earth-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
              />
              <Search className="absolute right-3.5 top-2.5 h-4.5 w-4.5 text-earth-400" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-sage-600 ${
                  isActive(link.path) ? 'text-sage-700 font-semibold' : 'text-earth-600'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sage-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Eco Points Indicator */}
            <Link to="/eco-impact" className="flex items-center gap-1.5 px-3 py-1.5 bg-sage-50 border border-sage-200/50 rounded-full hover:bg-sage-100 transition-colors">
              <Leaf className="h-4 w-4 text-sage-600" />
              <span className="text-xs font-semibold text-sage-800">450 คะแนน</span>
            </Link>

            <Link to="/wardrobe" className="text-earth-600 hover:text-sage-600 transition-colors relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-clay-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
            </Link>
            
            <Link to="#" className="text-earth-600 hover:text-sage-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-sage-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
            </Link>

            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-earth-600 hover:text-sage-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-500/50 rounded-full"
              >
                <div className="w-8 h-8 rounded-full bg-earth-200 border-2 border-sage-500/30 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </button>
              
              <ProfileDropdown 
                isOpen={isDropdownOpen} 
                onClose={() => setIsDropdownOpen(false)} 
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/eco-impact" className="flex items-center gap-1 px-2.5 py-1 bg-sage-50 rounded-full">
              <Leaf className="h-3.5 w-3.5 text-sage-600" />
              <span className="text-[11px] font-semibold text-sage-800">450</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-earth-600 hover:text-sage-600 focus:outline-none p-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-earth-50 border-b border-earth-200">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ค้นหาเสื้อผ้ารักษ์โลก..."
                  className="w-full bg-earth-100 border border-earth-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                />
                <Search className="absolute right-3.5 top-2.5 h-4.5 w-4.5 text-earth-400" />
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-sage-50 text-sage-800 font-semibold'
                    : 'text-earth-600 hover:bg-earth-100 hover:text-earth-900'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <hr className="my-2 border-earth-200" />

            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium text-earth-600 hover:bg-earth-100"
            >
              <User className="h-5 w-5" />
              โปรไฟล์ & การตั้งค่า
            </Link>
            
            <Link
              to="/wardrobe"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium text-earth-600 hover:bg-earth-100"
            >
              <Heart className="h-5 w-5" />
              สินค้าที่บันทึกไว้ (3)
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
