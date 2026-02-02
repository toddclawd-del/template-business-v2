"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { practiceAreas, attorneys } from "@/data/mockData";

export default function PracticeAreaDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">
            Practice Area Not Found
          </h1>
          <Link href="/practice-areas" className="text-gold-600 hover:underline">
            View All Practice Areas
          </Link>
        </div>
      </div>
    );
  }

  const areaAttorneys = attorneys.filter((a) =>
    a.practiceAreas.includes(area.slug)
  );

  return (
    <>
      <PageHero
        title={area.name}
        subtitle={area.shortDescription}
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.name, href: `/practice-areas/${area.slug}` },
        ]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Overview
                </h2>
                <p className="text-charcoal-700 text-lg leading-relaxed">
                  {area.description}
                </p>
              </motion.div>

              {/* Common Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Cases We Handle
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.commonCases.map((caseType, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-charcoal-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-gold-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-charcoal-700">{caseType}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Our Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Our Approach
                </h2>
                <p className="text-charcoal-700 text-lg leading-relaxed">
                  {area.ourApproach}
                </p>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {area.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-charcoal-200 rounded-lg p-6"
                    >
                      <h3 className="text-lg font-semibold text-navy-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-charcoal-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Attorneys */}
              {areaAttorneys.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                    Attorneys Who Specialize in {area.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {areaAttorneys.map((attorney) => (
                      <Link
                        key={attorney.id}
                        href={`/attorneys/${attorney.slug}`}
                        className="flex items-center gap-4 p-4 bg-white border border-charcoal-200 rounded-lg hover:border-gold-400 transition-colors"
                      >
                        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={attorney.photo}
                            alt={attorney.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-900">
                            {attorney.name}
                          </h3>
                          <p className="text-gold-600 text-sm">
                            {attorney.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-navy-900 text-white rounded-lg p-8"
                >
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    Get a Free Consultation
                  </h3>
                  <p className="text-charcoal-300 mb-6">
                    Discuss your {area.name.toLowerCase()} case with an
                    experienced attorney. All consultations are confidential.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-gold-500 hover:bg-gold-600 text-navy-950 py-3 rounded font-semibold text-center transition-colors mb-4"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="tel:+15551234567"
                    className="block w-full border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 py-3 rounded font-semibold text-center transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </motion.div>

                {/* Other Practice Areas */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-charcoal-50 rounded-lg p-8"
                >
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-4">
                    Other Practice Areas
                  </h3>
                  <ul className="space-y-3">
                    {practiceAreas
                      .filter((a) => a.slug !== area.slug)
                      .slice(0, 6)
                      .map((otherArea) => (
                        <li key={otherArea.id}>
                          <Link
                            href={`/practice-areas/${otherArea.slug}`}
                            className="flex items-center gap-2 text-charcoal-700 hover:text-gold-600 transition-colors"
                          >
                            <span>{otherArea.icon}</span>
                            {otherArea.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Ready to Discuss Your {area.name} Case?
            </h2>
            <p className="text-charcoal-600">
              Fill out the form below and one of our attorneys will contact you
              within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
