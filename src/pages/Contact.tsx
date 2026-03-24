import React from 'react';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import GlobalPresence from '@/components/contact/GlobalPresence';
import SmartLeadForm from '@/components/contact/SmartLeadForm';
import WhyReachOut from '@/components/contact/WhyReachOut';
import TrustStrip from '@/components/contact/TrustStrip';
import ContactFinalCTA from '@/components/contact/ContactFinalCTA';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <main className="flex-grow">
        <ContactHero />
        <GlobalPresence />
        <SmartLeadForm />
        <WhyReachOut />
        <TrustStrip />
        <ContactFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
