"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { firmInfo } from "@/data/mockData";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Our Firm"
        subtitle="A legacy of excellence, a commitment to justice"
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Firm Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">
                Our Story
              </p>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Founded on Principles That Endure
              </h2>
              <div className="prose prose-lg text-charcoal-700">
                <p className="leading-relaxed mb-4">{firmInfo.description}</p>
                <p className="leading-relaxed">
                  Today, our firm includes some of the most talented and
                  dedicated attorneys in California, each bringing unique
                  expertise and a shared commitment to excellence. We have grown
                  into a full-service firm while maintaining the personalized
                  attention that has always defined our practice.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Law firm office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-950 p-6 rounded-lg">
                <p className="text-4xl font-bold">Est. {firmInfo.founded}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 font-semibold tracking-wider uppercase text-sm mb-4">
              Our Mission
            </p>
            <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic">
              &ldquo;{firmInfo.mission}&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="text-4xl font-serif font-bold text-navy-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {firmInfo.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">
                    {index === 0 && "👤"}
                    {index === 1 && "⭐"}
                    {index === 2 && "🤝"}
                    {index === 3 && "🎯"}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Community involvement"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">
                Giving Back
              </p>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Community Involvement
              </h2>
              <p className="text-charcoal-700 text-lg mb-6 leading-relaxed">
                We believe that our success comes with a responsibility to give
                back to the communities we serve. Our attorneys volunteer their
                time and expertise to help those in need access the legal system.
              </p>
              <ul className="space-y-4">
                {firmInfo.communityInvolvement.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">
              Recognition
            </p>
            <h2 className="text-4xl font-serif font-bold text-navy-900">
              Awards &amp; Accolades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firmInfo.awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gold-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="font-medium text-navy-900">{award}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-charcoal-300 mb-8">
              Let our experienced team fight for your rights. Contact us today
              for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded font-semibold text-lg transition-all hover:shadow-lg hover:shadow-gold-500/25"
              >
                Contact Us Today
              </Link>
              <Link
                href="/attorneys"
                className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 px-8 py-4 rounded font-semibold text-lg transition-all"
              >
                Meet Our Attorneys
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
