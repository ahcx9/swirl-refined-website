
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';

const POSCallToAction = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-r from-purple-light/30 to-purple/10 rounded-xl p-8 md:p-10 shadow-soft text-center mb-8 border border-purple-light/20">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{t('cta.ready')}</h3>
      <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto leading-relaxed">
        {t('cta.contact')}
      </p>
      <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
        {t('cta.getStarted')}
      </CustomCTAButton>
    </div>
  );
};

export default POSCallToAction;
