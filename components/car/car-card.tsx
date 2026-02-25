"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Car } from "@/types/car"
import { useIntersectionObserver } from "@/lib/animations"

interface CarCardProps {
  car: Car
  index: number
}

export function CarCard({ car, index }: CarCardProps) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`
        bg-neutral-matteBlack rounded-2xl overflow-hidden border border-neutral-darkGray
        hover:border-primary-gold/60 transition-all duration-500 group
        hover:shadow-lg hover:shadow-primary-gold/10 hover:-translate-y-1
        ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={car.images[0] || "/placeholder.svg"}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-matteBlack/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 bg-primary-gold text-neutral-black px-3 py-1 rounded-lg text-sm font-bold shadow-md">
          {car.year}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-white text-lg font-bold group-hover:text-primary-gold transition-colors duration-300">
          {car.title}
        </h3>
        <div className="flex justify-between text-neutral-silver text-sm">
          <span>{car.mileage_km} km</span>
          <span>{car.transmission}</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-neutral-darkGray">
          <span className="text-primary-gold text-xl font-bold">
            {car.asking_price_inr ? formatPrice(car.asking_price_inr) : "Price on request"}
          </span>
          <Link href={`/cars/${car.slug}`}>
            <Button variant="primary" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
