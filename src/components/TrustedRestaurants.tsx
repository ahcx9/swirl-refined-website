
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const restaurants = [
  { name: "Restaurant 1", logo: "/lovable-uploads/92d5e15f-318e-46e8-9d20-bdca69d36285.png" },
  { name: "Restaurant 2", logo: "/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png" },
  { name: "Restaurant 3", logo: "/lovable-uploads/82584175-2d38-4de3-8a1e-b70b0efd41cb.png" },
];

const TrustedRestaurants = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h3 className="text-2xl font-semibold text-center mb-8 font-inter">Trusted by Leading Restaurants</h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {restaurants.map((restaurant, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <div className="p-4">
                  <img
                    src={restaurant.logo}
                    alt={restaurant.name}
                    className="h-16 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TrustedRestaurants;
