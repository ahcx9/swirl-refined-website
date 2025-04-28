import React from 'react';
import Navbar from '@/components/navbar/Navbar';
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
  Coffee as CoffeeShop // Using Coffee icon for Cafes as well
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Industries = () => {
  const segments = [
    {
      title: "Food Trucks",
      description: "Streamline your mobile food business with our comprehensive POS system, inventory tracking, and mobile ordering solutions designed specifically for food trucks.",
      icon: Truck
    },
    {
      title: "Fine Dining",
      description: "Elevate your fine dining experience with sophisticated reservation management, table service optimization, and integrated payment solutions.",
      icon: Utensils
    },
    {
      title: "Cafes",
      description: "Boost your cafe operations with fast POS, automated loyalty programs, and efficient inventory management designed for high-volume service.",
      icon: CoffeeShop
    },
    {
      title: "Bakeries",
      description: "Manage your bakery efficiently with production scheduling, ingredient tracking, and customer pre-ordering systems tailored for bakery operations.",
      icon: Store
    },
    {
      title: "Coffee Shops",
      description: "Power your coffee shop with quick service solutions, customizable loyalty programs, and mobile ordering capabilities for the modern coffee enthusiast.",
      icon: CoffeeShop
    },
    {
      title: "Cloud Kitchens",
      description: "Optimize your delivery-only kitchen with robust order management, multiple delivery platform integration, and real-time kitchen display systems.",
      icon: ChefHat
    },
    {
      title: "Hotels",
      description: "Integrate your hotel's F&B operations with room service management, multiple outlet support, and centralized billing solutions.",
      icon: Hotel
    },
    {
      title: "Casual Dining",
      description: "Enhance your casual dining restaurant with table management, integrated payments, and customer engagement tools for a seamless dining experience.",
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">Industry Solutions</h1>
              <p className="text-lg text-swirl-gray mb-8 font-inter">
                Discover tailored solutions for every segment of the food service industry. From food trucks to fine dining establishments, we provide specialized tools to enhance your operations.
              </p>
              <Button asChild className="btn-primary font-inter">
                <Link to="https://app.swirl.cx/register">Get Started For Free</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {segments.map((segment) => (
                <Card key={segment.title} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <segment.icon className="h-6 w-6 text-purple" />
                      <CardTitle className="font-inter">{segment.title}</CardTitle>
                    </div>
                    <CardDescription className="font-inter mt-2">{segment.description}</CardDescription>
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

export default Industries;
