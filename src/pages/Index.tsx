
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AdvancedFeatures from '@/components/AdvancedFeatures';
import TrustedRestaurants from '@/components/TrustedRestaurants';
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
        <AdvancedFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
