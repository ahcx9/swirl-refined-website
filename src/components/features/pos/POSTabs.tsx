
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import POSSoftwareFeatures from './POSSoftwareFeatures';
import POSHardwareSolutions from './POSHardwareSolutions';

const POSTabs = () => {
  return (
    <Tabs defaultValue="software" className="mb-16">
      <TabsList className="grid w-full grid-cols-2 mb-10 bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden">
        <TabsTrigger 
          value="software" 
          className="text-base md:text-lg py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-light/30 data-[state=active]:to-purple/10"
        >
          POS Software
        </TabsTrigger>
        <TabsTrigger 
          value="hardware" 
          className="text-base md:text-lg py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-light/30 data-[state=active]:to-purple/10"
        >
          POS Hardware
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
