'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 wiggle-on-hover cursor-pointer">
              <span className="yellow-gradient-text">Yello</span>.bar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline-yellow">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline-yellow">
              How it works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline-yellow">
              Pricing
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#pricing" className="btn-primary">
              Get started free ✨
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 rounded-b-2xl">
              <a
                href="#features"
                className="block px-3 py-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-yellow-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-yellow-50"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-yellow-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="pt-4">
                <a href="#pricing" className="btn-primary w-full text-center block">
                  Get started free ✨
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 