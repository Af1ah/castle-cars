"use client"

import Image from "next/image"
import Link from "next/link"
import { CTAButton } from "./cta-button"
import { formatPrice } from "@/lib/utils"
import { useIntersectionObserver } from "@/lib/animations"
import { Calendar, Gauge, Cog, MapPin } from "lucide-react"

interface CarCardProps {
  id: string
  title: string
  year: number
  price: number
  image: string
  mileage: number
  transmission: string
  location?: string
  featured?: boolean
  index?: number
}

export function CarCard({
  id,
  title,
  year,
  price,
  image,
  mileage,
  transmission,
  location = "Kerala",
  featured = false,
  index = 0,
}: CarCardProps) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`
        group relative bg-neutral-matteBlack rounded-2xl overflow-hidden border border-neutral-darkGray
        hover:border-primary-gold hover:shadow-2xl hover:shadow-primary-gold/10
        transition-all duration-500 ease-out transform
        ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        ${featured ? "ring-2 ring-primary-gold ring-opacity-50" : ""}
      `}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-primary-gold text-neutral-black px-3 py-1 rounded-full text-sm font-bold">
          {year}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-gold to-primary-goldLight text-neutral-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Price */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-gold transition-colors duration-300">
            {title}
          </h3>
          <div className="text-2xl font-bold text-primary-gold">{formatPrice(price)}</div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-neutral-silver">
            <Gauge className="w-4 h-4 text-primary-gold" />
            <span>{mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-silver">
            <Cog className="w-4 h-4 text-primary-gold" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-silver">
            <Calendar className="w-4 h-4 text-primary-gold" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-silver">
            <MapPin className="w-4 h-4 text-primary-gold" />
            <span>{location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/cars/${id}`} className="block">
          <CTAButton variant="outline" size="md" fullWidth showArrow className="mt-4">
            View Details
          </CTAButton>
        </Link>
      </div>
    </div>
  )
}
