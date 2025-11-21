import React from 'react';
import { BarChart, FileText, DollarSign, LineChart, FileBarChart, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CustomCTAButton from '@/components/CustomCTAButton';

const HomeFinancialAnalyticsSection = () => {
  const features = [
    {
      icon: BarChart,
      text: 'Real-time revenue tracking',
      stat: '+34%'
    },
    {
      icon: FileText,
      text: 'Payment method breakdown',
      stat: '5+'
    },
    {
      icon: LineChart,
      text: 'Menu performance insights',
      stat: 'Live'
    },
    {
      icon: FileBarChart,
      text: 'Track staff revenue & performance',
      stat: 'All'
    },
    {
      icon: DollarSign,
      text: 'Customizable reporting',
      stat: '∞'
    }
  ];

  return (
    <section className="py-20 md:py-24 overflow-hidden relative bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content column with asymmetric layout */}
          <div className="md:col-span-5 order-2 md:order-1 relative">
            {/* Diagonal blue accent element */}
            <div className="absolute -left-12 top-12 bottom-12 w-2 bg-gradient-to-b from-transparent via-blue-500 to-transparent rounded-full hidden lg:block transform -skew-y-6"></div>
            
            <div className="animate-on-scroll">
              {/* Badge with icon */}
              <div className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <TrendingUp className="h-4 w-4" />
                <span className="font-semibold text-sm">Data-Driven Decisions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Financial Reports
              </h2>
              
              <p className="mb-10 text-lg leading-relaxed text-gray-700">
                Turn data into actionable insights with our comprehensive financial analytics tools. Track sales trends, 
                identify your most profitable items, monitor labor costs, and make informed decisions for your restaurant.
              </p>
              
              {/* Grid Layout Feature Cards (2 columns on larger screens) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="group bg-white border border-gray-200 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      {/* Icon and stat badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors border border-blue-100">
                          <feature.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                          {feature.stat}
                        </div>
                      </div>
                      
                      {/* Text */}
                      <span className="text-gray-900 font-medium text-sm leading-snug block">{feature.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                get started for free
              </CustomCTAButton>
            </div>
          </div>
          
          {/* Image column with perspective view */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative perspective-1000">
              {/* Glowing blue orb */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-blue-600/20 rounded-full blur-3xl"></div>
              
              <Card className="relative overflow-hidden border-2 border-blue-200/50 shadow-2xl rounded-2xl bg-white transform hover:rotate-y-2 transition-all duration-500">
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl">
                    <div className="relative h-full w-full">
                      {/* Blue gradient overlay on corners */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tl-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-br-2xl"></div>
                      
                      <img 
                        alt="Financial Analytics Dashboard showing revenue trends, order analytics, and payment insights" 
                        loading="lazy" 
                        decoding="async" 
                        className="w-full h-full object-cover rounded-lg" 
                        src="/lovable-uploads/financial-analytics-dashboard.jpg"
                        width={1200}
                        height={675}
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                      />
                      
                      {/* Floating insight badges */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm border border-blue-200 px-4 py-2 rounded-xl shadow-xl">
                        <div className="text-xs text-gray-600 font-medium">Daily Revenue</div>
                        <div className="text-lg font-bold text-blue-600">$12,847</div>
                      </div>
                      
                      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-semibold flex items-center gap-2">
                        <BarChart className="h-4 w-4" />
                        Real-Time Analytics
                      </div>
                    </div>
                  </AspectRatio>
                </CardContent>
              </Card>
              
              {/* Animated line chart decoration */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-2xl blur-xl animate-pulse-slow"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-blue-600/10 rounded-2xl blur-xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient mesh */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HomeFinancialAnalyticsSection;
