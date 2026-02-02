"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface SearchBarProps {
  variant?: "hero" | "compact";
}

export default function SearchBar({ variant = "hero" }: SearchBarProps) {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("neighborhood", location);
    if (propertyType) params.set("type", propertyType);
    if (priceRange) params.set("price", priceRange);
    router.push(`/listings?${params.toString()}`);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSearch} className="flex gap-3">
        <input
          type="text"
          placeholder="Search location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-field flex-1"
        />
        <button type="submit" className="btn-primary">
          Search
        </button>
      </form>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onSubmit={handleSearch}
      className="bg-dark-900/90 backdrop-blur-md border border-dark-700 p-4 md:p-6 rounded-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
        <div>
          <label className="block text-dark-300 text-sm mb-2">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input-field"
          >
            <option value="">All Neighborhoods</option>
            <option value="beverly-hills">Beverly Hills</option>
            <option value="malibu">Malibu</option>
            <option value="bel-air">Bel Air</option>
            <option value="hollywood-hills">Hollywood Hills</option>
            <option value="santa-monica">Santa Monica</option>
            <option value="downtown-la">Downtown LA</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-dark-300 text-sm mb-2">Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="input-field"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="penthouse">Penthouse</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-dark-300 text-sm mb-2">Price Range</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="input-field"
          >
            <option value="">Any Price</option>
            <option value="0-5000000">Under $5M</option>
            <option value="5000000-10000000">$5M - $10M</option>
            <option value="10000000-20000000">$10M - $20M</option>
            <option value="20000000-50000000">$20M - $50M</option>
            <option value="50000000+">$50M+</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button type="submit" className="btn-primary w-full">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Properties
          </button>
        </div>
      </div>
    </motion.form>
  );
}
