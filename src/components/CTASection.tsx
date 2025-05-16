
import React from 'react';
import CustomCTAButton from './CustomCTAButton';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-24 animate-on-scroll">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-swirl-blue/90 via-swirl-blue to-blue-700 rounded-3xl overflow-hidden">
          <div className="relative px-6 py-16 md:p-16">
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute -right-10 -top-10 w-72 h-72 bg-white rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-white rounded-full"></div>
              <div className="absolute left-1/3 top-1/4 w-40 h-40 bg-white/30 rounded-full blur-3xl"></div>
              <div className="absolute right-1/4 bottom-1/3 w-60 h-60 bg-white/20 rounded-full blur-2xl"></div>
              
              {/* Animated elements */}
              <div className="absolute top-20 right-20 w-12 h-12 bg-white/40 rounded-full animate-pulse-slow"></div>
              <div className="absolute bottom-32 left-32 w-10 h-10 bg-white/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-40 left-1/2 w-8 h-8 bg-white/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
            </div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">
                {t('cta.transform')}
              </h2>
              <p className="text-lg text-white/90 mb-10">
                {t('cta.join')}
              </p>
              
              <div className="flex justify-center">
                <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                  {t('cta.getStarted')}
                </CustomCTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
