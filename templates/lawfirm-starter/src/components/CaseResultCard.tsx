"use client";

import { motion } from "framer-motion";
import type { CaseResult } from "@/data/mockData";

interface CaseResultCardProps {
  result: CaseResult;
  index: number;
}

export default function CaseResultCard({ result, index }: CaseResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-8 shadow-lg border border-charcoal-100 card-hover"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
          {result.practiceArea}
        </span>
        <span className="text-sm text-charcoal-500">{result.year}</span>
      </div>

      <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">
        {result.title}
      </h3>

      <div className="text-3xl font-bold text-gold-600 mb-4">
        {result.amount}
      </div>

      <p className="text-charcoal-600 leading-relaxed mb-4">
        {result.description}
      </p>

      <p className="text-xs text-charcoal-400 italic border-t border-charcoal-100 pt-4">
        {result.disclaimer}
      </p>
    </motion.div>
  );
}
