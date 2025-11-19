
import React from 'react';
import Footer from '@/components/Footer';
import { Truck, Utensils, Store, Hotel, ChefHat, Coffee as CoffeeShop } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import CustomCTAButton from '@/components/CustomCTAButton';

const UseCases = () => {
  const segments = [{
    title: "Food Trucks",
    description: "Streamline your mobile food business with our comprehensive POS system, inventory tracking, and mobile ordering solutions designed specifically for food trucks.",
    icon: Truck,
    image: '/lovable-uploads/food-truck.jpg',
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "text-swirl-blue",
    iconBg: "bg-blue-50",
    borderColor: "border-blue-200"
  }, {
    title: "Fine Dining",
    description: "Elevate your fine dining experience with sophisticated reservation management, table service optimization, and integrated payment solutions.",
    icon: Utensils,
    image: '/lovable-uploads/fine-dining-interior.jpg',
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "text-swirl-blue",
    iconBg: "bg-blue-50",
    borderColor: "border-blue-200"
  }, {
    title: "Cafes & Bakeries",
    description: "Boost your cafe and bakery operations with fast POS, automated loyalty programs, and efficient inventory management designed for high-volume service.",
    icon: CoffeeShop,
    image: '/lovable-uploads/cafe-interior.jpg',
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "text-swirl-blue",
    iconBg: "bg-blue-50",
    borderColor: "border-blue-200"
  }, {
    title: "Quick Service",
    description: "Fast, efficient systems for quick service restaurants and food courts with rapid order processing and streamlined operations.",
    icon: Store,
    image: '/lovable-uploads/quick-service.jpg',
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "text-swirl-blue",
    iconBg: "bg-blue-50",
    borderColor: "border-blue-200"
  }, {
    title: "Cloud Kitchens",
    description: "Optimize your delivery-only kitchen with robust order management, multiple delivery platform integration, and real-time kitchen display systems.",
    icon: ChefHat,
    image: '/lovable-uploads/cloud-kitchen.jpg',
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "text-swirl-blue",
    iconBg: "bg-blue-50",
    borderColor: "border-blue-200"
  }, {
    title: "Hotels & Resorts",
    description: "Integrate your hotel's F&B operations with room service management, multiple outlet support, and centralized billing solutions.",
    icon: Hotel,
    image: '/lovable-uploads/hotel-resort.jpg',
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "text-swirl-blue",
    iconBg: "bg-blue-50",
    borderColor: "border-blue-200"
  }];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-28">
        <section className="bg-gradient-to-br from-blue-50 to-blue-100/50 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-swirl-blue text-white px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">SERVING EVERY CORNER OF HOSPITALITY</span>
              <h1 className="text-4xl font-bold mb-6 font-inter text-gray-900 md:text-6xl">Use Cases</h1>
              <p className="text-lg mb-8 font-inter text-gray-700">
                Discover tailored solutions for every segment of the food service industry. From food trucks to fine dining establishments, we provide specialized tools to enhance your operations.
              </p>
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-90">
                get started for free
              </CustomCTAButton>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {segments.map((segment, index) => (
                <Card key={segment.title} className={`overflow-hidden transform transition-all duration-500 hover:scale-105 border-2 ${segment.borderColor} rounded-xl shadow-lg hover:shadow-2xl`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${segment.bgColor} opacity-50 z-0`}></div>
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={segment.image} 
                      alt={segment.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-14 h-14 rounded-full ${segment.iconBg} flex items-center justify-center ${segment.iconColor}`}>
                        <segment.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="font-inter text-2xl text-gray-900">{segment.title}</CardTitle>
                    </div>
                    <CardDescription className="font-inter mt-2 text-base text-gray-700">{segment.description}</CardDescription>
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
