
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, TrendingDown, ShoppingCart, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeInventorySection = () => {
  const features = [
    {
      icon: <Package className="h-8 w-8 text-white" />,
      title: "Real-time Stock Tracking",
      description: "Monitor inventory levels across multiple locations with automatic updates as items are sold."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-white" />,
      title: "Waste Reduction",
      description: "Identify and minimize waste with detailed usage reports and expiration date tracking."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      title: "Automated Purchasing",
      description: "Set reorder points and automate purchase orders when stock reaches minimum levels."
    },
    {
      icon: <Repeat className="h-8 w-8 text-white" />,
      title: "Vendor Management",
      description: "Manage supplier relationships, compare prices, and track delivery performance."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Smart Inventory Management 
            <span className="block mt-2">for Optimal Stock Control</span>
          </h2>
          <div className="w-24 h-1 bg-white/40 mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Take control of your inventory with our powerful management system. Reduce waste, optimize ordering, and ensure you never run out of essential ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-700 p-3 rounded-xl inline-flex mb-5 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-white text-teal-700 hover:bg-white/90 hover:text-teal-800 text-base px-8 py-6 h-auto">
            <Link to="/products/inventory-management" className="flex items-center gap-2">
              Learn About Inventory Management <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeInventorySection;
