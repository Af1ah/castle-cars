"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Car } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-[#20364b] bg-[#0f1a24]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white hover:text-[#C4A750] transition-colors">
            <Car className="h-8 w-8" />
            <span className="text-xl font-bold">Castle Cars</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#C4A750] transition-colors font-medium">
              Home
            </Link>
            <Link href="/cars" className="text-white hover:text-[#C4A750] transition-colors font-medium">
              Inventory
            </Link>

            <Link href="/sell" className="text-white hover:text-[#C4A750] transition-colors font-medium">
              Sell Your Car
            </Link>
            <Link href="/contact" className="text-white hover:text-[#C4A750] transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="primary">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#20364b]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-white hover:text-[#C4A750] transition-colors font-medium">
                Home
              </Link>
              <Link href="/cars" className="text-white hover:text-[#C4A750] transition-colors font-medium">
                Inventory
              </Link>

              <Link href="/sell" className="text-white hover:text-[#C4A750] transition-colors font-medium">
                Sell Your Car
              </Link>
              <Link href="/contact" className="text-white hover:text-[#C4A750] transition-colors font-medium">
                Contact
              </Link>
              <Link href="/contact" className="mt-2">
                <Button variant="primary" className="w-full">
                  Get Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
