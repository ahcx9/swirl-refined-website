import React from 'react';
import { Cloud, Zap, Users, TrendingUp, Shield, CreditCard } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';

const HomePOSSection = () => {
  const features = [
    { icon: Zap, text: 'Lightning fast punching orders' },
    { icon: Users, text: 'Multi-user access' },
    { icon: TrendingUp, text: 'Revenue tracking by staff' },
    { icon: Shield, text: 'Secure cloud backup' },
    { icon: CreditCard, text: 'Payment methods segregation' }
  ];

  const floatingBadges = [
    { label: 'Cloud Sync', value: '99.9%', position: 'top-6 left-8' },
    { label: 'Orders/Min', value: '50+', position: 'bottom-8 left-12' },
    { label: 'Uptime', value: '24/7', position: 'top-8 right-12' }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,82,204,0.03)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,82,204,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-[10%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 mb-8">
            <Cloud className="h-5 w-5" />
            <span className="font-semibold text-base">Cloud-Powered Technology</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
            Cloud-Based Point of Sale
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience the future of restaurant billing with our cloud-native POS system. Access from anywhere, scale effortlessly, and never worry about downtime.
          </p>
        </div>

        {/* Dashboard Showcase - Dual Display */}
        <div className="relative mb-16 md:mb-20 animate-on-scroll">
          <div className="relative max-w-7xl mx-auto">
            {/* Desktop: Side-by-side, Mobile: Stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Order Management Dashboard */}
              <div className="relative group">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
                    <Cloud className="h-4 w-4" />
                    Order Management
                  </span>
                </div>
                <div className="relative perspective-card blue-glow gradient-border-animated rounded-2xl overflow-hidden bg-white p-1">
                  <div className="relative bg-white h-[450px] overflow-hidden">
                    <img 
                      src="/lovable-uploads/swirl-pos-orders-dashboard.png" 
                      alt="Swirl POS Orders Dashboard - Table Management System" 
                      className="w-full h-full object-contain"
                      width={700}
                      height={450}
                      loading="eager"
                      style={{ transform: 'translateZ(0)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Billing & Checkout Dashboard */}
              <div className="relative group">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
                    <CreditCard className="h-4 w-4" />
                    Billing & Checkout
                  </span>
                </div>
                <div className="relative perspective-card blue-glow gradient-border-animated rounded-2xl overflow-hidden bg-white p-1">
                  <div className="relative bg-white h-[450px] overflow-hidden">
                    <img 
                      src="/lovable-uploads/swirl-pos-billing-dashboard.png" 
                      alt="Swirl POS Billing Dashboard - Checkout and Payment System" 
                      className="w-full h-full object-contain"
                      width={700}
                      height={450}
                      loading="eager"
                      style={{ transform: 'translateZ(0)' }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Features Grid - 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 animate-on-scroll">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/50 hover:border-blue-300 backdrop-blur-sm transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="feature-icon flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 group-hover:shadow-xl group-hover:shadow-blue-600/40 transition-shadow">
                  <feature.icon className="h-8 w-8" />
                </div>
                <p className="text-base font-bold text-gray-900 leading-tight">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Centered */}
        <div className="text-center animate-on-scroll">
          <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
            get started for free
          </CustomCTAButton>
        </div>
      </div>
    </section>
  );
};

export default HomePOSSection;
