import Link from "next/link"
import { Car, Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0E0E0E] border-t border-[#20364b] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Car className="h-8 w-8 text-[#C4A750]" />
              <span className="text-xl font-bold text-white">Castle Cars</span>
            </div>
            <p className="text-[#8daece] text-sm">
              Premium used car dealership with 111K+ Instagram followers. Your trusted partner for quality vehicles.
            </p>
            <div className="flex items-center gap-2">
              <Instagram className="h-5 w-5 text-[#C4A750]" />
              <span className="text-[#8daece] text-sm">111K+ Followers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/cars" className="block text-[#8daece] hover:text-[#C4A750] transition-colors text-sm">
                View Inventory
              </Link>
              <Link href="/sell" className="block text-[#8daece] hover:text-[#C4A750] transition-colors text-sm">
                Sell Your Car
              </Link>
              <Link href="/car-care" className="block text-[#8daece] hover:text-[#C4A750] transition-colors text-sm">
                Car Care Products
              </Link>
              <Link href="/contact" className="block text-[#8daece] hover:text-[#C4A750] transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-bold">Services</h3>
            <div className="space-y-2">
              <p className="text-[#8daece] text-sm">Car Sales</p>
              <p className="text-[#8daece] text-sm">Car Valuation</p>
              <p className="text-[#8daece] text-sm">Trade-ins</p>
              <p className="text-[#8daece] text-sm">Financing</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#C4A750]" />
                <span className="text-[#8daece] text-sm">+91 82487 23357</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#C4A750]" />
                <span className="text-[#8daece] text-sm">info@castlecars.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#C4A750]" />
                <span className="text-[#8daece] text-sm">Vengara, Malappuram, Kerala 676304</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-[#C4A750]" />
                <a
                  href="https://www.instagram.com/castle_cars_?igsh=MXZlc3p6b2w0NjB0eA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8daece] text-sm hover:text-[#C4A750] transition-colors"
                >
                  @castle_cars_
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#20364b] mt-8 pt-8 text-center">
          <p className="text-[#8daece] text-sm">© 2024 Castle Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
