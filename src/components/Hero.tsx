
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-purple-light/10 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Modern Restaurant <span className="text-gradient">Management</span> Platform
            </h1>
            <p className="text-lg md:text-xl text-swirl-gray mb-8 max-w-xl mx-auto lg:mx-0">
              Streamline your restaurant operations with our suite of smart digital tools. Boost efficiency, improve customer experience, and increase profits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button asChild className="btn-primary text-base">
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button asChild className="btn-secondary text-base">
                <Link to="/products" className="flex items-center gap-2">
                  Explore Solutions <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="mt-8 text-sm text-swirl-gray">
              <p>Trusted by 1000+ restaurants worldwide</p>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-swirl-blue/20 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
              alt="Restaurant management platform" 
              className="relative z-10 rounded-2xl shadow-card object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
