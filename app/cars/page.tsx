"use client";

import { useState } from "react";
import { CarCard } from "@/components/car/car-card";
import { CarFilters } from "@/components/car/car-filters";
import { SectionTitle } from "@/components/ui/section-title";
import { cars } from "@/constants/cars";
import { Car } from "@/types/car";

export default function CarsPage() {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  const handleFilterChange = (filters: { make: string; priceRange: string; year: string; }) => {
    let filtered = cars;

    if (filters.make) {
      filtered = filtered.filter((car) => car.type === filters.make);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (max) {
        filtered = filtered.filter(
          (car) => (car.asking_price_inr ?? 0) >= min && (car.asking_price_inr ?? 0) <= max
        );
      } else {
        filtered = filtered.filter((car) => (car.asking_price_inr ?? 0) >= min);
      }
    }

    if (filters.year) {
      filtered = filtered.filter((car) => car.year.toString() === filters.year);
    }

    setFilteredCars(filtered);
  };

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
            Showing {filteredCars.length} of {cars.length} vehicles
          </p>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <CarCard key={car.slug} car={car} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-silver text-lg mb-4">
              No vehicles match your current filters.
            </p>
            <p className="text-neutral-silver">
              Try adjusting your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
