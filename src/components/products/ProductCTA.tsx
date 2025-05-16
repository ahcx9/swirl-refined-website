
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';

const ProductCTA = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-20 text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to streamline your restaurant operations?</h3>
      <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto">
        Our team is ready to show you how swirl.cx can transform your business with our integrated suite of tools.
      </p>
      <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
        Ready to Transform your Restaurant/Cafe 🍽️?
      </CustomCTAButton>
    </div>
  );
};

export default ProductCTA;
