import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 text-blue-200 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 text-purple-200 opacity-30">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 text-blue-100 opacity-25">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Free to get started
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Add announcement bars to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              your site
            </span>{' '}
            in seconds
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Customizable. Embeddable. No coding needed.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
            >
              Get started – it's free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="btn-secondary text-lg px-8 py-4">
              See demo
            </button>
          </div>

          {/* Social proof or additional info */}
          <div className="mt-16 text-sm text-gray-500">
            <p>No credit card required • Set up in under 60 seconds</p>
          </div>
        </div>

        {/* Hero visual placeholder */}
        <div className="mt-20 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <p className="font-medium">🎉 New product launch! Get 30% off everything with code LAUNCH30</p>
              </div>
            </div>
            <div className="mt-4 text-center text-gray-500 text-sm">
              ↑ This is what your announcement bar could look like
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 