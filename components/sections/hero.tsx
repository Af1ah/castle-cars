"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CTAButton } from "@/components/ui/cta-button"
import { useScrollAnimation } from "@/lib/animations"
import { Star, MapPin, Instagram, Phone, ArrowDown, Users, Award, TrendingUp } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const scrollY = useScrollAnimation()

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { icon: Instagram, value: "111K+", label: "Followers" },
    { icon: Users, value: "500+", label: "Cars Sold" },
    { icon: Award, value: "5★", label: "Rating" },
    { icon: TrendingUp, value: "Kerala", label: "Based" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: mounted ? `translateY(${scrollY * 0.5}px)` : "none",
        }}
      >
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Luxury cars showroom in Kerala"
          fill
          className="object-cover scale-110"
          priority
          quality={90}
        />
        {/* Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      {/* Floating Location Badge */}
      <div className="absolute top-24 right-8 hidden lg:block z-20">
        <div className="glassmorphism rounded-2xl p-4 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary-gold" />
            <div>
              <p className="text-white text-sm font-medium">Located in</p>
              <p className="text-primary-gold text-xs font-semibold">Vengara, Malappuram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Social Proof */}
      <div className="absolute top-40 left-8 hidden lg:block z-20">
        <div className="glassmorphism rounded-2xl p-4 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <Instagram className="h-5 w-5 text-primary-gold" />
            <div>
              <p className="text-white text-sm font-medium">Follow Us</p>
              <p className="text-primary-gold text-xs font-semibold">111K+ Followers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Trust Badge */}
          <div
            className={`
              inline-flex items-center gap-2 bg-primary-gold/10 border border-primary-gold/30 
              rounded-full px-6 py-3 backdrop-blur-sm transition-all duration-1000 ease-out
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <Star className="h-4 w-4 text-primary-gold fill-current" />
            <span className="text-primary-gold text-sm font-semibold tracking-wide">
              Kerala's Most Trusted Car Dealership
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1
              className={`
                text-5xl md:text-7xl lg:text-8xl font-bold font-poppins leading-tight
                transition-all duration-1000 ease-out delay-200
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              <span className="text-white">Premium </span>
              <span className="text-primary-gold">Used Cars</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-neutral-silver font-normal">in Kerala</span>
            </h1>

            <p
              className={`
                text-xl md:text-2xl text-neutral-silver max-w-4xl mx-auto leading-relaxed
                transition-all duration-1000 ease-out delay-400
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              Discover quality vehicles in <span className="text-white font-semibold">Vengara, Malappuram</span>.
              <br className="hidden md:block" />
              Backed by our 111K+ Instagram community and years of trusted service.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-col sm:flex-row gap-4 justify-center items-center
              transition-all duration-1000 ease-out delay-600
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <Link href="/cars">
              <CTAButton variant="primary" size="xl" showArrow>
                Browse Our Inventory
              </CTAButton>
            </Link>
            <Link href="/sell">
              <CTAButton variant="outline" size="xl">
                Sell Your Car
              </CTAButton>
            </Link>
          </div>

          {/* Quick Contact */}
          <div
            className={`
              flex flex-col sm:flex-row items-center justify-center gap-6 text-sm
              transition-all duration-1000 ease-out delay-800
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <a
              href="tel:+918248723357"
              className="flex items-center gap-2 text-neutral-silver hover:text-primary-gold transition-colors duration-300 group"
            >
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>+91 82487 23357</span>
            </a>
            <div className="hidden sm:block w-px h-4 bg-neutral-mediumGray" />
            <a
              href="https://www.instagram.com/castle_cars_?igsh=MXZlc3p6b2w0NjB0eA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-silver hover:text-primary-gold transition-colors duration-300 group"
            >
              <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>@castle_cars_</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div
          className={`
            flex items-center gap-8 glassmorphism rounded-2xl px-8 py-6 
            transition-all duration-1000 ease-out delay-1000
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="h-5 w-5 text-primary-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-2xl font-bold text-primary-gold">{stat.value}</div>
              <div className="text-xs text-neutral-silver">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`
          absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10
          transition-all duration-1000 ease-out delay-1200
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-neutral-silver text-xs uppercase tracking-wide">Scroll</span>
          <ArrowDown className="h-4 w-4 text-primary-gold" />
        </div>
      </div>
    </section>
  )
}
