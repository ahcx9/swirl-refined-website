
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SwirlCTA from '@/components/SwirlCTA';

const ProductCTA = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-20 text-center">
      <h3 className="text-2xl font-bold mb-4">{t('cta.transform')}</h3>
      <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto">
        {t('cta.join')}
      </p>
      <div className="flex justify-center">
        <SwirlCTA />
      </div>
    </div>
  );
};

export default ProductCTA;
