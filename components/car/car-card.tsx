import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"

interface CarCardProps {
  id: string
  title: string
  year: number
  price: number
  image: string
  mileage: number
  transmission: string
}

export function CarCard({ id, title, year, price, image, mileage, transmission }: CarCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#20364b] hover:border-[#C4A750] transition-colors group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-[#C4A750] text-black px-2 py-1 rounded-lg text-sm font-bold">
          {year}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <div className="flex justify-between text-[#8daece] text-sm mb-4">
          <span>{mileage.toLocaleString()} miles</span>
          <span>{transmission}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#C4A750] text-xl font-bold">{formatPrice(price)}</span>
          <Link href={`/cars/${id}`}>
            <Button variant="primary" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
