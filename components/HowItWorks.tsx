import { Edit3, Palette, Code } from 'lucide-react';

const steps = [
  {
    step: '1',
    icon: Edit3,
    title: 'Create',
    description: 'Write your message and choose a template.',
  },
  {
    step: '2',
    icon: Palette,
    title: 'Customize',
    description: 'Pick colors and fonts that match your brand.',
  },
  {
    step: '3',
    icon: Code,
    title: 'Embed',
    description: 'Copy one line of code and paste it anywhere.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get your announcement live.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="w-12 h-12 bg-[#FFFFC5] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold text-lg mb-6 mx-auto">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl border border-gray-200 flex items-center justify-center mb-6 mx-auto shadow-sm">
                <step.icon className="w-8 h-8 text-[#1a1a1a]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[#FFFFC5] opacity-30 transform translate-x-6"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center text-lg"
          >
            Start now
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Takes less than 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
} 