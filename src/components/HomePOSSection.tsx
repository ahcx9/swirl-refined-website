
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Printer, BarChart3, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePOSSection = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "Modern Payment Processing",
      description: "Accept all payment methods - cards, mobile wallets, and cash - with fast transaction processing."
    },
    {
      icon: <Receipt className="h-8 w-8 text-white" />,
      title: "Customizable Receipts",
      description: "Design professional receipts with your branding, promotional messages, and QR codes."
    },
    {
      icon: <Printer className="h-8 w-8 text-white" />,
      title: "Kitchen Order Printing",
      description: "Send orders directly to kitchen printers for smooth operations and reduced errors."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Sales Reports",
      description: "Track performance with real-time sales data, daily summaries, and detailed analytics."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Colorful background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 opacity-90"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-1/4 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Restaurant Experience 
            <span className="block mt-2">with Our Smart POS System</span>
          </h2>
          <div className="w-24 h-1 bg-white/40 mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Streamline your operations with our intuitive point-of-sale system. Process payments quickly, manage tables efficiently, and keep your staff and customers happy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-3 rounded-xl inline-flex mb-5 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-white text-purple hover:bg-white/90 hover:text-purple-800 text-base px-8 py-6 h-auto">
            <Link to="/products/pos" className="flex items-center gap-2">
              Explore Our POS System <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePOSSection;
