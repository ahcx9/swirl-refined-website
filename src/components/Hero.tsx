
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Hero content */}
          <div className="max-w-lg lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Restaurant Menu Management Made Simple
            </h1>
            <p className="text-base text-swirl-gray mb-6">
              Create digital menus, enable QR ordering, and manage your restaurant operations all in one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button asChild size="lg" className="btn-primary px-6">
                <Link to="/products">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/contact" className="flex items-center">
                  Schedule a Demo 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-2">
              {["No credit card required", "14-day free trial", "Cancel anytime"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-xs sm:text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue-400/20 rounded-lg filter blur-3xl opacity-30 transform -rotate-6"></div>
              <img 
                src="/lovable-uploads/e06fe134-6fdc-4caa-91b6-6492a2373c74.png" 
                alt="Digital Menu Dashboard" 
                className="relative z-10 rounded-xl shadow-xl max-w-full w-11/12 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
