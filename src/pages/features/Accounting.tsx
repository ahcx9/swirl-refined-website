import React from 'react';
import Seo from '@/components/Seo';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import AccountingHero from '@/components/features/accounting/AccountingHero';
import AccountingReality from '@/components/features/accounting/AccountingReality';
import AccountingSystemFlow from '@/components/features/accounting/AccountingSystemFlow';
import AccountingCapabilities from '@/components/features/accounting/AccountingCapabilities';
import AccountingLiveFlow from '@/components/features/accounting/AccountingLiveFlow';
import AccountingIntelligence from '@/components/features/accounting/AccountingIntelligence';
import AccountingImpact from '@/components/features/accounting/AccountingImpact';


const Accounting = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Seo
        title={`Restaurant accounting — automated by swirl`}
        description={`Automated bookkeeping for restaurants. Every sale, expense and tax entry posts itself — P&L and ledgers stay always up to date.`}
        path="/products/accounting"
      />
      <main className="flex-grow">
        <AccountingHero />
        <AccountingReality />
        <AccountingSystemFlow />
        <AccountingCapabilities />
        <AccountingLiveFlow />
        <AccountingIntelligence />
        <AccountingImpact />
        
      </main>
      <Footer />
    </div>
  );
};

export default Accounting;
