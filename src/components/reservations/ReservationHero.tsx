import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import timelineImg from '@/assets/reservation-timeline-real.png';
import bookingImg from '@/assets/reservation-booking-real.png';
import guestImg from '@/assets/reservation-guest-real.png';

const ReservationHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Text content — centered */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/10 text-primary text-sm font-semibold mb-8 backdrop-blur-sm">
            <Calendar className="w-4 h-4" />
            Swirl Reservations
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-foreground leading-[1.08] tracking-[-0.02em] mb-6">
            Restaurant Reservations,{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Perfectly Orchestrated
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
            Complete control over bookings, tables, guest profiles, and service flow — all in one intelligent platform designed for modern hospitality teams.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-[15px] hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-border/80 text-foreground rounded-2xl font-semibold text-[15px] hover:bg-muted/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Platform
            </a>
          </div>
        </div>

        {/* Premium Product Mockup — 3-panel, no browser frames, proper spacing */}
        <div className="animate-on-scroll relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] xl:grid-cols-[280px_1fr_280px] gap-6 lg:gap-8 items-start">
            {/* Left — Guest Profile Panel */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] border border-border/20">
                <img
                  src={guestImg}
                  alt="Guest Profile — reservation details, preferences, and activity log"
                  className="w-full"
                  width={280}
                  height={430}
                  loading="eager"
                />
              </div>
            </div>

            {/* Center — Main Timeline Dashboard */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] border border-border/20">
                <img
                  src={timelineImg}
                  alt="Swirl Reservation Timeline — weekly calendar view with reservation blocks"
                  className="w-full"
                  width={820}
                  height={520}
                  loading="eager"
                />
              </div>
            </div>

            {/* Right — New Reservation Panel */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] border border-border/20">
                <img
                  src={bookingImg}
                  alt="Create Reservation — date, party size, and available time slots"
                  className="w-full"
                  width={280}
                  height={450}
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Mobile: show side panels stacked below */}
          <div className="flex lg:hidden gap-4 mt-6 justify-center">
            <div className="w-[45%] max-w-[220px] rounded-xl overflow-hidden shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] border border-border/20">
              <img src={guestImg} alt="Guest Profile" className="w-full" width={220} height={340} loading="eager" />
            </div>
            <div className="w-[45%] max-w-[220px] rounded-xl overflow-hidden shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] border border-border/20">
              <img src={bookingImg} alt="New Reservation" className="w-full" width={220} height={350} loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationHero;
