
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    src: "/lovable-uploads/82584175-2d38-4de3-8a1e-b70b0efd41cb.png",
    alt: "Swirl Restaurant Management Platform"
  },
  {
    src: "/lovable-uploads/35e9fd73-7370-41cc-89e5-6259df112af0.png",
    alt: "Analytics Dashboard"
  },
  {
    src: "/lovable-uploads/4127f4ed-f4a1-452d-bdba-5bc27d6fb8bc.png",
    alt: "QR Ordering Experience"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current === carouselImages.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? carouselImages.length - 1 : current - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 pb-8 md:pt-24 md:pb-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              Enhance your <i>customer experience</i> with <span className="text-gradient">AI-powered</span> restaurant management digital solution 
            </h1>
            <p className="text-sm md:text-base text-swirl-gray mb-4 max-w-xl mx-auto lg:mx-0">
              Streamline operations with smart digital tools. Boost efficiency, improve customer experience, and increase profits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <Button asChild className="btn-primary">
                <a href="https://app.swirl.cx/register">Get Started for Free</a>
              </Button>
              <Button asChild className="btn-secondary">
                <Link to="/products" className="flex items-center gap-1">
                  Explore our Features <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
            <div className="mt-4 text-xs text-swirl-gray">
              <p>Trusted by Restaurants Worldwide</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple/20 to-swirl-blue/20 rounded-3xl transform rotate-2 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative z-10 rounded-2xl shadow-card overflow-hidden">
              <div className="carousel relative">
                {carouselImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`carousel-item transition-opacity duration-500 ease-in-out ${
                      index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                      loading="eager"
                    />
                  </div>
                ))}
                
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-1.5 rounded-full shadow-md z-20"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-gray-800" size={16} />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-1.5 rounded-full shadow-md z-20"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-gray-800" size={16} />
                </button>
                
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-1.5 h-1.5 rounded-full ${
                        index === activeIndex ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
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
