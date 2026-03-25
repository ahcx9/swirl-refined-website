import React from 'react';
import { ArrowRight } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
import step1Img from '@/assets/res-guest-step1.png';

const ReservationHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/10 text-primary text-base md:text-sm font-bold md:font-semibold mb-8 backdrop-blur-sm">
              swirl Reservations
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-foreground leading-[1.08] tracking-[-0.02em] mb-6">
              Reservations,{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                reimagined.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              From booking to table management — everything connected in one seamless system.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <SwirlCTA />
              <BookDemoCTA />
            </div>
          </div>

          {/* Hero mockup — single mobile screen */}
          <div className="animate-on-scroll flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,82,204,0.15)] border border-border/20">
                <img
                  src={step1Img}
                  alt="swirl Reservations — guest booking experience with date, time and party size selection"
                  className="w-full"
                  loading="eager"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-primary/[0.04] rounded-full blur-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationHero;
