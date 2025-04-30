
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div className="max-w-xl lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              The Complete Restaurant Management Solution
            </h1>
            <p className="text-lg text-swirl-gray mb-8">
              Streamline operations, increase revenue, and enhance customer experience with our all-in-one digital platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="btn-primary px-8">
                <Link to="/products">Explore Features</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/contact" className="flex items-center">
                  Schedule a Demo 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-3">
              {["No setup fees", "30-day free trial", "Cancel anytime"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm">{benefit}</span>
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
                alt="Swirl Dashboard" 
                className="relative z-10 rounded-lg shadow-xl max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
