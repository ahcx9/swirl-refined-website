import React from 'react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
import calendarImg from '@/assets/res-operations-calendar.png';

const ReservationHero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-40 overflow-hidden">
      {/* Layered background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Text content — centered */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/10 text-primary text-base md:text-sm font-bold md:font-semibold mb-8 backdrop-blur-sm">
            swirl Reservations
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-foreground leading-[1.08] tracking-[-0.02em] mb-6">
            Reservations,{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              reimagined.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            From booking to table management — everything connected in one seamless system.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <SwirlCTA />
            <BookDemoCTA />
          </div>
        </div>

        {/* Hero mockup — cinematic product showcase */}
        <div className="animate-on-scroll relative max-w-[1100px] mx-auto">
          {/* Glow behind the mockup */}
          <div className="absolute -inset-8 bg-primary/[0.03] rounded-[2rem] blur-[60px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none" />

          {/* The product */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,82,204,0.18),0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-border/25 hero-float">
            <img
              src={calendarImg}
              alt="swirl Reservations — live operations calendar with weekly reservation grid and guest list"
              className="w-full"
              width={1100}
              height={650}
              loading="eager"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .hero-float {
          animation: heroFloat 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ReservationHero;
