
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import StepProcess from '@/components/StepProcess';
import NextGenFeatures from '@/components/NextGenFeatures';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  // Initialize scroll animation
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <TrustedRestaurants />
        <Features />
        <StepProcess />
        <NextGenFeatures />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
