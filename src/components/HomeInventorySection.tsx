
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Tag, BarChart, HardDrive, List } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { preloadImage } from '@/utils/imagePreloader';

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

  // Preload the inventory image
  useEffect(() => {
    const mainImage = "/lovable-uploads/e0608b68-c4cd-45f8-a941-befaefe9e4e4.png";
    preloadImage({
      src: mainImage,
      priority: 'high'
    });
  }, []);
  
  return (
    <section className="py-16 overflow-hidden relative bg-white">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image column - moved to left */}
          <div className="md:col-span-7 order-1">
            <Card className="overflow-hidden border-0 shadow-xl rounded-2xl bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="perspective-1000">
                    <div className="transform transition-all duration-700 hover:scale-[1.02]">
                      <AspectRatio ratio={16 / 10}>
                        <img 
                          src="/lovable-uploads/e0608b68-c4cd-45f8-a941-befaefe9e4e4.png" 
                          alt="Inventory Management Interface" 
                          className="w-full h-full object-cover rounded-2xl" 
                          loading="eager" 
                          fetchPriority="high" 
                          decoding="sync" 
                          style={{
                            transform: 'translateZ(0)'
                          }}
                        />
                      </AspectRatio>
                      
                      <div className="absolute bottom-6 right-6 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                        Smart Inventory Control
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Content column - moved to right */}
          <div className="md:col-span-5 order-2">
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
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-50">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-amber-950">{feature.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white">
                <a href="https://app.swirl.cx/register" className="flex items-center gap-2">
                  Get Started For Free <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HomeInventorySection;
