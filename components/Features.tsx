import { Zap, Palette, Copy, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast setup',
    description: 'One line of code. Works on any website or platform.',
  },
  {
    icon: Palette,
    title: 'Custom design',
    description: 'Match your brand with colors, fonts, and styles.',
  },
  {
    icon: Copy,
    title: 'Ready templates',
    description: 'Pre-built designs for launches, sales, and updates.',
  },
  {
    icon: Globe,
    title: 'Works everywhere',
    description: 'WordPress, Shopify, React, or any website.',
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple tools to create professional announcement bars in minutes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#FFFFC5] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform duration-200">
                <feature.icon className="w-8 h-8 text-[#1a1a1a]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center"
          >
            Get started for free
          </a>
        </div>
      </div>
    </section>
  );
} 