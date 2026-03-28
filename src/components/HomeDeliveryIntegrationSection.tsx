import React, { useState, useEffect, useRef } from 'react';
import { Zap, RefreshCw, Bell, Clock, Monitor, ArrowDown, FileBarChart, DollarSign, TrendingUp, Receipt } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SwirlCTA from '@/components/SwirlCTA';

const allApps = [
  { name: 'Noon Food', logo: '/lovable-uploads/noon-food-logo.png' },
  { name: 'Careem', logo: '/lovable-uploads/a2ee4e8c-8b4d-4521-a82a-39df6b6529aa.png' },
  { name: 'Zomato', logo: '/lovable-uploads/zomato-logo.jpg' },
  { name: 'Keeta', logo: '/lovable-uploads/keeta-logo.png' },
  { name: 'Jahez', logo: '/lovable-uploads/jahez-logo.png' },
  { name: 'HungerStation', logo: '/lovable-uploads/hungerstation-logo.png' },
  { name: 'UberEats', logo: '/lovable-uploads/ubereats-logo.png' },
  { name: 'Swiggy', logo: '/lovable-uploads/swiggy-logo.png' },
  { name: 'Talabat', logo: '/lovable-uploads/talabat-logo.webp' },
  { name: 'Deliveroo', logo: '/lovable-uploads/0e8b0620-df50-4144-bbd0-9c5eed7e00f5.png' },
];

const topApps = allApps.slice(0, 5);
const bottomApps = allApps.slice(5);

const features = [
  { icon: Zap, title: 'Auto-Accept Orders', description: 'Orders flow directly to POS without manual entry' },
  { icon: RefreshCw, title: 'Real-Time Sync', description: 'Menu & availability update across all platforms' },
  { icon: Bell, title: 'Instant Notifications', description: 'Get alerted the moment an order comes in' },
  { icon: Clock, title: 'Faster Fulfillment', description: 'Automated kitchen routing reduces prep time' },
  { icon: FileBarChart, title: 'Reconciliation Reports', description: 'Detailed platform-wise revenue & commission breakdown' },
];

