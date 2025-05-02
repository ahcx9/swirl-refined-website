
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/4127f4ed-f4a1-452d-bdba-5bc27d6fb8bc.png";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16 min-h-[85vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="text-center lg:text-left animate-on-scroll">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              Enhance your <span className="text-gradient">customer experience</span>  with <span className="text-gradient">AI-powered</span> restaurant management digital solution 
            </h1>
            <p className="text-sm md:text-base text-swirl-gray mb-4 max-w-xl mx-auto lg:mx-0">
              Streamline operations with smart digital tools. Boost efficiency, improve customer experience, and increase profits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <Button asChild className="btn-primary">
                <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">Get Started for Free</a>
              </Button>
              <Button asChild className="btn-secondary">
                <a href="/products" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  Explore our Features <ArrowRight size={14} />
                </a>
              </Button>
            </div>
            <div className="mt-4 text-xs text-swirl-gray">
              <p>Trusted by Restaurants Worldwide</p>
            </div>
          </div>
          <div className="relative group animate-on-scroll">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple/20 to-swirl-blue/20 rounded-3xl transform rotate-2 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative z-10 rounded-2xl shadow-card overflow-hidden">
              <div className="carousel relative mx-auto"> 
                <div className="carousel-item">
                  <img 
                    src="/lovable-uploads/4127f4ed-f4a1-452d-bdba-5bc27d6fb8bc.png" 
                    alt="QR Ordering Experience" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-300 ease-in-out"
                    style={{ maxHeight: "450px" }}
                    loading="eager"
                  />
                  <div className={`absolute inset-0 bg-gray-200 flex items-center justify-center ${loaded ? 'hidden' : ''}`}>
                    <div className="w-6 h-6 border-2 border-purple border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
