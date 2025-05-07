
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/960d6b7a-1ce5-4365-9bf8-36fedf529b59.png";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-28 min-h-[90vh] flex items-center">
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
              <Button 
                asChild 
                size="xl"
              >
                <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
                  Get Started for Free
                </a>
              </Button>
            </div>
          </div>
          <div className="relative group animate-on-scroll">
            <div className="absolute -inset-1 bg-transparent rounded-3xl transform rotate-2 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <div className="carousel relative mx-auto"> 
                <div className="carousel-item">
                  <img 
                    src="/lovable-uploads/960d6b7a-1ce5-4365-9bf8-36fedf529b59.png" 
                    alt="QR Ordering Experience with Customer" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-300 ease-in-out"
                    style={{ maxHeight: "1500px", width: "150%" }} 
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
