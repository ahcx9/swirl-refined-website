import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, Building2, BarChart3 } from 'lucide-react';

const outcomes = [
  {
    icon: ShieldCheck,
    title: 'Reduce no-shows',
    desc: 'Automated confirmations and no-show tracking keep your tables filled and your revenue protected.',
  },
  {
    icon: UserCheck,
    title: 'Capture guest data automatically',
    desc: 'Every reservation builds a richer guest profile — contact info, preferences, allergies, and visit history.',
  },
  {
    icon: Sparkles,
    title: 'Personalize every visit',
    desc: 'Remember seating preferences, occasions, and dietary needs to deliver memorable experiences.',
  },
  {
    icon: Building2,
    title: 'Manage multiple locations',
    desc: 'Centralized reservation management across all your restaurants from a single dashboard.',
  },
  {
    icon: BarChart3,
    title: 'Improve table utilization',
    desc: 'Smart table suggestions and visual timelines help maximize every seat during every service.',
  },
];

const WhyItMattersSection = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-primary text-base md:text-sm font-bold md:font-semibold uppercase tracking-wide md:tracking-widest mb-4">
            Outcomes
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
            Why It{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Matters
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Swirl Reservations isn't just about taking bookings — it's about transforming how your restaurant operates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll group p-7 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm hover:shadow-[0_12px_40px_-10px_rgba(0,82,204,0.1)] hover:border-primary/15 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
