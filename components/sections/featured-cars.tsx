import { CarCard } from "@/components/car/car-card";
import { SectionTitle } from "@/components/ui/section-title";
import { cars } from "@/constants/cars";
import { Car } from "@/types/car";

export function FeaturedCars() {
  const featuredCars = cars.slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Featured Cars" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featuredCars.map((car: Car, index: number) => (
            <CarCard key={car.slug} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}