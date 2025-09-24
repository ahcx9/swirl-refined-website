
import React from 'react';
import Footer from '@/components/Footer';
import POSHero from '@/components/features/pos/POSHero';
import POSTabs from '@/components/features/pos/POSTabs';
import POSBenefits from '@/components/features/pos/POSBenefits';
import POSCallToAction from '@/components/features/pos/POSCallToAction';

const PointOfSale = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-36 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <POSHero />
            <POSTabs />
            <POSBenefits />
            <POSCallToAction />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PointOfSale;
