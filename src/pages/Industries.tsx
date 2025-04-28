
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Truck,
  Utensils,
  Coffee,
  Building,
  Store,
  Hotel,
  ChefHat,
  Coffee as CoffeeShop // Using Coffee icon for Cafes as well
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Industries = () => {
  const segments = [
    {
      title: "Food Trucks",
      description: "Mobile POS, online ordering, and inventory management designed for food trucks.",
      icon: Truck
    },
    {
      title: "Fine Dining",
      description: "Elegant reservation systems and table management for upscale restaurants.",
      icon: Utensils
    },
    {
      title: "Cafes",
      description: "Quick service solutions with integrated loyalty programs for cafes.",
      icon: CoffeeShop // Using aliased Coffee icon
    },
    {
      title: "Bakeries",
      description: "Production planning and inventory management for bakeries.",
      icon: Store
    },
    {
      title: "Coffee Shops",
      description: "Streamlined ordering and loyalty programs for coffee shops.",
      icon: Coffee
    },
    {
      title: "Cloud Kitchens",
      description: "Delivery management and kitchen display systems for cloud kitchens.",
      icon: ChefHat
    },
    {
      title: "Hotels",
      description: "Integrated F&B management solutions for hotels and resorts.",
      icon: Hotel
    },
    {
      title: "Casual Dining",
      description: "Complete restaurant management for casual dining establishments.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Solutions</h1>
              <p className="text-lg text-swirl-gray mb-8">
                Tailored solutions for every segment of the food service industry. From food trucks to fine dining, we've got you covered.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Find Your Solution</Link>
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
                      <CardTitle>{segment.title}</CardTitle>
                    </div>
                    <CardDescription>{segment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="p-0">
                      <Link to="#" className="flex items-center gap-2">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
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
