import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const images = ["/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png", "/lovable-uploads/189d6c7d-6cc1-4e88-bbce-a9e8f69a073f.png", "/lovable-uploads/292d5cb0-2907-4d50-9380-03c565cb8849.png"];

  // Preload the images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      Promise.all(imagePromises).then(() => setLoaded(true)).catch(err => console.error('Error preloading images:', err));
    };
    preloadImages();
  }, []);
  return <section className="pt-24 pb-12 md:pt-32 md:pb-16 min-h-[80vh] flex items-center bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto mb-8">
          <span className="bg-blue-50 text-swirl-blue px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6">ENHANCING GUEST EXPERIENCE</span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black xl:text-7xl">
            Sale & Ordering system for the <span className="text-zinc-400">modern restaurant</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-swirl-gray mb-10 max-w-3xl mx-auto">
            Modern full stack (back of house & front of house) restaurant management system for ambitious restaurateurs.
          </p>
          
          <div className="flex justify-center">
            <Button asChild size="lg" className="text-lg py-6 px-8 bg-gradient-to-r from-swirl-blue to-blue-500 rounded-xl shadow-lg hover:shadow-blue-300/30 transition-all duration-300 transform hover:-translate-y-1">
              <a href="https://app.swirl.cx/register" className="flex items-center gap-2">
                Get Started For Free <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 w-full max-w-5xl mx-auto">
          {loaded ? <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-blue-100/50 to-white p-2">
                      <img src={image} alt={`Restaurant management system ${index + 1}`} className="w-full h-auto object-contain mx-auto rounded-xl" style={{
                  maxHeight: '55vh'
                }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent rounded-2xl py-[20px]"></div>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static transform-none mx-2 bg-gradient-to-r from-blue-500/80 to-blue-600/80 border-none text-white hover:bg-blue-700/90 hover:text-white" />
                <CarouselNext className="relative static transform-none mx-2 bg-gradient-to-r from-blue-500/80 to-blue-600/80 border-none text-white hover:bg-blue-700/90 hover:text-white" />
              </div>
            </Carousel> : <div className="h-[55vh] w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl">
              <div className="w-16 h-16 border-4 border-swirl-blue border-t-transparent rounded-full animate-spin"></div>
            </div>}
        </div>
      </div>
    </section>;
};
export default Hero;