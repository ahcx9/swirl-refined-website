
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HomeInventorySection = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-white -z-10"></div>
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-100/30 rounded-full blur-3xl opacity-30"></div>
              
              <div className="perspective-1000">
                <div className="relative transform rotate-y-[-2deg] rotate-x-5 transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl blur-md -z-10 transform translate-x-2 translate-y-2"></div>
                  
                  <div className="relative bg-gradient-to-br from-white to-blue-50 p-3 rounded-xl shadow-2xl border border-blue-100/40">
                    <img 
                      src="/lovable-uploads/b03f39e1-1bbe-4212-88bc-f7f70b2ba690.png"
                      alt="Inventory Management Interface"
                      className="w-full h-auto object-cover rounded-lg shadow-inner"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent rounded-xl"></div>
                    
                    <div className="absolute -bottom-3 -left-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                      Smart Inventory Control
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm">
              <span className="text-blue-600 font-medium">Inventory Management</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Smart Stock Control for Your Business</h2>
            
            <p className="text-blue-600/80 mb-8 text-lg leading-relaxed">
              Take control of your restaurant's inventory with real-time tracking, automated ordering, 
              and waste management tools. Reduce costs, minimize waste, and never run out of essential ingredients.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Real-time stock tracking', 'Automated low-stock alerts', 'Supplier management', 'Ingredient-level tracking', 'Waste monitoring & reporting'].map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-600/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white">
              <a href="https://app.swirl.cx/register" className="flex items-center gap-2">
                Get Started For Free <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HomeInventorySection;
