"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Max-w-7xl and mx-auto keeps the nav content aligned with the rest of your grid
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300">
        
        {/* Logo with Gradient Text */}
        <div className="text-gradient font-bold text-xl tracking-tight text-white">
          EXOTIC<span className="text-primary">.</span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {['Product', 'Features', 'Pricing', 'Company'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Call to Action - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Log in
          </button>
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold shadow-[0_0_20px_-5px_rgba(255,107,0,0.4)] hover:scale-105 active:scale-95 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 fade-in duration-200">
          {['Product', 'Features', 'Pricing', 'Company'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <button className="text-left text-lg font-medium text-slate-300 hover:text-white transition-colors py-2">
            Log in
          </button>
          <button className="w-full bg-primary text-primary-foreground px-5 py-3 rounded-xl text-center text-base font-semibold shadow-[0_0_20px_-5px_rgba(255,107,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;