"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PracticeArea } from "@/data/mockData";

interface PracticeAreaCardProps {
  area: PracticeArea;
  index: number;
}

export default function PracticeAreaCard({
  area,
  index,
}: PracticeAreaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/practice-areas/${area.slug}`}
        className="group block bg-white border border-charcoal-200 rounded-lg p-8 card-hover h-full"
      >
        <div className="text-4xl mb-4">{area.icon}</div>
        <h3 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
          {area.name}
        </h3>
        <p className="text-charcoal-600 leading-relaxed mb-4">
          {area.shortDescription}
        </p>
        <span className="text-gold-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
          Learn More
          <svg
            className="w-4 h-4"
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
        </span>
      </Link>
    </motion.div>
  );
}
