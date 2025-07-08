'use client';

import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b-3 border-yellow-200 sticky top-0 z-50 shadow-lg">
      <div className="container-xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-gray-900 flex items-center">
              <span className="mr-2">📢</span>
              Announcement.bar
              <Sparkles className="w-5 h-5 ml-2 text-yellow-500" />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors font-bold text-lg uppercase tracking-wide">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors font-bold text-lg uppercase tracking-wide">
              How it works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-bold text-lg uppercase tracking-wide">
              Pricing
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#pricing" className="btn-yellow font-black uppercase tracking-wide">
              Get Started ✨
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-2xl text-gray-700 hover:text-gray-900 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-sm border-t-3 border-yellow-200 shadow-lg rounded-b-3xl">
              <a
                href="#features"
                className="block px-4 py-3 rounded-2xl text-gray-700 hover:text-gray-900 hover:bg-yellow-100 font-bold text-lg uppercase tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-4 py-3 rounded-2xl text-gray-700 hover:text-gray-900 hover:bg-yellow-100 font-bold text-lg uppercase tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#pricing"
                className="block px-4 py-3 rounded-2xl text-gray-700 hover:text-gray-900 hover:bg-yellow-100 font-bold text-lg uppercase tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="pt-4">
                <a 
                  href="#pricing" 
                  className="btn-yellow w-full text-center block font-black uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started ✨
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 