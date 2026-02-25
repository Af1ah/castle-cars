import Link from "next/link";
import { Metadata } from "next";
import { CTAButton } from "@/components/ui/cta-button";
import { CarDetailSpecs } from "@/components/car/car-detail-specs";
import { CarImageGallery } from "@/components/car/car-image-gallery";
import { ShareButton } from "@/components/car/share-button";
import { ArrowLeft, Phone, MessageCircle, Calendar, Gauge, Fuel, Cog } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Car } from "@/types/car";
import { cars } from "@/constants/cars";
import { SITE_URL } from "@/constants/seo";

const getCarBySlug = (slug: string): Car | null => {
  return cars.find((car) => car.slug === slug) || null;
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = getCarBySlug(params.slug);

  if (!car) {
    return {
      title: "Car Not Found",
    };
  }

  const price = car.asking_price_inr
    ? `₹${(car.asking_price_inr / 100000).toFixed(1)} Lakh`
    : "Price on request";
  const description = `${car.year} ${car.title} • ${price} • ${car.mileage_km} km • ${car.fuel} • ${car.transmission} • ${car.condition}`;
  const imageUrl = `${SITE_URL}${car.images[0]}`;
  const pageUrl = `${SITE_URL}/cars/${car.slug}`;

  return {
    title: `${car.title} - ${price} | Castle Cars`,
    description,
    openGraph: {
      title: `${car.title} - ${price}`,
      description,
      url: pageUrl,
      siteName: "Castle Cars",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${car.year} ${car.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${car.title} - ${price} | Castle Cars`,
      description,
      images: [imageUrl],
    },
  };
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = getCarBySlug(params.slug);

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
          <div className="relative">
            <CarImageGallery images={car.images} title={car.title} />
            <ShareButton
              title={car.title}
              text={`Check out this ${car.year} ${car.title} on Castle Cars!`}
            />
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary-gold text-neutral-black px-3 py-1 rounded-full text-sm font-bold">
                  {car.year}
                </span>
                <span className="text-neutral-silver">{car.type}</span>
                {car.location && (
                  <>
                    <span className="text-neutral-mediumGray">•</span>
                    <span className="text-neutral-silver text-sm">{car.location}</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl font-bold font-poppins mb-4 text-white">{car.title}</h1>
              <div className="text-3xl font-bold text-primary-gold mb-6">
                {car.asking_price_inr ? formatPrice(car.asking_price_inr) : "Price on request"}
              </div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-matteBlack rounded-xl p-4 border border-neutral-darkGray">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="h-5 w-5 text-primary-gold" />
                  <span className="text-neutral-silver text-sm">Mileage</span>
                </div>
                <span className="font-bold text-white">{car.mileage_km} km</span>
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
                <span className="font-bold text-white">{car.fuel}</span>
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
                  <span className="ml-2 font-medium text-white">{car.color}</span>
                </div>
                <div>
                  <span className="text-neutral-silver">Interior:</span>
                  <span className="ml-2 font-medium text-white">{car.interior}</span>
                </div>
                <div>
                  <span className="text-neutral-silver">Drivetrain:</span>
                  <span className="ml-2 font-medium text-white">{car.drive}</span>
                </div>
                <div>
                  <span className="text-neutral-silver">Ownership:</span>
                  <span className="ml-2 font-medium text-white">{car.ownership}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description, Features, and Optional Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Condition</h2>
              <p className="text-neutral-silver leading-relaxed">{car.condition}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Features</h2>
              <div className="grid grid-cols-1 gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                    <span className="text-neutral-silver">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Modifications</h2>
              <div className="grid grid-cols-1 gap-2">
                {car.modifications.map((modification, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                    <span className="text-neutral-silver">{modification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Optional Detailed Information */}
          <div>
            <CarDetailSpecs car={car} />
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
