import Image from "next/image"
import Link from "next/link"
import { CTAButton } from "@/components/ui/cta-button"
import { CarDetailSpecs } from "@/components/car/car-detail-specs"
import { ArrowLeft, Phone, MessageCircle, Calendar, Gauge, Fuel, Cog, Share2 } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import type { CarDetails } from "@/types/car"

// Mock car data with optional details - in a real app, this would come from a database
const getCarBySlug = (slug: string): CarDetails | null => {
  const cars: Record<string, CarDetails> = {
    "bmw-f30-320d-2014": {
      id: "bmw-f30-320d-2014",
      title: "BMW F30 320d Luxury Line",
      year: 2014,
      price: 1850000,
      images: [
       "/images/bm/bm1.jpg", // Fixed: Remove "public" and use forward slashes
    "/images/bm/bm2.jpg", // Fixed: Remove "public" and use forward slashes
    "/images/bm/bm3.jpg", // Add more actual images if you have them
    "/images/bm/bm4.jpg", // Or use placeholder for now
      ],
      mileage: 146000,
      transmission: "Automatic",
      make: "BMW",
      model: "F30 320d",
      fuelType: "Diesel",
      engine: "2.0L Turbo Diesel",
      drivetrain: "RWD",
      exterior: "Alpine White",
      interior: "Black Leather",
      location: "Vengara, Malappuram",

      // Optional detailed information from Instagram post
      optionalDetails: {
        ownerHistory: "3rd owner",
        serviceHistory: "Major service done at 120k (at showroom)",
        tyreCondition: "New continental tyres (99%)",
        modifications: ["10.5 android screen", "M5 Alloy wheels"],
        condition: "Zero faults",
        documentation: ["NOC available"],
        financing: "Finance not available",
        additionalFeatures: [
          "Luxury Line Package",
          "Professional Navigation",
          "Xenon Headlights",
          "Parking Sensors",
          "Cruise Control",
        ],
      },

      features: [
        "Premium Package",
        "Navigation System",
        "Panoramic Sunroof",
        "Heated Seats",
        "Apple CarPlay",
        "Backup Camera",
        "Blind Spot Monitoring",
        "Lane Departure Warning",
      ],
      description:
        "This stunning BMW F30 320d combines luxury, performance, and efficiency in one exceptional package. With its powerful turbocharged diesel engine and advanced features, it delivers an engaging driving experience while providing excellent fuel economy.",
    },
    "bmw-x5-2023": {
      id: "bmw-x5-2023",
      title: "BMW X5 xDrive40i",
      year: 2023,
      price: 6500000,
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      mileage: 15000,
      transmission: "Automatic",
      make: "BMW",
      model: "X5",
      fuelType: "Gasoline",
      engine: "3.0L Turbo I6",
      drivetrain: "AWD",
      exterior: "Alpine White",
      interior: "Black Leather",
      location: "Vengara, Malappuram",

      // This car has minimal optional details
      optionalDetails: {
        ownerHistory: "Single owner",
        condition: "Excellent condition",
        documentation: ["RC available", "Insurance valid", "Service records"],
        financing: "Finance available",
        warrantyInfo: "Extended warranty till 2026",
      },

      features: [
        "Premium Package",
        "Navigation System",
        "Panoramic Sunroof",
        "Heated Seats",
        "Apple CarPlay",
        "Backup Camera",
        "Blind Spot Monitoring",
        "Lane Departure Warning",
      ],
      description:
        "This stunning BMW X5 combines luxury, performance, and versatility in one exceptional package. With its powerful turbocharged engine and advanced all-wheel-drive system, it delivers an engaging driving experience while providing the space and comfort your family needs.",
    },
  }

  return cars[slug] || null
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = getCarBySlug(params.slug)

  if (!car) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car Not Found</h1>
          <Link href="/cars">
            <CTAButton variant="primary">Back to Inventory</CTAButton>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-neutral-black">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/cars"
          className="inline-flex items-center gap-2 text-neutral-silver hover:text-primary-gold transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Inventory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image src={car.images[0] || "/placeholder.svg"} alt={car.title} fill className="object-cover" priority />
              {/* Share Button */}
              <button className="absolute top-4 right-4 bg-neutral-matteBlack/80 backdrop-blur-sm p-3 rounded-full hover:bg-neutral-darkGray transition-colors">
                <Share2 className="h-5 w-5 text-white" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {car.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-20 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${car.title} view ${index + 2}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary-gold text-neutral-black px-3 py-1 rounded-full text-sm font-bold">
                  {car.year}
                </span>
                <span className="text-neutral-silver">{car.make}</span>
                {car.location && (
                  <>
                    <span className="text-neutral-mediumGray">•</span>
                    <span className="text-neutral-silver text-sm">{car.location}</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl font-bold font-poppins mb-4 text-white">{car.title}</h1>
              <div className="text-3xl font-bold text-primary-gold mb-6">{formatPrice(car.price)}</div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-matteBlack rounded-xl p-4 border border-neutral-darkGray">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="h-5 w-5 text-primary-gold" />
                  <span className="text-neutral-silver text-sm">Mileage</span>
                </div>
                <span className="font-bold text-white">{car.mileage.toLocaleString()} km</span>
              </div>

              <div className="bg-neutral-matteBlack rounded-xl p-4 border border-neutral-darkGray">
                <div className="flex items-center gap-2 mb-2">
                  <Cog className="h-5 w-5 text-primary-gold" />
                  <span className="text-neutral-silver text-sm">Transmission</span>
                </div>
                <span className="font-bold text-white">{car.transmission}</span>
              </div>

              <div className="bg-neutral-matteBlack rounded-xl p-4 border border-neutral-darkGray">
                <div className="flex items-center gap-2 mb-2">
                  <Fuel className="h-5 w-5 text-primary-gold" />
                  <span className="text-neutral-silver text-sm">Fuel Type</span>
                </div>
                <span className="font-bold text-white">{car.fuelType}</span>
              </div>

              <div className="bg-neutral-matteBlack rounded-xl p-4 border border-neutral-darkGray">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary-gold" />
                  <span className="text-neutral-silver text-sm">Engine</span>
                </div>
                <span className="font-bold text-white">{car.engine}</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918248723357" className="flex-1">
                <CTAButton variant="primary" size="lg" fullWidth icon={<Phone className="h-5 w-5" />}>
                  Call Now
                </CTAButton>
              </a>
              <a href="https://wa.me/918248723357" target="_blank" rel="noopener noreferrer" className="flex-1">
                <CTAButton variant="secondary" size="lg" fullWidth icon={<MessageCircle className="h-5 w-5" />}>
                  WhatsApp
                </CTAButton>
              </a>
            </div>

            {/* Basic Vehicle Details */}
            <div className="bg-neutral-matteBlack rounded-xl p-6 border border-neutral-darkGray">
              <h3 className="text-xl font-bold mb-4 text-white">Vehicle Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-neutral-silver">Exterior Color:</span>
                  <span className="ml-2 font-medium text-white">{car.exterior}</span>
                </div>
                <div>
                  <span className="text-neutral-silver">Interior:</span>
                  <span className="ml-2 font-medium text-white">{car.interior}</span>
                </div>
                <div>
                  <span className="text-neutral-silver">Drivetrain:</span>
                  <span className="ml-2 font-medium text-white">{car.drivetrain}</span>
                </div>
                <div>
                  <span className="text-neutral-silver">Model:</span>
                  <span className="ml-2 font-medium text-white">{car.model}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description, Features, and Optional Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Description</h2>
              <p className="text-neutral-silver leading-relaxed">{car.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Standard Features</h2>
              <div className="grid grid-cols-1 gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                    <span className="text-neutral-silver">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Optional Detailed Information */}
          <div>
            <CarDetailSpecs optionalDetails={car.optionalDetails} />
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-gold to-primary-goldLight rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-black mb-4">Interested in this car?</h3>
          <p className="text-neutral-black/80 mb-6">📞 Call or WhatsApp for more details: +91 82487 23357</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918248723357">
              <CTAButton variant="secondary" size="lg">
                Call Now
              </CTAButton>
            </a>
            <a href="https://wa.me/918248723357" target="_blank" rel="noopener noreferrer">
              <CTAButton
                variant="outline"
                className="border-neutral-black text-neutral-black hover:bg-neutral-black hover:text-primary-gold"
              >
                WhatsApp
              </CTAButton>
            </a>
          </div>
        </div>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-black/95 backdrop-blur-sm border-t border-neutral-darkGray p-4 lg:hidden z-50">
          <div className="flex gap-4">
            <a href="tel:+918248723357" className="flex-1">
              <CTAButton variant="primary" size="lg" fullWidth icon={<Phone className="h-5 w-5" />}>
                Call
              </CTAButton>
            </a>
            <a href="https://wa.me/918248723357" target="_blank" rel="noopener noreferrer" className="flex-1">
              <CTAButton variant="secondary" size="lg" fullWidth icon={<MessageCircle className="h-5 w-5" />}>
                WhatsApp
              </CTAButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
