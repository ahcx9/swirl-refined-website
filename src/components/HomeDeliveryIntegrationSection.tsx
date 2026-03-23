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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Ordered clockwise starting from top-center for perfect radial placement
  const deliveryApps = [
    { name: 'Noon Food', logo: '/lovable-uploads/noon-food-logo.png' },
    { name: 'Careem', logo: '/lovable-uploads/a2ee4e8c-8b4d-4521-a82a-39df6b6529aa.png' },
    { name: 'Zomato', logo: '/lovable-uploads/zomato-logo.jpg' },
    { name: 'Keeta', logo: '/lovable-uploads/keeta-logo.png' },
    { name: 'Jahez', logo: '/lovable-uploads/jahez-logo.png' },
    { name: 'HungerStation', logo: '/lovable-uploads/hungerstation-logo.png' },
    { name: 'UberEats', logo: null, initials: 'UE' },
    { name: 'Swiggy', logo: '/lovable-uploads/swiggy-logo.png' },
    { name: 'Talabat', logo: '/lovable-uploads/talabat-logo.webp' },
    { name: 'Deliveroo', logo: '/lovable-uploads/0e8b0620-df50-4144-bbd0-9c5eed7e00f5.png' },
  ];

  const cx = 400;
  const cy = 260;
  const radius = 200;

  // Perfect circle: evenly spaced, starting from top (−90°), clockwise
  const getPosition = (index: number) => {
    const angleDeg = -90 + (360 / deliveryApps.length) * index;
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(angleRad),
      y: cy + radius * Math.sin(angleRad),
    };
  };

  const getCurvedPath = (x: number, y: number) => {
    // Control point offset for smooth curve — perpendicular to the line
    const dx = x - cx;
    const dy = y - cy;
    const len = Math.sqrt(dx * dx + dy * dy);
    // Midpoint
    const mx = (x + cx) / 2;
    const my = (y + cy) / 2;
    // Perpendicular offset (subtle curve)
    const perpX = -dy / len * 25;
    const perpY = dx / len * 25;
    return `M ${x} ${y} Q ${mx + perpX} ${my + perpY}, ${cx} ${cy}`;
  };

  const features = [
    { icon: Zap, title: 'Auto-Accept Orders', description: 'Orders flow directly to POS without manual entry' },
    { icon: RefreshCw, title: 'Real-Time Sync', description: 'Menu & availability update across all platforms' },
    { icon: Bell, title: 'Instant Notifications', description: 'Get alerted the moment an order comes in' },
    { icon: Clock, title: 'Faster Fulfillment', description: 'Automated kitchen routing reduces prep time' },
  ];

  return (
    <section
      ref={sectionRef}
      id="delivery-integration"
      className="py-20 md:py-32 overflow-hidden relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background" />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 0.5px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />

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

        {/* Orbit Visualization */}
        <div className={`relative max-w-[800px] mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <svg viewBox="0 0 800 520" className="w-full h-auto" style={{ minHeight: '380px' }}>
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
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>

            {/* Orbit ring (subtle) */}
            <circle cx={cx} cy={cy} r={radius} fill="none" stroke="hsl(217,100%,40%)" strokeWidth="0.5" opacity="0.08" strokeDasharray="4,8" />

            {/* Center radial glow */}
            <circle cx={cx} cy={cy} r="100" fill="hsl(217,100%,40%)" opacity="0.04" filter="url(#softGlow)" />

            {/* Connection lines + animated dots */}
            {deliveryApps.map((_, i) => {
              const pos = getPosition(i);
              const isHovered = hoveredLogo === i;
              const isDimmed = hoveredLogo !== null && !isHovered && !centerHovered;
              const path = getCurvedPath(pos.x, pos.y);

              return (
                <g key={`conn-${i}`}>
                  <path
                    d={path}
                    fill="none"
                    stroke={isHovered || centerHovered ? 'url(#connGradHover)' : 'url(#connGrad)'}
                    strokeWidth={isHovered || centerHovered ? 2 : 1.2}
                    opacity={isDimmed ? 0.12 : 1}
                    className="transition-all duration-400"
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
            <g
              onMouseEnter={() => setCenterHovered(true)}
              onMouseLeave={() => setCenterHovered(false)}
              className="cursor-pointer"
            >
              {/* Pulse ring */}
              <circle cx={cx} cy={cy} r="62" fill="none" stroke="hsl(217,100%,40%)" strokeWidth="1" opacity="0.12">
                {isVisible && (
                  <animate attributeName="r" values="62;72;62" dur="3s" repeatCount="indefinite" />
                )}
                {isVisible && (
                  <animate attributeName="opacity" values="0.12;0.04;0.12" dur="3s" repeatCount="indefinite" />
                )}
              </circle>

              <rect
                x={cx - 52} y={cy - 52}
                width="104" height="104"
                rx="26"
                fill="url(#hubGrad)"
                filter="url(#hubGlow)"
              />
              <foreignObject x={cx - 52} y={cy - 52} width="104" height="104">
                <div className="w-full h-full flex flex-col items-center justify-center select-none">
                  <Monitor className="w-7 h-7 text-white/90 mb-1" />
                  <span className="text-white font-black text-[15px] tracking-tight leading-none">swirl</span>
                  <span className="text-white/50 text-[9px] font-semibold mt-0.5">POS</span>
                </div>
              </foreignObject>
            </g>

            {/* Logo cards on orbit */}
            {deliveryApps.map((app, i) => {
              const pos = getPosition(i);
              const isHovered = hoveredLogo === i;
              const isDimmed = hoveredLogo !== null && !isHovered;
              const size = 60;
              const delay = 0.3 + i * 0.07;

              return (
                <foreignObject
                  key={`logo-${i}`}
                  x={pos.x - size / 2}
                  y={pos.y - size / 2}
                  width={size + 4}
                  height={size + 18}
                  className="overflow-visible"
                  style={{
                    opacity: isVisible ? (isDimmed ? 0.35 : 1) : 0,
                    transform: isVisible
                      ? `scale(${isHovered ? 1.1 : 1})`
                      : 'scale(0.7)',
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                    transition: `opacity 0.5s ease ${delay}s, transform 0.35s ease`,
                  }}
                >
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredLogo(i)}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className={`
                      w-[60px] h-[60px] rounded-[16px] flex items-center justify-center
                      bg-white border backdrop-blur-sm
                      transition-all duration-300
                      ${isHovered
                        ? 'shadow-xl shadow-primary/15 border-primary/30 -translate-y-0.5'
                        : 'shadow-md border-border/40'
                      }
                    `}>
                      {app.logo ? (
                        <img src={app.logo} alt={app.name} className="w-9 h-9 object-contain" />
                      ) : (
                        <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
                          <span className="text-white font-bold text-[10px]">{app.initials}</span>
                        </div>
                      )}
                      {/* Connected indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-[1.5px] border-white flex items-center justify-center">
                        <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    {/* Label */}
                    <p className="text-[8px] font-medium text-muted-foreground text-center mt-1 leading-tight whitespace-nowrap">{app.name}</p>
                    {/* Tooltip */}
                    <div className={`
                      absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md
                      bg-foreground text-primary-foreground text-[9px] font-medium whitespace-nowrap
                      pointer-events-none transition-all duration-200
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
                    `}>
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

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`
                bg-white/80 backdrop-blur-sm border border-border/40
                hover:shadow-lg hover:border-primary/20 hover:-translate-y-1
                transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
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
        <div className={`text-center transition-all duration-700 delay-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
