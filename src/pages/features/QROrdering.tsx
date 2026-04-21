import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import QRHero from '@/components/features/qr-ordering/QRHero';
import QRReality from '@/components/features/qr-ordering/QRReality';
import QRCarOrdering from '@/components/features/qr-ordering/QRCarOrdering';
import QRSystemFlow from '@/components/features/qr-ordering/QRSystemFlow';
import QRCustomerExperience from '@/components/features/qr-ordering/QRCustomerExperience';
import QRFeatures from '@/components/features/qr-ordering/QRFeatures';
import QRLiveFlow from '@/components/features/qr-ordering/QRLiveFlow';
import QRIntelligence from '@/components/features/qr-ordering/QRIntelligence';
import QRImpact from '@/components/features/qr-ordering/QRImpact';
import QRFinalCTA from '@/components/features/qr-ordering/QRFinalCTA';

const QROrdering = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <QRHero />
        <QRReality />
        <QRCarOrdering />
        <QRSystemFlow />
        <QRCustomerExperience />
        <QRFeatures />
        <QRLiveFlow />
        <QRIntelligence />
        <QRImpact />
        <QRFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default QROrdering;
