
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  const images = [
    "/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png",
    "/lovable-uploads/189d6c7d-6cc1-4e88-bbce-a9e8f69a073f.png",
    "/lovable-uploads/292d5cb0-2907-4d50-9380-03c565cb8849.png"
  ];

  // Preload the images
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

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 min-h-[80vh] flex items-center bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto mb-8">
          <span className="bg-blue-50 text-swirl-blue px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6">ENHANCING GUEST EXPERIENCE</span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Sale & Ordering system for the <span className="bg-gradient-to-r from-swirl-blue to-blue-500 bg-clip-text text-transparent">modern restaurant</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-swirl-gray mb-10 max-w-3xl mx-auto">
            Modern full stack (back of house & front of house) restaurant management system for ambitious restaurateurs.
          </p>
          
          <div className="flex justify-center">
            <Button 
              asChild 
              size="lg"
              className="text-lg py-6 px-8 bg-gradient-to-r from-swirl-blue to-blue-500 rounded-xl"
            >
              <a href="https://app.swirl.cx/register" className="flex items-center gap-2">
                Get Started For Free <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 w-full max-w-5xl mx-auto">
          {loaded ? (
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={image} 
                        alt={`Restaurant management system ${index + 1}`} 
                        className="w-full h-auto object-contain mx-auto"
                        style={{ maxHeight: '60vh' }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static transform-none mx-2" />
                <CarouselNext className="relative static transform-none mx-2" />
              </div>
            </Carousel>
          ) : (
            <div className="h-[60vh] w-full flex items-center justify-center bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 border-4 border-swirl-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
