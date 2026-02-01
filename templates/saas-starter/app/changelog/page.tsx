import type { Metadata } from 'next'
import { Nav, Footer } from '../components'
import { PageHeader } from '../components/shared'
import { CHANGELOG } from '../lib/data'
import ChangelogTimeline from './ChangelogTimeline'

export const metadata: Metadata = {
  title: 'Changelog | LaunchKit',
  description: 'Latest updates, features, and fixes from the LaunchKit team.',
}

export default function ChangelogPage() {
  return (
    <main className="overflow-hidden">
      <Nav />
      
      <PageHeader
        eyebrow="Changelog"
        title="What's new"
        description="Stay up to date with the latest updates, features, and fixes."
      >
        <button className="btn-secondary mt-6">
          Subscribe to updates
        </button>
      </PageHeader>
      
      {/* Changelog Timeline */}
      <ChangelogTimeline entries={CHANGELOG} />
      
      <Footer />
    </main>
  )
}
