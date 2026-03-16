import React from 'react';
import { History, Armchair, NotebookPen, AlertTriangle, Phone, PartyPopper } from 'lucide-react';
import guestImg from '@/assets/reservation-guest-real.png';

const trackItems = [
  { icon: History, text: 'Guest visit history' },
  { icon: Armchair, text: 'Seating preferences' },
  { icon: NotebookPen, text: 'Special requests' },
  { icon: AlertTriangle, text: 'Allergies' },
  { icon: Phone, text: 'Contact details' },
];

const tags = [
  { icon: NotebookPen, text: 'Guest notes' },
  { icon: History, text: 'Activity history' },
  { icon: AlertTriangle, text: 'No-show tracking' },
  { icon: Armchair, text: 'Seating preferences' },
  { icon: PartyPopper, text: 'Occasion tags' },
];

const GuestProfileSection = () => {
  return (
    <section className="py-24 md:py-36 bg-muted/[0.15]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Screenshot — clean, no browser frame */}
          <div className="animate-on-scroll relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] border border-border/20">
                <img src={guestImg} alt="Guest Profile" className="w-full" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="animate-on-scroll">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Guest Intelligence</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
              Know Every{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Guest
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              Swirl automatically builds guest profiles so restaurants can deliver personalized service every time.
            </p>

            <div className="space-y-2 mb-10">
              {trackItems.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-3.5 rounded-xl hover:bg-card transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.06] border border-primary/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-[15px]">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border/30 pt-6">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-4">Key highlights</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary/[0.05] text-primary text-xs font-medium border border-primary/[0.08] hover:bg-primary/10 transition-colors cursor-default"
                  >
                    <item.icon className="w-3 h-3" />
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestProfileSection;
