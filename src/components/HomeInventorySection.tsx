
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeInventorySection = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-100/30 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-3 rounded-xl shadow-xl">
                <img 
                  src="/lovable-uploads/b03f39e1-1bbe-4212-88bc-f7f70b2ba690.png"
                  alt="Inventory Management Interface"
                  className="w-full h-auto object-cover rounded-lg shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.17001 7.44L12 12.55L20.77 7.47" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.17001 7.44L12 12.55L20.77 7.47" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21.61V12.54" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21.61V12.54" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.61 12.83V9.17C21.61 7.79 20.75 6.11 19.51 5.36L14.01 2.18C12.78 1.44 10.77 1.44 9.52003 2.19L4.02003 5.36C2.78003 6.11 1.92004 7.79 1.92004 9.17V14.83C1.92004 16.21 2.78003 17.89 4.02003 18.64L9.52003 21.82C10.14 22.19 10.97 22.37 11.81 22.37C12.65 22.37 13.48 22.19 14.1 21.82" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.61 12.83V9.17C21.61 7.79 20.75 6.11 19.51 5.36L14.01 2.18C12.78 1.44 10.77 1.44 9.52003 2.19L4.02003 5.36C2.78003 6.11 1.92004 7.79 1.92004 9.17V14.83C1.92004 16.21 2.78003 17.89 4.02003 18.64L9.52003 21.82C10.14 22.19 10.97 22.37 11.81 22.37C12.65 22.37 13.48 22.19 14.1 21.82" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.2 21.4C20.9673 21.4 22.4 19.9673 22.4 18.2C22.4 16.4327 20.9673 15 19.2 15C17.4327 15 16 16.4327 16 18.2C16 19.9673 17.4327 21.4 19.2 21.4Z" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.2 21.4C20.9673 21.4 22.4 19.9673 22.4 18.2C22.4 16.4327 20.9673 15 19.2 15C17.4327 15 16 16.4327 16 18.2C16 19.9673 17.4327 21.4 19.2 21.4Z" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 22L22 21" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 22L22 21" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-blue-600 font-medium">Smart Stock Control for Your Business</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Inventory Management</h2>
            
            <p className="text-blue-600/80 mb-6">
              Take control of your restaurant's inventory with real-time tracking, automated ordering, 
              and waste management tools. Reduce costs, minimize waste, and never run out of essential ingredients.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['Real-time stock tracking', 'Automated low-stock alerts', 'Supplier management', 'Ingredient-level tracking', 'Waste monitoring & reporting'].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-blue-600/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild variant="default" size="lg">
              <Link to="/products/inventory-management" className="flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInventorySection;
