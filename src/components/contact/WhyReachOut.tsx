import React from 'react';
import { Building2, TrendingUp, Zap, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyReachOut = () => {
  const { t } = useTranslation();
  const benefits = [
    { icon: Building2, key: 'modern' },
    { icon: TrendingUp, key: 'scales' },
    { icon: Zap, key: 'fast' },
    { icon: Brain, key: 'ai' },
  ] as const;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-background" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.why.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t('contact.why.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.key}
              className="group bg-card border border-border/40 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <benefit.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{t(`contact.why.items.${benefit.key}.title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`contact.why.items.${benefit.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyReachOut;
