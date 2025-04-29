
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AdvancedFeatures from '@/components/AdvancedFeatures';
import NextGenFeatures from '@/components/NextGenFeatures';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <TrustedRestaurants />
        <NextGenFeatures />
        <AdvancedFeatures />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
