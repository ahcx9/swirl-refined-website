import React, { useEffect, useRef } from 'react';
import { 
  CreditCard, 
  QrCode, 
  Package, 
  Users, 
  Link as LinkIcon, 
  Sparkles,
  Check,
  BarChart3,
  Building2,
  Receipt,
  Box,
  TrendingUp
} from 'lucide-react';
import { Button } from './ui/button';
import CustomCTAButton from './CustomCTAButton';

const logos = [
  { src: "/lovable-uploads/9623693d-a2e0-48ea-8d68-911775324f30.png", alt: "Seern Restaurant" },
  { src: "/lovable-uploads/72bc496f-dfad-4fef-a00b-a049a08c0700.png", alt: "Uccelli Café" },
  { src: "/lovable-uploads/a1037d43-9706-4594-98e2-b879fa17ae5c.png", alt: "Bombay Restaurant & Cafe" },
  { src: "/lovable-uploads/4127f4ed-f4a1-452d-bdba-5bc27d6fb8bc.png", alt: "La Pino'z Pizza" },
  { src: "/lovable-uploads/6e0d0241-ba77-477a-84cd-a700f8183303.png", alt: "Kaleda Traditional Indian Taste" },
  { src: "/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png", alt: "Curry in Hurry" },
  { src: "/lovable-uploads/4a4a7e21-2319-4b47-89c2-c17befc8735c.png", alt: "Levantine Restaurant" },
  { src: "/lovable-uploads/35e9fd73-7370-41cc-89e5-6259df112af0.png", alt: "Shababeek" },
  { src: "/lovable-uploads/6481954b-0983-47cf-bc73-2690acfe8ce2.png", alt: "Al Safadi" },
  { src: "/lovable-uploads/b03f39e1-1bbe-4212-88bc-f7f70b2ba690.png", alt: "Mingzhu Chinese Restaurant" },
  { src: "/lovable-uploads/92d5e15f-318e-46e8-9d20-bdca69d36285.png", alt: "Bawadi Express" },
  { src: "/lovable-uploads/b95511df-1fca-4f8a-902e-7e6457ea3e70.png", alt: "Walnut World Bakery" },
  { src: "/lovable-uploads/ae182218-4fea-45b8-840d-5752adf12d26.png", alt: "Ambani Restaurant" },
  { src: "/lovable-uploads/cebfea27-8e23-43d1-8ca2-44bb562429f9.png", alt: "Food Book" },
  { src: "/lovable-uploads/db359be2-d8e5-4ea7-bd57-2ca8359f3727.png", alt: "Quarter Plate" },
];

const featureStrip = [
  { icon: CreditCard, label: "POS & Billing" },
  { icon: QrCode, label: "QR Ordering" },
  { icon: Package, label: "Inventory" },
  { icon: Users, label: "CRM & Loyalty" },
  { icon: LinkIcon, label: "Aggregators" },
  { icon: Sparkles, label: "AI Insights" },
];

const floatingCards = [
  { 
    icon: Receipt, 
    title: "Live POS Billing", 
    badge: "Active",
    badgeColor: "bg-green-500",
    position: "top-4 -left-4 lg:top-8 lg:-left-8",
    delay: "0s"
  },
  { 
    icon: Box, 
    title: "Smart Inventory", 
    badge: "Auto-reorder",
    badgeColor: "bg-primary",
    position: "top-0 -right-4 lg:top-4 lg:-right-8",
    delay: "0.5s"
  },
  { 
    icon: TrendingUp, 
    title: "Real-time Sales", 
    badge: "+24% today",
    badgeColor: "bg-emerald-500",
    position: "bottom-32 -left-4 lg:bottom-36 lg:-left-12",
    delay: "1s"
  },
  { 
    icon: Sparkles, 
    title: "AI Insights", 
    badge: "Predictions",
    badgeColor: "bg-violet-500",
    position: "bottom-20 -right-4 lg:bottom-24 lg:-right-8",
    delay: "1.5s"
  },
  { 
    icon: Building2, 
    title: "Multi-Branch", 
    badge: "12 outlets",
    badgeColor: "bg-primary",
    position: "-bottom-2 left-1/2 -translate-x-1/2",
    delay: "2s"
  },
];

const Hero: React.FC = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes logo-scroll-hero {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .logo-scroll-hero {
        animation: logo-scroll-hero 40s linear infinite;
      }
      .logo-scroll-hero:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20 pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230052CC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight animate-fade-in">
              Run, Control & Scale Your Restaurant —{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                From One Powerful Platform
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              POS, QR Ordering, Inventory, CRM, Analytics & AI Insights — fully connected to simplify operations and accelerate growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <CustomCTAButton href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Swirl">
                Book a Free Demo
              </CustomCTAButton>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToFeatures}
                className="h-12 px-6 text-base font-medium border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300"
              >
                Explore the Platform
              </Button>
            </div>

            {/* Micro-Trust Signals */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground animate-fade-in animation-delay-600">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Trusted by growing brands across UAE & KSA</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Go live in days, not months</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Visual */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[500px] animate-fade-in animation-delay-600 order-1 lg:order-2">
            {/* Main Dashboard Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-60" />
                <img 
                  src="/lovable-uploads/2bbf790c-35c7-4511-a4a7-7d48e4faf0f2.png" 
                  alt="Swirl POS Dashboard"
                  className="relative w-full h-auto rounded-2xl shadow-2xl shadow-primary/20 border border-white/50"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating Feature Cards */}
            {floatingCards.map((card, index) => (
              <div
                key={index}
                className={`absolute ${card.position} z-20 hidden md:block`}
                style={{ 
                  animationDelay: card.delay,
                }}
              >
                <div 
                  className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl shadow-primary/10 border border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  style={{
                    animation: `float-slow 6s ease-in-out infinite`,
                    animationDelay: card.delay,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{card.title}</p>
                      <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full text-white ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Strip - Compact Grid */}
        <div className="mt-8 lg:mt-12 mb-8 animate-fade-in animation-delay-800">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 max-w-4xl mx-auto">
            {featureStrip.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Trust Strip */}
        <div className="relative animate-fade-in animation-delay-1000">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Trusted by restaurants, cafés & cloud kitchens
          </p>
          
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-6 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-6 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden" ref={logoContainerRef}>
            <div className="logo-scroll-hero flex items-center gap-12 w-max">
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 h-8 md:h-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain"
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
