"use client";

import { motion } from "framer-motion";
import AgentCard from "@/components/AgentCard";
import { agents, companyInfo } from "@/data/mockData";

export default function AgentsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-dark-900 border-b border-dark-800 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="gold-line mb-4" />
            <h1 className="heading-2 text-dark-100 mb-4">Meet Our Team</h1>
            <p className="text-dark-400 text-lg">
              Our experienced agents are dedicated to providing exceptional
              service and expertise. Each member brings unique skills and deep
              market knowledge to help you achieve your real estate goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-dark-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="gold-line mx-auto mb-4" />
              <h2 className="heading-2 text-dark-100 mb-4">Join Our Team</h2>
              <p className="text-dark-400 mb-8">
                Are you a driven real estate professional looking to take your
                career to the next level? {companyInfo.name} is always seeking
                exceptional talent to join our team.
              </p>
              <a
                href={`mailto:${companyInfo.email}?subject=Career Inquiry`}
                className="btn-primary"
              >
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
