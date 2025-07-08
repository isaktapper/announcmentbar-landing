import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left side - Content */}
          <div className="lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#FFFFC5] text-[#1a1a1a] rounded-full text-sm font-medium mb-8">
              ✨ Free to start
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Announce your updates{' '}
              <span className="relative">
                in seconds
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-3" 
                  viewBox="0 0 200 12" 
                  fill="none"
                >
                  <path 
                    d="M2 10C60 4 140 4 198 10" 
                    stroke="#FFFFC5" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Create banners for product launches, downtime, or campaigns — fast and simple.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="btn-primary inline-flex items-center group text-lg"
              >
                Try it free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-secondary text-lg">
                See examples
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-12 text-sm text-gray-500">
              <p>No credit card required • Setup in 30 seconds</p>
            </div>
          </div>

          {/* Right side - Clean mockup */}
          <div className="lg:pl-8">
            <div className="relative">
              {/* Browser mockup */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 border">
                      yourwebsite.com
                    </div>
                  </div>
                </div>

                {/* Announcement bar */}
                <div className="bg-[#FFFFC5] text-[#1a1a1a] p-4 text-center relative">
                  <p className="font-medium">
                    🎉 New product launch! Get 30% off with code <span className="font-bold">LAUNCH30</span>
                  </p>
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1a1a1a] hover:bg-black hover:bg-opacity-10 rounded p-1">
                    ×
                  </button>
                </div>

                {/* Website content simulation */}
                <div className="p-8 space-y-6">
                  <div className="h-8 bg-gray-100 rounded w-3/4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 bg-gray-100 rounded w-24"></div>
                    <div className="h-10 bg-gray-100 rounded w-24"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFFFC5] rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#FFFFC5] rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 