
import React, { useEffect, useRef } from 'react';
import { preloadImages } from '@/utils/imagePreloader';

const TrustedRestaurants = () => {
  const logos = [
    {
      src: "/lovable-uploads/a8754738-56a4-4a8c-9f5c-3e927d004034.png",
      alt: "Taste of Tongue"
    },
    {
      src: "/lovable-uploads/b2a2c52b-6298-4bda-8fd2-e0cab6171584.png",
      alt: "Garage Cafe"
    },
    {
      src: "/lovable-uploads/9c58af8c-a78c-4160-a783-7f54412c5b7b.png",
      alt: "Bombay Restaurant & Cafe"
    },
    {
      src: "/lovable-uploads/9000dd52-fbe9-4430-8c38-eb0ab5e87e57.png",
      alt: "Seern Restaurant"
    },
    {
      src: "/lovable-uploads/c94d5f7d-130d-41cd-beb1-b2e68c9cbb68.png",
      alt: "The Centurion"
    },
    {
      src: "/lovable-uploads/8640f632-7915-47fa-b872-fc41d1a44c0b.png",
      alt: "Al-Baik"
    },
    {
      src: "/lovable-uploads/14839f2a-a0c1-41c9-be9b-29e27db33069.png",
      alt: "Shibara"
    },
    {
      src: "/lovable-uploads/e2451a50-0cd8-43cc-91e7-db85f6e18a53.png",
      alt: "La Pino'z Pizza"
    },
    {
      src: "/lovable-uploads/e5232452-9f07-430a-98e1-a6fa00f50235.png",
      alt: "Tamasha"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Preload all logo images with high priority
  useEffect(() => {
    const logoUrls = logos.map(logo => logo.src);
    preloadImages(logoUrls, 4)
      .catch(err => {
        console.error('Error preloading logo images:', err);
      });
  }, []);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Clone the logos for seamless scrolling
    const scrollWidth = scrollContainer.scrollWidth;
    
    // Same animation duration for all devices - faster
    // Using a fixed value for better performance and consistent speed
    const animationDuration = scrollWidth * 0.005;
    
    scrollContainer.style.animation = `scrollLogos ${animationDuration}s linear infinite`;
    
    // Add animation keyframes dynamically
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes scrollLogos {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - 1rem)); }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-medium text-center mb-8 text-swirl-gray">Trusted by Restaurants Worldwide</h3>
        
        <div className="relative w-full overflow-hidden" ref={containerRef}>
          <div className="flex animate-on-scroll" ref={scrollRef}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`logo-1-${index}`} 
                className="bg-white p-4 rounded-lg hover:shadow-md transition-all duration-300 flex-shrink-0 w-[130px] h-[90px] md:w-[150px] md:h-[100px] mx-3 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
            
            {/* Duplicate logos for continuous scrolling */}
            {logos.map((logo, index) => (
              <div 
                key={`logo-2-${index}`} 
                className="bg-white p-4 rounded-lg hover:shadow-md transition-all duration-300 flex-shrink-0 w-[130px] h-[90px] md:w-[150px] md:h-[100px] mx-3 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedRestaurants;
