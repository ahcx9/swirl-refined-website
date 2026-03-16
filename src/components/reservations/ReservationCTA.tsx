import React from 'react';
import { ArrowRight } from 'lucide-react';

const ReservationCTA = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-primary/[0.06] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center relative z-10 animate-on-scroll">
        <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
          Transform How Your Restaurant{' '}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Manages Reservations
          </span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Thousands of restaurants are modernizing their operations with swirl.cx.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-[15px] hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-border/80 text-foreground rounded-2xl font-semibold text-[15px] hover:bg-muted/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
