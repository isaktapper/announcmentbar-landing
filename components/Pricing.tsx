import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying it out',
    features: [
      '1 active announcement',
      'Basic templates',
      'Standard styling',
      'Community support',
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$10',
    priceSubtext: 'one-time',
    description: 'Everything you need',
    features: [
      'Unlimited announcements',
      'All templates',
      'Custom styling',
      'Analytics dashboard',
      'Priority support',
      'Custom domains',
    ],
    cta: 'Get Pro',
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
            Simple pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more. No subscriptions.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-200 ${
                plan.popular
                  ? 'border-[#FFFFC5] bg-[#FFFFC5] bg-opacity-5 scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FFFFC5] text-[#1a1a1a] px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-[#1a1a1a]">{plan.price}</span>
                  {plan.priceSubtext && (
                    <span className="text-gray-600 ml-2 text-lg">/ {plan.priceSubtext}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-[#FFFFC5] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-[#1a1a1a]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#FFFFC5] hover:bg-[#FFFF99] text-[#1a1a1a] hover:scale-[1.02] shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] hover:scale-[1.02]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            💡 Pro is a one-time purchase. Use forever, no monthly fees.
          </p>
          <p className="text-sm text-gray-500">
            Questions? <a href="mailto:hello@announcement.bar" className="text-[#1a1a1a] hover:underline font-medium">Get in touch</a>
          </p>
        </div>
      </div>
    </section>
  );
} 