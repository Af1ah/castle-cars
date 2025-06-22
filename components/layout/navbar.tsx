"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CTAButton } from "@/components/ui/cta-button"
import { Menu, X, Car, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Inventory" },
    { href: "/car-care", label: "Car Care" },
    { href: "/sell", label: "Sell Car" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-neutral-black/95 backdrop-blur-md border-b border-neutral-darkGray shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white hover:text-primary-gold transition-colors duration-300 group"
          >
            <div className="relative">
              <Car className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary-gold/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold font-poppins">Castle Cars</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-silver hover:text-primary-gold transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918248723357"
              className="flex items-center gap-2 text-neutral-silver hover:text-primary-gold transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 82487 23357</span>
            </a>
            <Link href="/contact">
              <CTAButton variant="primary" size="md">
                Get Quote
              </CTAButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary-gold transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="py-4 space-y-4 border-t border-neutral-darkGray">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-neutral-silver hover:text-primary-gold transition-all duration-300 font-medium py-2 transform",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+918248723357"
                className="flex items-center gap-2 text-neutral-silver hover:text-primary-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+91 82487 23357</span>
              </a>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <CTAButton variant="primary" size="md" fullWidth>
                  Get Quote
                </CTAButton>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
