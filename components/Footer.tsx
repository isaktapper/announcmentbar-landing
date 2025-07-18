import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="wiggle-on-hover">
              <Image
                src="/logo.svg"
                alt="Yello.bar"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Bars that get noticed</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-sm">
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors hover:underline-yellow"
            >
              About
            </a>
            <a
              href="/privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors hover:underline-yellow"
            >
              Privacy
            </a>
          </div>

          {/* Credits */}
          <div className="flex items-center text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400" />
            <span>by</span>
            <span className="ml-1 text-gray-700 font-medium">
              Isak
            </span>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Yello.bar. All rights reserved.
          </p>
          
          {/* Fun tagline */}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>✨</span>
            <span>Making the web more colorful, one bar at a time</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 