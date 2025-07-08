import { Github, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 text-yellow-400/20 float-animation">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-16 h-16 text-yellow-400/20 sparkle">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="20,10" />
          </svg>
        </div>
      </div>
      
      <div className="relative container-xl py-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl">📢</span>
            <div>
              <h2 className="text-2xl font-black text-white">Announcement.bar</h2>
              <p className="text-yellow-400 font-medium text-sm">Making announcements fun again ✨</p>
            </div>
          </div>

          {/* Credits and links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>by</span>
              <span className="font-bold text-white">Isak Tapper</span>
            </div>
            
            <a
              href="https://github.com/isaktapper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-2xl transition-all duration-300 hover:scale-105 font-bold"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-12 pt-8 border-t-2 border-yellow-400/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Announcement.bar. All rights reserved. 
              <span className="ml-1">🚀</span>
            </p>
            
            {/* Fun tagline */}
            <p className="text-yellow-400 font-medium text-sm">
              Zero developers were harmed in the making of this product 👨‍💻
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 