
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import POSSoftwareFeatures from './POSSoftwareFeatures';
import POSHardwareSolutions from './POSHardwareSolutions';
import { Button } from '@/components/ui/button';

const POSTabs = () => {
  return (
    <div className="mb-20">
      <Tabs defaultValue="software" className="w-full">
        <TabsList className="w-full flex mb-10 p-2 bg-white border-2 border-gray-200 rounded-2xl shadow-md">
          <TabsTrigger 
            value="software" 
            className="w-1/2 py-6 data-[state=active]:bg-purple data-[state=active]:text-white data-[state=inactive]:bg-white rounded-xl transition-all"
          >
            <span className="text-lg md:text-xl font-bold">POS Software</span>
          </TabsTrigger>
          <TabsTrigger 
            value="hardware" 
            className="w-1/2 py-6 data-[state=active]:bg-purple data-[state=active]:text-white data-[state=inactive]:bg-white rounded-xl transition-all"
          >
            <span className="text-lg md:text-xl font-bold">POS Hardware</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="software" className="mt-8">
          <POSSoftwareFeatures />
        </TabsContent>
        
        <TabsContent value="hardware" className="mt-8">
          <POSHardwareSolutions />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default POSTabs;
