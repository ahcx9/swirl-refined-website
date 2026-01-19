import React from 'react';
import Hero from '@/components/Hero';
import ProblemEmpathySection from '@/components/ProblemEmpathySection';
import WhatSwirlIsSection from '@/components/WhatSwirlIsSection';
import SwirlEcosystemSection from '@/components/SwirlEcosystemSection';
import OperationalTransformationSection from '@/components/OperationalTransformationSection';
import UseCasesSection from '@/components/UseCasesSection';
import HomePOSSection from '@/components/HomePOSSection';
import HomeInventorySection from '@/components/HomeInventorySection';
import HomeFinancialAnalyticsSection from '@/components/HomeFinancialAnalyticsSection';
import HomeDeliveryIntegrationSection from '@/components/HomeDeliveryIntegrationSection';
import HomeHardwareSection from '@/components/HomeHardwareSection';
import WhySwirlWinsSection from '@/components/WhySwirlWinsSection';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import GrowthVisionSection from '@/components/GrowthVisionSection';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
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
        
        {/* Problem & Empathy */}
        <ProblemEmpathySection />
        
        {/* What Swirl Is */}
        <WhatSwirlIsSection />
        
        {/* Swirl Ecosystem */}
        <SwirlEcosystemSection />
        
        {/* Operational Transformation */}
        <OperationalTransformationSection />
        
        {/* Business Types Served */}
        <UseCasesSection />
        
        {/* Product Deep Dives */}
        <div className="bg-gradient-to-b from-white to-blue-50/30">
          <HomePOSSection />
          <HomeInventorySection />
          <HomeFinancialAnalyticsSection />
          <HomeDeliveryIntegrationSection />
          <HomeHardwareSection />
        </div>
        
        {/* Why Swirl Wins */}
        <WhySwirlWinsSection />
        
        {/* Trust & Credibility */}
        <TrustedRestaurants />
        
        {/* Growth & Future Vision */}
        <GrowthVisionSection />
        
        {/* Content */}
        <BlogSection />
        <FAQSection />
        
        {/* Final CTA */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
