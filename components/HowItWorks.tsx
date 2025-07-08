import { Edit, Palette, Code2, ArrowRight, Sparkles, Zap } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Edit,
    title: 'Create',
    description: 'Pick a template or start from scratch. Write your message, add a link, choose your style.',
    caption: 'Takes about 30 seconds',
    visual: (
      <div className="bg-white rounded-2xl border-2 border-dashed border-yellow-300 p-6 h-40 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </div>
        <div className="text-center">
          <Edit className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-sm text-gray-500 font-medium">✍️ Type your announcement...</p>
          <div className="mt-2 w-32 h-2 bg-yellow-100 rounded"></div>
        </div>
      </div>
    ),
  },
  {
    step: '02',
    icon: Palette,
    title: 'Customize',
    description: 'Make it yours with colors, fonts, and positioning. See your changes update in real-time.',
    caption: 'Design freedom, zero complexity',
    visual: (
      <div className="yellow-accent rounded-2xl p-6 h-40 flex items-center justify-center text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-300 opacity-60"></div>
        <div className="relative z-10 text-center">
          <p className="font-bold text-lg">🎨 Your styled banner!</p>
          <div className="flex justify-center mt-3 space-x-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-sm mt-2 opacity-80">Colors, fonts, magic ✨</p>
        </div>
      </div>
    ),
  },
  {
    step: '03',
    icon: Code2,
    title: 'Copy + paste',
    description: 'Grab your embed code and add it anywhere on your site. Works with any platform.',
    caption: 'One line of code, infinite possibilities',
    visual: (
      <div className="bg-gray-900 rounded-2xl p-6 h-40 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-3 left-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <div className="mt-4">
          <code className="text-green-400 text-sm font-mono block mb-2">
            {'<script src="yello.bar/embed.js">'}
          </code>
          <code className="text-green-400 text-sm font-mono">
            {'</script>'}
          </code>
        </div>
        <div className="absolute bottom-3 right-3">
          <Zap className="w-4 h-4 text-yellow-400" />
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to get your banner live. No complexity, no headaches, just results.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Step indicator */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex-shrink-0 w-16 h-16 yellow-accent rounded-2xl flex items-center justify-center text-gray-900 font-bold text-xl wiggle-on-hover">
                  {step.step}
                </div>
              </div>

              {/* Visual representation */}
              <div className="mb-6 card-hover">
                {step.visual}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center justify-center">
                  <step.icon className="w-6 h-6 mr-2" />
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-3">
                  {step.description}
                </p>
                
                <p className="text-sm text-yellow-600 font-medium italic">
                  {step.caption}
                </p>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 -right-6 z-10">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-50 rounded-2xl mb-6">
            <span className="text-2xl mr-2">⚡</span>
            <span className="text-gray-700">
              <span className="font-bold">Fun fact:</span> Most people finish their first banner during coffee break
            </span>
          </div>
          <div>
            <a
              href="https://app.yello.bar/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              Start creating now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 