import React from 'react';
import { Package, Tag, BarChart, HardDrive, List } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CustomCTAButton from '@/components/CustomCTAButton';

const HomeInventorySection = () => {
  const features = [
    {
      icon: Package,
      text: 'Real-time stock tracking'
    },
    {
      icon: Tag,
      text: 'Automated low-stock alerts'
    },
    {
      icon: List,
      text: 'Supplier management'
    },
    {
      icon: BarChart,
      text: 'Waste monitoring & reporting'
    },
    {
      icon: HardDrive,
      text: 'Ingredient-level tracking'
    }
  ];

  return (
    <section className="py-20 md:py-24 overflow-hidden relative bg-white">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content column with blue accent panel */}
          <div className="md:col-span-5 order-2 md:order-1 relative">
            {/* Blue accent panel */}
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 rounded-full hidden md:block"></div>
            
            <div className="animate-on-scroll">
              {/* Badge with icon */}
              <div className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Package className="h-4 w-4" />
                <span className="font-semibold text-sm">Smart Stock Control</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Inventory Management
              </h2>
              
              <p className="mb-10 text-lg leading-relaxed text-gray-700">
                Take control of your restaurant's inventory with real-time tracking, automated ordering, 
                and waste management tools. Reduce costs, minimize waste, and never run out of essential ingredients.
              </p>
              
              {/* Horizontal Feature Cards */}
              <div className="grid grid-cols-1 gap-4 mb-10">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="group bg-white border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <CardContent className="p-5 flex items-center gap-4">
                      {/* Icon with blue accent */}
                      <div className="flex-shrink-0 p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors border border-blue-100">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      
                      {/* Text */}
                      <span className="text-gray-900 font-medium text-base flex-1">{feature.text}</span>
                      
                      {/* Hover indicator */}
                      <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                get started for free
              </CustomCTAButton>
            </div>
          </div>
          
          {/* Image column with floating dashboard effect */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative">
              {/* Elevated dashboard effect with shadow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-100/50 to-blue-200/30 rounded-3xl blur-2xl"></div>
              
              <Card className="relative overflow-hidden border border-blue-100 shadow-2xl rounded-2xl bg-white transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/inventory-overview.png" 
                      alt="Inventory Management Dashboard showing real-time stock levels and alerts" 
                      className="w-full h-auto rounded-lg"
                      width={1200}
                      height={800}
                      loading="lazy" 
                      decoding="async"
                      style={{
                        transform: 'translateZ(0)'
                      }}
                    />
                    
                    {/* Floating metric badges */}
                    <div className="absolute top-6 right-6 bg-white border border-blue-200 px-4 py-2 rounded-xl shadow-xl">
                      <div className="text-xs text-gray-600 font-medium">Stock Level</div>
                      <div className="text-lg font-bold text-blue-600">94%</div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-semibold">
                      Smart Inventory Control
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Decorative data points */}
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-blue-600/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,82,204,0.05)_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
    </section>
  );
};

export default HomeInventorySection;
