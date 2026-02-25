"use client"

import { useIntersectionObserver } from "@/lib/animations"
import { Award, Users, Star, MapPin } from "lucide-react"

const whyChooseUsItems = [
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every vehicle undergoes rigorous 150-point inspection before listing",
    color: "text-primary-gold",
    bgColor: "bg-primary-gold/10",
    borderColor: "group-hover:border-primary-gold/40",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "179K+ satisfied customers across Kerala trust us for quality",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "group-hover:border-blue-400/40",
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Exceptional customer service in Malayalam & English",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "group-hover:border-yellow-400/40",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep understanding of Kerala's automotive market trends",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "group-hover:border-green-400/40",
  },
]

function WhyChooseUsCard({
  item,
  index,
}: {
  item: (typeof whyChooseUsItems)[0]
  index: number
}) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`
        group text-center p-8 rounded-2xl bg-neutral-darkGray/50 border border-neutral-mediumGray/50
        hover:border-primary-gold/30 transition-all duration-500 hover:-translate-y-2
        hover:shadow-xl hover:shadow-black/20
        ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className={`
          inline-flex items-center justify-center w-16 h-16 rounded-2xl ${item.bgColor}
          mb-6 group-hover:scale-110 transition-all duration-300
        `}
      >
        <item.icon className={`h-8 w-8 ${item.color}`} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-gold transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-neutral-silver leading-relaxed text-sm">
        {item.description}
      </p>
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
