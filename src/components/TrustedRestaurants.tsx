
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const restaurants = [
  { 
    name: "Qasar Halab Restaurant", 
    logo: "/lovable-uploads/e1b9db64-f6fd-4797-ad7b-9d0b1682d9bd.png",
    background: "bg-[#0A321E]" // Dark green background
  },
  { 
    name: "Garage Café", 
    logo: "/lovable-uploads/db359be2-d8e5-4ea7-bd57-2ca8359f3727.png",
    background: "bg-black"
  },
  { 
    name: "Foodbook Restaurant", 
    logo: "/lovable-uploads/808d0fa7-3d2e-4718-a97b-62f1df2f0792.png",
    background: "bg-white"
  }
];

const TrustedRestaurants = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
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
                <div className={`p-6 rounded-xl ${restaurant.background} aspect-square flex items-center justify-center transition-transform duration-300 hover:scale-105`}>
                  <img
                    src={restaurant.logo}
                    alt={restaurant.name}
                    className="h-24 w-auto object-contain"
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