/* ─── Shared Logo Card ─── */
const LogoCard = ({ app, isVisible, delay, size = 'md' }: { app: { name: string; logo: string }; isVisible: boolean; delay: number; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-14 h-14 rounded-xl',
    md: 'w-16 h-16 rounded-xl',
    lg: 'w-[72px] h-[72px] rounded-2xl',
  };
  const imgSizes = { sm: 'w-8 h-8', md: 'w-9 h-9', lg: 'w-10 h-10' };

  return (
    <div
      className={`flex flex-col items-center transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 scale-90'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={`relative ${sizeClasses[size]} bg-white border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group`}>
        <img src={app.logo} alt={app.name} className={`${imgSizes[size]} object-contain`} loading="lazy" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-[1.5px] border-white flex items-center justify-center">
          <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <p className="text-[10px] md:text-xs font-medium text-muted-foreground text-center mt-1.5 leading-tight">{app.name}</p>
    </div>
  );
};

/* ─── Hub Card (shared between layouts) ─── */
const HubCard = ({ isVisible, className = '' }: { isVisible: boolean; className?: string }) => (
  <div className={`relative transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${className}`}>
    <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl scale-[1.8]" />
    <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl scale-[1.4]" />
    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center shadow-xl shadow-primary/25 border border-primary/30">
      <Monitor className="w-8 h-8 md:w-9 md:h-9 text-white/90 mb-1" />
      <span className="text-white font-black text-base md:text-lg tracking-tight leading-none">swirl</span>
      <span className="text-white/50 text-[10px] font-semibold mt-0.5">POS</span>
    </div>
  </div>
);

/* ─── DESKTOP: Orbit Layout ─── */
const DesktopOrbitLayout = ({ isVisible }: { isVisible: boolean }) => {
  const orbitRadius = 220;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`relative mx-auto mb-14 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ width: orbitRadius * 2 + 120, height: orbitRadius * 2 + 120 }}
    >
      {/* SVG connector lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${orbitRadius * 2 + 120} ${orbitRadius * 2 + 120}`}>
        {allApps.map((_, i) => {
          const angle = (i * 36) - 90;
          const rad = (angle * Math.PI) / 180;
          const cx = orbitRadius + 60;
          const cy = orbitRadius + 60;
          const x = cx + orbitRadius * Math.cos(rad);
          const y = cy + orbitRadius * Math.sin(rad);
          const midX = cx + (x - cx) * 0.5 + (y - cy) * 0.15;
          const midY = cy + (y - cy) * 0.5 - (x - cx) * 0.15;
          const dimmed = hoveredIndex !== null && hoveredIndex !== i;

          return (
            <g key={i} className={`transition-opacity duration-300 ${dimmed ? 'opacity-20' : 'opacity-100'}`}>
              <path
                d={`M ${cx} ${cy} Q ${midX} ${midY} ${x} ${y}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity={0.3}
              />
              {/* Animated pulse dot */}
              <circle r="3" fill="hsl(var(--primary))" opacity={0.6}>
                <animateMotion
                  dur={`${2 + i * 0.15}s`}
                  repeatCount="indefinite"
                  path={`M ${x} ${y} Q ${midX} ${midY} ${cx} ${cy}`}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <HubCard isVisible={isVisible} />
      </div>

      {/* Orbiting logos */}
      {allApps.map((app, i) => {
        const angle = (i * 36) - 90;
        const rad = (angle * Math.PI) / 180;
        const x = orbitRadius * Math.cos(rad);
        const y = orbitRadius * Math.sin(rad);

        return (
          <div
            key={app.name}
            className="absolute z-20"
            style={{
              left: `calc(50% + ${x}px - 36px)`,
              top: `calc(50% + ${y}px - 36px)`,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <LogoCard app={app} isVisible={isVisible} delay={0.3 + i * 0.06} size="lg" />
          </div>
        );
      })}
    </div>
  );
};

/* ─── MOBILE/TABLET: Grid Layout ─── */
const MobileGridLayout = ({ isVisible }: { isVisible: boolean }) => (
  <div className={`max-w-xl mx-auto mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
    {/* Top Row */}
    <div className="grid grid-cols-5 gap-3 sm:gap-5 justify-items-center">
      {topApps.map((app, i) => (
        <LogoCard key={app.name} app={app} isVisible={isVisible} delay={0.3 + i * 0.06} size="sm" />
      ))}
    </div>

    {/* Connector arrows down */}
    <div className={`flex justify-center py-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-center gap-6 sm:gap-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-[3px]">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="w-1 h-1 rounded-full bg-primary/40" style={{ animation: isVisible ? 'pulse 1.5s ease-in-out infinite' : 'none', animationDelay: `${j * 0.2 + i * 0.1}s` }} />
            ))}
            <ArrowDown className="w-3 h-3 text-primary/30" />
          </div>
        ))}
      </div>
    </div>

    {/* Center Hub */}
    <div className="flex justify-center">
      <HubCard isVisible={isVisible} className="!w-24 !h-24 sm:!w-28 sm:!h-28 [&>div:last-child]:!w-24 [&>div:last-child]:!h-24 sm:[&>div:last-child]:!w-28 sm:[&>div:last-child]:!h-28" />
    </div>

    {/* Connector arrows up */}
    <div className={`flex justify-center py-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-center gap-6 sm:gap-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col-reverse items-center gap-[3px]">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="w-1 h-1 rounded-full bg-primary/40" style={{ animation: isVisible ? 'pulse 1.5s ease-in-out infinite' : 'none', animationDelay: `${(2 - j) * 0.2 + i * 0.1}s` }} />
            ))}
            <div className="rotate-180"><ArrowDown className="w-3 h-3 text-primary/30" /></div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Row */}
    <div className="grid grid-cols-5 gap-3 sm:gap-5 justify-items-center">
      {bottomApps.map((app, i) => (
        <LogoCard key={app.name} app={app} isVisible={isVisible} delay={0.6 + i * 0.06} size="sm" />
      ))}
    </div>
  </div>
);

/* ─── Main Section ─── */
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

        {/* Desktop: Orbit | Mobile/Tablet: Grid */}
        <div className="hidden lg:block">
          <DesktopOrbitLayout isVisible={isVisible} />
        </div>
        <div className="lg:hidden">
          <MobileGridLayout isVisible={isVisible} />
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
