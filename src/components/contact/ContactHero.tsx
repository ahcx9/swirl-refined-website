import React from 'react';
import { Sparkles } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';

const ContactHero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-background to-primary/[0.05]" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-primary/[0.07] rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] text-primary px-5 py-2.5 rounded-full mb-8 text-sm font-medium backdrop-blur-sm border border-primary/10">
            <Sparkles size={16} />
            <span>Let's Connect</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Let's Build The Future
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Of Your Restaurant.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Swirl helps restaurants, cafés, and hospitality brands manage operations, sales, customer experience, and growth from one powerful platform.
          </p>

          <div className="flex items-center justify-center">
            <SwirlCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
