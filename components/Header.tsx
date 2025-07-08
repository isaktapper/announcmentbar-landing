'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="wiggle-on-hover cursor-pointer">
              <Image
                src="/logo.svg"
                alt="Yello.bar"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
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

          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app.yello.bar/auth/login" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 hover:text-gray-900 transition-colors">
              Log In
            </a>
            <a href="https://app.yello.bar/auth/signup" target="_blank" rel="noopener noreferrer" className="btn-primary">
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
              <div className="pt-4 space-y-3">
                <a href="https://app.yello.bar/auth/login" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-yellow-50 font-bold text-center">
                  Log In
                </a>
                <a href="https://app.yello.bar/auth/signup" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
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