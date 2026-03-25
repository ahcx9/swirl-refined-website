import React from 'react';
import { Eye, Timer, Clock, Armchair, GripHorizontal } from 'lucide-react';
import calendarImg from '@/assets/res-operations-calendar.png';

const highlights = [
  { icon: Eye, label: 'Timeline management' },
  { icon: Timer, label: 'Service separation' },
  { icon: Clock, label: 'Real-time availability' },
  { icon: Armchair, label: 'Table assignments' },
  { icon: GripHorizontal, label: 'Booking blocks' },
];

const LiveOperationsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-muted/[0.15]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-primary text-base md:text-sm font-bold md:font-semibold uppercase tracking-wide md:tracking-widest mb-4">
            Live Operations
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
            See Your Entire Service{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              at a Glance
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A visual timeline of every reservation across your entire week — with guest details, table assignments, and real-time status updates.
          </p>
        </div>

        {/* Product screenshot */}
        <div className="animate-on-scroll relative max-w-6xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] border border-border/20">
            <img
              src={calendarImg}
              alt="Live operations calendar — weekly grid with reservation blocks, guest list sidebar, and real-time status"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Feature pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll group flex items-center gap-3 p-4 rounded-xl border border-border/30 bg-card/80 hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveOperationsSection;
