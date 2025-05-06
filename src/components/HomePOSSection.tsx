
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Printer, BarChart3, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePOSSection = () => {
  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Modern Payment Processing",
      description: "Accept all payment methods by cards, mobile wallets, and cash - with fast transaction processing."
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Customizable Receipts",
      description: "Design professional receipts with your branding, promotional messages, and QR codes."
    },
    {
      icon: <Printer className="h-6 w-6" />,
      title: "Kitchen Order Printing",
      description: "Send orders directly to kitchen printers for smooth operations and reduced errors."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Sales Reports",
      description: "Track performance with real-time sales data, daily summaries, and detailed analytics."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">POINT OF SALE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Transform Your Restaurant Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Streamline your operations with our intuitive point-of-sale system. Process payments quickly, manage tables efficiently, and keep your staff and customers happy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className={`border-none overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-blue-50 to-purple-100' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-purple-50 to-blue-100' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-indigo-50 to-purple-100' :
                  'bg-gradient-to-br from-violet-50 to-blue-100'
                } shadow-lg hover:shadow-xl rounded-xl`}>
                  <div className="p-6 relative z-10">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                      index % 4 === 0 ? 'bg-gradient-to-br from-blue-200 to-purple-300' :
                      index % 4 === 1 ? 'bg-gradient-to-br from-purple-200 to-blue-300' :
                      index % 4 === 2 ? 'bg-gradient-to-br from-indigo-200 to-purple-300' :
                      'bg-gradient-to-br from-violet-200 to-blue-300'
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
              <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none rounded-full px-8 py-6 h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link to="/products/pos" className="flex items-center gap-2">
                  Explore Our POS System <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative h-full">
              {/* Creative visualization of POS system */}
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-purple-100 to-blue-50 rounded-2xl overflow-hidden relative shadow-xl transform transition-all duration-700 hover:rotate-1 hover:scale-105">
                {/* Visual elements that suggest a POS interface */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-lg shadow-md transform transition-all duration-500 hover:rotate-3 hover:scale-105"></div>
                <div className="absolute top-16 left-16 w-20 h-6 bg-purple-200 rounded-md"></div>
                <div className="absolute top-28 left-16 w-16 h-16 bg-blue-200 rounded-md"></div>
                
                {/* Receipt-like elements with animation */}
                <div className="absolute top-10 right-14 w-24 h-40 bg-white rounded-md shadow-md transform transition-all duration-500 hover:translate-y-2"></div>
                <div className="absolute top-14 right-20 w-12 h-2 bg-purple-200 rounded-sm"></div>
                <div className="absolute top-20 right-20 w-12 h-2 bg-purple-200 rounded-sm"></div>
                <div className="absolute top-26 right-20 w-12 h-2 bg-purple-200 rounded-sm"></div>
                
                {/* Card payment visualization with hover effect */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110"></div>
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-20 h-3 bg-white/60 rounded-sm"></div>
                
                {/* Animated decorative elements */}
                <div className="absolute top-8 left-1/2 w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute bottom-20 right-12 w-6 h-6 bg-purple-300 rounded-full opacity-50 animate-ping"></div>
                <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
              </div>
              
              {/* Decorative animated blobs */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePOSSection;
