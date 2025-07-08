import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    priceSubtext: 'forever',
    description: 'Get started with the basics',
    features: [
      '1 active bar',
      'Templates',
      'Standard icons',
    ],
    cta: 'Start free',
    popular: false,
    badge: null,
  },
  {
    name: 'Unlimited',
    price: '$8',
    priceSubtext: 'one-time',
    description: 'Everything you need, forever',
    features: [
      'Unlimited bars',
      'Templates',
      'Premium icons',
      'Custom fonts',
      'Advanced targeting',
      'Scheduled bars',
    ],
    cta: 'Get Unlimited',
    popular: true,
    badge: 'One-time $8',
    note: 'Pay once, use forever',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade to unlimited when you&apos;re ready. <span className="underline-yellow font-medium">No subscriptions</span>, no surprises.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-yellow-300 bg-yellow-50/30 shadow-xl scale-105 shadow-yellow-100/50'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              } card-hover`}
            >
              {/* Popular badge */}
              {plan.popular && plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="yellow-accent text-gray-900 px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Crown className="w-4 h-4 mr-2" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2 text-lg">/{plan.priceSubtext}</span>
                </div>
                <p className="text-gray-600 text-lg">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                        plan.popular ? 'yellow-accent' : 'bg-gray-100'
                      }`}>
                        <Check className={`w-4 h-4 ${
                          plan.popular ? 'text-gray-900' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <a
                href="https://app.yello.bar/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                  plan.popular
                    ? 'btn-primary hover:scale-105'
                    : 'btn-secondary hover:border-yellow-300'
                }`}
              >
                {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                {plan.cta}
              </a>

              {/* Additional note for Unlimited plan */}
              {plan.popular && plan.note && (
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-yellow-200">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-700 font-medium">{plan.note}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <div className="space-y-2">
            <p className="text-gray-600">
              Questions? <a href="mailto:hello@yello.bar" className="text-yellow-600 hover:underline font-medium">We&apos;re here to help →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 