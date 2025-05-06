
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Printer, BarChart3, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePOSSection = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-purple" />,
      title: "Modern Payment Processing",
      description: "Accept all payment methods - cards, mobile wallets, and cash - with fast transaction processing."
    },
    {
      icon: <Receipt className="h-8 w-8 text-purple" />,
      title: "Customizable Receipts",
      description: "Design professional receipts with your branding, promotional messages, and QR codes."
    },
    {
      icon: <Printer className="h-8 w-8 text-purple" />,
      title: "Kitchen Order Printing",
      description: "Send orders directly to kitchen printers for smooth operations and reduced errors."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple" />,
      title: "Sales Reports",
      description: "Track performance with real-time sales data, daily summaries, and detailed analytics."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Streamline Your Billing With Our <span className="text-gradient">Smart POS System</span>
              </h2>
              <p className="text-swirl-gray text-lg mb-6">
                Transform your restaurant operations with our intuitive point-of-sale system. Process payments quickly, manage tables efficiently, and keep your staff and customers happy.
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
                <Link to="/products/pos" className="flex items-center gap-2">
                  Explore Our POS System <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple/20 to-swirl-blue/20 rounded-3xl transform rotate-2 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-card">
                <img 
                  src="/lovable-uploads/61104fed-106e-4e91-a301-9f0fd8b8cb4b.png" 
                  alt="POS System" 
                  className="w-full h-auto object-cover transform scale-125 hover:scale-130 transition duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePOSSection;
