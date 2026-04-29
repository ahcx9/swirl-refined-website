import React from 'react';
import { Clock, UserCheck, BarChart3, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TrustStrip = () => {
  const { t } = useTranslation();
  const trustItems = [
    { icon: Clock, text: t('contact.trust.fast') },
    { icon: UserCheck, text: t('contact.trust.personalized') },
    { icon: BarChart3, text: t('contact.trust.consultation') },
    { icon: Rocket, text: t('contact.trust.support') },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border/30 bg-primary/[0.02]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.text} className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon size={18} className="text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
