import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '@/components/Seo';
import Hero from '@/components/Hero';
import DeferredSection from '@/components/DeferredSection';
import useScrollAnimation from '@/hooks/useScrollAnimation';


/**
 * Only the hero ships in the initial bundle. Every section below the fold is a
 * separate chunk that is fetched when the visitor scrolls near it — this is what
 * keeps the first paint fast on mobile connections.
 */
const CustomerLogoMarquee = lazy(() => import('@/components/homepage/CustomerLogoMarquee'));
const InterfaceProblemStory = lazy(() => import('@/components/homepage/InterfaceProblemStory'));
const PlatformShowroom = lazy(() => import('@/components/products/PlatformShowroom'));
const OwnersAppSection = lazy(() => import('@/components/owners/OwnersAppSection'));
const HomeDeliveryIntegrationSection = lazy(() => import('@/components/HomeDeliveryIntegrationSection'));
const SwirlShiftStory = lazy(() => import('@/components/homepage/SwirlShiftStory'));
const HomeZATCASection = lazy(() => import('@/components/homepage/HomeZATCASection'));
const UseCasesControlPanel = lazy(() => import('@/components/homepage/UseCasesControlPanel'));
const HomeHardwareSection = lazy(() => import('@/components/HomeHardwareSection'));
const ModernFAQConsole = lazy(() => import('@/components/homepage/ModernFAQConsole'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
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

      <main className="flex-grow">
        {/* Hero */}
        <Hero />

        {/* Customer logos */}
        <DeferredSection minHeight={320}>
          <CustomerLogoMarquee />
        </DeferredSection>

        {/* Section 1: Interface-Based Problem Story */}
        <DeferredSection minHeight={600}>
          <InterfaceProblemStory />
        </DeferredSection>

        {/* Platform showroom: swirl Dine / Works / OS */}
        <DeferredSection minHeight={600}>
          <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
              <PlatformShowroom />
            </div>
          </section>
        </DeferredSection>

        {/* Owners App */}
        <DeferredSection minHeight={700}>
          <OwnersAppSection />
        </DeferredSection>

        {/* Delivery Integration */}
        <DeferredSection minHeight={600}>
          <HomeDeliveryIntegrationSection />
        </DeferredSection>

        {/* Signature: One Shift. Every Operation in Sync. */}
        <DeferredSection minHeight={700}>
          <SwirlShiftStory />
        </DeferredSection>

        {/* ZATCA Compliance */}
        <DeferredSection minHeight={500}>
          <HomeZATCASection />
        </DeferredSection>

        {/* Section 5: Business Types Control Panel */}
        <DeferredSection minHeight={600}>
          <UseCasesControlPanel />
        </DeferredSection>

        {/* Hardware Section */}
        <DeferredSection minHeight={600}>
          <HomeHardwareSection />
        </DeferredSection>

        {/* Section 9: Modern FAQ Console */}
        <DeferredSection minHeight={600}>
          <ModernFAQConsole />
        </DeferredSection>
      </main>

      <DeferredSection minHeight={400}>
        <Footer />
      </DeferredSection>
    </div>
  );
};

export default Index;
