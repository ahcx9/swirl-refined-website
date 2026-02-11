import React from 'react';
import { ArrowRight, Zap, RefreshCw, Bell, Clock, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomeDeliveryIntegrationSection = () => {
  const deliveryApps = [
    { name: 'Talabat', logo: '/lovable-uploads/talabat-logo.webp' },
    { name: 'Keeta', logo: '/lovable-uploads/keeta-logo.png' },
    { name: 'Deliveroo', logo: '/lovable-uploads/0e8b0620-df50-4144-bbd0-9c5eed7e00f5.png' },
    { name: 'Noon Food', logo: '/lovable-uploads/noon-food-logo.png' },
    { name: 'Careem', logo: '/lovable-uploads/a2ee4e8c-8b4d-4521-a82a-39df6b6529aa.png' },
    { name: 'UberEats', logo: null, initials: 'UE', color: 'bg-green-600' },
    { name: 'DoorDash', logo: null, initials: 'DD', color: 'bg-red-500' },
    { name: 'GrabFood', logo: null, initials: 'GF', color: 'bg-green-500' },
    { name: 'Foodpanda', logo: null, initials: 'FP', color: 'bg-pink-500' },
    { name: 'Zomato', logo: null, initials: 'ZM', color: 'bg-red-600' },
  ];

  const features = [
    { icon: Zap, title: 'Auto-Accept Orders', description: 'Orders flow directly to POS without manual entry' },
    { icon: RefreshCw, title: 'Real-Time Sync', description: 'Menu & availability update across all platforms' },
    { icon: Bell, title: 'Instant Notifications', description: 'Get alerted the moment an order comes in' },
    { icon: Clock, title: 'Faster Fulfillment', description: 'Automated kitchen routing reduces prep time' },
  ];

  // Position logos in a semi-circle around the center POS
  const getPosition = (index: number, total: number) => {
    // Semi-circle from left to right (180 degrees, from PI to 0)
    const angle = Math.PI - (index / (total - 1)) * Math.PI;
    const radiusX = 42; // % from center
    const radiusY = 38;
    const x = 50 + radiusX * Math.cos(angle);
    const y = 55 - radiusY * Math.sin(angle);
    return { x, y };
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden relative bg-gradient-to-b from-white to-blue-50/30">
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">Delivery Integration</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Every Delivery App
            <br />
            <span className="text-primary">One POS</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect global and regional delivery platforms directly to your POS. 
            No more tablet juggling — every order flows in automatically.
          </p>
        </div>

        {/* Semi-circle layout with central POS */}
        <div className="relative max-w-4xl mx-auto mb-14 animate-on-scroll" style={{ height: '420px' }}>
          {/* Animated connection lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {deliveryApps.map((_, index) => {
              const pos = getPosition(index, deliveryApps.length);
              return (
                <line 
                  key={index}
                  x1={`${pos.x}%`} y1={`${pos.y}%`} 
                  x2="50%" y2="85%" 
                  stroke="url(#flowGrad)" 
                  strokeWidth="1.5" 
                  strokeDasharray="6,4"
                  className="animate-dash"
                  style={{ animationDelay: `${index * 0.2}s`, animationDuration: '3s', animationIterationCount: 'infinite' }}
                />
              );
            })}
          </svg>

          {/* Delivery app logos in semi-circle */}
          {deliveryApps.map((app, index) => {
            const pos = getPosition(index, deliveryApps.length);
            return (
              <div 
                key={index}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl border border-gray-100 shadow-lg flex flex-col items-center justify-center p-2 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:border-primary/30">
                  {app.logo ? (
                    <img src={app.logo} alt={app.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  ) : (
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${app.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-xs">{app.initials}</span>
                    </div>
                  )}
                  <span className="text-[8px] md:text-[10px] font-medium text-gray-600 mt-1 text-center leading-tight">{app.name}</span>
                </div>
                {/* Green connected dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            );
          })}

          {/* Central POS Terminal */}
          <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-20">
            <div className="relative">
              {/* Pulse rings */}
              <div className="absolute inset-0 -m-3 rounded-2xl bg-primary/10 animate-ping" style={{ animationDuration: '2.5s' }} />
              <div className="absolute inset-0 -m-6 rounded-3xl bg-primary/5 animate-ping" style={{ animationDuration: '3.5s' }} />
              
              {/* POS Device icon */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-primary/30 relative">
                <Monitor className="w-8 h-8 md:w-10 md:h-10 text-white mb-1" />
                <span className="text-white font-black text-sm md:text-base">swirl</span>
                <span className="text-white/70 text-[8px] md:text-[10px] font-medium">POS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 animate-on-scroll">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 md:p-5">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg shadow-primary/25 text-white">
            <a href="/contact" className="flex items-center gap-2">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default HomeDeliveryIntegrationSection;
