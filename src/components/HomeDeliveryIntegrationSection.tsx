import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, RefreshCw, Bell, Clock, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomeDeliveryIntegrationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);
  const [centerHovered, setCenterHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const deliveryApps = [
    { name: 'Deliveroo', logo: '/lovable-uploads/0e8b0620-df50-4144-bbd0-9c5eed7e00f5.png' },
    { name: 'Noon Food', logo: '/lovable-uploads/noon-food-logo.png' },
    { name: 'Careem', logo: '/lovable-uploads/a2ee4e8c-8b4d-4521-a82a-39df6b6529aa.png' },
    { name: 'Talabat', logo: '/lovable-uploads/talabat-logo.webp' },
    { name: 'Zomato', logo: '/lovable-uploads/zomato-logo.jpg' },
    { name: 'Swiggy', logo: '/lovable-uploads/swiggy-logo.png' },
    { name: 'UberEats', logo: null, initials: 'UE' },
    { name: 'HungerStation', logo: '/lovable-uploads/hungerstation-logo.png' },
    { name: 'Jahez', logo: '/lovable-uploads/jahez-logo.png' },
    { name: 'Keeta', logo: '/lovable-uploads/keeta-logo.png' },
  ];

  // 3 tiers: top arc (3), middle row (3), bottom arc (4)
  const tiers = [
    { indices: [0, 1, 2], radiusX: 280, radiusY: 180, startAngle: 150, endAngle: 30, yOffset: 0 },
    { indices: [3, 4, 5], radiusX: 320, radiusY: 60, startAngle: 165, endAngle: 15, yOffset: 40 },
    { indices: [6, 7, 8, 9], radiusX: 300, radiusY: 160, startAngle: 200, endAngle: 340, yOffset: 80 },
  ];

  const centerX = 400;
  const centerY = 240;

  const getLogoPosition = (tierIdx: number, posInTier: number) => {
    const tier = tiers[tierIdx];
    const count = tier.indices.length;
    const t = count === 1 ? 0.5 : posInTier / (count - 1);
    const angleDeg = tier.startAngle + t * (tier.endAngle - tier.startAngle);
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = centerX + tier.radiusX * Math.cos(angleRad);
    const y = centerY - tier.radiusY * Math.sin(angleRad) + tier.yOffset;
    return { x, y };
  };

  // Build flat list of positions
  const logoPositions = tiers.flatMap((tier, tierIdx) =>
    tier.indices.map((_, posInTier) => getLogoPosition(tierIdx, posInTier))
  );

  const features = [
    { icon: Zap, title: 'Auto-Accept Orders', description: 'Orders flow directly to POS without manual entry' },
    { icon: RefreshCw, title: 'Real-Time Sync', description: 'Menu & availability update across all platforms' },
    { icon: Bell, title: 'Instant Notifications', description: 'Get alerted the moment an order comes in' },
    { icon: Clock, title: 'Faster Fulfillment', description: 'Automated kitchen routing reduces prep time' },
  ];

  // Generate smooth curved path from logo to center
  const getCurvedPath = (x: number, y: number) => {
    const midX = (x + centerX) / 2;
    const midY = Math.min(y, centerY) - 30;
    return `M ${x} ${y} Q ${midX} ${midY}, ${centerX} ${centerY}`;
  };

  return (
    <section
      ref={sectionRef}
      id="delivery-integration"
      className="py-20 md:py-32 overflow-hidden relative"
    >
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/40 to-background" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Floating blurred shapes */}
      <div className="absolute top-20 left-[15%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-primary/3 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide">Delivery Integration</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold mb-5 text-foreground leading-tight">
            Every Delivery App.
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">One Unified Hub.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect global and regional delivery platforms directly to your POS.
            No more tablet juggling — every order flows in automatically.
          </p>
        </div>

        {/* Radial Orbit Visualization */}
        <div className={`relative max-w-[800px] mx-auto mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <svg viewBox="0 0 800 480" className="w-full h-auto" style={{ minHeight: '360px' }}>
            <defs>
              {/* Animated gradient for connection lines */}
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(217, 100%, 40%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(217, 100%, 40%)" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="lineGradHover" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(217, 100%, 50%)" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(217, 100%, 40%)" stopOpacity="0.4" />
              </linearGradient>
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="20" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Animated dot along path */}
              {logoPositions.map((pos, i) => (
                <React.Fragment key={`motion-${i}`}>
                  <path id={`path-${i}`} d={getCurvedPath(pos.x, pos.y)} fill="none" />
                </React.Fragment>
              ))}
            </defs>

            {/* Radial glow behind center */}
            <circle cx={centerX} cy={centerY} r="120" fill="hsl(217, 100%, 40%)" opacity="0.04" filter="url(#softGlow)" />
            <circle cx={centerX} cy={centerY} r="80" fill="hsl(217, 100%, 40%)" opacity="0.06" filter="url(#softGlow)" />

            {/* Connection lines */}
            {logoPositions.map((pos, i) => {
              const isHovered = hoveredLogo === i;
              const isDimmed = hoveredLogo !== null && !isHovered && !centerHovered;
              return (
                <g key={`line-${i}`}>
                  <path
                    d={getCurvedPath(pos.x, pos.y)}
                    fill="none"
                    stroke={isHovered || centerHovered ? 'url(#lineGradHover)' : 'url(#lineGrad)'}
                    strokeWidth={isHovered || centerHovered ? 2.5 : 1.5}
                    opacity={isDimmed ? 0.15 : 1}
                    className="transition-all duration-500"
                    style={{
                      strokeDasharray: isVisible ? 'none' : '1000',
                      strokeDashoffset: isVisible ? '0' : '1000',
                      transition: `stroke-dashoffset 1.5s ease ${i * 0.1}s, opacity 0.4s ease`,
                    }}
                  />
                  {/* Animated pulse dot traveling along path */}
                  {isVisible && (
                    <circle r="3" fill="hsl(217, 100%, 50%)" opacity={isDimmed ? 0.1 : 0.7}>
                      <animateMotion
                        dur={`${2.5 + i * 0.3}s`}
                        repeatCount="indefinite"
                        path={getCurvedPath(pos.x, pos.y)}
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Center Hub - Swirl POS */}
            <g
              onMouseEnter={() => setCenterHovered(true)}
              onMouseLeave={() => setCenterHovered(false)}
              className="cursor-pointer"
              style={{ transition: 'transform 0.3s ease' }}
            >
              {/* Outer glow ring */}
              <circle
                cx={centerX} cy={centerY} r="68"
                fill="none"
                stroke="hsl(217, 100%, 40%)"
                strokeWidth="1"
                opacity={centerHovered ? 0.4 : 0.15}
                className="transition-all duration-500"
              />
              {/* Glass card background */}
              <rect
                x={centerX - 56} y={centerY - 56}
                width="112" height="112"
                rx="24"
                fill="url(#centerGradient)"
                filter="url(#glow)"
                className={`transition-transform duration-500 ${centerHovered ? 'scale-105' : ''}`}
                style={{ transformOrigin: `${centerX}px ${centerY}px` }}
              />
              <defs>
                <linearGradient id="centerGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(217, 100%, 45%)" />
                  <stop offset="100%" stopColor="hsl(217, 100%, 35%)" />
                </linearGradient>
              </defs>
              {/* Icon + Text */}
              <foreignObject x={centerX - 56} y={centerY - 56} width="112" height="112">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <Monitor className="w-8 h-8 text-white mb-1" />
                  <span className="text-white font-black text-base tracking-tight">swirl</span>
                  <span className="text-white/60 text-[10px] font-medium">POS</span>
                </div>
              </foreignObject>
            </g>

            {/* Logo cards */}
            {deliveryApps.map((app, i) => {
              const pos = logoPositions[i];
              const isHovered = hoveredLogo === i;
              const isDimmed = hoveredLogo !== null && !isHovered;
              const cardSize = 64;
              const delay = i * 0.08;

              return (
                <foreignObject
                  key={i}
                  x={pos.x - cardSize / 2}
                  y={pos.y - cardSize / 2}
                  width={cardSize}
                  height={cardSize + 16}
                  className="overflow-visible"
                  style={{
                    opacity: isVisible ? (isDimmed ? 0.4 : 1) : 0,
                    transform: isVisible
                      ? `scale(${isHovered ? 1.08 : 1})`
                      : 'scale(0.8)',
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                    transition: `opacity 0.6s ease ${delay}s, transform 0.4s ease`,
                  }}
                >
                  <div
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo(i)}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center
                      bg-white/90 backdrop-blur-sm border
                      shadow-lg transition-all duration-300
                      ${isHovered ? 'shadow-xl shadow-primary/15 border-primary/30 -translate-y-1' : 'shadow-md border-border/50'}
                    `}>
                      {app.logo ? (
                        <img src={app.logo} alt={app.name} className="w-10 h-10 object-contain" />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{app.initials}</span>
                        </div>
                      )}
                      {/* Connected dot */}
                      <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    {/* Name label */}
                    <p className="text-[9px] font-medium text-muted-foreground text-center mt-1 leading-tight truncate">{app.name}</p>
                    {/* Tooltip */}
                    <div className={`
                      absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg
                      bg-foreground text-primary-foreground text-[10px] font-medium whitespace-nowrap
                      pointer-events-none transition-all duration-200
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
                    `}>
                      Live Integration
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground" />
                    </div>
                  </div>
                </foreignObject>
              );
            })}
          </svg>

          {/* Tagline below center */}
          <p className={`text-center text-sm md:text-base font-medium text-muted-foreground mt-2 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            One Hub. All Platforms Connected.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`
                bg-white/70 backdrop-blur-sm border border-border/50 shadow-sm
                hover:shadow-lg hover:border-primary/20 hover:-translate-y-1
                transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
            >
              <CardContent className="p-5">
                <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center mb-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg shadow-primary/20 text-white">
            <a href="/contact" className="flex items-center gap-2">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeDeliveryIntegrationSection;
