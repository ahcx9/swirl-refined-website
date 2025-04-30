
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
    name: "Shibara", 
    logo: "/lovable-uploads/cdb611e4-e77a-49b3-b612-6a0c44c9709e.png",
  },
  { 
    name: "Tamasha", 
    logo: "/lovable-uploads/d67e46ef-6a89-4509-8db9-f1f5868ced26.png",
  },
  { 
    name: "Al-Baik", 
    logo: "/lovable-uploads/42ded2c0-ff2d-4e3c-8c6b-e7dc3cf4db27.png",
  },
  { 
    name: "Saffron Kitchen", 
    logo: "/lovable-uploads/cebfea27-8e23-43d1-8ca2-44bb562429f9.png",
  },
  { 
    name: "Taste of Tongue", 
    logo: "/lovable-uploads/1dbdb934-004a-4eef-bc21-5f508282feec.png",
  },
  { 
    name: "The Bombay", 
    logo: "/lovable-uploads/82bc695f-d01b-4b96-8cac-e29f2c43dddb.png",
  },
  { 
    name: "Seern", 
    logo: "/lovable-uploads/f9830254-e7e0-4c01-850d-1e4fe5041d16.png",
  },
  { 
    name: "The Centurion", 
    logo: "/lovable-uploads/8e19ccf7-24a9-4d48-9a51-a8ec7c37e9e9.png",
  },
  { 
    name: "La Pino'z Pizza", 
    logo: "/lovable-uploads/a7a29f9c-6293-46ad-bb73-77648ef03c6a.png",
  }
];

const TrustedRestaurants = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        <h3 className="text-base font-medium text-center mb-6 text-gray-300 font-inter">Trusted by Leading Restaurants</h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {restaurants.map((restaurant, index) => (
              <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center p-3">
                  <img
                    src={restaurant.logo}
                    alt={restaurant.name}
                    className="max-h-10 w-auto object-contain transition-transform duration-500 ease-in-out hover:scale-110 rounded-lg brightness-0 invert opacity-80 hover:opacity-100"
                    loading="eager"
                    onError={(e) => {
                      console.error(`Error loading image: ${restaurant.name}`);
                      e.currentTarget.style.display = 'none';
                    }}
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
