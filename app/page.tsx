import { Hero } from "@/components/sections/hero";
import { FeaturedCars } from "@/components/sections/featured-cars";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-neutral-black">
      {/* Hero Section */}
      <Hero />

      {/* Location Banner */}
      <section className="py-4 bg-primary-gold">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-neutral-black">
            <MapPin className="h-5 w-5" />
            <span className="font-medium text-center">Visit our showroom: Vengara, Malappuram, Kerala 676304</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">Open Mon-Sun: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <FeaturedCars />

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-neutral-matteBlack">
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

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
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
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-gold to-primary-goldLight relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-neutral-black">
              Ready to Find Your Perfect Car?
            </h2>
            <p className="text-xl text-neutral-black/80 leading-relaxed">
              Join thousands of satisfied customers across Kerala who found their dream car with Castle Cars
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/cars">
                <CTAButton variant="secondary" size="xl" showArrow>
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

            <div className="pt-8 text-neutral-black/70">
              <p className="text-sm">📍 Vengara, Malappuram, Kerala | 📞 +91 82487 23357 | 📱 @castle_cars_</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
