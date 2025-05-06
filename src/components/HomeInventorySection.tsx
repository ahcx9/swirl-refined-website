
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, TrendingDown, ShoppingCart, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeInventorySection = () => {
  const features = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Real-time Stock Tracking",
      description: "Monitor inventory levels across multiple locations with automatic updates as items are sold."
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Waste Reduction",
      description: "Identify and minimize waste with detailed usage reports and expiration date tracking."
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Automated Purchasing",
      description: "Set reorder points and automate purchase orders when stock reaches minimum levels."
    },
    {
      icon: <Repeat className="h-6 w-6" />,
      title: "Vendor Management",
      description: "Manage supplier relationships, compare prices, and track delivery performance."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">INVENTORY MANAGEMENT</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
            Smart Stock Control for Your Business
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Take control of your inventory with our powerful management system. Reduce waste, optimize ordering, and ensure you never run out of essential ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="relative">
              {/* Abstract visualization of inventory management */}
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-teal-100 to-emerald-50 rounded-2xl overflow-hidden relative">
                {/* Visual elements that suggest inventory items */}
                <div className="absolute bottom-8 left-10 w-16 h-32 bg-teal-200 rounded-t-lg"></div>
                <div className="absolute bottom-8 left-32 w-16 h-48 bg-teal-300 rounded-t-lg"></div>
                <div className="absolute bottom-8 left-54 w-16 h-24 bg-teal-400 rounded-t-lg"></div>
                <div className="absolute bottom-8 left-76 w-16 h-40 bg-teal-500 rounded-t-lg"></div>
                
                {/* Shelf-like elements */}
                <div className="absolute top-1/4 left-1/4 right-20 h-1 bg-teal-200"></div>
                <div className="absolute top-2/4 left-1/4 right-20 h-1 bg-teal-200"></div>
                
                {/* Item elements */}
                <div className="absolute top-12 left-1/3 w-8 h-8 bg-emerald-300 rounded-md"></div>
                <div className="absolute top-14 left-1/3 + 12 w-6 h-6 bg-emerald-400 rounded-md"></div>
                <div className="absolute top-36 left-1/2 w-10 h-10 bg-teal-300 rounded-md"></div>
                
                {/* Line chart suggestion */}
                <div className="absolute top-12 right-8 left-1/2 h-24">
                  <svg viewBox="0 0 300 100" className="w-full h-full">
                    <path 
                      d="M0,80 Q75,30 150,60 T300,40" 
                      fill="none" 
                      stroke="rgb(20 184 166)" 
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/50 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-200/50 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border border-teal-100 hover:border-teal-200 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-none">
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
