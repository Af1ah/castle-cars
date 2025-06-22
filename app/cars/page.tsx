"use client"

import { useState } from "react"
import { CarCard } from "@/components/ui/car-card"
import { CarFilters } from "@/components/car/car-filters"
import { SectionTitle } from "@/components/ui/section-title"

// Mock data for cars with some having optional details
const allCars = [
  {
    id: "bmw-f30-320d-2014",
    title: "BMW F30 320d Luxury Line",
    year: 2014,
    price: 1850000,
    image: "/placeholder.svg?height=300&width=400",
    mileage: 146000,
    transmission: "Automatic",
    make: "BMW",
    featured: true,
  },
  {
    id: "bmw-x5-2023",
    title: "BMW X5 xDrive40i",
    year: 2023,
    price: 6500000,
    image: "/placeholder.svg?height=300&width=400",
    mileage: 15000,
    transmission: "Automatic",
    make: "BMW",
  },
  {
    id: "mercedes-c300-2022",
    title: "Mercedes-Benz C300",
    year: 2022,
    price: 4500000,
    image: "/placeholder.svg?height=300&width=400",
    mileage: 22000,
    transmission: "Automatic",
    make: "Mercedes",
  },
  {
    id: "audi-a4-2023",
    title: "Audi A4 Premium Plus",
    year: 2023,
    price: 4200000,
    image: "/placeholder.svg?height=300&width=400",
    mileage: 18000,
    transmission: "Automatic",
    make: "Audi",
  },
  {
    id: "lexus-rx350-2022",
    title: "Lexus RX 350",
    year: 2022,
    price: 4800000,
    image: "/placeholder.svg?height=300&width=400",
    mileage: 25000,
    transmission: "Automatic",
    make: "Lexus",
  },
  {
    id: "toyota-camry-2023",
    title: "Toyota Camry XLE",
    year: 2023,
    price: 3200000,
    image: "/placeholder.svg?height=300&width=400",
    mileage: 12000,
    transmission: "Automatic",
    make: "Toyota",
  },
]

interface FilterState {
  make: string
  priceRange: string
  year: string
}

export default function CarsPage() {
  const [filteredCars, setFilteredCars] = useState(allCars)

  const handleFilterChange = (filters: FilterState) => {
    let filtered = allCars

    if (filters.make) {
      filtered = filtered.filter((car) => car.make === filters.make)
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number)
      if (max) {
        filtered = filtered.filter((car) => car.price >= min && car.price <= max)
      } else {
        filtered = filtered.filter((car) => car.price >= min)
      }
    }

    if (filters.year) {
      filtered = filtered.filter((car) => car.year.toString() === filters.year)
    }

    setFilteredCars(filtered)
  }

  return (
    <div className="min-h-screen py-20 bg-neutral-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Inventory"
          highlight="Inventory"
          subtitle="Browse our carefully curated selection of premium used vehicles"
          className="mb-12"
        />

        <div className="mb-8">
          <CarFilters onFilterChange={handleFilterChange} />
        </div>

        <div className="mb-6">
          <p className="text-neutral-silver">
            Showing {filteredCars.length} of {allCars.length} vehicles
          </p>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <CarCard key={car.id} {...car} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-silver text-lg mb-4">No vehicles match your current filters.</p>
            <p className="text-neutral-silver">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
