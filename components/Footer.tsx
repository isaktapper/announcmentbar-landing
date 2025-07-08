import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-[#1a1a1a]">Announcement.bar</h2>
          </div>

          {/* Credits and GitHub */}
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span>Made by Isak Tapper</span>
            <a
              href="https://github.com/isaktapper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-[#1a1a1a] transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Announcement.bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 