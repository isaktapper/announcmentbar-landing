import { Edit, Palette, Code2, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Edit,
    title: 'Create your bar',
    description: 'Choose from pre-made templates or start from scratch. Add your message, links, and call-to-action.',
    visual: (
      <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-6 h-32 flex items-center justify-center">
        <div className="text-center">
          <Edit className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Write your message...</p>
        </div>
      </div>
    ),
  },
  {
    step: '02',
    icon: Palette,
    title: 'Customize appearance',
    description: 'Pick colors, fonts, and animations that match your brand. See changes in real-time.',
    visual: (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 h-32 flex items-center justify-center text-white">
        <div className="text-center">
          <p className="font-medium">🎉 Your styled announcement!</p>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: '03',
    icon: Code2,
    title: 'Paste the embed script',
    description: 'Copy one line of code and add it to your website. Works with any platform or CMS.',
    visual: (
      <div className="bg-gray-900 rounded-lg p-4 h-32 flex items-center">
        <code className="text-green-400 text-xs font-mono">
          {'<script src="announcement.bar/embed.js"></script>'}
        </code>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to get your announcement bar live on your website.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step indicator */}
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center">
                    <step.icon className="w-6 h-6 mr-2" />
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Visual representation */}
              <div className="mb-6">
                {step.visual}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-6 z-10">
                  <ArrowRight className="w-12 h-12 text-blue-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            Get started now
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Takes less than 5 minutes to set up
          </p>
        </div>
      </div>
    </section>
  );
} 