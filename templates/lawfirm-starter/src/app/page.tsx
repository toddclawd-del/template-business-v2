"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import AttorneyCard from "@/components/AttorneyCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseResultCard from "@/components/CaseResultCard";
import {
  firmInfo,
  practiceAreas,
  attorneys,
  testimonials,
  caseResults,
} from "@/data/mockData";

export default function HomePage() {
  const featuredAttorneys = attorneys.filter((a) => a.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/75" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">
                Trusted Legal Excellence Since {firmInfo.founded}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                {firmInfo.tagline}
              </h1>
              <p className="text-xl text-charcoal-300 mb-8 leading-relaxed">
                When your rights, freedom, or future are at stake, you need
                attorneys who fight relentlessly for your best outcome. Our
                award-winning team has recovered over $500 million for clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded font-semibold text-lg transition-all hover:shadow-lg hover:shadow-gold-500/25 text-center"
                >
                  Free Consultation
                </Link>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded font-semibold text-lg transition-all text-center flex items-center justify-center gap-2"
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
                  (555) 123-4567
                </a>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-gold-400">$500M+</p>
                <p className="text-charcoal-400 text-sm">Recovered for Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold-400">40+</p>
                <p className="text-charcoal-400 text-sm">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold-400">98%</p>
                <p className="text-charcoal-400 text-sm">Success Rate</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Our Expertise"
            title="Practice Areas"
            description="We provide comprehensive legal services across a wide range of practice areas, each led by experienced specialists."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.slice(0, 8).map((area, index) => (
              <PracticeAreaCard key={area.id} area={area} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
            >
              View All Practice Areas
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">
                Why Choose Us
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
                A Law Firm That Fights for You
              </h2>
              <p className="text-charcoal-600 text-lg mb-8 leading-relaxed">
                For nearly four decades, we have been dedicated to providing
                exceptional legal representation. Our commitment to our clients
                goes beyond just winning cases—we are devoted to achieving
                justice and protecting your rights.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "🏆",
                    title: "Award-Winning Attorneys",
                    description:
                      "Our team includes Super Lawyers, Best Lawyers honorees, and nationally recognized trial attorneys.",
                  },
                  {
                    icon: "💼",
                    title: "Proven Track Record",
                    description:
                      "We have recovered hundreds of millions of dollars for our clients in verdicts and settlements.",
                  },
                  {
                    icon: "🤝",
                    title: "Personal Attention",
                    description:
                      "Every client works directly with experienced attorneys who know their case inside and out.",
                  },
                  {
                    icon: "⚡",
                    title: "No Fee Unless We Win",
                    description:
                      "For personal injury cases, you pay nothing unless we recover compensation for you.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-charcoal-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80"
                  alt="Law firm meeting"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 bg-navy-900 text-white p-8 rounded-lg shadow-2xl">
                <p className="text-gold-400 text-4xl font-bold mb-2">40+</p>
                <p className="text-charcoal-300">Years Serving California</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notable Results Section */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Case Results"
            title="Notable Victories"
            description="Our track record speaks for itself. Here are some of our recent successes for clients facing challenging legal situations."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseResults.slice(0, 6).map((result, index) => (
              <CaseResultCard key={result.id} result={result} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold"
            >
              View All Case Results
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <p className="text-center text-charcoal-500 text-sm mt-8 max-w-2xl mx-auto italic">
            *Past results do not guarantee future outcomes. Each case is unique
            and must be evaluated on its own facts and circumstances.
          </p>
        </div>
      </section>

      {/* Featured Attorneys Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Our Team"
            title="Meet Our Attorneys"
            description="Our attorneys are recognized leaders in their fields, with decades of combined experience fighting for clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAttorneys.map((attorney, index) => (
              <AttorneyCard
                key={attorney.id}
                attorney={attorney}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/attorneys"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
            >
              View All Attorneys
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Client Testimonials"
            title="What Our Clients Say"
            description="We are proud of the relationships we build with our clients and the results we achieve together."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d69b1e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Your Case Deserves Experienced Counsel
            </h2>
            <p className="text-xl text-charcoal-300 mb-8 max-w-2xl mx-auto">
              Do not face your legal challenges alone. Contact us today for a
              free, confidential consultation with one of our experienced
              attorneys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded font-semibold text-lg transition-all hover:shadow-lg hover:shadow-gold-500/25"
              >
                Schedule Your Free Consultation
              </Link>
              <a
                href="tel:+15551234567"
                className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 px-8 py-4 rounded font-semibold text-lg transition-all"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
            <p className="text-charcoal-500 text-sm mt-6">
              Available 24/7 for emergencies. Se habla español.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
