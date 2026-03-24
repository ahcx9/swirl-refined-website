import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactFinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-blue-500/[0.04]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Ready To Simplify Operations
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"> And Scale With Confidence?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Join hundreds of hospitality businesses already growing with Swirl.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="group px-8 py-6 text-base font-semibold rounded-xl shadow-lg bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600"
          >
            Book Your Demo
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="px-8 py-6 text-base font-semibold rounded-xl border-primary/20 text-primary hover:bg-primary/5"
          >
            <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle size={18} />
              Speak With Swirl
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactFinalCTA;
