
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

const POSHero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center">
      <div className="lg:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-purple-light/30">
            <CreditCard className="text-purple h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold">Point of Sale System</h1>
        </div>
        
        <p className="text-lg text-swirl-gray mb-8">
          A modern, intuitive point-of-sale system designed specifically for restaurants. Streamline your operations with fast checkout, easy table management, and seamless payment processing. Our complete solution includes both powerful software and reliable hardware options to fit your specific needs.
        </p>

        <Button asChild className="btn-primary">
          <Link to="/contact">Request Demo</Link>
        </Button>
      </div>

      <div className="lg:w-1/2">
        <img 
          src="/lovable-uploads/61104fed-106e-4e91-a301-9f0fd8b8cb4b.png" 
          alt="POS System Interface" 
          className="rounded-lg shadow-lg w-full object-contain"
        />
      </div>
    </div>
  );
};

export default POSHero;
