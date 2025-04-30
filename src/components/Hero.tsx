
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
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-purple-light/10 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Enhance your customer experience with <span className="text-gradient">AI-powered</span> restaurant management solutions
            </h1>
            <p className="text-base md:text-lg text-swirl-gray mb-6 max-w-xl mx-auto lg:mx-0">
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
            <div className="mt-6 text-sm text-swirl-gray">
              <p>Trusted by 1000+ restaurants worldwide</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple/20 to-swirl-blue/20 rounded-3xl transform rotate-3 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
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
                    />
                  </div>
                ))}
                
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-20"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-gray-800" size={20} />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-20"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-gray-800" size={20} />
                </button>
                
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full ${
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
