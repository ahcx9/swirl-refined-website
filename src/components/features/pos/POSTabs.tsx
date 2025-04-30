
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import POSSoftwareFeatures from './POSSoftwareFeatures';
import POSHardwareSolutions from './POSHardwareSolutions';

const POSTabs = () => {
  return (
    <Tabs defaultValue="software" className="mb-16">
      <TabsList className="grid w-full grid-cols-2 mb-12 bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
        <TabsTrigger 
          value="software" 
          className="text-base md:text-lg py-8 font-bold tracking-wide data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-light data-[state=active]:to-purple/20 data-[state=active]:text-purple-dark transition-all duration-200"
        >
          <span className="px-4 py-2">POS Software</span>
        </TabsTrigger>
        <TabsTrigger 
          value="hardware" 
          className="text-base md:text-lg py-8 font-bold tracking-wide data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-light data-[state=active]:to-purple/20 data-[state=active]:text-purple-dark transition-all duration-200"
        >
          <span className="px-4 py-2">POS Hardware</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="software" className="space-y-8">
        <POSSoftwareFeatures />
      </TabsContent>
      
      <TabsContent value="hardware" className="space-y-8">
        <POSHardwareSolutions />
      </TabsContent>
    </Tabs>
  );
};

export default POSTabs;
