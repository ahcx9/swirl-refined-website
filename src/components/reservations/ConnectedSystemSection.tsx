import React from 'react';
import { CreditCard, Users, Heart, BarChart3, CalendarCheck } from 'lucide-react';

const modules = [
  { icon: CalendarCheck, name: 'Reservations', active: true },
  { icon: CreditCard, name: 'POS' },
  { icon: Users, name: 'CRM' },
  { icon: Heart, name: 'Loyalty' },
  { icon: BarChart3, name: 'Analytics' },
];

const ConnectedSystemSection = () => {
  return (
    <section className="py-24 md:py-36 bg-muted/[0.15]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-primary text-base md:text-sm font-bold md:font-semibold uppercase tracking-wide md:tracking-widest mb-4">
            Ecosystem
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
            One Platform,{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Fully Connected
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Reservations don't exist in isolation. Every booking flows into your POS, CRM, loyalty engine, and analytics — automatically.
          </p>
        </div>

        {/* Connected flow */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-3 max-w-4xl mx-auto">
          {modules.map((mod, i) => (
            <React.Fragment key={i}>
              <div
                className={`animate-on-scroll group flex flex-col items-center gap-3 p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  mod.active
                    ? 'bg-primary/[0.06] border-primary/20 shadow-[0_8px_30px_-8px_rgba(0,82,204,0.12)]'
                    : 'bg-card/80 border-border/30 hover:border-primary/15 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    mod.active
                      ? 'bg-primary/10 border border-primary/15'
                      : 'bg-primary/[0.06] border border-primary/[0.08] group-hover:bg-primary/10'
                  }`}
                >
                  <mod.icon className={`w-7 h-7 ${mod.active ? 'text-primary' : 'text-primary/70'}`} />
                </div>
                <p className={`text-sm font-semibold ${mod.active ? 'text-primary' : 'text-foreground'}`}>
                  {mod.name}
                </p>
              </div>

              {/* Connector line */}
              {i < modules.length - 1 && (
                <div className="hidden md:flex items-center">
                  <div className="w-8 h-px bg-border" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                  <div className="w-8 h-px bg-border" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectedSystemSection;
