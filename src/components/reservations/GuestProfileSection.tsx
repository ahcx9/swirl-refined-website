import React from 'react';
import { History, Armchair, NotebookPen, AlertTriangle, Phone, PartyPopper } from 'lucide-react';
import guestProfileImg from '@/assets/res-guest-profile.png';

const trackItems = [
  { icon: History, text: 'Guest visit history & no-show tracking' },
  { icon: Armchair, text: 'Seating preferences & table assignments' },
  { icon: NotebookPen, text: 'Custom notes per reservation' },
  { icon: AlertTriangle, text: 'Allergies & dietary requirements' },
  { icon: Phone, text: 'Contact details & occasion tags' },
];

const actions = ['Seat Guest', 'Cancel', 'No-Show', 'Edit Details'];

const GuestProfileSection = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Screenshot */}
          <div className="animate-on-scroll relative flex justify-center lg:order-1">
            <div className="relative w-full max-w-[320px]">
              <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] border border-border/20">
                <img
                  src={guestProfileImg}
                  alt="Guest profile — reservation details, preferences, notes, activity log, and quick actions"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/[0.04] rounded-full blur-[50px]" />
            </div>
          </div>

          {/* Text */}
          <div className="animate-on-scroll lg:order-0">
            <p className="text-primary text-base md:text-sm font-bold md:font-semibold uppercase tracking-wide md:tracking-widest mb-4">
              Guest Intelligence
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
              Know Every{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Guest
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              Swirl automatically builds rich guest profiles — so your team can deliver personalized service every time, with full visibility into preferences, history, and special requests.
            </p>

            <div className="space-y-2 mb-10">
              {trackItems.map((item, i) => (
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

            {/* Action pills */}
            <div className="border-t border-border/30 pt-6">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-4">Quick actions</p>
              <div className="flex flex-wrap gap-2">
                {actions.map((action, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-primary/[0.05] text-primary text-xs font-medium border border-primary/[0.08] cursor-default"
                  >
                    {action}
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
