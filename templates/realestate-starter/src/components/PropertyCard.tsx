"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Property, formatPrice, getAgentById } from "@/data/mockData";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const agent = getAgentById(property.agentId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/listings/${property.slug}`} className="group block card card-hover">
        {/* Image */}
        <div className="relative aspect-property overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="overlay-gradient" />
          
          {/* Status Badge */}
          {property.status !== "available" && (
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                property.status === "pending" 
                  ? "bg-amber-500/90 text-dark-950" 
                  : "bg-dark-700/90 text-dark-200"
              }`}>
                {property.status}
              </span>
            </div>
          )}
          
          {/* Featured Badge */}
          {property.featured && property.status === "available" && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold text-dark-950">
                Featured
              </span>
            </div>
          )}

          {/* Price */}
          <div className="absolute bottom-4 left-4">
            <p className="text-2xl font-display font-bold text-white">
              {formatPrice(property.price)}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-dark-100 group-hover:text-gold transition-colors mb-1">
            {property.title}
          </h3>
          <p className="text-dark-400 text-sm mb-4">{property.address}</p>
          
          {/* Stats */}
          <div className="flex items-center gap-4 text-dark-300 text-sm">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>

          {/* Agent */}
          {agent && (
            <div className="mt-4 pt-4 border-t border-dark-800 flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-dark-400 text-sm">{agent.name}</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
