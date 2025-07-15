import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Car } from "@/types/car"

interface CarCardProps {
  car: Car;
  index: number;
}

export function CarCard({ car, index }: CarCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#20364b] hover:border-[#C4A750] transition-colors group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car.images[0] || "/placeholder.svg"}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-[#C4A750] text-black px-2 py-1 rounded-lg text-sm font-bold">
          {car.year}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white text-lg font-bold mb-2">{car.title}</h3>
        <div className="flex justify-between text-[#8daece] text-sm mb-4">
          <span>{car.mileage_km} km</span>
          <span>{car.transmission}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#C4A750] text-xl font-bold">
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
