import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import LoyaltyHero from '@/components/features/loyalty/LoyaltyHero';
import LoyaltyModelsSwitcher from '@/components/features/loyalty/LoyaltyModelsSwitcher';
import LoyaltyStorySections from '@/components/features/loyalty/LoyaltyStorySections';
import LoyaltyComparison from '@/components/features/loyalty/LoyaltyComparison';
import LoyaltyOperationalPower from '@/components/features/loyalty/LoyaltyOperationalPower';
import LoyaltyAnalytics from '@/components/features/loyalty/LoyaltyAnalytics';
import LoyaltyUseCases from '@/components/features/loyalty/LoyaltyUseCases';
import LoyaltyFinalCTA from '@/components/features/loyalty/LoyaltyFinalCTA';

const Loyalty = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <LoyaltyHero />
        <LoyaltyModelsSwitcher />
        <LoyaltyStorySections />
        <LoyaltyComparison />
        <LoyaltyOperationalPower />
        <LoyaltyAnalytics />
        <LoyaltyUseCases />
        <LoyaltyFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Loyalty;
