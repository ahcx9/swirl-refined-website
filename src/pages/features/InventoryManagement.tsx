import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import InventoryHero from '@/components/features/inventory/InventoryHero';
import InventoryReality from '@/components/features/inventory/InventoryReality';
import InventorySystemFlow from '@/components/features/inventory/InventorySystemFlow';
import InventoryCapabilities from '@/components/features/inventory/InventoryCapabilities';
import InventoryLiveFlow from '@/components/features/inventory/InventoryLiveFlow';
import InventoryIntelligence from '@/components/features/inventory/InventoryIntelligence';
import InventoryImpact from '@/components/features/inventory/InventoryImpact';


const InventoryManagement = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <InventoryHero />
        <InventoryReality />
        <InventorySystemFlow />
        <InventoryCapabilities />
        <InventoryLiveFlow />
        <InventoryIntelligence />
        <InventoryImpact />
        
      </main>
      <Footer />
    </div>
  );
};

export default InventoryManagement;
