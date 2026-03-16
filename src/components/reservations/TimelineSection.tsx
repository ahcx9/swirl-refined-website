import React from 'react';
import { Eye, Timer, Clock, Armchair, GripHorizontal } from 'lucide-react';
import timelineImg from '@/assets/reservation-timeline-real.png';

const highlights = [
  { icon: Eye, label: 'Timeline management' },
  { icon: Timer, label: 'Service separation' },
  { icon: Clock, label: 'Real-time availability' },
  { icon: Armchair, label: 'Table assignments' },
  { icon: GripHorizontal, label: 'Booking blocks' },
];

const TimelineSection = () => {
  return (
    <section className="py-24 md:py-36 bg-muted/[0.15]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Visual Timeline</p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
            See Your Entire Service{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              at a Glance
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Swirl Reservations gives restaurants a visual timeline of their entire service, allowing teams to instantly understand availability, table assignments, and upcoming bookings.
          </p>
        </div>

        {/* Product screenshot in browser frame */}
        <div className="animate-on-scroll relative max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,82,204,0.12)] border border-border/30 bg-card">
            {/* Browser chrome */}
            <div className="bg-muted/30 px-4 py-2.5 border-b border-border/20 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-muted/40 rounded-md px-16 py-1 text-[10px] text-muted-foreground/40">
                  swirl.cx/reservations/timeline
                </div>
              </div>
            </div>
            <img src={timelineImg} alt="Reservation Timeline" className="w-full" loading="lazy" />
          </div>

          {/* Callouts */}
          <div className="hidden lg:flex absolute top-[38%] left-[42%] items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <div className="bg-foreground text-primary-foreground rounded-lg px-3.5 py-2 text-xs font-medium shadow-xl whitespace-nowrap">
              Reservation Block
            </div>
          </div>
          <div className="hidden lg:flex absolute top-[15%] left-[30%] items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40" style={{ animationDelay: '0.5s' }} />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <div className="bg-foreground text-primary-foreground rounded-lg px-3.5 py-2 text-xs font-medium shadow-xl whitespace-nowrap">
              Time Grid
            </div>
          </div>
          <div className="hidden lg:flex absolute top-[55%] right-[12%] items-center gap-2.5">
            <div className="bg-foreground text-primary-foreground rounded-lg px-3.5 py-2 text-xs font-medium shadow-xl whitespace-nowrap">
              Guest & Table
            </div>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40" style={{ animationDelay: '1s' }} />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
          </div>
        </div>

        {/* Feature pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll group flex items-center gap-3 p-4 rounded-xl border border-border/30 bg-card/80 backdrop-blur-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
