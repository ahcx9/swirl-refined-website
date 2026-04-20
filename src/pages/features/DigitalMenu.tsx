import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import MenuHero from '@/components/features/digital-menu/MenuHero';
import MenuReality from '@/components/features/digital-menu/MenuReality';
import MenuSystemFlow from '@/components/features/digital-menu/MenuSystemFlow';
import MenuCapabilities from '@/components/features/digital-menu/MenuCapabilities';
import MenuLiveFlow from '@/components/features/digital-menu/MenuLiveFlow';
import MenuIntelligence from '@/components/features/digital-menu/MenuIntelligence';
import MenuImpact from '@/components/features/digital-menu/MenuImpact';
import MenuFinalCTA from '@/components/features/digital-menu/MenuFinalCTA';

const DigitalMenu = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <MenuHero />
        <MenuReality />
        <MenuSystemFlow />
        <MenuCapabilities />
        <MenuLiveFlow />
        <MenuIntelligence />
        <MenuImpact />
        <MenuFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMenu;
