import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import timelineImg from '@/assets/reservation-timeline-real.png';
import bookingImg from '@/assets/reservation-booking-real.png';
import guestImg from '@/assets/reservation-guest-real.png';

const ReservationHero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div className="animate-on-scroll">
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

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Swirl Reservations gives restaurants complete control over bookings, tables, guest profiles, and service flow — all in one intelligent platform designed for modern hospitality teams.
            </p>

            <p className="text-base text-muted-foreground/70 leading-relaxed mb-10 max-w-xl">
              Manage reservations visually, track guest preferences, optimize seating capacity, and deliver unforgettable dining experiences with the reservation system built directly into swirl.cx.
            </p>

            <div className="flex flex-wrap gap-4">
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

          {/* Right - Layered product mockup */}
          <div className="animate-on-scroll relative">
            {/* Main dashboard mockup */}
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,82,204,0.15)] border border-border/30 bg-card/80 backdrop-blur-sm">
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
                  alt="Swirl Reservation Timeline Dashboard"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating booking panel */}
            <div className="absolute -bottom-8 -left-6 md:-left-12 z-20 w-[55%] max-w-[280px] animate-[float_8s_ease-in-out_infinite]">
              <div className="rounded-xl overflow-hidden shadow-[0_16px_40px_-10px_rgba(0,0,0,0.15)] border border-border/20 bg-card/95 backdrop-blur-md">
                <img
                  src={bookingImg}
                  alt="Create Reservation"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating guest panel */}
            <div className="absolute -top-4 -right-4 md:-right-8 z-20 w-[35%] max-w-[180px] animate-[float_7s_ease-in-out_infinite_1.5s]">
              <div className="rounded-xl overflow-hidden shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] border border-border/20 bg-card/95 backdrop-blur-md">
                <img
                  src={guestImg}
                  alt="Guest Profile"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/[0.04] to-transparent rounded-3xl -z-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationHero;
