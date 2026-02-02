"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import ContactForm from "@/components/ContactForm";
import { Property, Agent, formatPrice } from "@/data/mockData";

interface ListingDetailClientProps {
  property: Property;
  agent: Agent | undefined;
}

export default function ListingDetailClient({
  property,
  agent,
}: ListingDetailClientProps) {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-dark-900 border-b border-dark-800 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-dark-400 hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-dark-600">/</span>
            <Link
              href="/listings"
              className="text-dark-400 hover:text-gold transition-colors"
            >
              Listings
            </Link>
            <span className="text-dark-600">/</span>
            <span className="text-dark-200">{property.title}</span>
          </nav>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-8">
        <div className="container-custom">
          <ImageGallery images={property.images} title={property.title} />
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    {property.status !== "available" && (
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 ${
                          property.status === "pending"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-dark-700 text-dark-300"
                        }`}
                      >
                        {property.status}
                      </span>
                    )}
                    <h1 className="heading-2 text-dark-100">{property.title}</h1>
                    <p className="text-dark-400 mt-2">{property.address}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-display font-bold text-gradient">
                      {formatPrice(property.price)}
                    </p>
                    <p className="text-dark-400 text-sm mt-1">
                      ${(property.price / property.sqft).toFixed(0)}/sqft
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 py-6 border-y border-dark-800">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    <span className="text-dark-200">
                      {property.bedrooms} Bedrooms
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="text-dark-200">
                      {property.bathrooms} Bathrooms
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    <span className="text-dark-200">
                      {property.sqft.toLocaleString()} sqft
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-dark-200">Built {property.yearBuilt}</span>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card p-6"
              >
                <h2 className="heading-3 text-dark-100 mb-4">About This Property</h2>
                <p className="text-dark-300 leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card p-6"
              >
                <h2 className="heading-3 text-dark-100 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gold flex-shrink-0"
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
                      <span className="text-dark-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Property Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card p-6"
              >
                <h2 className="heading-3 text-dark-100 mb-4">Property Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between py-3 border-b border-dark-800">
                    <span className="text-dark-400">Property Type</span>
                    <span className="text-dark-200 capitalize">
                      {property.propertyType}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-dark-800">
                    <span className="text-dark-400">Year Built</span>
                    <span className="text-dark-200">{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-dark-800">
                    <span className="text-dark-400">Neighborhood</span>
                    <span className="text-dark-200">{property.neighborhood}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-dark-800">
                    <span className="text-dark-400">Listing Type</span>
                    <span className="text-dark-200 capitalize">{property.type}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ContactForm
                  propertyTitle={property.title}
                  agentName={agent?.name}
                />
              </motion.div>

              {/* Agent Card */}
              {agent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="card p-6"
                >
                  <h3 className="text-sm text-dark-400 uppercase tracking-wider mb-4">
                    Listed By
                  </h3>
                  <Link
                    href={`/agents/${agent.slug}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-dark-100 font-semibold group-hover:text-gold transition-colors">
                        {agent.name}
                      </p>
                      <p className="text-gold text-sm">{agent.title}</p>
                    </div>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-dark-800 space-y-2 text-sm">
                    <p className="text-dark-300">{agent.phone}</p>
                    <p className="text-dark-400">{agent.email}</p>
                  </div>
                </motion.div>
              )}

              {/* Share */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card p-6"
              >
                <h3 className="text-sm text-dark-400 uppercase tracking-wider mb-4">
                  Share This Property
                </h3>
                <div className="flex gap-3">
                  <button className="flex-1 btn-ghost border border-dark-700 hover:border-gold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </button>
                  <button className="flex-1 btn-ghost border border-dark-700 hover:border-gold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button className="flex-1 btn-ghost border border-dark-700 hover:border-gold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
