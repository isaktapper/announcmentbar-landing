import { Check, Star, Zap, Sparkles, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for testing the waters',
    emoji: '🌊',
    features: [
      '1 active announcement',
      'Basic templates (still gorgeous!)',
      'Standard colors & fonts',
      'Email support when you need us',
      'Forever free (no tricks)',
    ],
    cta: 'Start Free Today',
    popular: false,
    buttonStyle: 'btn-secondary',
  },
  {
    name: 'Pro',
    price: '$10',
    priceSubtext: 'one-time payment (seriously!)',
    description: 'Everything you need to dominate',
    emoji: '👑',
    features: [
      'Unlimited announcements',
      'Premium templates + custom CSS',
      'Custom colors, gradients & fonts',
      'Analytics that actually matter',
      'Priority support (we&apos;re fast!)',
      'Advanced targeting & scheduling',
      'Lifetime updates included',
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    buttonStyle: 'btn-yellow',
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        {/* Section header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-100 text-gray-900 rounded-full text-sm font-bold mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            No monthly fees. No contracts. No kidding.
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Pricing that makes <span className="gradient-text">sense</span>
          </h2>
          
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Start free, upgrade when you&apos;re ready. One-time payment, lifetime value. Because subscription fatigue is real. 😴
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 ${
                plan.popular
                  ? 'lg:scale-110 lg:-mt-8'
                  : ''
              }`}
            >
              <div className={`playful-card h-full ${plan.popular ? 'yellow-accent border-yellow-400' : 'bg-white'} p-10 relative overflow-hidden`}>
                
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm font-black flex items-center shadow-xl">
                      <Crown className="w-4 h-4 mr-2" />
                      MOST POPULAR
                      <Sparkles className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-10 pt-4">
                  <div className="text-4xl mb-4">{plan.emoji}</div>
                  <h3 className="heading-md text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-4">
                    <span className="text-6xl font-black text-gray-900">{plan.price}</span>
                    {plan.priceSubtext && (
                      <div className="text-gray-600 font-medium mt-1">{plan.priceSubtext}</div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 font-medium">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button
                  className={`w-full py-5 px-8 rounded-2xl font-black text-xl transition-all duration-300 flex items-center justify-center uppercase tracking-wide ${plan.buttonStyle}`}
                >
                  {plan.popular && <Zap className="w-6 h-6 mr-3" />}
                  {plan.cta}
                  {plan.popular && <Sparkles className="w-6 h-6 ml-3" />}
                </button>

                {/* Additional info for pro plan */}
                {plan.popular && (
                  <div className="mt-6 text-center">
                    <p className="text-sm font-medium text-gray-700">
                      💡 Pay once, use forever. No subscription trap!
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Additional info */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="playful-card bg-blue-50 p-8 text-center">
              <div className="text-2xl mb-4">🤔</div>
              <h4 className="heading-md text-gray-900 mb-4">Got Questions?</h4>
              <p className="text-gray-600 mb-6 font-medium">
                We&apos;re here to help! Reach out anytime and we&apos;ll get back to you faster than you can say &quot;announcement bar&quot;.
              </p>
              <a 
                href="mailto:support@announcement.bar" 
                className="btn-primary inline-flex items-center font-bold"
              >
                Ask Us Anything
              </a>
            </div>
            
            <div className="playful-card bg-purple-50 p-8 text-center">
              <div className="text-2xl mb-4">🎯</div>
              <h4 className="heading-md text-gray-900 mb-4">Need Custom Features?</h4>
              <p className="text-gray-600 mb-6 font-medium">
                Enterprise needs? Special integrations? Let&apos;s chat about building something amazing together.
              </p>
              <a 
                href="mailto:hello@announcement.bar" 
                className="btn-secondary inline-flex items-center font-bold"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>

        {/* Final guarantee */}
        <div className="mt-16 text-center">
          <div className="playful-card yellow-accent max-w-3xl mx-auto p-12">
            <div className="text-3xl mb-4">💪</div>
            <h3 className="heading-md text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="body-lg text-gray-700">
              Try Pro risk-free for 30 days. If you&apos;re not absolutely loving it, we&apos;ll refund every penny. No questions, no hassle, no hard feelings! 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 