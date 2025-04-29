
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const restaurants = [
  { 
    name: "Qasar Halab Restaurant", 
    logo: "/lovable-uploads/e1b9db64-f6fd-4797-ad7b-9d0b1682d9bd.png",
  },
  { 
    name: "Garage Café", 
    logo: "/lovable-uploads/db359be2-d8e5-4ea7-bd57-2ca8359f3727.png",
  },
  { 
    name: "Foodbook Restaurant", 
    logo: "/lovable-uploads/31b9ef24-c2ca-46ef-85b7-23f0ec080d8d.png",
  },
  { 
    name: "Sample Restaurant 1", 
    logo: "/lovable-uploads/b03f39e1-1bbe-4212-88bc-f7f70b2ba690.png",
  },
  { 
    name: "Sample Restaurant 2", 
    logo: "/lovable-uploads/b03f39e1-1bbe-4212-88bc-f7f70b2ba690.png",
  },
  { 
    name: "Sample Restaurant 3", 
    logo: "/lovable-uploads/b03f39e1-1bbe-4212-88bc-f7f70b2ba690.png",
  }
];

const TrustedRestaurants = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h3 className="text-lg font-medium text-center mb-6 text-gray-700 font-inter">Trusted by Leading Restaurants</h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {restaurants.map((restaurant, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 h-20">
                  <img
                    src={restaurant.logo}
                    alt={restaurant.name}
                    className="max-h-16 w-auto object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TrustedRestaurants;
