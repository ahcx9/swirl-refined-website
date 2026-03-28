import React from 'react';
import { Calendar, Clock, Users, MapPin, Check, ChevronRight, Mail, Phone, User, MessageSquare, Heart, CalendarPlus, Star, Utensils } from 'lucide-react';

/* ─── Shared mini-components for realistic UI feel ─── */

const Pill = ({ children, active = false, className = '' }: { children: React.ReactNode; active?: boolean; className?: string }) => (
  <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${active ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-muted/60 text-muted-foreground hover:bg-muted'} ${className}`}>
    {children}
  </span>
);

const MiniInput = ({ icon: Icon, placeholder }: { icon: React.ElementType; placeholder: string }) => (
  <div className="flex items-center gap-2 bg-muted/30 border border-border/40 rounded-lg px-3 py-2">
    <Icon className="w-3.5 h-3.5 text-muted-foreground/60 flex-shrink-0" />
    <span className="text-[11px] text-muted-foreground/50">{placeholder}</span>
  </div>
);

const MiniButton = ({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'ghost' }) => (
  <div className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-semibold ${variant === 'primary' ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-muted/40 text-muted-foreground border border-border/30'}`}>
    {children}
  </div>
);

/* ─── Step 1: Select Location / Date / Party Size ─── */
const Step1Mockup = () => (
  <div className="space-y-3 p-1">
    {/* Branch selector */}
    <div className="flex items-center gap-2 bg-muted/20 border border-border/30 rounded-lg px-3 py-2">
      <MapPin className="w-3.5 h-3.5 text-primary/70" />
      <span className="text-[11px] font-medium text-foreground/80">Downtown Branch</span>
      <ChevronRight className="w-3 h-3 text-muted-foreground/40 ml-auto" />
    </div>

    {/* Mini calendar */}
    <div className="bg-muted/10 border border-border/20 rounded-xl p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold text-foreground/70">March 2026</span>
        <div className="flex gap-1">
          <div className="w-5 h-5 rounded-md bg-muted/30 flex items-center justify-center"><ChevronRight className="w-3 h-3 text-muted-foreground/50 rotate-180" /></div>
          <div className="w-5 h-5 rounded-md bg-muted/30 flex items-center justify-center"><ChevronRight className="w-3 h-3 text-muted-foreground/50" /></div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {['S','M','T','W','T','F','S'].map((d,i) => (
          <span key={i} className="text-[8px] font-medium text-muted-foreground/50 py-0.5">{d}</span>
        ))}
        {[...Array(31)].map((_,i) => (
          <span key={i} className={`text-[9px] py-1 rounded-md ${i === 14 ? 'bg-primary text-primary-foreground font-bold' : i < 3 ? 'text-muted-foreground/30' : 'text-foreground/60 hover:bg-muted/30'}`}>
            {i + 1}
          </span>
        ))}
      </div>
    </div>

    {/* Guest count */}
    <div>
      <span className="text-[10px] font-medium text-muted-foreground/70 mb-1.5 block">Party Size</span>
      <div className="flex gap-1.5">
        {[1,2,3,4,5,6].map(n => (
          <Pill key={n} active={n === 4}>{n}</Pill>
        ))}
        <Pill>6+</Pill>
      </div>
    </div>
  </div>
);

/* ─── Step 2: Choose Time Slot ─── */
const Step2Mockup = () => (
  <div className="space-y-3 p-1">
    {/* Date summary */}
    <div className="flex items-center gap-2 bg-primary/[0.04] border border-primary/10 rounded-lg px-3 py-2">
      <Calendar className="w-3.5 h-3.5 text-primary/70" />
      <span className="text-[11px] font-medium text-foreground/80">Saturday, March 15</span>
      <span className="text-[10px] text-muted-foreground/60 ml-auto">4 guests</span>
    </div>

    {/* Lunch slots */}
    <div>
      <span className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-wider mb-2 block">Lunch</span>
      <div className="grid grid-cols-3 gap-1.5">
        {['11:30','12:00','12:30','1:00','1:30','2:00'].map((t,i) => (
          <div key={i} className={`text-center py-2 rounded-lg text-[11px] font-medium border transition-all ${i === 2 ? 'bg-primary text-primary-foreground border-primary shadow-sm' : 'bg-background border-border/30 text-foreground/70 hover:border-primary/30'}`}>
            {t}
          </div>
        ))}
      </div>
    </div>

    {/* Dinner slots */}
    <div>
      <span className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-wider mb-2 block">Dinner</span>
      <div className="grid grid-cols-3 gap-1.5">
        {['6:00','6:30','7:00','7:30','8:00','8:30'].map((t,i) => (
          <div key={i} className="text-center py-2 rounded-lg text-[11px] font-medium border border-border/30 bg-background text-foreground/70 hover:border-primary/30 transition-all">
            {t}
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Step 3: Guest Details ─── */
const Step3Mockup = () => (
  <div className="space-y-2.5 p-1">
    <MiniInput icon={User} placeholder="Full name" />
    <MiniInput icon={Phone} placeholder="+966 5XX XXX XXXX" />
    <MiniInput icon={Mail} placeholder="email@example.com" />
    <MiniInput icon={MessageSquare} placeholder="Special requests (optional)" />

    {/* Occasion chips */}
    <div>
      <span className="text-[10px] font-medium text-muted-foreground/70 mb-1.5 block">Occasion</span>
      <div className="flex flex-wrap gap-1.5">
        <Pill active><Heart className="w-3 h-3" /> Birthday</Pill>
        <Pill>Anniversary</Pill>
        <Pill>Business</Pill>
        <Pill>Date Night</Pill>
      </div>
    </div>

    {/* Dietary */}
    <div>
      <span className="text-[10px] font-medium text-muted-foreground/70 mb-1.5 block">Dietary</span>
      <div className="flex flex-wrap gap-1.5">
        <Pill>Vegetarian</Pill>
        <Pill active><Utensils className="w-3 h-3" /> Halal</Pill>
        <Pill>Gluten-free</Pill>
      </div>
    </div>
  </div>
);

/* ─── Step 4: Confirmation ─── */
const Step4Mockup = () => (
  <div className="space-y-3 p-1">
    {/* Success badge */}
    <div className="flex flex-col items-center py-2">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
        <Check className="w-5 h-5 text-primary" />
      </div>
      <span className="text-[13px] font-bold text-foreground">Booking Confirmed!</span>
      <span className="text-[10px] text-muted-foreground mt-0.5">Confirmation #SWR-4821</span>
    </div>

    {/* Summary card */}
    <div className="bg-muted/15 border border-border/25 rounded-xl p-3 space-y-2">
      <div className="flex justify-between text-[10px]">
        <span className="text-muted-foreground">Date</span>
        <span className="font-medium text-foreground/80">Sat, Mar 15</span>
      </div>
      <div className="flex justify-between text-[10px]">
        <span className="text-muted-foreground">Time</span>
        <span className="font-medium text-foreground/80">12:30 PM</span>
      </div>
      <div className="flex justify-between text-[10px]">
        <span className="text-muted-foreground">Guests</span>
        <span className="font-medium text-foreground/80">4 people</span>
      </div>
      <div className="flex justify-between text-[10px]">
        <span className="text-muted-foreground">Location</span>
        <span className="font-medium text-foreground/80">Downtown Branch</span>
      </div>
      <div className="flex justify-between text-[10px]">
        <span className="text-muted-foreground">Occasion</span>
        <span className="font-medium text-foreground/80">🎂 Birthday</span>
      </div>
    </div>

    {/* Action buttons */}
    <div className="flex gap-2">
      <MiniButton variant="ghost"><CalendarPlus className="w-3 h-3" /> Add to Calendar</MiniButton>
      <MiniButton>Modify Booking</MiniButton>
    </div>
  </div>
);

/* ─── Step data ─── */
const steps = [
  { num: 1, title: 'Select Date & Party', desc: 'Choose your branch, date, and group size', mockup: <Step1Mockup /> },
  { num: 2, title: 'Pick a Time Slot', desc: 'Browse available lunch and dinner slots', mockup: <Step2Mockup /> },
  { num: 3, title: 'Enter Your Details', desc: 'Add guest info, occasion, and preferences', mockup: <Step3Mockup /> },
  { num: 4, title: 'Booking Confirmed', desc: 'Instant confirmation with summary & actions', mockup: <Step4Mockup /> },
];

/* ─── Main Section ─── */
const GuestBookingJourney = () => {
  return (
    <section className="py-32 md:py-44 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/[0.015] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-24 animate-on-scroll">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Guest Experience
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
            A seamless reservation{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            From discovery to confirmation — a polished booking flow your guests will love.
          </p>
        </div>

        {/* Desktop progress line */}
        <div className="hidden lg:block relative mb-10">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          </div>
          <div className="flex justify-between max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.num} className="relative flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center text-[11px] font-bold text-primary shadow-sm z-10">
                  {String(step.num).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="rounded-3xl bg-card border border-border/25 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_50px_-12px_rgba(0,82,204,0.12)] group-hover:-translate-y-2 transition-all duration-500 ease-out h-full flex flex-col overflow-hidden">
                {/* Card header */}
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-primary/60 bg-primary/[0.06] border border-primary/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-foreground leading-snug mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Divider */}
                <div className="mx-5 h-px bg-border/20" />

                {/* Mockup area — simulated app frame */}
                <div className="px-4 py-4 flex-1">
                  {/* Fake app bar */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                    <div className="w-2 h-2 rounded-full bg-green-400/50" />
                    <div className="flex-1 mx-3 h-4 bg-muted/20 rounded-full flex items-center justify-center">
                      <span className="text-[7px] text-muted-foreground/40 font-medium">reserve.swirl.cx</span>
                    </div>
                  </div>

                  {/* Mockup content */}
                  <div className="bg-background/80 border border-border/15 rounded-xl p-3 group-hover:scale-[1.01] transition-transform duration-500">
                    {step.mockup}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestBookingJourney;
