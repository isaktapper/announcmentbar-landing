import { Code, Palette, Copy, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Easy to embed',
    description: 'Just copy and paste one line of code. No complex integration required.',
  },
  {
    icon: Code,
    title: 'Pre-built templates',
    description: 'Choose from beautiful, conversion-optimized templates that work out of the box.',
  },
  {
    icon: Palette,
    title: 'Custom colors & gradients',
    description: 'Match your brand perfectly with unlimited color and gradient options.',
  },
  {
    icon: Copy,
    title: 'One-click copy + paste',
    description: 'Generate your embed code instantly and deploy in seconds, not hours.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              get started
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No technical skills required. Create, customize, and deploy announcement bars in minutes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
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

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center"
          >
            Start building for free
          </a>
        </div>
      </div>
    </section>
  );
} 