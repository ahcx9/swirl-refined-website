import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { preloadImages } from '@/utils/imagePreloader';

const Hero = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = [
    { src: "/lovable-uploads/a8754738-56a4-4a8c-9f5c-3e927d004034.png", alt: "Taste of Tongue" },
    { src: "/lovable-uploads/b2a2c52b-6298-4bda-8fd2-e0cab6171584.png", alt: "Garage Cafe" },
    { src: "/lovable-uploads/9c58af8c-a78c-4160-a783-7f54412c5b7b.png", alt: "Bombay Restaurant & Cafe" },
    { src: "/lovable-uploads/9000dd52-fbe9-4430-8c38-eb0ab5e87e57.png", alt: "Seern Restaurant" },
    { src: "/lovable-uploads/c94d5f7d-130d-41cd-beb1-b2e68c9cbb68.png", alt: "The Centurion" },
    { src: "/lovable-uploads/8640f632-7915-47fa-b872-fc41d1a44c0b.png", alt: "Al-Baik" },
    { src: "/lovable-uploads/14839f2a-a0c1-41c9-be9b-29e27db33069.png", alt: "Shibara" },
    { src: "/lovable-uploads/e2451a50-0cd8-43cc-91e7-db85f6e18a53.png", alt: "La Pino'z Pizza" },
    { src: "/lovable-uploads/e5232452-9f07-430a-98e1-a6fa00f50235.png", alt: "Tamasha" }
  ];

  // Preload logos and hero image
  useEffect(() => {
    const logoUrls = logos.map(logo => logo.src);
    preloadImages([...logoUrls, "/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png"], 5);
  }, []);

  // Logo scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const animationDuration = 20;
    const mobileAnimationDuration = 10;
    
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes heroScrollLogos {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - 1rem)); }
      }
      
      .hero-logo-scroll-animation {
        animation: heroScrollLogos ${animationDuration}s linear infinite;
        will-change: transform;
      }
      
      @media (max-width: 768px) {
        .hero-logo-scroll-animation {
          animation: heroScrollLogos ${mobileAnimationDuration}s linear infinite;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    setTimeout(() => {
      if (scrollContainer) {
        scrollContainer.classList.add('hero-logo-scroll-animation');
      }
    }, 100);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className="pt-28 pb-8 md:pt-32 md:pb-12 min-h-[90vh] flex flex-col bg-gradient-to-br from-white via-gray-50/50 to-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl flex-grow flex flex-col">
        {/* Main Content - Two Column Layout */}
        <div className="flex-grow grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">Restaurant Tech Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 font-inter font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="text-foreground">A unified </span>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">restaurant tech platform</span>
              <span className="text-foreground"> to run, control, and scale your business</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 font-inter animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('hero.subtitle')}
            </p>
            
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="btn-conteiner scale-90 inline-block">
                <a 
                  className="btn-content" 
                  href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="btn-title">Book Demo</span>
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

          {/* Right Side - Hero Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 z-10 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg animate-bounce">
              All-in-One
            </div>
            <div className="absolute top-1/4 -right-4 z-10 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full shadow-lg">
              +25% Revenue
            </div>
            <div className="absolute -bottom-4 left-1/4 z-10 px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
              1000+ Restaurants
            </div>

            {/* Blue glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl -z-10 scale-110" />
            
            {/* Main image */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-primary/20 overflow-hidden border border-primary/10 hover:shadow-3xl transition-shadow duration-500">
              <img 
                src="/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png" 
                alt="Swirl Restaurant Management Dashboard" 
                className="w-full h-auto hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Trusted By Logos - Integrated into Hero */}
        <div className="mt-12 pt-8 border-t border-gray-200/50">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">Trusted by Restaurants Worldwide</p>
          
          <div className="relative w-full overflow-hidden">
            <div className="flex" ref={scrollRef}>
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div 
                  key={`logo-1-${index}`} 
                  className="bg-white/50 px-4 py-3 rounded-lg flex-shrink-0 w-[120px] h-[80px] md:w-[140px] md:h-[90px] mx-3 flex items-center justify-center"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    loading="eager"
                    crossOrigin="anonymous"
                    decoding="async"
                  />
                </div>
              ))}
              
              {/* Duplicate logos for continuous scrolling */}
              {logos.map((logo, index) => (
                <div 
                  key={`logo-2-${index}`} 
                  className="bg-white/50 px-4 py-3 rounded-lg flex-shrink-0 w-[120px] h-[80px] md:w-[140px] md:h-[90px] mx-3 flex items-center justify-center"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    loading="eager" 
                    crossOrigin="anonymous"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
