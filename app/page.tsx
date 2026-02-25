import { Hero } from "@/components/sections/hero"
import { FeaturedCars } from "@/components/sections/featured-cars"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { CTAButton } from "@/components/ui/cta-button"
import { SectionTitle } from "@/components/ui/section-title"
import Link from "next/link"
import { MapPin, Phone, Instagram, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <main className="bg-neutral-black">
      {/* Hero Section */}
      <Hero />

      {/* Location Banner */}
      <section className="py-4 bg-primary-gold">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-neutral-black">
            <MapPin className="h-5 w-5 animate-pulse-subtle" />
            <span className="font-medium text-center">
              Visit our showroom: Vengara, Malappuram, Kerala 676304
            </span>
            <span className="hidden md:inline text-neutral-black/40">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Open Mon-Sun: 9:00 AM - 8:00 PM
            </span>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <FeaturedCars />

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="section-divider" />
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-neutral-matteBlack">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Castle Cars"
            highlight="Castle"
            subtitle="Kerala's most trusted automotive partner with a proven track record"
            className="mb-16"
          />
          <WhyChooseUsSection />
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="section-divider" />
      </div>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What Our Customers Say"
            highlight="Customers"
            subtitle="Real reviews from satisfied customers across Kerala"
            className="mb-16"
          />
          <TestimonialsSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-gold via-primary-goldLight to-primary-gold relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-neutral-black leading-tight">
              Ready to Find Your
              <br />
              <span className="text-neutral-black/80">Perfect Car?</span>
            </h2>
            <p className="text-xl text-neutral-black/70 leading-relaxed max-w-2xl mx-auto">
              Join thousands of satisfied customers across Kerala who found
              their dream car with Castle Cars
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/cars">
                <CTAButton
                  variant="secondary"
                  size="xl"
                  showArrow
                  className="shadow-xl"
                >
                  Browse Cars
                </CTAButton>
              </Link>
              <Link href="/contact">
                <CTAButton
                  variant="outline"
                  size="xl"
                  className="border-neutral-black text-neutral-black hover:bg-neutral-black hover:text-primary-gold"
                >
                  Visit Showroom
                </CTAButton>
              </Link>
            </div>

            {/* Contact info with proper icons */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-neutral-black/60">
              <span className="flex items-center gap-1.5 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                Vengara, Malappuram, Kerala
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <Phone className="h-3.5 w-3.5" />
                +91 82487 23357
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <Instagram className="h-3.5 w-3.5" />
                @castle_cars_
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
