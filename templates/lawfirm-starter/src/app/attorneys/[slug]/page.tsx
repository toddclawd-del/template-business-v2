"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { attorneys, practiceAreas } from "@/data/mockData";

export default function AttorneyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const attorney = attorneys.find((a) => a.slug === slug);

  if (!attorney) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">
            Attorney Not Found
          </h1>
          <Link href="/attorneys" className="text-gold-600 hover:underline">
            View All Attorneys
          </Link>
        </div>
      </div>
    );
  }

  const attorneyPracticeAreas = practiceAreas.filter((area) =>
    attorney.practiceAreas.includes(area.slug)
  );

  return (
    <>
      <PageHero
        title={attorney.name}
        subtitle={attorney.title}
        breadcrumbs={[
          { label: "Attorneys", href: "/attorneys" },
          { label: attorney.name, href: `/attorneys/${attorney.slug}` },
        ]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar - Photo and Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[450px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src={attorney.photo}
                    alt={attorney.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-navy-900 text-white rounded-lg p-6"
                >
                  <h3 className="text-lg font-serif font-bold mb-4">
                    Contact {attorney.name.split(" ")[0]}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <a
                      href={`mailto:${attorney.email}`}
                      className="flex items-center gap-3 text-charcoal-300 hover:text-gold-400 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {attorney.email}
                    </a>
                    <a
                      href={`tel:${attorney.phone.replace(/[^0-9]/g, "")}`}
                      className="flex items-center gap-3 text-charcoal-300 hover:text-gold-400 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {attorney.phone}
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full bg-gold-500 hover:bg-gold-600 text-navy-950 py-3 rounded font-semibold text-center transition-colors mt-6"
                  >
                    Schedule Consultation
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Biography
                </h2>
                <p className="text-charcoal-700 text-lg leading-relaxed">
                  {attorney.bio}
                </p>
              </motion.div>

              {/* Practice Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Practice Areas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {attorneyPracticeAreas.map((area) => (
                    <Link
                      key={area.id}
                      href={`/practice-areas/${area.slug}`}
                      className="flex items-center gap-2 px-4 py-2 bg-navy-100 text-navy-700 rounded-full hover:bg-gold-100 hover:text-gold-700 transition-colors"
                    >
                      <span>{area.icon}</span>
                      {area.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Education
                </h2>
                <ul className="space-y-3">
                  {attorney.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                      <span className="text-charcoal-700">{edu}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Bar Admissions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Bar Admissions
                </h2>
                <ul className="space-y-3">
                  {attorney.barAdmissions.map((admission, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-charcoal-700">{admission}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Notable Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Notable Cases
                </h2>
                <div className="space-y-4">
                  {attorney.notableCases.map((caseItem, index) => (
                    <div
                      key={index}
                      className="p-4 bg-charcoal-50 rounded-lg border-l-4 border-gold-500"
                    >
                      <p className="text-charcoal-700">{caseItem}</p>
                    </div>
                  ))}
                </div>
                <p className="text-charcoal-500 text-sm mt-4 italic">
                  *Past results do not guarantee future outcomes.
                </p>
              </motion.div>

              {/* Awards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Awards &amp; Recognition
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {attorney.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white border border-charcoal-200 rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 text-gold-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-charcoal-700">{award}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Schedule a Consultation with {attorney.name.split(" ")[0]}
            </h2>
            <p className="text-charcoal-600">
              Fill out the form below to discuss your case.
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
