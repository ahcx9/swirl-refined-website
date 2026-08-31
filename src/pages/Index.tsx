import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '@/components/Seo';
import Hero from '@/components/Hero';
import CaptainTablesideSection from '@/components/captain/CaptainTablesideSection';
import OwnersAppSection from '@/components/owners/OwnersAppSection';
import InterfaceProblemStory from '@/components/homepage/InterfaceProblemStory';
import CustomerLogoMarquee from '@/components/homepage/CustomerLogoMarquee';
import SwirlShiftStory from '@/components/homepage/SwirlShiftStory';
import UseCasesControlPanel from '@/components/homepage/UseCasesControlPanel';
import HomeDeliveryIntegrationSection from '@/components/HomeDeliveryIntegrationSection';
import HomeZATCASection from '@/components/homepage/HomeZATCASection';
import HomeHardwareSection from '@/components/HomeHardwareSection';
import WhySwirlCommandCenter from '@/components/homepage/WhySwirlCommandCenter';
import ModernFAQConsole from '@/components/homepage/ModernFAQConsole';
import FinalCTAProductEntry from '@/components/homepage/FinalCTAProductEntry';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import ImagePreloader from '@/components/ImagePreloader';

const Index = () => {
  useScrollAnimation();
  const { t } = useTranslation();

  const faqIds = Array.from({ length: 32 }, (_, i) => `q${i + 1}`);
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqIds.map((id) => ({
      '@type': 'Question',
      name: t(`faq.items.${id}.q`),
      acceptedAnswer: { '@type': 'Answer', text: t(`faq.items.${id}.a`) },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="swirl — AI-powered restaurant management platform"
        description="One unified platform for restaurants: POS, KDS, QR ordering, inventory, accounting, CRM, loyalty and reservations on a single database."
        path="/"
        jsonLd={faqJsonLd}
      />
      <ImagePreloader />

      <main className="flex-grow">
        {/* Hero */}
        <Hero />

        {/* Customer logos */}
        <CustomerLogoMarquee />

        {/* Section 1: Interface-Based Problem Story */}
        <InterfaceProblemStory />

        {/* Platform showroom: swirl Dine / Works / OS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <PlatformShowroom />
          </div>
        </section>

        {/* Owners App */}
        <OwnersAppSection />

        {/* Delivery Integration */}
        <HomeDeliveryIntegrationSection />
        
        {/* Signature: One Shift. Every Operation in Sync. */}
        <SwirlShiftStory />
        
        {/* ZATCA Compliance */}
        <HomeZATCASection />
        
        {/* Section 5: Business Types Control Panel */}
        <UseCasesControlPanel />
        
        {/* Hardware Section */}
        <HomeHardwareSection />
        
        {/* Section 9: Modern FAQ Console */}
        <ModernFAQConsole />
      </main>

      
      <Footer />
    </div>
  );
};

export default Index;
