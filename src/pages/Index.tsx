import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '@/components/Seo';
import Hero from '@/components/Hero';
import InterfaceProblemStory from '@/components/homepage/InterfaceProblemStory';
import SwirlEcosystemGallery from '@/components/homepage/SwirlEcosystemGallery';
import OperationalDashboards from '@/components/homepage/OperationalDashboards';
import UseCasesControlPanel from '@/components/homepage/UseCasesControlPanel';
import HomeDeliveryIntegrationSection from '@/components/HomeDeliveryIntegrationSection';
import HomeZATCASection from '@/components/homepage/HomeZATCASection';
import HomeHardwareSection from '@/components/HomeHardwareSection';
import WhySwirlCommandCenter from '@/components/homepage/WhySwirlCommandCenter';
import QROrderJourney from '@/components/homepage/QROrderJourney';
import FutureSwirlAI from '@/components/homepage/FutureSwirlAI';
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
        
        {/* Section 1: Interface-Based Problem Story */}
        <InterfaceProblemStory />
        
        {/* Section 2: Swirl Ecosystem UI Gallery */}
        <SwirlEcosystemGallery />
        
        {/* Delivery Integration */}
        <HomeDeliveryIntegrationSection />
        
        {/* ZATCA Compliance */}
        <HomeZATCASection />
        
        {/* Section 4: Operational Transformation Dashboards */}
        <OperationalDashboards />
        
        {/* Section 5: Business Types Control Panel */}
        <UseCasesControlPanel />
        
        {/* Hardware Section */}
        <HomeHardwareSection />
        
        {/* Section 6: Why Swirl Wins Command Center */}
        <WhySwirlCommandCenter />
        
        {/* Section 7: QR Order Journey */}
        <QROrderJourney />
        
        {/* Section 8: Future of Swirl AI */}
        <FutureSwirlAI />
        
        {/* Section 9: Modern FAQ Console */}
        <ModernFAQConsole />
        
        {/* Section 10: Final CTA Product Entry */}
        <FinalCTAProductEntry />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
