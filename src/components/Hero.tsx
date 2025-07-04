
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const {
    t
  } = useLanguage();
  const images = ["/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png", "/lovable-uploads/189d6c7d-6cc1-4e88-bbce-a9e8f69a073f.png", "/lovable-uploads/292d5cb0-2907-4d50-9380-03c565cb8849.png"];

  // Optimized image preloading for faster loading
  useEffect(() => {
    const preloadImages = () => {
      // Preload critical images with higher priority & use link rel="preload"
      const links = images.map(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.fetchPriority = 'high';
        return link;
      });
      
      links.forEach(link => document.head.appendChild(link));
      
      // Set up Image objects for onload events
      const imagePromises = images.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.fetchPriority = 'high';
          img.decoding = 'async';
          if (img.complete) {
            resolve(null);
          } else {
            img.onload = () => resolve(null);
            img.onerror = () => resolve(null); // Continue even if image fails
          }
        });
      });

      Promise.all(imagePromises).then(() => setLoaded(true));
    };

    preloadImages();
    // After a timeout, force the loaded state to ensure UI doesn't get stuck
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll plugin configuration
  const autoplayOptions = {
    delay: 3000,
    // 3 seconds between slides
    stopOnInteraction: false,
    // continue auto-scrolling after user interaction
    rootNode: (emblaRoot: any) => emblaRoot.parentElement // required for proper initialization
  };
  
  return <section className="pt-32 pb-12 md:pt-36 lg:pt-40 md:pb-16 min-h-[80vh] flex items-center bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-700 xl:text-7xl font-inter">
            <span className="text-gray-400">Powering the New Era of</span> Restaurant Sales
          </h1>
          
          <p className="text-xl md:text-2xl text-swirl-gray mb-10 max-w-3xl mx-auto font-inter">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex justify-center">
            <div className="btn-conteiner scale-90"> {/* Reduced from scale-100 to scale-90 */}
              <a className="btn-content" href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
                <span className="btn-title">{t('cta.getStarted')}</span>
                <span className="icon-arrow">
                  <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                      <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                      <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                    </g>
                  </svg>
                </span> 
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 w-full max-w-5xl mx-auto">
          {loaded ? <Carousel className="w-full" plugins={[Autoplay(autoplayOptions)]}>
              <CarouselContent>
                {images.map((image, index) => <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <AspectRatio ratio={16 / 9}>
                        <img src={image} alt={`Restaurant management system ${index + 1}`} className="w-full h-full object-cover" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" style={{
                    transform: 'translateZ(0)' // Hardware acceleration
                  }} />
                      </AspectRatio>
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
