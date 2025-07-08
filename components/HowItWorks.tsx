import { Edit, Palette, Code2, ArrowRight, Sparkles, Zap } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Edit,
    title: 'Create Magic',
    description: 'Pick a template or start fresh. Write your message, add some emojis, sprinkle in a call-to-action. Easy peasy! 🎨',
    microcopy: 'Takes about 30 seconds',
    visual: (
      <div className="bg-white rounded-2xl border-3 border-dashed border-yellow-300 p-8 h-40 flex items-center justify-center hover:border-yellow-400 transition-colors">
        <div className="text-center">
          <Edit className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-600">✨ Crafting your message...</p>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-yellow-200 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: '02',
    icon: Palette,
    title: 'Style It Up',
    description: 'Colors, fonts, gradients — make it yours! Real-time preview means no surprises. What you see is what you get! 🎨',
    microcopy: 'Design freedom awaits',
    visual: (
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 h-40 flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-shadow">
        <div className="text-center">
          <p className="font-bold text-lg mb-2">🔥 FLASH SALE: 70% OFF!</p>
          <p className="text-sm opacity-90">Limited time only →</p>
          <div className="flex justify-center mt-3 space-x-2">
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
            <div className="w-3 h-3 bg-white/70 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: '03',
    icon: Code2,
    title: 'Deploy & Chill',
    description: 'Copy one magical line of code. Paste it anywhere. Boom! Your announcement is live. Time to celebrate! 🚀',
    microcopy: 'Literally just copy-paste',
    visual: (
      <div className="bg-gray-900 rounded-2xl p-6 h-40 flex items-center justify-center shadow-2xl hover:shadow-gray-800/50 transition-shadow">
        <div className="text-center">
          <code className="text-green-400 text-xs font-mono block mb-2">
            {'<script src="announcement.bar/'}
          </code>
          <code className="text-green-400 text-xs font-mono block mb-2">
            {'  embed/your-id.js"></script>'}
          </code>
          <div className="flex items-center justify-center mt-3 text-green-400">
            <Zap className="w-4 h-4 mr-1" />
            <span className="text-xs">Live in 3... 2... 1...</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding yellow-bg">
      <div className="container-xl">
        {/* Section header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full text-sm font-bold mb-8 border-3 border-white shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Simple as 1-2-3 (seriously!)
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6">
            How it works <span className="gradient-text">(spoiler: it&apos;s easy)</span>
          </h2>
          
          <p className="body-lg text-gray-700 max-w-3xl mx-auto">
            Three delightfully simple steps between you and announcement bar glory. No PhD required! 🎓
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Step card */}
              <div className="playful-card bg-white p-10 relative overflow-hidden">
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl">
                  {step.step}
                </div>

                {/* Icon and title */}
                <div className="flex items-center mb-6 pt-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mr-4">
                    <step.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="heading-md text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-yellow-600">
                      {step.microcopy}
                    </p>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="mb-6">
                  {step.visual}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 z-10 transform -translate-y-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-3 border-yellow-200">
                    <ArrowRight className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <div className="playful-card bg-white max-w-3xl mx-auto p-12">
            <h3 className="heading-md text-gray-900 mb-6">
              🚀 Ready to launch your first announcement?
            </h3>
            <p className="body-lg text-gray-600 mb-8">
              Join thousands of happy users who&apos;ve discovered the joy of effortless announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="btn-yellow text-xl px-10 py-5 inline-flex items-center font-black uppercase tracking-wide"
              >
                Start Creating Magic
                <Sparkles className="ml-2 w-6 h-6" />
              </a>
              <p className="text-sm text-gray-500 flex items-center justify-center">
                ⏱️ Setup time: 60 seconds or less (we timed it!)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 