import type { Metadata } from 'next'
import { Nav, Footer } from '../components'
import { PageHeader } from '../components/shared'
import { COMPANY_STORY, COMPANY_STATS, COMPANY_VALUES, TEAM_MEMBERS, INVESTORS } from '../lib/data'
import CompanyStory from './CompanyStory'
import StatsSection from './StatsSection'
import ValuesSection from './ValuesSection'
import TeamSection from './TeamSection'
import InvestorsSection from './InvestorsSection'
import CareersCTA from './CareersCTA'

export const metadata: Metadata = {
  title: 'About | LaunchKit',
  description: 'Learn about our mission, team, and the story behind LaunchKit.',
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Nav />
      
      <PageHeader
        eyebrow="About Us"
        title="We're building the future of product development"
        description="Our mission is to help teams ship faster, collaborate better, and build products that users love."
      />
      
      {/* Company Story */}
      <CompanyStory story={COMPANY_STORY} />
      
      {/* Stats */}
      <StatsSection stats={COMPANY_STATS} />
      
      {/* Values */}
      <ValuesSection values={COMPANY_VALUES} />
      
      {/* Team */}
      <TeamSection members={TEAM_MEMBERS} />
      
      {/* Investors */}
      <InvestorsSection investors={INVESTORS} />
      
      {/* Careers CTA */}
      <CareersCTA />
      
      <Footer />
    </main>
  )
}
