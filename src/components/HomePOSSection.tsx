import React from 'react';
import { Cloud, Zap, Users, TrendingUp, Shield, CreditCard } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';

const HomePOSSection = () => {
  const features = [
    { icon: Zap, text: 'Lightning fast punching orders', tooltip: 'Process orders in seconds' },
    { icon: Users, text: 'Multi-user access', tooltip: 'Team collaboration built-in' },
    { icon: TrendingUp, text: 'Revenue tracking by staff', tooltip: 'Monitor staff performance' },
    { icon: Shield, text: 'Secure cloud backup', tooltip: '99.9% uptime guaranteed' },
    { icon: CreditCard, text: 'Payment methods segregation', tooltip: 'Track all payment types' }
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,82,204,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 mb-6">
            <Cloud className="h-4 w-4" />
            <span className="font-semibold text-sm">Cloud-Powered Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Cloud-Based Point of Sale
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience the future of restaurant billing with our cloud-native POS system. Access from anywhere, scale effortlessly, and never worry about downtime.
          </p>
        </div>

        {/* Diagonal Split Layout */}
        <div className="relative">
          {/* Full-width container with diagonal effect */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl" style={{ minHeight: '600px' }}>
            {/* Left side - Image (60% on desktop) */}
            <div className="absolute inset-0 md:clip-diagonal-left">
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-blue-800">
                <img 
                  src="/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png" 
                  alt="Cloud-Based Point of Sale System Interface" 
                  className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={800}
                  loading="eager"
                  style={{ transform: 'translateZ(0)' }}
                />
                {/* Animated gradient border along diagonal */}
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-400 animate-pulse-slow"></div>
              </div>
            </div>

            {/* Right side - Content with glass-morphism (40% on desktop) */}
            <div className="relative md:absolute right-0 top-0 bottom-0 w-full md:w-[42%] flex items-center">
              <div className="w-full backdrop-blur-xl bg-white/95 md:bg-white/90 p-8 md:p-12 h-full flex flex-col justify-center border-l border-blue-100">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Work From Anywhere
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Cloud-based architecture means your restaurant data is accessible from any device, anywhere. No installations, no maintenance, just pure efficiency.
                    </p>
                  </div>

                  {/* Horizontal feature strip */}
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-100/80 border border-blue-100/50 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-600 text-white group-hover:scale-110 transition-transform">
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    get started for free
                  </CustomCTAButton>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-6 left-1/4 hidden md:block">
            <div className="bg-white shadow-xl rounded-2xl px-6 py-3 border border-blue-200 animate-float">
              <div className="text-xs text-gray-600 font-medium">Cloud Sync</div>
              <div className="text-lg font-bold text-blue-600">99.9%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePOSSection;
