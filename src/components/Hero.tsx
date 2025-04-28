
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
              Enhance your customer experience with <span className="text-gradient">AI-powered</span> restaurant management solutions
            </h1>
            <p className="text-lg md:text-xl text-swirl-gray mb-8 max-w-xl mx-auto lg:mx-0">
              Streamline your restaurant operations with our smart digital tools. Boost efficiency, improve customer experience, and increase profits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button asChild className="btn-primary text-base">
                <a href="https://app.swirl.cx/register">Get Started for Free</a>
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
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple/20 to-swirl-blue/20 rounded-3xl transform rotate-3 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative z-10 rounded-2xl shadow-card overflow-hidden">
              <img 
                src="/lovable-uploads/82584175-2d38-4de3-8a1e-b70b0efd41cb.png" 
                alt="Swirl Restaurant Management Platform" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
