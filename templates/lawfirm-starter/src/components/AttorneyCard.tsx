"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Attorney } from "@/data/mockData";
import { practiceAreas } from "@/data/mockData";

interface AttorneyCardProps {
  attorney: Attorney;
  index: number;
}

export default function AttorneyCard({ attorney, index }: AttorneyCardProps) {
  const areas = practiceAreas.filter((area) =>
    attorney.practiceAreas.includes(area.slug)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/attorneys/${attorney.slug}`}
        className="group block bg-white rounded-lg overflow-hidden shadow-lg card-hover"
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src={attorney.photo}
            alt={attorney.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-serif font-bold text-white mb-1">
              {attorney.name}
            </h3>
            <p className="text-gold-400 font-medium text-sm">{attorney.title}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {areas.slice(0, 2).map((area) => (
              <span
                key={area.id}
                className="text-xs bg-navy-100 text-navy-700 px-3 py-1 rounded-full"
              >
                {area.name}
              </span>
            ))}
          </div>
          <p className="text-charcoal-600 text-sm line-clamp-3">
            {attorney.bio.split(". ").slice(0, 2).join(". ")}.
          </p>
          <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
            View Profile
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
        </div>
      </Link>
    </motion.div>
  );
}
