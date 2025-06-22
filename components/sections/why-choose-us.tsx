"use client"

import { useIntersectionObserver } from "@/lib/animations"
import { Award, Users, Star, MapPin } from "lucide-react"

const whyChooseUsItems = [
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every vehicle undergoes rigorous 150-point inspection",
    color: "text-primary-gold",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "111K+ satisfied customers across Kerala",
    color: "text-blue-400",
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Exceptional customer service in Malayalam & English",
    color: "text-yellow-400",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep understanding of Kerala automotive market",
    color: "text-green-400",
  },
]

function WhyChooseUsCard({ item, index }: { item: (typeof whyChooseUsItems)[0]; index: number }) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`
        group text-center p-8 rounded-2xl bg-neutral-darkGray/50 border border-neutral-mediumGray 
        hover:border-primary-gold transition-all duration-500 hover:transform hover:scale-105
        ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-darkGray mb-6 group-hover:scale-110 transition-transform duration-300">
        <item.icon className={`h-8 w-8 ${item.color}`} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-gold transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-neutral-silver leading-relaxed">{item.description}</p>
    </div>
  )
}

export function WhyChooseUsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {whyChooseUsItems.map((item, index) => (
        <WhyChooseUsCard key={index} item={item} index={index} />
      ))}
    </div>
  )
}
