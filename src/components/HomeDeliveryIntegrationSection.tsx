import React, { useState, useEffect, useRef } from 'react';
import { Zap, RefreshCw, Bell, Clock, Monitor, ArrowDown, ArrowUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SwirlCTA from '@/components/SwirlCTA';

const topApps = [
  { name: 'Noon Food', logo: '/lovable-uploads/noon-food-logo.png' },
  { name: 'Careem', logo: '/lovable-uploads/a2ee4e8c-8b4d-4521-a82a-39df6b6529aa.png' },
  { name: 'Zomato', logo: '/lovable-uploads/zomato-logo.jpg' },
  { name: 'Keeta', logo: '/lovable-uploads/keeta-logo.png' },
  { name: 'Jahez', logo: '/lovable-uploads/jahez-logo.png' },
];

const bottomApps = [
  { name: 'HungerStation', logo: '/lovable-uploads/hungerstation-logo.png' },
  { name: 'UberEats', logo: '/lovable-uploads/ubereats-logo.png' },
  { name: 'Swiggy', logo: '/lovable-uploads/swiggy-logo.png' },
  { name: 'Talabat', logo: '/lovable-uploads/talabat-logo.webp' },
  { name: 'Deliveroo', logo: '/lovable-uploads/0e8b0620-df50-4144-bbd0-9c5eed7e00f5.png' },
];

const features = [
  { icon: Zap, title: 'Auto-Accept Orders', description: 'Orders flow directly to POS without manual entry' },
  { icon: RefreshCw, title: 'Real-Time Sync', description: 'Menu & availability update across all platforms' },
  { icon: Bell, title: 'Instant Notifications', description: 'Get alerted the moment an order comes in' },
  { icon: Clock, title: 'Faster Fulfillment', description: 'Automated kitchen routing reduces prep time' },
];

const LogoCard = ({ app, index, isVisible, delay }: { app: { name: string; logo: string }; index: number; isVisible: boolean; delay: number }) => (
  <div
    className={`flex flex-col items-center transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 scale-90'}`}
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-xl md:rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group">
      <img src={app.logo} alt={app.name} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" loading="lazy" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-[1.5px] border-white flex items-center justify-center">
        <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-muted-foreground text-center mt-1.5 leading-tight">{app.name}</p>
  </div>
);

/* Animated connector arrows pointing toward center */
const ConnectorArrows = ({ direction, isVisible }: { direction: 'down' | 'up'; isVisible: boolean }) => (
  <div className={`flex justify-center py-3 md:py-5 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <div className="flex items-center gap-6 sm:gap-10 md:gap-14">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          {/* Animated dots flowing toward center */}
          <div className={`flex flex-col items-center gap-[3px] ${direction === 'down' ? '' : 'flex-col-reverse'}`}>
            {[...Array(3)].map((_, j) => (
              <div
                key={j}
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary/40"
                style={{
                  animation: isVisible ? `pulse 1.5s ease-in-out infinite` : 'none',
                  animationDelay: `${(direction === 'down' ? j : 2 - j) * 0.2 + i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <div className={`text-primary/30 ${direction === 'down' ? '' : 'rotate-180'}`}>
            <ArrowDown className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HomeDeliveryIntegrationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="delivery-integration" className="py-12 md:py-20 lg:py-28 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/20 to-background" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 0.5px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 md:mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide">Delivery Integration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-bold mb-4 text-foreground leading-tight">
            Every Delivery App
            <div className="h-1.5 md:h-3" />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">One POS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every delivery order, routed into one central POS — no more tablet juggling.
          </p>
        </div>

        {/* ── Hub Visualization: 5 above → center → 5 below ── */}
        <div className={`max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-14 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          
          {/* Top Row — 5 logos */}
          <div className="grid grid-cols-5 gap-3 sm:gap-5 md:gap-8 justify-items-center">
            {topApps.map((app, i) => (
              <LogoCard key={app.name} app={app} index={i} isVisible={isVisible} delay={0.3 + i * 0.06} />
            ))}
          </div>

          {/* Arrows pointing DOWN toward hub */}
          <ConnectorArrows direction="down" isVisible={isVisible} />

          {/* Center Hub */}
          <div className="flex justify-center">
            <div className={`relative transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-primary/20 blur-3xl scale-[1.8]" />
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-primary/10 blur-xl scale-[1.4]" />
              
              {/* Hub Card */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center shadow-xl shadow-primary/25 border border-primary/30">
                <Monitor className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white/90 mb-1" />
                <span className="text-white font-black text-sm sm:text-base md:text-lg tracking-tight leading-none">swirl</span>
                <span className="text-white/50 text-[9px] sm:text-[10px] font-semibold mt-0.5">POS</span>
              </div>
            </div>
          </div>

          {/* Arrows pointing UP toward hub */}
          <ConnectorArrows direction="up" isVisible={isVisible} />

          {/* Bottom Row — 5 logos */}
          <div className="grid grid-cols-5 gap-3 sm:gap-5 md:gap-8 justify-items-center">
            {bottomApps.map((app, i) => (
              <LogoCard key={app.name} app={app} index={i} isVisible={isVisible} delay={0.6 + i * 0.06} />
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className={`text-center text-sm md:text-base font-medium text-muted-foreground mb-8 md:mb-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          One Hub. All Platforms Connected.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 md:mb-12">
          {features.map((feature, index) => (
            <Card key={index}
              className={`bg-white/80 backdrop-blur-sm border border-border/40 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/8 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-xs sm:text-sm">{feature.title}</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <SwirlCTA />
        </div>
      </div>
    </section>
  );
};

export default HomeDeliveryIntegrationSection;
