import React from 'react';
import Hero from '@/components/Hero';
import InterfaceProblemStory from '@/components/homepage/InterfaceProblemStory';
import SwirlOperatingSystemView from '@/components/homepage/SwirlOperatingSystemView';
import SwirlEcosystemGallery from '@/components/homepage/SwirlEcosystemGallery';
import OperationalDashboards from '@/components/homepage/OperationalDashboards';
import UseCasesControlPanel from '@/components/homepage/UseCasesControlPanel';
import HomeDeliveryIntegrationSection from '@/components/HomeDeliveryIntegrationSection';
import HomeHardwareSection from '@/components/HomeHardwareSection';
import WhySwirlCommandCenter from '@/components/homepage/WhySwirlCommandCenter';
import TrustInterfaces from '@/components/homepage/TrustInterfaces';
import FutureSwirlAI from '@/components/homepage/FutureSwirlAI';
import ModernFAQConsole from '@/components/homepage/ModernFAQConsole';
import FinalCTAProductEntry from '@/components/homepage/FinalCTAProductEntry';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import ImagePreloader from '@/components/ImagePreloader';

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <ImagePreloader />
      
      <main className="flex-grow">
        {/* Hero */}
        <Hero />
        
        {/* Section 1: Interface-Based Problem Story */}
        <InterfaceProblemStory />
        
        {/* Section 2: Swirl Operating System View */}
        <SwirlOperatingSystemView />
        
        {/* Section 3: Swirl Ecosystem UI Gallery */}
        <SwirlEcosystemGallery />
        
        {/* Section 4: Operational Transformation Dashboards */}
        <OperationalDashboards />
        
        {/* Section 5: Business Types Control Panel */}
        <UseCasesControlPanel />
        
        {/* Delivery Integration (kept as requested) */}
        <HomeDeliveryIntegrationSection />
        
        {/* Hardware Section */}
        <HomeHardwareSection />
        
        {/* Section 6: Why Swirl Wins Command Center */}
        <WhySwirlCommandCenter />
        
        {/* Section 7: Trust Through Real Interfaces */}
        <TrustInterfaces />
        
        {/* Section 8: Future of Swirl AI */}
        <FutureSwirlAI />
        
        {/* Section 9: Modern FAQ Console */}
        <ModernFAQConsole />
        
        {/* Section 10: Final CTA Product Entry */}
        <FinalCTAProductEntry />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
