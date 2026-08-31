import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '@/components/Seo';
import Hero from '@/components/Hero';
import InterfaceProblemStory from '@/components/homepage/InterfaceProblemStory';
import CustomerLogoMarquee from '@/components/homepage/CustomerLogoMarquee';
import SwirlEcosystemGallery from '@/components/homepage/SwirlEcosystemGallery';
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

        {/* Platform showroom: swirl Dine / Works / OS */}
        <section className="py-20 bg-[#F7FAFF]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The swirl platform</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Three layers. One connected system.</h2>
              <p className="mt-4 text-lg text-gray-600">Every module your restaurant runs on — grouped by where the work happens, connected by one database.</p>
            </div>
            <PlatformShowroom />
          </div>
        </section>

        {/* Section 1: Interface-Based Problem Story */}
        <InterfaceProblemStory />
        
        {/* Section 2: Swirl Ecosystem UI Gallery */}
        <SwirlEcosystemGallery />
        
        {/* Signature: One Shift. Every Operation in Sync. */}
        <SwirlShiftStory />
        
        {/* Delivery Integration */}
        <HomeDeliveryIntegrationSection />
        
        {/* ZATCA Compliance */}
        <HomeZATCASection />
        
        
        {/* Section 5: Business Types Control Panel */}
        <UseCasesControlPanel />
        
        {/* Hardware Section */}
        <HomeHardwareSection />
        
        {/* Section 6: Why Swirl Wins Command Center */}
        <WhySwirlCommandCenter />
        
        
        
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
