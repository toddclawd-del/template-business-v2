'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Single Template',
    price: '$79-129',
    description: 'Pick your favorite template and start building today',
    icon: Zap,
    features: [
      'One template of your choice',
      'Sanity CMS included',
      'Full source code',
      'Documentation',
      'Email support',
      'Free updates for 1 year',
    ],
    cta: 'Choose Template',
    popular: false,
  },
  {
    name: 'Full Bundle',
    price: '$299',
    originalPrice: '$499',
    description: 'Get all 13 templates — launch pricing',
    icon: Crown,
    features: [
      'All 13 templates included',
      'Sanity CMS pre-configured',
      'Full source code for everything',
      'Comprehensive documentation',
      'Priority email support',
      'Lifetime updates',
      'Early access to new templates',
      'Private Discord community',
    ],
    cta: 'Get Full Bundle',
    popular: true,
    savings: 'Launch Price — Save $800+',
    urgent: true,
  },
  {
    name: 'Category Pack',
    price: '$149',
    originalPrice: '$249',
    description: 'All templates in one category',
    icon: Sparkles,
    features: [
      '3-5 templates in category',
      'Full source code',
      'Documentation',
      'Email support',
      'Lifetime updates',
    ],
    cta: 'Choose Category',
    popular: false,
    savings: 'Launch Price',
  },
];

function PricingCard({ tier, index }: { tier: typeof pricingTiers[0] & { originalPrice?: string; urgent?: boolean }; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const Icon = tier.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative ${tier.popular ? 'md:-mt-8 md:mb-8' : ''}`}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
          <div className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/25">
            ✨ Most Popular
          </div>
        </div>
      )}

      <div className={`relative h-full p-8 rounded-2xl overflow-hidden transition-all duration-300 ${
        tier.popular 
          ? 'bg-gradient-to-b from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 glow'
          : 'glass'
      }`}>
        {/* Background Effect for Popular */}
        {tier.popular && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
        )}

        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              tier.popular 
                ? 'bg-gradient-to-br from-purple-500 to-blue-500'
                : 'bg-white/10'
            }`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{tier.name}</h3>
              {tier.savings && (
                <span className="text-sm text-green-400 font-medium">{tier.savings}</span>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            {tier.originalPrice && (
              <span className="text-2xl text-gray-500 line-through mr-3">{tier.originalPrice}</span>
            )}
            <span className="text-4xl md:text-5xl font-bold">{tier.price}</span>
            <span className="text-gray-400 ml-2">one-time</span>
            {tier.urgent && (
              <div className="mt-2">
                <span className="text-sm text-orange-400 font-medium animate-pulse">🔥 Limited time offer</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6">{tier.description}</p>

          {/* CTA Button */}
          <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-8 ${
            tier.popular
              ? 'btn-primary'
              : 'bg-white/10 hover:bg-white/20 border border-white/10'
          }`}>
            {tier.cta}
          </button>

          {/* Features */}
          <ul className="space-y-4">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-purple-500 to-blue-500'
                    : 'bg-white/10'
                }`}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-6"
          >
            Simple Pricing
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            One Price,{' '}
            <span className="gradient-text">Lifetime Access</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            No subscriptions. No hidden fees. Buy once, use forever.
          </motion.p>
        </div>

        {/* Pricing Cards - Reordered for visual hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {/* Single Template */}
          <PricingCard tier={pricingTiers[0]} index={0} />
          
          {/* Full Bundle (Popular - in the middle) */}
          <PricingCard tier={pricingTiers[1]} index={1} />
          
          {/* Category Pack */}
          <PricingCard tier={pricingTiers[2]} index={2} />
        </div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Secure checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Instant download</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>30-day money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
