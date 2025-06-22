import Link from "next/link"
import { Car, Phone, Mail, MapPin, Instagram, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"

export function Footer() {
  const quickLinks = [
    { href: "/cars", label: "View Inventory" },
    { href: "/sell", label: "Sell Your Car" },
    { href: "/car-care", label: "Car Care Products" },
    { href: "/contact", label: "Contact Us" },
  ]

  const services = ["Premium Car Sales", "Car Valuation", "Trade-in Services", "Financing Assistance"]

  return (
    <footer className="bg-neutral-matteBlack border-t border-neutral-darkGray">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Car className="h-8 w-8 text-primary-gold" />
              <span className="text-2xl font-bold font-poppins text-white">Castle Cars</span>
            </div>
            <p className="text-neutral-silver leading-relaxed">
              Kerala's most trusted premium used car dealership with 111K+ Instagram followers. Your partner for quality
              vehicles in Malappuram.
            </p>
            <div className="flex items-center gap-2">
              <Instagram className="h-5 w-5 text-primary-gold" />
              <span className="text-neutral-silver text-sm">111K+ Followers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-neutral-silver hover:text-primary-gold transition-colors duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Our Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-gold rounded-full" />
                  <span className="text-neutral-silver text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+918248723357"
                    className="text-neutral-silver hover:text-primary-gold transition-colors duration-300"
                  >
                    +91 82487 23357
                  </a>
                  <p className="text-xs text-neutral-lightGray">Call for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@castlecars.com"
                    className="text-neutral-silver hover:text-primary-gold transition-colors duration-300"
                  >
                    info@castlecars.com
                  </a>
                  <p className="text-xs text-neutral-lightGray">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-neutral-silver">Vengara, Malappuram</p>
                  <p className="text-neutral-silver">Kerala 676304, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="h-4 w-4 text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://www.instagram.com/castle_cars_?igsh=MXZlc3p6b2w0NjB0eA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-silver hover:text-primary-gold transition-colors duration-300"
                  >
                    @castle_cars_
                  </a>
                  <p className="text-xs text-neutral-lightGray">Follow for latest updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-darkGray mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-silver text-sm text-center md:text-left">
              © 2024 Castle Cars. All rights reserved. | Designed for Kerala's premium car market.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/contact">
                <CTAButton variant="primary" size="sm">
                  Get Quote
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
