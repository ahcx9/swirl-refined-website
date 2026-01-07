import React from 'react';
import { ArrowRight, Zap, RefreshCw, Bell, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomeDeliveryIntegrationSection = () => {
  const deliveryApps = [
    {
      name: 'Talabat',
      logo: '/lovable-uploads/talabat-logo.webp',
      color: 'bg-orange-500'
    },
    {
      name: 'Keeta',
      logo: '/lovable-uploads/keeta-logo.png',
      color: 'bg-red-500'
    },
    {
      name: 'Noon Food',
      logo: '/lovable-uploads/noon-food-logo.png',
      color: 'bg-yellow-500'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Auto-Accept Orders',
      description: 'Orders flow directly to your POS without manual entry'
    },
    {
      icon: RefreshCw,
      title: 'Real-Time Sync',
      description: 'Menu prices and availability update across all platforms'
    },
    {
      icon: Bell,
      title: 'Instant Notifications',
      description: 'Get alerted the moment a new order comes in'
    },
    {
      icon: Clock,
      title: 'Faster Fulfillment',
      description: 'Reduce order prep time with automated kitchen routing'
    }
  ];

  return (
    <section className="py-16 overflow-hidden relative bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100">
            <Zap className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Seamless Delivery Integration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            All Your Delivery Apps, One Dashboard
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Connect Talabat, Keeta, and Noon Food directly to your POS. Automated order acceptance 
            means no more switching between tablets — everything flows into one unified system.
          </p>
        </div>

        {/* Delivery Apps Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 animate-on-scroll">
          {deliveryApps.map((app, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <img 
                  src={app.logo} 
                  alt={app.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-700">{app.name}</span>
              
              {/* Connection line */}
              {index < deliveryApps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 md:-right-8 w-4 md:w-6 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400"></div>
              )}
            </div>
          ))}
          
          {/* Arrow to POS */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 hidden md:block"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm md:text-base">POS</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 animate-on-scroll">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-5">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white">
            <a href="https://app.swirl.cx/register" className="flex items-center gap-2">
              Start integrating today <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HomeDeliveryIntegrationSection;
