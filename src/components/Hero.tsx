
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
    <section className="pt-32 pb-16 md:pt-40 md:pb-28 min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left animate-on-scroll">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Enhance your <span className="text-gradient">customer experience</span> with <span className="text-gradient">AI-powered</span> restaurant management
            </h1>
            <p className="text-xl md:text-2xl text-swirl-gray mb-10 max-w-2xl mx-auto lg:mx-0">
              Streamline operations with smart digital tools. Boost efficiency, improve customer experience, and increase profits.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button asChild className="text-lg py-7 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-r from-swirl-blue to-blue-500 hover:from-swirl-blue/90 hover:to-blue-600 text-white">
                <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
                  Get Started for Free
                </a>
              </Button>
            </div>
          </div>
          <div className="relative group animate-on-scroll">
            <div className="absolute -inset-1 bg-gradient-to-r from-swirl-blue/30 to-blue-500/30 rounded-3xl transform rotate-2 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative z-10 rounded-2xl shadow-card overflow-hidden">
              <div className="carousel relative mx-auto"> 
                <div className="carousel-item">
                  <img 
                    src="/lovable-uploads/4127f4ed-f4a1-452d-bdba-5bc27d6fb8bc.png" 
                    alt="QR Ordering Experience" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-300 ease-in-out"
                    style={{ maxHeight: "700px" }}
                    loading="eager"
                  />
                  <div className={`absolute inset-0 bg-gray-200 flex items-center justify-center ${loaded ? 'hidden' : ''}`}>
                    <div className="w-8 h-8 border-3 border-swirl-blue border-t-transparent rounded-full animate-spin"></div>
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
