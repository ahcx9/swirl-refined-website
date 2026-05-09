import React from 'react';
import { Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SwirlCTA from '@/components/SwirlCTA';
import POSMockup from './POSMockup';

const POSHero = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-16 relative">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6 mt-8 md:mt-12">
          <Cloud className="w-5 h-5 text-primary" />
          <span className="text-base md:text-sm font-bold md:font-semibold text-primary">{t('featurePages.pos.badge')}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          {t('featurePages.pos.title1')} <span className="text-primary">{t('featurePages.pos.titlePOS')}</span>.<br />
          {t('featurePages.pos.title2')}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {t('featurePages.pos.subtitle')}
        </p>

        <SwirlCTA />
      </div>

      <div className="py-8 px-4 md:px-8">
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 px-6 py-2.5 bg-primary/8 rounded-full border border-primary/15">
            <span className="text-sm md:text-base font-semibold text-primary tracking-wide">{t('featurePages.pos.liveDemoBadge')}</span>
          </div>
        </div>
        <POSMockup />
      </div>
    </div>
  );
};

export default POSHero;
