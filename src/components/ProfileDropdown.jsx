import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Settings, History, Heart, Leaf, LogOut } from 'lucide-react';

export default function ProfileDropdown({ isOpen, onClose }) {
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuItems = [
    {
      name: 'My Profile & Settings',
      path: '/profile',
      icon: Settings,
    },
    {
      name: 'Order History',
      path: '/orders',
      icon: History,
    },
    {
      name: 'My Wardrobe',
      path: '/wardrobe',
      icon: Heart,
    },
    {
      name: 'Your Eco-Impact',
      path: '/eco-impact',
      icon: Leaf,
    },
  ];

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 top-full mt-3 w-80 bg-[#FCFBF7] rounded-[1.8rem] border border-[#F2E9DC] shadow-xl shadow-[#2D2D2A]/5 p-6 z-50 transition-all duration-200 transform origin-top-right animate-fade-in font-sans"
    >
      {/* Profile Header */}
      <div className="flex items-center gap-4 pb-5 border-b border-[#F2E9DC] mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border border-[#F2E9DC]">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" 
            alt="Alex Rivers profile avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-[#2D2D2A] text-base leading-snug">Alex Rivers</h3>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5F6B4E] mt-1">
            <Leaf className="h-3 w-3 fill-current" />
            Seed Member
          </span>
        </div>
      </div>

      {/* Menu Links */}
      <nav className="space-y-1 mb-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-[#F2E9DC]/40 text-[#2D2D2A] transition-all group text-left"
            >
              <Icon className="h-5 w-5 text-[#8B8B88] group-hover:text-[#5F6B4E] transition-colors" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Action Button */}
      <div className="pt-2">
        <button 
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 border border-[#2D2D2A] hover:bg-[#F2E9DC]/40 rounded-full py-2.5 px-4 text-xs font-semibold text-[#2D2D2A] transition-all active:scale-95"
        >
          <LogOut className="h-4 w-4 text-[#8B8B88]" />
          Log Out
        </button>
      </div>
    </div>
  );
}
