import React from 'react';
import { Building2, TrendingUp, Zap, Brain } from 'lucide-react';

const benefits = [
  {
    icon: Building2,
    title: 'Built For Modern Hospitality',
    description: 'Designed for cafés, restaurants, and multi-location brands across the world — from single outlets to large-scale operations.',
  },
  {
    icon: TrendingUp,
    title: 'Scales As You Grow',
    description: 'Whether you\'re starting your first location or managing multiple brands, Swirl adapts seamlessly to your growth.',
  },
  {
    icon: Zap,
    title: 'Fast Onboarding, Seamless Experience',
    description: 'Get started quickly with an intuitive system designed to simplify operations from day one.',
  },
  {
    icon: Brain,
    title: 'Data-Driven Decisions With AI',
    description: 'Unlock powerful insights and smart recommendations to improve performance, efficiency, and customer experience.',
  },
];

const WhyReachOut = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-background" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Reach Out To Swirl
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We don't just sell software — we partner with you to transform your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="group bg-card border border-border/40 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <benefit.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyReachOut;
