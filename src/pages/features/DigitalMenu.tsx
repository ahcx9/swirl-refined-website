import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import MenuHero from '@/components/features/digital-menu/MenuHero';
import MenuAISection from '@/components/features/digital-menu/MenuAISection';
import MenuCustomerExperience from '@/components/features/digital-menu/MenuCustomerExperience';
import MenuReality from '@/components/features/digital-menu/MenuReality';
import MenuSystemFlow from '@/components/features/digital-menu/MenuSystemFlow';
import MenuCapabilities from '@/components/features/digital-menu/MenuCapabilities';
import MenuFeaturesGrid from '@/components/features/digital-menu/MenuFeaturesGrid';
import MenuMultiLanguage from '@/components/features/digital-menu/MenuMultiLanguage';
import MenuLiveFlow from '@/components/features/digital-menu/MenuLiveFlow';
import MenuIntelligence from '@/components/features/digital-menu/MenuIntelligence';
import MenuImpact from '@/components/features/digital-menu/MenuImpact';


const DigitalMenu = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <MenuHero />
        <MenuAISection />
        <MenuCustomerExperience />
        <MenuReality />
        <MenuSystemFlow />
        <MenuCapabilities />
        <MenuFeaturesGrid />
        <MenuMultiLanguage />
        <MenuLiveFlow />
        <MenuIntelligence />
        <MenuImpact />
        
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMenu;
