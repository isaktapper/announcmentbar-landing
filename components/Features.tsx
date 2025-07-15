import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: (
      <Image src="/toggle.png" alt="Embed icon" width={64} height={64} priority />
    ),
    title: 'Embed with 1 line of code',
    description: 'Copy, paste, done. Add your bar to any website in seconds — no developer needed.',
  },
  {
    icon: (
      <Image src="/flash.png" alt="Go live icon" width={64} height={64} priority />
    ),
    title: 'Go live in under 2 minutes',
    description: 'From idea to announcement in 120 seconds. Most bars are published instantly.',
  },
  {
    icon: (
      <Image src="/paint.png" alt="Customize icon" width={64} height={64} priority />
    ),
    title: 'Customize every detail',
    description: 'Fonts, colors, visibility, and behavior — tailor your bar without writing a single line of code.',
  },
  {
    icon: (
      <Image src="/calendar.png" alt="Set it and forget it icon" width={64} height={64} priority />
    ),
    title: 'Set it and forget it',
    description: 'Schedule your bars, target by country or path, and let Yello handle the rest.',
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
            <span style={{ color: '#FF6B6B' }} className="font-bold">get noticed</span>
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
              className="group bg-white p-8 rounded-extra-friendly hover:shadow-2xl shadow-lg transition-all duration-300 border border-gray-100 card-hover transform hover:-translate-y-2 hover:scale-105"
              style={{ boxShadow: '0 4px 24px 0 rgba(255, 184, 0, 0.10)' }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <Image src={feature.icon.props.src} alt={feature.icon.props.alt} width={64} height={64} priority />

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
              <span className="font-medium">Pro tip:</span> Most bars go live in under 2 minutes
            </span>
          </div>
          <div>
            <a
              href="https://app.yello.bar/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
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