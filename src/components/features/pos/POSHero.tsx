
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

const POSHero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mb-16 items-center">
      <div className="lg:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100">
            <CreditCard className="text-purple h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Point of Sale System</h1>
        </div>
        
        <p className="text-lg text-swirl-gray mb-8 leading-relaxed">
          A modern, intuitive point-of-sale system designed specifically for restaurants. 
          Streamline your operations with fast checkout, easy table management, and 
          seamless payment processing. Our complete solution includes both powerful 
          software and reliable hardware options to fit your specific needs.
        </p>

        <Button asChild className="btn-primary">
          <Link to="/contact">Request Demo</Link>
        </Button>
      </div>

      <div className="lg:w-1/2">
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src="/lovable-uploads/61104fed-106e-4e91-a301-9f0fd8b8cb4b.png" 
            alt="POS System Interface" 
            className="w-full h-auto object-cover shadow-lg transform scale-125 hover:scale-130 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default POSHero;
