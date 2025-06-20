
import React from 'react';
import { Package, Tag, BarChart, HardDrive, List } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CustomCTAButton from '@/components/CustomCTAButton';

const HomeInventorySection = () => {
  const features = [{
    icon: Package,
    text: 'Real-time stock tracking'
  }, {
    icon: Tag,
    text: 'Automated low-stock alerts'
  }, {
    icon: List,
    text: 'Supplier management'
  }, {
    icon: BarChart,
    text: 'Waste monitoring & reporting'
  }, {
    icon: HardDrive,
    text: 'Ingredient-level tracking'
  }];
  
  return (
    <section className="py-16 overflow-hidden relative bg-white">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image column - enlarged and clearer */}
          <div className="md:col-span-7">
            <Card className="overflow-hidden border-0 shadow-xl rounded-2xl bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="perspective-1000 overflow-hidden rounded-lg">
                    <div className="transform transition-all duration-700 hover:scale-[1.02]">
                      <AspectRatio ratio={16 / 9}>
                        <div className="overflow-hidden bg-white">
                          <img 
                            alt="Inventory Management Dashboard" 
                            loading="eager" 
                            fetchPriority="high" 
                            decoding="sync" 
                            style={{
                              transform: 'translateZ(0) scale(0.8)'
                            }} 
                            className="w-full h-auto object-contain rounded-lg shadow-inner" 
                            src="/lovable-uploads/e0608b68-c4cd-45f8-a941-befaefe9e4e4.png" 
                          />
                        </div>
                      </AspectRatio>
                      
                      <div className="absolute bottom-4 left-4 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                        Smart Inventory Control
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Content column */}
          <div className="md:col-span-5">
            <div className="animate-on-scroll">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm">
                <span className="text-blue-600 font-medium">Smart Stock Control for Your Business</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Inventory Management</h2>
              
              <p className="mb-8 text-lg leading-relaxed text-neutral-700">
                Take control of your restaurant's inventory with real-time tracking, automated ordering, 
                and waste management tools. Reduce costs, minimize waste, and never run out of essential ingredients.
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-10">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white/80 border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 flex items-center gap-3 bg-slate-50">
                      <div className="p-2 rounded-full bg-blue-50">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-amber-950">{feature.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-90">
                Get Started For Free
              </CustomCTAButton>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HomeInventorySection;
