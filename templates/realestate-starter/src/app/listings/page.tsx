"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/mockData";

type SortOption = "newest" | "price-asc" | "price-desc" | "sqft";
type PropertyTypeFilter = "" | "house" | "condo" | "penthouse" | "villa";
type StatusFilter = "" | "available" | "pending" | "sold";

export default function ListingsPage() {
  const [search, setSearch] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyTypeFilter>("");
  const [priceRange, setPriceRange] = useState("");
  const [status, setStatus] = useState<StatusFilter>("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.address.toLowerCase().includes(searchLower) ||
          p.neighborhood.toLowerCase().includes(searchLower)
      );
    }

    // Neighborhood filter
    if (neighborhood) {
      result = result.filter(
        (p) => p.neighborhood.toLowerCase().replace(/\s+/g, "-") === neighborhood
      );
    }

    // Property type filter
    if (propertyType) {
      result = result.filter((p) => p.propertyType === propertyType);
    }

    // Status filter
    if (status) {
      result = result.filter((p) => p.status === status);
    }

    // Price range filter
    if (priceRange) {
      const [min, max] = priceRange.split("-").map((v) => {
        if (v.endsWith("+")) return Infinity;
        return parseInt(v);
      });
      result = result.filter((p) => p.price >= min && p.price <= (max || Infinity));
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "sqft":
        result.sort((a, b) => b.sqft - a.sqft);
        break;
      default:
        result.sort((a, b) => b.yearBuilt - a.yearBuilt);
    }

    return result;
  }, [search, neighborhood, propertyType, priceRange, status, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setNeighborhood("");
    setPropertyType("");
    setPriceRange("");
    setStatus("");
    setSortBy("newest");
  };

  const hasActiveFilters =
    search || neighborhood || propertyType || priceRange || status;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-dark-900 border-b border-dark-800 py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="gold-line mb-4" />
            <h1 className="heading-2 text-dark-100 mb-4">Property Listings</h1>
            <p className="text-dark-400 max-w-2xl">
              Browse our curated collection of luxury properties across Los
              Angeles&apos; most prestigious neighborhoods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-dark-950 border-b border-dark-800 py-6 sticky top-20 z-40">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="col-span-2 md:col-span-1">
              <input
                type="text"
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field"
              />
            </div>

            {/* Neighborhood */}
            <select
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
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

            {/* Property Type */}
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value as PropertyTypeFilter)}
              className="input-field"
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="penthouse">Penthouse</option>
              <option value="villa">Villa</option>
            </select>

            {/* Price Range */}
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
              <option value="50000000-+">$50M+</option>
            </select>

            {/* Status */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as StatusFilter)}
              className="input-field"
            >
              <option value="">All Status</option>
              <option value="available">Available</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="input-field"
            >
              <option value="newest">Newest</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="sqft">Square Feet</option>
            </select>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-4 mt-4">
              <span className="text-dark-400 text-sm">Active Filters:</span>
              <button
                onClick={clearFilters}
                className="text-gold text-sm hover:underline"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-dark-400">
              Showing{" "}
              <span className="text-dark-100 font-semibold">
                {filteredProperties.length}
              </span>{" "}
              {filteredProperties.length === 1 ? "property" : "properties"}
            </p>
          </div>

          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dark-800 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-dark-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-200 mb-2">
                No properties found
              </h3>
              <p className="text-dark-400 mb-6">
                Try adjusting your filters to see more results.
              </p>
              <button onClick={clearFilters} className="btn-secondary">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
