
import React from 'react';
import { Card } from "@/components/ui/card";
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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">INVENTORY MANAGEMENT</span>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-swirl-blue to-blue-500 bg-clip-text text-transparent">
            Smart Stock Control for Your Business
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Take control of your inventory with our powerful management system. Reduce waste, optimize ordering, and ensure you never run out of essential ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="relative">
              {/* Creative visualization of inventory management with interactive elements */}
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden relative shadow-xl transform transition-all duration-700 hover:rotate-1 hover:scale-105">
                {/* Shelf visualization with hover effects */}
                <div className="absolute top-1/4 left-1/4 right-20 h-1 bg-blue-200 transform transition-all duration-300 hover:scale-x-105"></div>
                <div className="absolute top-2/4 left-1/4 right-20 h-1 bg-blue-200 transform transition-all duration-300 hover:scale-x-95"></div>
                
                {/* Dynamic inventory bars with hover animations */}
                <div className="absolute bottom-8 left-10 w-16 h-32 bg-blue-200 rounded-t-lg transform transition-all duration-500 hover:h-40 hover:bg-blue-300"></div>
                <div className="absolute bottom-8 left-32 w-16 h-48 bg-blue-300 rounded-t-lg transform transition-all duration-500 hover:h-56 hover:bg-blue-400"></div>
                <div className="absolute bottom-8 left-54 w-16 h-24 bg-blue-400 rounded-t-lg transform transition-all duration-500 hover:h-32 hover:bg-blue-500"></div>
                <div className="absolute bottom-8 left-76 w-16 h-40 bg-blue-500 rounded-t-lg transform transition-all duration-500 hover:h-48 hover:bg-blue-600"></div>
                
                {/* Interactive item elements */}
                <div className="absolute top-12 left-1/3 w-8 h-8 bg-blue-300 rounded-md transform transition-all duration-300 hover:rotate-45"></div>
                <div className="absolute top-14 left-1/3 + 12 w-6 h-6 bg-blue-400 rounded-md transform transition-all duration-300 hover:rotate-12"></div>
                <div className="absolute top-36 left-1/2 w-10 h-10 bg-blue-300 rounded-md transform transition-all duration-300 hover:rotate-90"></div>
                
                {/* Animated chart line */}
                <div className="absolute top-12 right-8 left-1/2 h-24">
                  <svg viewBox="0 0 300 100" className="w-full h-full">
                    <path 
                      d="M0,80 Q75,30 150,60 T300,40" 
                      fill="none" 
                      stroke="rgb(37 99 235)" 
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="300"
                      strokeDashoffset="300"
                      className="animate-dash"
                    />
                  </svg>
                </div>
                
                {/* Animated decorative elements */}
                <div className="absolute top-20 left-20 w-4 h-4 bg-blue-300 rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-40 left-60 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Animated decorative blobs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className={`border-none overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                  'bg-gradient-to-br from-blue-50 to-blue-100'
                } shadow-lg hover:shadow-xl rounded-xl`}>
                  <div className="p-6 relative z-10">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                      index % 4 === 0 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                      index % 4 === 1 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                      index % 4 === 2 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                      'bg-gradient-to-br from-blue-200 to-blue-300'
                    } text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white opacity-20"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white"></div>
                    <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-10">
              <Button asChild className="bg-gradient-to-r from-swirl-blue to-blue-500 hover:from-swirl-blue/90 hover:to-blue-600 text-white border-none rounded-full px-8 py-6 h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
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
