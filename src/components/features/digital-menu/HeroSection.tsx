
import React from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col gap-8 mb-16 bg-transparent">
      <div className="w-full text-center">
        <div className="flex items-center justify-center gap-4 mb-6 px-0 mx-0 py-[30px]">
          <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">
            <FileText className="text-blue-600 h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold text-black">{t('digitalMenu.title')}</h1>
        </div>
        
        <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto text-slate-950 text-left">
          {t('digitalMenu.subtitle')}
        </p>

        <div className="flex justify-center mb-8">
          <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
            {t('cta.getStarted')}
          </CustomCTAButton>
        </div>
      </div>
      
      <div className="w-full">
        <div className="relative mx-auto max-w-3xl">
          <img 
            src="/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png" 
            alt="Digital Menu on Mobile Devices" 
            className="w-full h-auto mx-auto object-contain transform hover:scale-[1.02] transition-transform duration-500" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              maxWidth: "100%",
              filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))",
              backgroundColor: "transparent"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
