import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    priceSubtext: 'forever',
    description: 'Perfect for trying Yello',
    features: [
      '1 active banner',
      'Basic templates',
      'All embed options',
      'Mobile responsive',
      'Community support',
    ],
    cta: 'Start free',
    popular: false,
    badge: '✨ No credit card',
  },
  {
    name: 'Pro',
    price: '$9',
    priceSubtext: 'per month',
    description: 'For serious announcements',
    features: [
      'Unlimited banners',
      'Premium templates',
      'Custom colors & fonts',
      'Advanced targeting',
      'Analytics & insights',
      'Priority support',
      'No Yello branding',
      'Custom CSS',
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    badge: '👑 Most popular',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, upgrade when you need more. <span className="underline-yellow font-medium">No surprises</span>, no hidden fees.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-extra-friendly border-2 transition-all duration-300 card-hover ${
                plan.popular
                  ? 'border-yellow-300 bg-white shadow-xl scale-105 shadow-yellow-100'
                  : 'border-gray-200 bg-white hover:border-yellow-200 hover:shadow-lg'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="yellow-accent text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center wiggle-on-hover">
                    <Crown className="w-4 h-4 mr-1" />
                    Most popular
                  </div>
                </div>
              )}

              {/* Plan badge */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-4">
                  {plan.badge}
                </div>
              </div>

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.priceSubtext}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 yellow-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-gray-900" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center ${
                  plan.popular
                    ? 'btn-primary text-lg'
                    : 'btn-secondary hover:border-yellow-300'
                }`}
              >
                {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                {plan.cta}
              </button>

              {/* Additional info for Pro plan */}
              {plan.popular && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">Cancel anytime • 14-day money back</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
            <span className="text-2xl mr-2">💡</span>
            <span className="text-gray-700">
              <span className="font-bold">Pro tip:</span> Most users upgrade within their first week
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">
              Questions about pricing? <a href="mailto:hello@yello.bar" className="text-yellow-600 hover:underline font-medium">Chat with us →</a>
            </p>
            <p className="text-sm text-gray-500">
              All plans include 99.9% uptime • Enterprise options available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 