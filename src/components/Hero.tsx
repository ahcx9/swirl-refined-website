import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const logos = [
  { src: "/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png", alt: "Seern Restaurant" },
  { src: "/lovable-uploads/a1037d43-9706-4594-98e2-b879fa17ae5c.png", alt: "Uccelli Café" },
  { src: "/lovable-uploads/6481954b-0983-47cf-bc73-2690acfe8ce2.png", alt: "Bombay Restaurant & Cafe" },
  { src: "/lovable-uploads/808d0fa7-3d2e-4718-a97b-62f1df2f0792.png", alt: "La Pino'z Pizza" },
  { src: "/lovable-uploads/a7a29f9c-6293-46ad-bb73-77648ef03c6a.png", alt: "Kaleda Traditional Indian Taste" },
  { src: "/lovable-uploads/82bc695f-d01b-4b96-8cac-e29f2c43dddb.png", alt: "Yalla Habibi Restaurant" },
  { src: "/lovable-uploads/0e8b0620-df50-4144-bbd0-9c5eed7e00f5.png", alt: "Falafel Town" },
  { src: "/lovable-uploads/2e0f4208-a025-4a95-a266-cf5c3b63fb68.png", alt: "DODO Crepe" },
  { src: "/lovable-uploads/a8754738-56a4-4a8c-9f5c-3e927d004034.png", alt: "Chai Wala Cafeteria" },
  { src: "/lovable-uploads/b2a2c52b-6298-4bda-8fd2-e0cab6171584.png", alt: "Al Koos Restaurant" },
  { src: "/lovable-uploads/72bc496f-dfad-4fef-a00b-a049a08c0700.png", alt: "Rumali Roti Restaurant" },
  { src: "/lovable-uploads/74058c9d-fba3-4dc8-b1e2-5c34716bd074.png", alt: "Walnut World Bakery & Patisserie" },
  { src: "/lovable-uploads/ae182218-4fea-45b8-840d-5752adf12d26.png", alt: "Ambani Restaurant" },
  { src: "/lovable-uploads/db359be2-d8e5-4ea7-bd57-2ca8359f3727.png", alt: "Food Book" },
  { src: "/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png", alt: "Quarter Plate" },
];

const Hero: React.FC = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject smooth auto-scroll animation for logos
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes logo-scroll-premium {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .logo-scroll-premium {
        animation: logo-scroll-premium 40s linear infinite;
      }
      .logo-scroll-premium:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb - top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
        {/* Secondary orb - bottom left */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-muted/50 via-primary/5 to-transparent rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />
      </div>

      {/* Main Hero Content */}
      <div className="container-custom relative z-10 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground mb-6 animate-fade-in">
              A unified{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                restaurant tech platform
              </span>{' '}
              to run, control, and scale your business
            </h1>
            
            {/* Sub-headline */}
            <p className="text-lg lg:text-xl text-muted-foreground font-normal max-w-[540px] mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              POS, QR ordering, inventory, CRM, analytics, and AI insights — all connected in one powerful system.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a
                href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 text-base font-semibold border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Built for multi-location restaurants</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>UAE & KSA compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '600ms' }}>
            {/* Main Dashboard Card */}
            <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 border border-border/50 bg-background transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/lovable-uploads/pos-hardware-setup.png" 
                alt="Swirl POS Dashboard" 
                className="w-full h-auto"
                width={800}
                height={600}
                loading="eager"
              />
            </div>

            {/* Floating QR Card - Top Right */}
            <div className="absolute -top-4 -right-4 lg:-right-8 z-30 w-32 lg:w-40 rounded-xl overflow-hidden shadow-xl shadow-foreground/10 border border-border/50 bg-background animate-float-slow transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="p-3 bg-gradient-to-br from-primary/5 to-background">
                <div className="text-xs font-semibold text-primary mb-2">QR Ordering</div>
                <div className="bg-muted rounded-lg p-2 aspect-square flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 rounded grid grid-cols-3 gap-0.5 p-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-foreground/80 rounded-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Analytics Card - Bottom Left */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 z-30 w-36 lg:w-44 rounded-xl overflow-hidden shadow-xl shadow-foreground/10 border border-border/50 bg-background animate-float-delayed transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="p-3 bg-gradient-to-br from-background to-primary/5">
                <div className="text-xs font-semibold text-foreground mb-2">Live Analytics</div>
                <div className="flex items-end gap-1 h-12">
                  {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm transition-all duration-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <span className="text-xs font-bold text-green-600">+24%</span>
                  <span className="text-[10px] text-muted-foreground">vs last week</span>
                </div>
              </div>
            </div>

            {/* Subtle glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Trust Section - Logo Strip */}
      <div className="relative z-10 py-12 border-t border-border/50 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container-custom">
          {/* Micro-headline */}
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase animate-fade-in">
            Trusted by growing restaurant brands across the GCC
          </p>
          
          {/* Logo Strip */}
          <div className="relative overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling logos */}
            <div 
              ref={logoContainerRef}
              className="flex logo-scroll-premium"
            >
              {/* Double the logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-8 lg:px-12 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 lg:h-10 w-auto object-contain grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
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
