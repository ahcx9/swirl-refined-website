import React from 'react';
import { CreditCard, Cloud } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';

const POSHero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-16 relative">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6 mt-8 md:mt-12">
          <Cloud className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Cloud-Based Point of Sale</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          More than a <span className="text-primary">POS</span>.<br />
          Your restaurant's operating system.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          The complete cloud-based POS system designed for modern restaurants. Bill faster, manage smarter, grow bigger.
        </p>

        <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
          {t('cta.getStarted')}
        </CustomCTAButton>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-2xl max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
        <img 
          src="/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png" 
          alt="Cloud POS System Interface" 
          className="w-full h-auto" 
          loading="eager" 
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default POSHero;
