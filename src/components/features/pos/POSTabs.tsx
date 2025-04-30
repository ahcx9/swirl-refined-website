
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import POSSoftwareFeatures from './POSSoftwareFeatures';
import POSHardwareSolutions from './POSHardwareSolutions';

const POSTabs = () => {
  return (
    <Tabs defaultValue="software" className="mb-12">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="software" className="text-lg py-3">POS Software</TabsTrigger>
        <TabsTrigger value="hardware" className="text-lg py-3">POS Hardware</TabsTrigger>
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
