"use client"

import { Star, Quote } from "lucide-react"
import { useIntersectionObserver } from "@/lib/animations"

const testimonialsData = [
  {
    name: "Rajesh Kumar",
    location: "Kozhikode",
    text: "Excellent service and quality cars. Found my dream BMW here! The team was very professional and transparent throughout.",
    rating: 5,
    initials: "RK",
    color: "bg-blue-500",
  },
  {
    name: "Priya Nair",
    location: "Malappuram",
    text: "Very professional team. They helped me sell my car at a great price. Highly recommended for anyone in Kerala!",
    rating: 5,
    initials: "PN",
    color: "bg-purple-500",
  },
  {
    name: "Mohammed Ali",
    location: "Calicut",
    text: "Best car dealership in Kerala. Transparent pricing and excellent after-sales support. Will definitely return.",
    rating: 5,
    initials: "MA",
    color: "bg-emerald-500",
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonialsData)[0]
  index: number
}) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`
        relative bg-neutral-matteBlack rounded-2xl p-8 border border-neutral-darkGray
        hover:border-primary-gold/40 transition-all duration-500 group
        hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-gold/5
        ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-neutral-darkGray group-hover:text-primary-gold/20 transition-colors duration-500">
        <Quote className="h-8 w-8" />
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-primary-gold text-primary-gold"
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-neutral-silver mb-8 leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Customer Info with Initial Avatar */}
      <div className="flex items-center gap-4 pt-4 border-t border-neutral-darkGray">
        <div
          className={`
            w-11 h-11 rounded-full ${testimonial.color} flex items-center justify-center
            text-white font-semibold text-sm shadow-md
          `}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">
            {testimonial.name}
          </p>
          <p className="text-neutral-silver text-xs">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          testimonial={testimonial}
          index={index}
        />
      ))}
    </div>
  )
}
