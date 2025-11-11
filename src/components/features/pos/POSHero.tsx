
import React from 'react';
import { CreditCard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';

const POSHero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20 rounded-3xl -z-10"></div>
      
      <div className="text-center mb-10 pt-8">
        <div className="inline-flex items-center gap-4 mb-6 bg-blue-50/80 px-6 py-3 rounded-full">
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200">
            <CreditCard className="text-blue-600 h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-black">{t('pos.title')}</h1>
        </div>
        
        <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto text-slate-950 text-left">
          Swirl POS is a next-generation, cloud-based restaurant management system designed to simplify and unify operations for restaurants, cafés, and food courts. Built under the Swirl.cx platform, it goes beyond billing — combining POS, QR menu ordering, inventory, CRM, analytics, and aggregator integrations in one intelligent system.
        </p>

        <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-85">
          {t('cta.getStarted')}
        </CustomCTAButton>
      </div>

      <div className="overflow-hidden rounded-xl shadow-2xl max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
        <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded-xl">
          <img 
            src="/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png" 
            alt="POS System Interface" 
            className="w-full h-auto object-cover rounded-lg shadow-inner" 
            loading="eager" 
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

export default POSHero;
