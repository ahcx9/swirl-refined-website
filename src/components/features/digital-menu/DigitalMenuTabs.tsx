
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';

const DigitalMenuTabs = () => {
  return (
    <div className="mb-20">
      <Tabs defaultValue="features" className="w-full">
        <TabsList className="w-full flex mb-10 p-2 bg-white border-2 border-blue-200 rounded-2xl shadow-md">
          <TabsTrigger 
            value="features" 
            className="w-1/2 py-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-white rounded-xl transition-all"
          >
            <span className="text-lg md:text-xl font-bold">Menu Features</span>
          </TabsTrigger>
          <TabsTrigger 
            value="benefits" 
            className="w-1/2 py-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-white rounded-xl transition-all"
          >
            <span className="text-lg md:text-xl font-bold">Benefits</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="features" className="mt-8">
          <FeaturesSection />
        </TabsContent>
        
        <TabsContent value="benefits" className="mt-8">
          <BenefitsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DigitalMenuTabs;
