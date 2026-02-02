"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AgentCard from "@/components/AgentCard";
import { agents, stats, companyInfo } from "@/data/mockData";

const values = [
  {
    title: "Excellence",
    description:
      "We pursue excellence in every aspect of our service, from property presentation to client communication.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty, building trust through every interaction.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Discretion",
    description:
      "We understand the importance of privacy and handle all client matters with the utmost confidentiality.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We leverage cutting-edge technology and marketing strategies to achieve exceptional results.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2006", event: "Founded in Beverly Hills" },
  { year: "2010", event: "Expanded to Malibu market" },
  { year: "2014", event: "Reached $250M in total sales" },
  { year: "2018", event: "Opened Bel Air office" },
  { year: "2022", event: "Surpassed $1B in total sales" },
  { year: "2024", event: "Named Top 10 Luxury Agency" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920"
            alt="Luxury Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/80" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="gold-line mb-4" />
            <h1 className="heading-1 text-white mb-6">Our Story</h1>
            <p className="text-xl text-dark-300">
              For nearly two decades, {companyInfo.name} has been synonymous with
              luxury real estate in Los Angeles. Our commitment to excellence
              and personalized service has made us the trusted choice for
              discerning clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-900 border-y border-dark-800 py-12">
        <div className="container-custom">
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

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="gold-line mb-4" />
              <h2 className="heading-2 text-dark-100 mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-dark-300">
                <p>
                  Founded in 2006 by a team of visionary real estate
                  professionals, {companyInfo.name} was born from a simple
                  belief: that buying or selling a luxury home should be an
                  exceptional experience.
                </p>
                <p>
                  From our beginnings in a boutique Beverly Hills office,
                  we have grown to become one of the most respected names in
                  luxury real estate. Our success is built on a foundation of
                  deep market knowledge, unwavering integrity, and a genuine
                  passion for helping clients find their perfect home.
                </p>
                <p>
                  Today, our team of elite agents represents over $1.2 billion in
                  total sales, with a portfolio that includes some of the most
                  desirable properties in Los Angeles.
                </p>
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
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                  alt="Luxury Estate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark-900 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="gold-line mx-auto mb-4" />
            <h2 className="heading-2 text-dark-100 mb-4">Our Values</h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              These core values guide everything we do and define who we are as
              a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-dark-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="gold-line mx-auto mb-4" />
            <h2 className="heading-2 text-dark-100 mb-4">Our Journey</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-800 -translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="text-gold font-display font-bold text-xl">
                      {milestone.year}
                    </span>
                    <p className="text-dark-300 mt-1">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-dark-900 section-padding" id="team">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="gold-line mx-auto mb-4" />
            <h2 className="heading-2 text-dark-100 mb-4">Meet Our Team</h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Our team of elite agents brings together decades of experience and
              a shared passion for exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/agents" className="btn-secondary">
              View All Agents
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12 text-center"
          >
            <h2 className="heading-3 text-dark-100 mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto mb-8">
              Whether you are buying, selling, or simply exploring the market,
              our team is here to provide the exceptional service you deserve.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
