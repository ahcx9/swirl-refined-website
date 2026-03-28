import React from 'react';
import SwirlCTA from '@/components/SwirlCTA';

const ReservationCTA = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-primary/[0.06] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center relative z-10 animate-on-scroll">
        <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
          Turn every reservation into a{' '}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better guest experience.
          </span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Join restaurants using swirl to modernize their reservation workflow — from first booking to loyal guest.
        </p>
      </div>
    </section>
  );
};

export default ReservationCTA;
