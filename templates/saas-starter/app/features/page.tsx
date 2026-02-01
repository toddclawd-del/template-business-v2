import type { Metadata } from 'next'
import { Nav, Footer, CTA } from '../components'
import { PageHeader } from '../components/shared'
import { FEATURES, HERO_FEATURE, DETAILED_FEATURES, COMPARISON_DATA } from '../lib/data'
import HeroFeature from './HeroFeature'
import FeatureGrid from './FeatureGrid'
import AlternatingFeatures from './AlternatingFeatures'
import ComparisonTable from './ComparisonTable'

export const metadata: Metadata = {
  title: 'Features | LaunchKit',
  description: 'Explore all the powerful features that help your team ship faster and collaborate better.',
}

export default function FeaturesPage() {
  return (
    <main className="overflow-hidden">
      <Nav />
      
      <PageHeader
        eyebrow="Platform"
        title="Everything you need to build great products"
        description="Powerful features that help your team ship faster and collaborate better."
      />
      
      {/* Hero Feature */}
      <HeroFeature feature={HERO_FEATURE} />
      
      {/* Feature Grid */}
      <FeatureGrid features={FEATURES} />
      
      {/* Alternating Features */}
      <AlternatingFeatures features={DETAILED_FEATURES} />
      
      {/* Comparison Table */}
      <ComparisonTable data={COMPARISON_DATA} />
      
      {/* CTA */}
      <CTA />
      
      <Footer />
    </main>
  )
}
