
import React from 'react';
import Hero from '@/components/Hero';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import AdvancedFeatures from '@/components/AdvancedFeatures';
import Testimonials from '@/components/Testimonials';
import FeatureCards from '@/components/FeatureCards';
import Features from '@/components/Features';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Features />
        <TrustedRestaurants />
        <FeatureCards />
        <HowItWorks />
        <BenefitsSection />
        <Testimonials />
        <AdvancedFeatures />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
