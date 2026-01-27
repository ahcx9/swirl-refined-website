import React from 'react';
import Footer from '@/components/Footer';
import { Truck, Utensils, Store, Hotel, ChefHat, Coffee as CoffeeShop } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import CustomCTAButton from '@/components/CustomCTAButton';

const UseCases = () => {
  const segments = [{
    title: "Food Trucks",
    description: "Streamline your mobile food business with compact POS, inventory tracking, and mobile ordering solutions. Works offline for on-the-go operations.",
    icon: Truck,
    image: '/lovable-uploads/food-truck.jpg',
  }, {
    title: "Fine Dining",
    description: "Elevate guest experiences with table management, guest profiles, course timing, and integrated payment solutions for premium service.",
    icon: Utensils,
    image: '/lovable-uploads/fine-dining-interior.jpg',
  }, {
    title: "Cafes & Bakeries",
    description: "Fast billing, loyalty programs, and efficient inventory management designed for high-volume counter service operations.",
    icon: CoffeeShop,
    image: '/lovable-uploads/cafe-interior.jpg',
  }, {
    title: "Quick Service",
    description: "High-volume order processing, kitchen display integration, and multi-counter operations for speed-focused restaurants.",
    icon: Store,
    image: '/lovable-uploads/quick-service.jpg',
  }, {
    title: "Cloud Kitchens",
    description: "Multi-brand management, delivery aggregator integration, and cost intelligence for virtual restaurants and ghost kitchens.",
    icon: ChefHat,
    image: '/lovable-uploads/cloud-kitchen.jpg',
  }, {
    title: "Hotels & Resorts",
    description: "Multi-outlet management, room charging integration, and centralized reporting for hospitality F&B operations.",
    icon: Hotel,
    image: '/lovable-uploads/hotel-resort.jpg',
  }];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-28">
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
                SERVING EVERY CORNER OF HOSPITALITY
              </span>
              <h1 className="text-4xl font-bold mb-6 text-foreground md:text-5xl lg:text-6xl">
                Use Cases
              </h1>
              <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                One platform, tailored for every format. From food trucks to hotels, Swirl adapts to your operations.
              </p>
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-90">
                get started for free
              </CustomCTAButton>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segments.map((segment) => (
                <Card 
                  key={segment.title} 
                  className="group overflow-hidden border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={segment.image} 
                      alt={segment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width={400}
                      height={192}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-primary shadow-lg">
                        <segment.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="p-5">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {segment.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {segment.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;