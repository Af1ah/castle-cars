import type React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Loader2 } from "lucide-react"
import { forwardRef } from "react"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  loading?: boolean
  icon?: React.ReactNode
  showArrow?: boolean
  fullWidth?: boolean
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      showArrow = false,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-black disabled:opacity-50 disabled:cursor-not-allowed group"

    const variants = {
      primary:
        "bg-primary-gold text-neutral-black hover:bg-primary-goldLight hover:shadow-lg hover:shadow-primary-gold/25 focus:ring-primary-gold",
      secondary:
        "bg-neutral-matteBlack text-white border border-neutral-mediumGray hover:bg-neutral-darkGray hover:border-neutral-lightGray focus:ring-neutral-lightGray",
      outline:
        "border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-neutral-black focus:ring-primary-gold",
      ghost: "text-neutral-silver hover:text-white hover:bg-neutral-matteBlack focus:ring-neutral-lightGray",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-base rounded-xl",
      lg: "px-8 py-4 text-lg rounded-xl",
      xl: "px-10 py-5 text-xl rounded-2xl",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], fullWidth && "w-full", className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {!loading && icon && <span className="mr-2">{icon}</span>}
        {children}
        {!loading && showArrow && (
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    )
  },
)

CTAButton.displayName = "CTAButton"

export { CTAButton }
