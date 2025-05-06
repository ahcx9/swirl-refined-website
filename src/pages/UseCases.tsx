
import React from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Truck,
  Utensils,
  Building,
  Store,
  Hotel,
  ChefHat,
  Coffee as CoffeeShop 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const UseCases = () => {
  const segments = [
    {
      title: "Food Trucks",
      description: "Streamline your mobile food business with our comprehensive POS system, inventory tracking, and mobile ordering solutions designed specifically for food trucks.",
      icon: Truck,
      bgColor: "from-pink-50 to-rose-100",
      iconColor: "text-rose-500",
      iconBg: "bg-rose-100",
      borderColor: "border-rose-200"
    },
    {
      title: "Fine Dining",
      description: "Elevate your fine dining experience with sophisticated reservation management, table service optimization, and integrated payment solutions.",
      icon: Utensils,
      bgColor: "from-blue-50 to-indigo-100",
      iconColor: "text-indigo-500",
      iconBg: "bg-indigo-100",
      borderColor: "border-indigo-200"
    },
    {
      title: "Cafes",
      description: "Boost your cafe operations with fast POS, automated loyalty programs, and efficient inventory management designed for high-volume service.",
      icon: CoffeeShop,
      bgColor: "from-amber-50 to-yellow-100",
      iconColor: "text-amber-500",
      iconBg: "bg-amber-100",
      borderColor: "border-amber-200"
    },
    {
      title: "Bakeries",
      description: "Manage your bakery efficiently with production scheduling, ingredient tracking, and customer pre-ordering systems tailored for bakery operations.",
      icon: Store,
      bgColor: "from-orange-50 to-orange-100",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-100",
      borderColor: "border-orange-200"
    },
    {
      title: "Coffee Shops",
      description: "Power your coffee shop with quick service solutions, customizable loyalty programs, and mobile ordering capabilities for the modern coffee enthusiast.",
      icon: CoffeeShop,
      bgColor: "from-teal-50 to-emerald-100",
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-100",
      borderColor: "border-emerald-200"
    },
    {
      title: "Cloud Kitchens",
      description: "Optimize your delivery-only kitchen with robust order management, multiple delivery platform integration, and real-time kitchen display systems.",
      icon: ChefHat,
      bgColor: "from-purple-50 to-purple-100",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-100", 
      borderColor: "border-purple-200"
    },
    {
      title: "Hotels",
      description: "Integrate your hotel's F&B operations with room service management, multiple outlet support, and centralized billing solutions.",
      icon: Hotel,
      bgColor: "from-cyan-50 to-sky-100",
      iconColor: "text-sky-500",
      iconBg: "bg-sky-100",
      borderColor: "border-sky-200"
    },
    {
      title: "Casual Dining",
      description: "Enhance your casual dining restaurant with table management, integrated payments, and customer engagement tools for a seamless dining experience.",
      icon: Building,
      bgColor: "from-green-50 to-lime-100",
      iconColor: "text-lime-500", 
      iconBg: "bg-lime-100",
      borderColor: "border-lime-200"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-28">
        <section className="bg-gradient-to-br from-purple-light/30 to-indigo-100/50 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">TAILORED SOLUTIONS</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">Use Cases</h1>
              <p className="text-lg text-swirl-gray mb-8 font-inter">
                Discover tailored solutions for every segment of the food service industry. From food trucks to fine dining establishments, we provide specialized tools to enhance your operations.
              </p>
              <Button asChild className="btn-primary font-inter bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 py-6 px-8 rounded-xl">
                <Link to="https://app.swirl.cx/register">Get Started For Free</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {segments.map((segment, index) => (
                <Card key={segment.title} className={`overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 border-2 ${segment.borderColor} rounded-xl`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${segment.bgColor} opacity-50 z-0`}></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/20"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/50"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-white/30"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-14 h-14 rounded-full ${segment.iconBg} flex items-center justify-center ${segment.iconColor}`}>
                        <segment.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="font-inter text-2xl">{segment.title}</CardTitle>
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
