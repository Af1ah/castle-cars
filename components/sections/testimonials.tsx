"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useIntersectionObserver } from "@/lib/animations"

const testimonialsData = [
  {
    name: "Rajesh Kumar",
    location: "Kozhikode",
    text: "Excellent service and quality cars. Found my dream BMW here! The team was very professional.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Priya Nair",
    location: "Malappuram",
    text: "Very professional team. They helped me sell my car at a great price. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Mohammed Ali",
    location: "Calicut",
    text: "Best car dealership in Kerala. Transparent pricing and excellent after-sales support.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonialsData)[0]; index: number }) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`
        bg-neutral-matteBlack rounded-2xl p-8 border border-neutral-darkGray hover:border-primary-gold 
        transition-all duration-500 group transform
        ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary-gold text-primary-gold" />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-neutral-silver mb-6 leading-relaxed italic">"{testimonial.text}"</blockquote>

      {/* Customer Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.image || "/placeholder.svg?height=60&width=60"}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-neutral-silver text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} index={index} />
      ))}
    </div>
  )
}
