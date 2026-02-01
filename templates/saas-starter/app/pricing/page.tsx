import type { Metadata } from 'next'
import { Nav, Footer } from '../components'
import { PageHeader } from '../components/shared'
import { PRICING, TRUST_SIGNALS, PLAN_COMPARISON, PRICING_FAQ } from '../lib/data'
import PricingCards from './PricingCards'
import TrustSignals from './TrustSignals'
import PlanComparisonTable from './PlanComparisonTable'
import PricingFAQ from './PricingFAQ'
import EnterpriseCTA from './EnterpriseCTA'

export const metadata: Metadata = {
  title: 'Pricing | LaunchKit',
  description: 'Simple, transparent pricing. Start free, scale as you grow.',
}

export default function PricingPage() {
  return (
    <main className="overflow-hidden">
      <Nav />
      
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="Start free, scale as you grow. No hidden fees, no surprises."
        centered
      />
      
      {/* Pricing Cards with Toggle */}
      <PricingCards plans={PRICING} />
      
      {/* Trust Signals */}
      <TrustSignals signals={TRUST_SIGNALS} />
      
      {/* Plan Comparison Table */}
      <PlanComparisonTable data={PLAN_COMPARISON} />
      
      {/* FAQ */}
      <PricingFAQ items={PRICING_FAQ} />
      
      {/* Enterprise CTA */}
      <EnterpriseCTA />
      
      <Footer />
    </main>
  )
}
