"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}
    >
      {subtitle && (
        <p className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3">
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-charcoal-300" : "text-charcoal-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
