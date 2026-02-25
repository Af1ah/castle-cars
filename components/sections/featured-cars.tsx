import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CarCard } from "@/components/car/car-card"
import { SectionTitle } from "@/components/ui/section-title"
import { cars } from "@/constants/cars"
import { Car } from "@/types/car"

export function FeaturedCars() {
  const featuredCars = cars.slice(0, 3)

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Cars"
          highlight="Featured"
          subtitle="Handpicked premium vehicles ready for you"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car: Car, index: number) => (
            <CarCard key={car.slug} car={car} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-primary-gold hover:text-primary-goldLight font-medium transition-colors duration-300 group"
          >
            View All Cars
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}