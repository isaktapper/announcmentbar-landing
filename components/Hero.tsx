import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32">
      {/* Playful background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating yellow blob */}
        <div className="absolute top-20 right-10 w-32 h-32 yellow-accent rounded-full opacity-30 float-animation"></div>
        
        {/* Scattered sparkles */}
        <div className="absolute top-40 left-20 text-yellow-400 opacity-60">
          <Sparkles className="w-6 h-6 float-animation" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-60 right-1/4 text-yellow-500 opacity-50">
          <Star className="w-4 h-4 float-animation" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-40 left-1/3 text-yellow-400 opacity-40">
          <Zap className="w-5 h-5 float-animation" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Subtle scribble in corner */}
        <div className="absolute bottom-20 right-10 w-24 h-24 text-yellow-200 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full float-animation">
            <path 
              d="M20,80 Q30,20 50,60 Q70,10 80,50 Q90,80 70,70 Q50,90 30,70 Q10,60 20,80" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 yellow-accent rounded-full text-gray-900 text-sm font-medium mb-8 wiggle-on-hover">
              <Sparkles className="w-4 h-4 mr-2" />
              No account needed to start
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Announce product updates, promos, or{' '}
              <span className="yellow-gradient-text">maintenance</span>{' '}
              in seconds.
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Yello makes it <span className="underline-yellow font-medium">stupidly easy</span> to create and embed banners that actually get noticed.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#pricing"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
              >
                Get started free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-sm text-gray-500 mt-2 sm:mt-6">
                <p>✨ Free forever plan • 🚀 Setup in under 60 seconds</p>
              </div>
            </div>
          </div>

          {/* Right column - Banner Preview */}
          <div className="relative">
            {/* Floating mockup container */}
            <div className="bg-gray-50 rounded-extra-friendly p-8 shadow-xl border border-gray-100 card-hover">
              {/* Browser mockup */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-3 py-1 text-xs text-gray-500">
                      yoursite.com
                    </div>
                  </div>
                </div>

                {/* Banner preview */}
                <div className="relative">
                  <div className="yellow-accent p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 opacity-50"></div>
                    <div className="relative z-10">
                      <p className="font-medium text-gray-900">
                        🎉 <span className="font-bold">Flash Sale!</span> Get 30% off everything with code SAVE30
                        <span className="ml-2 underline cursor-pointer hover:no-underline">Shop now →</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Fake website content */}
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center text-sm text-gray-500">
                ↑ Your banner, live on your site
              </div>
            </div>

            {/* Floating elements around mockup */}
            <div className="absolute -top-4 -left-4 yellow-accent rounded-full p-3 shadow-lg float-animation">
              <Zap className="w-5 h-5 text-gray-900" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 float-animation" style={{ animationDelay: '1.5s' }}>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 