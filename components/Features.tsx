import { Code, Smartphone, Layers, Zap } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Templates for every use case',
    description: 'Sales, announcements, maintenance, events — we&apos;ve got you covered with proven designs.',
  },
  {
    icon: Code,
    title: 'Embed with 1 line of code',
    description: 'Copy, paste, done. Works with any website, CMS, or platform. No developer needed.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-friendly out of the box',
    description: 'Looks perfect on every device. Responsive design that adapts to any screen size.',
  },
  {
    icon: Zap,
    title: 'No account needed (optional)',
    description: 'Start creating immediately. Sign up later if you want to save and manage multiple banners.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to{' '}
            <span className="yellow-gradient-text">get noticed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop wasting time with complex tools. Yello gets your message live in seconds, not hours.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-extra-friendly hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 yellow-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 wiggle-on-hover">
                  <feature.icon className="w-8 h-8 text-gray-900" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info with playful touch */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
            <span className="text-gray-600">💡</span>
            <span className="ml-2 text-gray-700">
              <span className="font-medium">Pro tip:</span> Most banners go live in under 2 minutes
            </span>
          </div>
          <div>
            <a
              href="#pricing"
              className="btn-primary inline-flex items-center"
            >
              Start building for free ✨
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 