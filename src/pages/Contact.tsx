import React from 'react';
import Seo from '@/components/Seo';
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
      <Seo
        title="Contact swirl — talk to sales or book a demo"
        description="Get in touch with the swirl team. Book a personalised demo, request pricing, or reach our regional offices across MENA."
        path="/contact"
      />
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
