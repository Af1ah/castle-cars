"use client"

import { cn } from "@/lib/utils"
import { useIntersectionObserver } from "@/lib/animations"

interface SectionTitleProps {
  title: string
  subtitle?: string
  highlight?: string
  className?: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, highlight, className, centered = true }: SectionTitleProps) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        centered && "text-center",
        className,
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4 text-white leading-tight">
        {title.split(" ").map((word, index) => (
          <span key={index}>{word === highlight ? <span className="text-primary-gold">{word}</span> : word} </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-neutral-silver max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
