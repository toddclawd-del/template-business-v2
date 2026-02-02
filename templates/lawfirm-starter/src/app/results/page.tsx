"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CaseResultCard from "@/components/CaseResultCard";
import { caseResults } from "@/data/mockData";

export default function ResultsPage() {
  // Group results by practice area
  const resultsByArea = caseResults.reduce(
    (acc, result) => {
      const area = result.practiceArea;
      if (!acc[area]) {
        acc[area] = [];
      }
      acc[area].push(result);
      return acc;
    },
    {} as Record<string, typeof caseResults>
  );

  // Calculate total recovered
  const totalRecovered = caseResults.reduce((sum, result) => {
    const match = result.amount.match(/\$([0-9,]+)/);
    if (match) {
      return sum + parseInt(match[1].replace(/,/g, ""));
    }
    return sum;
  }, 0);

  return (
    <>
      <PageHero
        title="Case Results"
        subtitle="A track record of success for our clients"
        breadcrumbs={[{ label: "Results", href: "/results" }]}
      />

      {/* Stats Section */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                value: `$${Math.floor(totalRecovered / 1000000)}M+`,
                label: "Total Recovered",
              },
              { value: "5,000+", label: "Cases Won" },
              { value: "98%", label: "Success Rate" },
              { value: "40+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-charcoal-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="bg-gold-50 border-y border-gold-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-center text-charcoal-700 text-sm">
            <strong className="text-navy-900">Important Notice:</strong> The
            case results shown on this page are examples of past successes. Past
            results do not guarantee future outcomes. Each case is unique and
            must be evaluated on its own facts and circumstances.
          </p>
        </div>
      </section>

      {/* All Results */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Recent Verdicts &amp; Settlements
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Our attorneys have achieved significant results for clients across
              all practice areas. Here are some of our notable successes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseResults.map((result, index) => (
              <CaseResultCard key={result.id} result={result} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* By Practice Area */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Results by Practice Area
            </h2>
          </div>

          <div className="space-y-12">
            {Object.entries(resultsByArea).map(([area, results]) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6 border-b border-charcoal-200 pb-4">
                  {area}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-navy-900">
                          {result.title}
                        </h4>
                        <span className="text-lg font-bold text-gold-600">
                          {result.amount}
                        </span>
                      </div>
                      <p className="text-charcoal-600 text-sm">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
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
              Let Us Fight for Your Results
            </h2>
            <p className="text-xl text-charcoal-300 mb-8">
              Every case matters to us. Contact us today to discuss how we can
              help you achieve the best possible outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded font-semibold text-lg transition-all hover:shadow-lg hover:shadow-gold-500/25"
              >
                Get Your Free Consultation
              </Link>
              <a
                href="tel:+15551234567"
                className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 px-8 py-4 rounded font-semibold text-lg transition-all"
              >
                Call (555) 123-4567
              </a>
            </div>
            <p className="text-charcoal-500 text-sm mt-6 italic">
              Past results do not guarantee future outcomes.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
