import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import bookingImg from '@/assets/reservation-booking-real.png';

const actions = [
  'Create reservations instantly',
  'Seat guests with one tap',
  'Modify bookings in real-time',
  'Mark no-shows automatically',
  'Manage waitlists effortlessly',
];

const OperationsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-muted/[0.15]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="animate-on-scroll">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Operations</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
              Built for Real{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Restaurant Operations
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
              Swirl Reservations was designed for the way restaurants actually operate. All actions happen in a single unified interface.
            </p>

            <div className="space-y-3">
              {actions.map((action, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-[15px]">{action}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 text-primary font-semibold text-[15px] hover:gap-3 transition-all duration-300"
              >
                See it in action
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Screenshot */}
          <div className="animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,82,204,0.12)] border border-border/30 bg-card">
              <div className="bg-muted/30 px-4 py-2.5 border-b border-border/20 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
              </div>
              <img src={bookingImg} alt="Reservation Management" className="w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
