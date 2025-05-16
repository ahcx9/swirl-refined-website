
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';

const ProductCTA = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-20 text-center">
      <h3 className="text-2xl font-bold mb-4">{t('cta.transform')}</h3>
      <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto">
        {t('cta.join')}
      </p>
      <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
        {t('cta.getStarted')}
      </CustomCTAButton>
    </div>
  );
};

export default ProductCTA;
