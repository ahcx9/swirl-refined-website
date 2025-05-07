
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png", // New image uploaded by the user
    "/lovable-uploads/a8e1c5a9-d7a7-453a-a7f5-a5dcf834b577.png",
    "/lovable-uploads/cf8befbe-bdea-44aa-ae5a-485151bda759.png"
  ];

  // Preload all images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => setLoaded(true))
        .catch(err => console.error('Error preloading images:', err));
    };

    preloadImages();
  }, []);

  // Rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-[90vh] flex items-center">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
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
          <div className="relative group animate-on-scroll overflow-hidden lg:col-span-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index} className={`${currentIndex === index ? 'block' : 'hidden'} transition-opacity duration-1000`}>
                      <div className="relative w-full">
                        <img 
                          src={src} 
                          alt={`Restaurant management system ${index + 1}`}
                          className="w-[200%] h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                          style={{ 
                            maxHeight: '2000px',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }} 
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              {!loaded && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-swirl-blue border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Image indicator dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
