import { Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-gray-900 wiggle-on-hover">
              <span className="yellow-gradient-text">Yello</span>.bar
            </h2>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Banners that get noticed</span>
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
              href="https://github.com/isaktapper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
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
            <a
              href="https://github.com/isaktapper"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Isak Tapper
            </a>
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
            <span>Making the web more colorful, one banner at a time</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 