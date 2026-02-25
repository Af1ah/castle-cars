"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CTAButton } from "@/components/ui/cta-button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Full-page background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="images\hero-car-background.webp"
          alt="Premium used cars showroom"
          fill
          className="object-cover"
          priority
          quality={95}
          onLoad={() => setImageLoaded(true)}
        />
        {/* 30% dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content — left aligned at bottom */}
      <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-28">
        <div className="max-w-xl space-y-5">

          {/* Small Label */}
          <p className="animate-fade-up-1 text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/60 font-medium">
            Trusted Pre-Owned Vehicles in Kerala
          </p>

          {/* Main Title */}
          <div className="animate-fade-up-2 space-y-1">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Bierika', sans-serif" }}
            >
              PREMIUM
            </h1>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-gold leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Bierika', sans-serif" }}
            >
              Used Cars
            </h1>
          </div>

          {/* Description */}
          <p className="animate-fade-up-3 text-sm md:text-[15px] text-white/70 leading-relaxed max-w-sm">
            Quality inspected vehicles with transparent pricing.
            Drive with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-4 flex flex-row gap-3 pt-1">
            <Link href="/cars">
              <CTAButton
                variant="primary"
                size="md"
                className="group hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:shadow-primary-gold/15"
              >
                View Inventory
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </CTAButton>
            </Link>
            <Link href="/sell">
              <CTAButton
                variant="outline"
                size="md"
                className="hover:-translate-y-1 transition-all duration-200"
              >
                Sell Your Car
              </CTAButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}