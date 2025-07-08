import { Code, Palette, Copy, Zap, Sparkles } from 'lucide-react';

type AccentColor = 'yellow' | 'blue' | 'purple' | 'pink';

const features = [
  {
    icon: Zap,
    title: 'Lightning Setup',
    description: 'Copy, paste, done! No webpack configs or build steps. Just pure announcement magic.',
    accent: 'yellow' as AccentColor,
  },
  {
    icon: Code,
    title: 'Pre-made Glory',
    description: 'Gorgeous templates that convert. No design skills needed — we&apos;ve got the pixels covered.',
    accent: 'blue' as AccentColor,
  },
  {
    icon: Palette,
    title: 'Brand Perfect',
    description: 'Colors, gradients, fonts — make it yours with our intuitive customization playground.',
    accent: 'purple' as AccentColor,
  },
  {
    icon: Copy,
    title: 'One-Click Deploy',
    description: 'Generate embed code faster than you can say "announcement". Deploy anywhere, anytime.',
    accent: 'pink' as AccentColor,
  },
];

const accentColors: Record<AccentColor, string> = {
  yellow: 'from-yellow-400 to-yellow-600',
  blue: 'from-blue-400 to-blue-600',
  purple: 'from-purple-400 to-purple-600',
  pink: 'from-pink-400 to-pink-600',
};

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-100 text-gray-900 rounded-full text-sm font-bold mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Everything you need (and nothing you don&apos;t)
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Features that make you go{' '}
            <span className="gradient-text">&quot;wow&quot;</span>
          </h2>
          
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;ve obsessed over every detail so you don&apos;t have to. Powerful features wrapped in delightful simplicity.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`playful-card group stagger-${index + 1} fade-in`}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon with dynamic gradient */}
                <div className={`w-20 h-20 bg-gradient-to-br ${accentColors[feature.accent]} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="heading-md text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Playful stats section */}
        <div className="mt-24 text-center">
          <div className="playful-card yellow-accent max-w-2xl mx-auto p-12">
            <h3 className="heading-md text-gray-900 mb-6">
              💡 Fun Fact Alert!
            </h3>
            <p className="body-lg text-gray-700 mb-8">
              Our users deploy <span className="font-black">27,000+</span> announcements every month.
              That&apos;s roughly one every 96 seconds! 🚀
            </p>
            <a
              href="#pricing"
              className="btn-primary inline-flex items-center font-black uppercase tracking-wide"
            >
              Join the announcement party
              <Sparkles className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 