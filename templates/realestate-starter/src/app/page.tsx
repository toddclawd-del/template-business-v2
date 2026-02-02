"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import TestimonialCard from "@/components/TestimonialCard";
import SearchBar from "@/components/SearchBar";
import {
  getFeaturedProperties,
  testimonials,
  neighborhoods,
  stats,
  companyInfo,
} from "@/data/mockData";

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
            alt="Luxury Estate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="gold-line mb-6" />
            <h1 className="heading-1 text-white mb-6">
              Extraordinary Properties for{" "}
              <span className="text-gradient">Exceptional Lives</span>
            </h1>
            <p className="text-xl text-dark-300 mb-8 max-w-xl">
              Discover Los Angeles&apos; most prestigious homes. From beachfront
              estates to iconic hillside retreats, we curate properties that
              define luxury living.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/listings" className="btn-primary">
                Explore Properties
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>

          {/* Search Bar */}
          <div className="mt-12 max-w-4xl">
            <SearchBar />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-dark-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark-900 border-y border-dark-800">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-dark-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="gold-line mx-auto mb-4" />
            <h2 className="heading-2 text-dark-100 mb-4">Featured Properties</h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Hand-selected homes representing the pinnacle of luxury real estate
              in Los Angeles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.slice(0, 3).map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/listings" className="btn-secondary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="gold-line mb-4" />
              <h2 className="heading-2 text-dark-100 mb-6">
                Why Choose {companyInfo.name}
              </h2>
              <p className="text-dark-300 mb-8">
                For nearly two decades, we have been the trusted partner for
                discerning clients seeking extraordinary properties. Our
                commitment to excellence, discretion, and personalized service
                sets us apart.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Unparalleled Market Access",
                    description:
                      "Exclusive access to off-market properties and pre-market listings.",
                  },
                  {
                    title: "White-Glove Service",
                    description:
                      "Dedicated concierge support throughout your buying or selling journey.",
                  },
                  {
                    title: "Global Network",
                    description:
                      "International reach with connections to qualified buyers worldwide.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-dark-100 font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-dark-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                  alt="Luxury Interior"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="gold-line mx-auto mb-4" />
            <h2 className="heading-2 text-dark-100 mb-4">
              Explore Neighborhoods
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              From the iconic streets of Beverly Hills to the coastal bliss of
              Malibu, discover the neighborhood that fits your lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/listings?neighborhood=${neighborhood.slug}`}
                  className="group block relative aspect-[4/3] overflow-hidden rounded-sm"
                >
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-display font-semibold text-white mb-1 group-hover:text-gold transition-colors">
                      {neighborhood.name}
                    </h3>
                    <p className="text-dark-300 text-sm mb-2">
                      {neighborhood.propertyCount} Properties
                    </p>
                    <p className="text-gold text-sm font-medium">
                      Avg. {neighborhood.averagePrice}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="gold-line mx-auto mb-4" />
            <h2 className="heading-2 text-dark-100 mb-4">Client Testimonials</h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Hear from clients who have trusted us with their most important
              real estate decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Luxury Home"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/80" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto mb-8">
              Let our expert team guide you through the process of finding or
              selling your luxury property.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us Today
              </Link>
              <Link href="/agents" className="btn-secondary">
                Meet Our Agents
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
