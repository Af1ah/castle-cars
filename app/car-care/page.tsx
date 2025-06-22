import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Droplets, Wind } from "lucide-react"

const carCareProducts = [
  {
    id: 1,
    name: "Premium Interior Cleaner",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Professional-grade interior cleaning solution that safely removes dirt, stains, and odors from all interior surfaces.",
    features: ["Safe for leather & fabric", "UV protection", "Anti-static formula", "Pleasant scent"],
    icon: Sparkles,
  },
  {
    id: 2,
    name: "Tire Shine Polish",
    image: "/placeholder.svg?height=300&width=300",
    description: "Long-lasting tire shine and protection that enhances appearance while providing UV protection.",
    features: ["Long-lasting shine", "UV protection", "Water repellent", "Easy application"],
    icon: Shield,
  },
  {
    id: 3,
    name: "Luxury Air Freshener",
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium scents for your vehicle that eliminate odors and provide long-lasting freshness.",
    features: ["Long-lasting fragrance", "Odor elimination", "Premium scents", "Easy installation"],
    icon: Wind,
  },
  {
    id: 4,
    name: "Paint Protection Wax",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "High-quality carnauba wax that provides superior protection and brilliant shine for your vehicle's paint.",
    features: ["Carnauba wax formula", "UV protection", "Water beading", "6-month protection"],
    icon: Droplets,
  },
  {
    id: 5,
    name: "Glass Cleaner Pro",
    image: "/placeholder.svg?height=300&width=300",
    description: "Streak-free glass cleaner that provides crystal clear visibility and anti-fog protection.",
    features: ["Streak-free formula", "Anti-fog protection", "Ammonia-free", "Safe for tinted windows"],
    icon: Sparkles,
  },
  {
    id: 6,
    name: "Leather Conditioner",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Premium leather conditioner that nourishes, protects, and maintains the natural beauty of leather surfaces.",
    features: ["Nourishes leather", "Prevents cracking", "UV protection", "Natural ingredients"],
    icon: Shield,
  },
]

export default function CarCarePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Castle <span className="text-[#C4A750]">Car Care</span>
          </h1>
          <p className="text-[#8daece] text-lg max-w-3xl mx-auto mb-8">
            Premium car care products designed to keep your vehicle looking its absolute best. From interior cleaning to
            paint protection, we have everything you need to maintain that showroom shine.
          </p>
          <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#20364b] max-w-2xl mx-auto">
            <p className="text-white font-medium">
              🌟 Professional-grade products used by Castle Cars for all our vehicles
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {carCareProducts.map((product) => {
            const IconComponent = product.icon
            return (
              <div
                key={product.id}
                className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#20364b] hover:border-[#C4A750] transition-colors group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#C4A750] p-2 rounded-lg">
                    <IconComponent className="h-5 w-5 text-black" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-[#8daece] mb-4 text-sm leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#C4A750] rounded-full"></div>
                        <span className="text-[#8daece] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Why Choose Our Products */}
        <div className="bg-gradient-to-r from-[#C4A750] to-[#B8A045] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-4 text-black">Why Choose Castle Car Care Products?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-3xl mx-auto">
            These are the same professional-grade products we use on every vehicle in our inventory. Trusted by
            professionals, perfect for enthusiasts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/10 rounded-xl p-6">
              <h3 className="font-bold text-black mb-2">Professional Grade</h3>
              <p className="text-black/80 text-sm">Same products used by our professional detailers</p>
            </div>
            <div className="bg-black/10 rounded-xl p-6">
              <h3 className="font-bold text-black mb-2">Proven Results</h3>
              <p className="text-black/80 text-sm">Tested on hundreds of vehicles in our inventory</p>
            </div>
            <div className="bg-black/10 rounded-xl p-6">
              <h3 className="font-bold text-black mb-2">Expert Support</h3>
              <p className="text-black/80 text-sm">Get advice from our car care specialists</p>
            </div>
          </div>

          <Button variant="secondary" size="lg" className="text-lg px-8">
            Contact Us for More Info
          </Button>
        </div>
      </div>
    </div>
  )
}
