"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CTAButton } from "@/components/ui/cta-button"
import { MapPin, Instagram, Phone, ArrowRight } from "lucide-react"

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
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
        {/* Simple overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Premium <span className="text-primary-gold">Used Cars</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-silver max-w-2xl mx-auto">
            Quality pre-owned vehicles in Kerala. Trusted by thousands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/cars">
              <CTAButton 
                variant="primary" 
                size="lg"
                className="group hover:scale-105 transition-transform duration-200"
              >
                View Inventory
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </CTAButton>
            </Link>
            <Link href="/sell">
              <CTAButton 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform duration-200"
              >
                Sell Your Car
              </CTAButton>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-sm">
            <a
              href="tel:+918248723357"
              className="flex items-center gap-2 text-neutral-silver hover:text-white transition-colors duration-200 group"
            >
              <Phone className="h-4 w-4" />
              <span>+91 82487 23357</span>
            </a>
            
            <div className="hidden sm:block w-px h-4 bg-neutral-mediumGray" />
            
            <div className="flex items-center gap-2 text-neutral-silver">
              <MapPin className="h-4 w-4" />
              <span>Vengara, Malappuram</span>
            </div>
            
            <div className="hidden sm:block w-px h-4 bg-neutral-mediumGray" />
            
            <a
              href="https://www.instagram.com/castle_cars_?igsh=MXZlc3p6b2w0NjB0eA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-silver hover:text-primary-gold transition-colors duration-200 group"
            >
              <Instagram className="h-4 w-4" />
              <span>111K+ Followers</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards - Minimal */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
        <div className={`
          flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20
          transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}
        `}>
          <div className="text-center">
            <div className="text-xl font-semibold text-primary-gold">500+</div>
            <div className="text-xs text-neutral-silver">Cars Sold</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-xl font-semibold text-primary-gold">5★</div>
            <div className="text-xs text-neutral-silver">Rating</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-xl font-semibold text-primary-gold">111K+</div>
            <div className="text-xs text-neutral-silver">Followers</div>
          </div>
        </div>
      </div>
    </section>
  )
}