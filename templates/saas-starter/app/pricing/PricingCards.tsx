'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { PricingPlan } from '../lib/types'

interface PricingCardsProps {
  plans: PricingPlan[]
}

export default function PricingCards({ plans }: PricingCardsProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  
  return (
    <section className="section-padding-sm">
      <div className="container-default">
        {/* Billing Toggle */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                ${billingPeriod === 'monthly' 
                  ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
                ${billingPeriod === 'annual' 
                  ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400'
                }`}
            >
              Annual
              <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <span className="pricing-badge">Most Popular</span>
              )}
              
              <h3 className="pricing-name">{plan.name}</h3>
              <p className={`pricing-description ${plan.popular ? '!text-white/80' : ''}`}>
                {plan.description}
              </p>
              
              <div className="pricing-amount">
                <span className="pricing-price">
                  {billingPeriod === 'annual' && plan.priceAnnual ? plan.priceAnnual : plan.price}
                </span>
                {plan.period && (
                  <span className="pricing-period">{plan.period}</span>
                )}
              </div>
              
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing-feature">
                    <span className="pricing-feature-check">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={plan.popular ? 'text-white/90' : ''}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`
                ${plan.popular 
                  ? 'pricing-cta-featured' 
                  : plan.name === 'Starter'
                    ? 'pricing-cta-secondary'
                    : 'pricing-cta-primary'
                }
              `}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
