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
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />

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

        {/* Premium Product Mockup — 3-panel narrative */}
        <div className="animate-on-scroll relative max-w-6xl mx-auto">
          {/* Decorative glow behind the whole composition */}
          <div className="absolute inset-0 -inset-x-8 bg-gradient-to-tr from-primary/[0.05] via-primary/[0.02] to-transparent rounded-[2rem] blur-3xl -z-10" />

          <div className="relative flex items-center justify-center gap-0 md:gap-0">
            {/* Left — Guest Profile Panel */}
            <div className="hidden lg:block relative z-20 -mr-8 flex-shrink-0 w-[220px] xl:w-[260px] animate-[float_7s_ease-in-out_infinite_1s]">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] border border-border/20 bg-card/95 backdrop-blur-md transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Mini browser chrome */}
                <div className="bg-muted/40 px-3 py-1.5 border-b border-border/20 flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                    <div className="w-2 h-2 rounded-full bg-green-400/50" />
                  </div>
                  <span className="text-[8px] text-muted-foreground/40 ml-2">Guest Profile</span>
                </div>
                <img
                  src={guestImg}
                  alt="Guest Profile — reservation details, preferences, and activity log"
                  className="w-full"
                  width={260}
                  height={400}
                  loading="eager"
                />
              </div>
              {/* Callout badge */}
              <div className="absolute -bottom-3 -right-3 bg-card border border-border/30 rounded-xl px-3 py-1.5 shadow-lg text-[11px] font-semibold text-foreground/80 backdrop-blur-md">
                <span className="text-primary mr-1">●</span> Guest Intel
              </div>
            </div>

            {/* Center — Main Timeline Dashboard */}
            <div className="relative z-10 flex-1 min-w-0 max-w-[820px]">
              <div className="rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,82,204,0.18)] border border-border/30 bg-card/80 backdrop-blur-sm">
                {/* Browser chrome */}
                <div className="bg-muted/30 px-4 py-2.5 border-b border-border/30 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-muted/50 rounded-md px-12 py-1 text-[10px] text-muted-foreground/50">
                      swirl.cx/reservations
                    </div>
                  </div>
                </div>
                <img
                  src={timelineImg}
                  alt="Swirl Reservation Timeline — weekly calendar view with reservation blocks"
                  className="w-full"
                  width={820}
                  height={520}
                  loading="eager"
                />
              </div>

              {/* Floating callouts on timeline */}
              <div className="absolute top-16 left-8 hidden md:flex items-center gap-2 bg-card/95 border border-border/20 rounded-lg px-3 py-1.5 shadow-md backdrop-blur-md text-[11px] font-medium text-foreground/70 animate-[float_9s_ease-in-out_infinite_2s]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                6 Guests · Table 9
              </div>
              <div className="absolute bottom-12 right-8 hidden md:flex items-center gap-2 bg-card/95 border border-border/20 rounded-lg px-3 py-1.5 shadow-md backdrop-blur-md text-[11px] font-medium text-foreground/70 animate-[float_8s_ease-in-out_infinite_0.5s]">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Confirmed
              </div>
            </div>

            {/* Right — New Reservation Panel */}
            <div className="hidden lg:block relative z-20 -ml-8 flex-shrink-0 w-[220px] xl:w-[260px] animate-[float_8s_ease-in-out_infinite_0.5s]">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] border border-border/20 bg-card/95 backdrop-blur-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Mini browser chrome */}
                <div className="bg-muted/40 px-3 py-1.5 border-b border-border/20 flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                    <div className="w-2 h-2 rounded-full bg-green-400/50" />
                  </div>
                  <span className="text-[8px] text-muted-foreground/40 ml-2">New Reservation</span>
                </div>
                <img
                  src={bookingImg}
                  alt="Create Reservation — date, party size, and available time slots"
                  className="w-full"
                  width={260}
                  height={420}
                  loading="eager"
                />
              </div>
              {/* Callout badge */}
              <div className="absolute -top-3 -left-3 bg-card border border-border/30 rounded-xl px-3 py-1.5 shadow-lg text-[11px] font-semibold text-foreground/80 backdrop-blur-md">
                <span className="text-green-500 mr-1">●</span> Quick Book
              </div>
            </div>
          </div>

          {/* Mobile: show side panels stacked below */}
          <div className="flex lg:hidden gap-4 mt-6 justify-center">
            <div className="w-[45%] max-w-[200px] rounded-xl overflow-hidden shadow-lg border border-border/20 bg-card/95">
              <img src={guestImg} alt="Guest Profile" className="w-full" width={200} height={300} loading="eager" />
            </div>
            <div className="w-[45%] max-w-[200px] rounded-xl overflow-hidden shadow-lg border border-border/20 bg-card/95">
              <img src={bookingImg} alt="New Reservation" className="w-full" width={200} height={320} loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationHero;
