import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Tag, BarChart, HardDrive, List } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import InventoryMockup from '@/components/features/inventory/InventoryMockup';

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
          {/* Content column */}
          <div className="md:col-span-5 order-1 md:order-1">
            <div className="animate-on-scroll">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200">
                <span className="text-gray-800 font-medium">Smart Stock Control for Your Business</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Inventory Management</h2>
              
              <p className="mb-8 text-lg leading-relaxed text-neutral-700">
                Take control of your restaurant's inventory with real-time tracking, automated ordering, 
                and waste management tools. Reduce costs, minimize waste, and never run out of essential ingredients.
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-10">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 rounded-full bg-white border border-gray-200">
                        <feature.icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <span className="text-amber-950">{feature.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button asChild variant="default" size="lg" className="bg-gray-800 hover:bg-gray-900 shadow-lg text-white">
                <a href="https://app.swirl.cx/register" className="flex items-center gap-2">
                  get started for free <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Mockup column */}
          <div className="md:col-span-7 order-2 md:order-2">
            <div className="transform transition-all duration-700 hover:scale-[1.02]">
              <InventoryMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInventorySection;
