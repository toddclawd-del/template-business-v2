import type { Metadata } from 'next'
import { Nav, Footer, FAQ } from '../components'
import { PageHeader } from '../components/shared'
import { CONTACT_OPTIONS, CONTACT_INFO, CONTACT_SUBJECTS, FAQ as FAQ_ITEMS } from '../lib/data'
import ContactOptions from './ContactOptions'
import ContactFormSection from './ContactFormSection'

export const metadata: Metadata = {
  title: 'Contact | LaunchKit',
  description: 'Get in touch with our team. We\'d love to hear from you.',
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <Nav />
      
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />
      
      {/* Contact Options */}
      <ContactOptions options={CONTACT_OPTIONS} />
      
      {/* Contact Form + Info */}
      <ContactFormSection 
        subjects={CONTACT_SUBJECTS}
        contactInfo={CONTACT_INFO}
      />
      
      {/* FAQ Preview */}
      <section className="section-padding bg-[rgb(var(--muted))]">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title">Common questions</h2>
          </div>
          <FAQ items={FAQ_ITEMS.slice(0, 4)} showHeader={false} />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
