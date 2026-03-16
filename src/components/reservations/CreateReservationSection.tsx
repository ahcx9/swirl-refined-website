import React from 'react';
import { Clock, UserPlus, Users, Settings, ClipboardList } from 'lucide-react';
import bookingImg from '@/assets/reservation-booking-real.png';

const features = [
  { icon: Clock, text: 'Real-time time slot availability' },
  { icon: UserPlus, text: 'Guest information capture' },
  { icon: Users, text: 'Party size controls' },
  { icon: Settings, text: 'Automatic table suggestions' },
  { icon: ClipboardList, text: 'Instant reservation summary' },
];

const CreateReservationSection = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="animate-on-scroll">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Instant Booking</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
              Create Reservations{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                in Seconds
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
              Restaurant staff can quickly create reservations using a beautifully designed interface that automatically shows available time slots and table capacity.
            </p>
            <div className="space-y-2">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-3.5 rounded-xl hover:bg-muted/40 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.06] border border-primary/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-[15px]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,82,204,0.12)] border border-border/30 bg-card">
              <div className="bg-muted/30 px-4 py-2.5 border-b border-border/20 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
              </div>
              <img src={bookingImg} alt="Create Reservation Interface" className="w-full" loading="lazy" />
            </div>

            {/* Callouts */}
            <div className="hidden lg:flex absolute top-[58%] left-[-10%] items-center gap-2.5">
              <div className="bg-foreground text-primary-foreground rounded-lg px-3.5 py-2 text-xs font-medium shadow-xl whitespace-nowrap">
                Available Time Slots
              </div>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40" style={{ animationDelay: '0.3s' }} />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
            </div>
            <div className="hidden lg:flex absolute top-[25%] right-[-6%] items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40" style={{ animationDelay: '0.8s' }} />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <div className="bg-foreground text-primary-foreground rounded-lg px-3.5 py-2 text-xs font-medium shadow-xl whitespace-nowrap">
                Summary Panel
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-3xl -z-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateReservationSection;
