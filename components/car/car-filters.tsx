"use client"

import { useState } from "react"
import { CTAButton } from "@/components/ui/cta-button"

interface CarFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

interface FilterState {
  make: string
  priceRange: string
  year: string
}

export function CarFilters({ onFilterChange }: CarFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    make: "",
    priceRange: "",
    year: "",
  })

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = { make: "", priceRange: "", year: "" }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  return (
    <div className="bg-neutral-matteBlack rounded-xl p-6 border border-neutral-darkGray">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-lg font-bold">Filter Cars</h3>
        <CTAButton variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </CTAButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-neutral-silver text-sm mb-2">Make</label>
          <select
            className="w-full bg-neutral-darkGray text-white rounded-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-primary-gold"
            value={filters.make}
            onChange={(e) => handleFilterChange("make", e.target.value)}
          >
            <option value="">All Makes</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
            <option value="Lexus">Lexus</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>

        <div>
          <label className="block text-neutral-silver text-sm mb-2">Price Range</label>
          <select
            className="w-full bg-neutral-darkGray text-white rounded-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-primary-gold"
            value={filters.priceRange}
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="0-2500000">Under ₹25 Lakh</option>
            <option value="2500000-5000000">₹25L - ₹50L</option>
            <option value="5000000-10000000">₹50L - ₹1Cr</option>
            <option value="10000000">₹1Cr+</option>
          </select>
        </div>

        <div>
          <label className="block text-neutral-silver text-sm mb-2">Year</label>
          <select
            className="w-full bg-neutral-darkGray text-white rounded-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-primary-gold"
            value={filters.year}
            onChange={(e) => handleFilterChange("year", e.target.value)}
          >
            <option value="">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
    </div>
  )
}
