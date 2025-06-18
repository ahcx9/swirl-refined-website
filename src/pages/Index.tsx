
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import StepProcess from '@/components/StepProcess';
import NextGenFeatures from '@/components/NextGenFeatures';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import HomePOSSection from '@/components/HomePOSSection';
import HomeInventorySection from '@/components/HomeInventorySection';
import HomeFinancialAnalyticsSection from '@/components/HomeFinancialAnalyticsSection';
import HotelIndustrySection from '@/components/HotelIndustrySection';
import UseCasesSection from '@/components/UseCasesSection';
import DeliveryComingSoon from '@/components/DeliveryComingSoon';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import ImagePreloader from '@/components/ImagePreloader';

const Index = () => {
  // Initialize scroll animation
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Preload all critical images */}
      <ImagePreloader />
      
      <main className="flex-grow">
        <div className="full-viewport-section">
          <Hero />
          <TrustedRestaurants />
        </div>
        <Features />
        <UseCasesSection />
        <div className="bg-gradient-to-b from-white to-blue-50/30">
          <HomePOSSection />
          <HomeInventorySection />
          <HomeFinancialAnalyticsSection />
          <HotelIndustrySection />
        </div>
        <StepProcess />
        <NextGenFeatures />
        <DeliveryComingSoon />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
