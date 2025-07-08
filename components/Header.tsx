'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-[#1a1a1a]">
              Announcement.bar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#1a1a1a] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#1a1a1a] transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-[#1a1a1a] transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#pricing" className="btn-primary">
              Try free
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFFFC5] focus:ring-offset-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="pt-4">
                <a href="#pricing" className="btn-primary w-full text-center block">
                  Try free
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 