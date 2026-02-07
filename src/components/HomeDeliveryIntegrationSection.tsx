import React from 'react';
import { ArrowRight, Zap, RefreshCw, Bell, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomeDeliveryIntegrationSection = () => {
  const deliveryApps = [
    {
      name: 'Talabat',
      logo: '/lovable-uploads/talabat-logo.webp',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Keeta',
      logo: '/lovable-uploads/keeta-logo.png',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Deliveroo',
      logo: '/lovable-uploads/0e8b0620-df50-4144-bbd0-9c5eed7e00f5.png',
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Noon Food',
      logo: '/lovable-uploads/noon-food-logo.png',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Careem',
      logo: '/lovable-uploads/a2ee4e8c-8b4d-4521-a82a-39df6b6529aa.png',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'HungerStation',
      logo: null,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Auto-Accept Orders',
      description: 'Orders flow directly to POS without manual entry'
    },
    {
      icon: RefreshCw,
      title: 'Real-Time Sync',
      description: 'Menu & availability update across all platforms'
    },
    {
      icon: Bell,
      title: 'Instant Notifications',
      description: 'Get alerted the moment an order comes in'
    },
    {
      icon: Clock,
      title: 'Faster Fulfillment',
      description: 'Automated kitchen routing reduces prep time'
    }
  ];

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
            All Middle East Aggregators
            <br />
            <span className="text-primary">One Dashboard</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect every major delivery platform in the region directly to your POS. 
            Automated order acceptance means no more switching between tablets.
          </p>
        </div>

        {/* Delivery Apps Grid with Central Hub */}
        <div className="relative max-w-4xl mx-auto mb-14 animate-on-scroll">
          {/* Central POS Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-primary/30">
              <span className="text-white font-black text-lg md:text-xl">swirl</span>
              <span className="text-white/80 text-[10px] md:text-xs font-medium">POS</span>
            </div>
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
          </div>

          {/* Apps in circular arrangement */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 py-16 md:py-20">
            {deliveryApps.map((app, index) => (
              <div 
                key={index} 
                className={`group relative ${
                  index === 0 || index === 3 ? 'justify-self-start' : 
                  index === 2 || index === 5 ? 'justify-self-end' : 'justify-self-center'
                } ${index < 3 ? 'self-start' : 'self-end'}`}
              >
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl border border-gray-100 shadow-lg flex flex-col items-center justify-center p-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:border-primary/30">
                  {app.logo ? (
                    <img 
                      src={app.logo} 
                      alt={app.name} 
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  ) : (
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-[10px] md:text-xs text-center leading-tight">Hunger<br/>Station</span>
                    </div>
                  )}
                  <span className="text-[10px] md:text-xs font-medium text-gray-600 mt-1.5 text-center">{app.name}</span>
                </div>
                
                {/* Connection line to center */}
                <div className="absolute hidden md:block">
                  <svg className="w-full h-full" style={{ 
                    position: 'absolute',
                    top: index < 3 ? '100%' : 'auto',
                    bottom: index >= 3 ? '100%' : 'auto',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}>
                    <defs>
                      <linearGradient id={`line-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Connected badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
            ))}
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

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default HomeDeliveryIntegrationSection;
