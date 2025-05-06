
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, TrendingDown, ShoppingCart, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeInventorySection = () => {
  const features = [
    {
      icon: <Package className="h-8 w-8 text-purple" />,
      title: "Real-time Stock Tracking",
      description: "Monitor inventory levels across multiple locations with automatic updates as items are sold."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-purple" />,
      title: "Waste Reduction",
      description: "Identify and minimize waste with detailed usage reports and expiration date tracking."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-purple" />,
      title: "Automated Purchasing",
      description: "Set reorder points and automate purchase orders when stock reaches minimum levels."
    },
    {
      icon: <Repeat className="h-8 w-8 text-purple" />,
      title: "Vendor Management",
      description: "Manage supplier relationships, compare prices, and track delivery performance."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-swirl-blue/20 to-purple/20 rounded-3xl transform -rotate-2 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-card">
                <img 
                  src="/lovable-uploads/e06fe134-6fdc-4caa-91b6-6492a2373c74.png" 
                  alt="Inventory Management" 
                  className="w-full h-auto object-cover transform scale-125 hover:scale-130 transition duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Smart Inventory Management</span> for Optimal Stock Control
              </h2>
              <p className="text-swirl-gray text-lg mb-6">
                Take control of your inventory with our powerful management system. Reduce waste, optimize ordering, and ensure you never run out of essential ingredients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-swirl-gray text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild className="mt-4 bg-purple hover:bg-purple-dark text-white">
                <Link to="/products/inventory-management" className="flex items-center gap-2">
                  Learn About Inventory Management <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInventorySection;
