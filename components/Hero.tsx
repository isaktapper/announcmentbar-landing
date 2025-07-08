import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden yellow-bg section-padding">
      {/* Playful background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="doodle top-20 left-10 w-24 h-24 text-gray-300 float-animation">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="15,8" />
          </svg>
        </div>
        <div className="doodle top-32 right-16 w-20 h-20 text-purple-200 sparkle">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="doodle bottom-40 left-1/4 w-28 h-28 text-blue-200 float-animation">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,50 Q30,20 50,30 Q70,40 80,20 Q90,40 80,60 Q70,50 50,60 Q30,70 20,50" 
                  fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
        <div className="doodle top-1/2 right-1/3 w-16 h-16 text-yellow-400 sparkle">
          <Star className="w-full h-full" />
        </div>
      </div>

      <div className="relative container-xl">
        <div className="text-center max-w-5xl mx-auto">
          {/* Playful badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full text-sm font-bold mb-8 border-3 border-yellow-300 shadow-lg">
            <span className="mr-2">✨</span>
            No devs harmed in the making of this bar
            <Zap className="w-4 h-4 ml-2 text-yellow-600" />
          </div>

          {/* Main headline */}
          <h1 className="heading-xl text-gray-900 mb-8">
            Announce anything in{' '}
            <span className="gradient-text">60 seconds</span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Launch a banner in seconds. Maintenance, promos, updates — made easy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#pricing"
              className="btn-yellow text-xl px-10 py-5 inline-flex items-center group font-black uppercase tracking-wide"
            >
              Get Started Free
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <button className="btn-secondary text-xl px-10 py-5 font-black uppercase tracking-wide">
              See Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="text-gray-600 text-lg font-medium">
            <p>✨ Setup time: 60 seconds • 💳 No credit card • 🚀 Go live instantly</p>
          </div>
        </div>

        {/* Hero visual - playful announcement bar preview */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          <div className="playful-card bg-white p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 text-yellow-400 opacity-30">
              <Sparkles className="w-full h-full sparkle" />
            </div>
            
            <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white p-6 rounded-2xl text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <p className="font-bold text-lg flex items-center justify-center">
                  <span className="mr-2">🎉</span>
                  BLACK FRIDAY: 50% OFF EVERYTHING! 
                  <span className="ml-2">🔥</span>
                </p>
                <p className="text-sm mt-2 opacity-90">Use code FRIDAY50 at checkout →</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-500 font-medium">
                ↑ This took 60 seconds to create and deploy
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="playful-card stagger-1">
            <div className="text-4xl font-black text-gray-900 mb-2">60s</div>
            <div className="text-gray-600 font-medium">Average setup time</div>
          </div>
          <div className="playful-card stagger-2">
            <div className="text-4xl font-black text-gray-900 mb-2">0</div>
            <div className="text-gray-600 font-medium">Lines of code needed</div>
          </div>
          <div className="playful-card stagger-3">
            <div className="text-4xl font-black text-gray-900 mb-2">∞</div>
            <div className="text-gray-600 font-medium">Customization options</div>
          </div>
        </div>
      </div>
    </section>
      );
  } 