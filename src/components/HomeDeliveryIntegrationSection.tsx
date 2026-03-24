import React, { useState, useEffect, useRef } from 'react';
import { Zap, RefreshCw, Bell, Clock, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SwirlCTA from '@/components/SwirlCTA';

const deliveryApps = [
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

const features = [
  { icon: Zap, title: 'Auto-Accept Orders', description: 'Orders flow directly to POS without manual entry' },
  { icon: RefreshCw, title: 'Real-Time Sync', description: 'Menu & availability update across all platforms' },
  { icon: Bell, title: 'Instant Notifications', description: 'Get alerted the moment an order comes in' },
  { icon: Clock, title: 'Faster Fulfillment', description: 'Automated kitchen routing reduces prep time' },
];

/* ── Mobile / Tablet layout ── */
const MobileDeliveryLayout = ({ isVisible }: { isVisible: boolean }) => (
  <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
    {/* Central Hub */}
    <div className="flex justify-center mb-8">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl scale-150" />
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center shadow-lg shadow-primary/25">
          <Monitor className="w-6 h-6 text-white/90 mb-0.5" />
          <span className="text-white font-black text-xs tracking-tight leading-none">swirl</span>
          <span className="text-white/50 text-[8px] font-semibold">POS</span>
        </div>
      </div>
    </div>

    {/* Connecting lines visual hint */}
    <div className="flex justify-center mb-4">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </div>

    {/* Logo Grid — 5 columns on tablet, 5 on mobile for 2 clean rows */}
    <div className="grid grid-cols-5 gap-3 sm:gap-4 max-w-md mx-auto mb-3">
      {deliveryApps.map((app, i) => (
        <div
          key={app.name}
          className={`flex flex-col items-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ transitionDelay: `${0.4 + i * 0.06}s` }}
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-border/40 shadow-sm flex items-center justify-center hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <img src={app.logo} alt={app.name} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" loading="lazy" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white" />
          </div>
          <p className="text-[9px] sm:text-[10px] font-medium text-muted-foreground text-center mt-1.5 leading-tight">{app.name}</p>
        </div>
      ))}
    </div>

    <p className="text-center text-sm font-medium text-muted-foreground mt-4">
      One Hub. All Platforms Connected.
    </p>
  </div>
);

/* ── Desktop orbit layout ── */
const DesktopOrbitLayout = ({ isVisible }: { isVisible: boolean }) => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);
  const [centerHovered, setCenterHovered] = useState(false);

  const cx = 400;
  const cy = 260;
  const radius = 200;

  const getPosition = (index: number) => {
    const angleDeg = -90 + (360 / deliveryApps.length) * index;
    const angleRad = (angleDeg * Math.PI) / 180;
    return { x: cx + radius * Math.cos(angleRad), y: cy + radius * Math.sin(angleRad) };
  };

  const getCurvedPath = (x: number, y: number) => {
    const dx = x - cx;
    const dy = y - cy;
    const len = Math.sqrt(dx * dx + dy * dy);
    const mx = (x + cx) / 2;
    const my = (y + cy) / 2;
    const perpX = (-dy / len) * 25;
    const perpY = (dx / len) * 25;
    return `M ${x} ${y} Q ${mx + perpX} ${my + perpY}, ${cx} ${cy}`;
  };

  return (
    <div className={`relative max-w-[800px] mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <svg viewBox="0 0 800 520" className="w-full h-auto">
        <defs>
          <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217,100%,40%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(217,100%,40%)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="connGradHover" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217,100%,50%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(217,100%,40%)" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(217,100%,48%)" />
            <stop offset="100%" stopColor="hsl(217,100%,35%)" />
          </linearGradient>
          <filter id="hubGlow">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="softGlow"><feGaussianBlur stdDeviation="25" /></filter>
        </defs>

        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="hsl(217,100%,40%)" strokeWidth="0.5" opacity="0.08" strokeDasharray="4,8" />
        <circle cx={cx} cy={cy} r="100" fill="hsl(217,100%,40%)" opacity="0.04" filter="url(#softGlow)" />

        {deliveryApps.map((_, i) => {
          const pos = getPosition(i);
          const isHovered = hoveredLogo === i;
          const isDimmed = hoveredLogo !== null && !isHovered && !centerHovered;
          const path = getCurvedPath(pos.x, pos.y);
          return (
            <g key={`conn-${i}`}>
              <path d={path} fill="none"
                stroke={isHovered || centerHovered ? 'url(#connGradHover)' : 'url(#connGrad)'}
                strokeWidth={isHovered || centerHovered ? 2 : 1.2}
                opacity={isDimmed ? 0.12 : 1}
                style={{
                  strokeDasharray: isVisible ? '0' : '600',
                  strokeDashoffset: isVisible ? '0' : '600',
                  transition: `stroke-dasharray 1.2s ease ${0.4 + i * 0.08}s, stroke-dashoffset 1.2s ease ${0.4 + i * 0.08}s, opacity 0.3s ease, stroke-width 0.3s ease`,
                }}
              />
              {isVisible && (
                <circle r="2.5" fill="hsl(217,100%,55%)" opacity={isDimmed ? 0.08 : 0.6}>
                  <animateMotion dur={`${3 + i * 0.2}s`} repeatCount="indefinite" path={path} />
                </circle>
              )}
            </g>
          );
        })}

        {/* Center Hub */}
        <g onMouseEnter={() => setCenterHovered(true)} onMouseLeave={() => setCenterHovered(false)} className="cursor-pointer">
          <circle cx={cx} cy={cy} r="62" fill="none" stroke="hsl(217,100%,40%)" strokeWidth="1" opacity="0.12">
            {isVisible && <animate attributeName="r" values="62;72;62" dur="3s" repeatCount="indefinite" />}
            {isVisible && <animate attributeName="opacity" values="0.12;0.04;0.12" dur="3s" repeatCount="indefinite" />}
          </circle>
          <rect x={cx - 52} y={cy - 52} width="104" height="104" rx="26" fill="url(#hubGrad)" filter="url(#hubGlow)" />
          <foreignObject x={cx - 52} y={cy - 52} width="104" height="104">
            <div className="w-full h-full flex flex-col items-center justify-center select-none">
              <Monitor className="w-7 h-7 text-white/90 mb-1" />
              <span className="text-white font-black text-[15px] tracking-tight leading-none">swirl</span>
              <span className="text-white/50 text-[9px] font-semibold mt-0.5">POS</span>
            </div>
          </foreignObject>
        </g>

        {/* Logo cards */}
        {deliveryApps.map((app, i) => {
          const pos = getPosition(i);
          const isHovered = hoveredLogo === i;
          const isDimmed = hoveredLogo !== null && !isHovered;
          const size = 60;
          const delay = 0.3 + i * 0.07;
          return (
            <foreignObject key={`logo-${i}`} x={pos.x - size / 2} y={pos.y - size / 2}
              width={size + 4} height={size + 18} className="overflow-visible"
              style={{
                opacity: isVisible ? (isDimmed ? 0.35 : 1) : 0,
                transform: isVisible ? `scale(${isHovered ? 1.1 : 1})` : 'scale(0.7)',
                transformOrigin: `${pos.x}px ${pos.y}px`,
                transition: `opacity 0.5s ease ${delay}s, transform 0.35s ease`,
              }}
            >
              <div className="relative" onMouseEnter={() => setHoveredLogo(i)} onMouseLeave={() => setHoveredLogo(null)}>
                <div className={`w-[60px] h-[60px] rounded-[16px] flex items-center justify-center bg-white border backdrop-blur-sm transition-all duration-300 ${isHovered ? 'shadow-xl shadow-primary/15 border-primary/30 -translate-y-0.5' : 'shadow-md border-border/40'}`}>
                  <img src={app.logo} alt={app.name} className="w-9 h-9 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-[1.5px] border-white flex items-center justify-center">
                    <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-[8px] font-medium text-muted-foreground text-center mt-1 leading-tight whitespace-nowrap">{app.name}</p>
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-foreground text-primary-foreground text-[9px] font-medium whitespace-nowrap pointer-events-none transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                  Live Integration
                </div>
              </div>
            </foreignObject>
          );
        })}
      </svg>
      <p className={`text-center text-sm md:text-base font-medium text-muted-foreground -mt-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        One Hub. All Platforms Connected.
      </p>
    </div>
  );
};

/* ── Main Section ── */
const HomeDeliveryIntegrationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="delivery-integration" className="py-12 md:py-20 lg:py-28 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 0.5px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] hidden md:block" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] hidden md:block" />

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
            Connect global and regional delivery platforms directly to your POS.
            No more tablet juggling — every order flows in automatically.
          </p>
        </div>

        {/* Mobile/Tablet: grid layout | Desktop: orbit */}
        <div className="lg:hidden mb-8">
          <MobileDeliveryLayout isVisible={isVisible} />
        </div>
        <div className="hidden lg:block">
          <DesktopOrbitLayout isVisible={isVisible} />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 md:mt-0 mb-10 md:mb-12">
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
