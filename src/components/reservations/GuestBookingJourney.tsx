import React from 'react';
import step1Img from '@/assets/res-guest-step1.png';
import step2Img from '@/assets/res-guest-step2.png';
import step3Img from '@/assets/res-guest-step3.png';
import step4Img from '@/assets/res-guest-step4.png';

const steps = [
  {
    number: '01',
    title: 'Select Date & Time',
    desc: 'Guests choose their party size, preferred date, and available time slot — all in a clean, intuitive interface.',
    img: step1Img,
    alt: 'Step 1 — Party size selection, calendar picker, and available time slots',
    highlight: 'Time selection',
  },
  {
    number: '02',
    title: 'Enter Guest Details',
    desc: 'Name, email, and phone number captured effortlessly with country code support and clear form design.',
    img: step2Img,
    alt: 'Step 2 — Guest contact information form with name, email, and phone',
    highlight: 'Contact capture',
  },
  {
    number: '03',
    title: 'Personalize Reservation',
    desc: 'Occasion tags, allergy selections, and dietary restrictions — ensuring every visit is tailored to the guest.',
    img: step3Img,
    alt: 'Step 3 — Occasion, allergies, and dietary restriction preferences',
    highlight: 'Preferences',
  },
  {
    number: '04',
    title: 'Confirm Booking',
    desc: 'Guests receive a confirmation code, booking summary, and Google Calendar link — all in one screen.',
    img: step4Img,
    alt: 'Step 4 — Reservation confirmed with confirmation code and booking details',
    highlight: 'Confirmed',
  },
];

const GuestBookingJourney = () => {
  return (
    <section className="py-28 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-28 animate-on-scroll">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            Guest Experience
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6">
            Booking in{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              four effortless steps
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A smooth, branded reservation flow your guests will love — from selection to confirmation in under a minute.
          </p>
        </div>

        {/* Progress connector (desktop only) */}
        <div className="hidden lg:block relative mb-14">
          <div className="absolute top-1/2 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          <div className="flex justify-between max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center text-xs font-bold text-primary shadow-sm">
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Premium card container */}
              <div className="rounded-2xl bg-card border border-border/30 p-3 pb-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_48px_-12px_rgba(0,82,204,0.12)] group-hover:-translate-y-1.5 transition-all duration-500 ease-out h-full flex flex-col">
                {/* Mockup container */}
                <div className="rounded-xl overflow-hidden bg-muted/30 mb-5 relative">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none z-10 rounded-xl" />
                  <img
                    src={step.img}
                    alt={step.alt}
                    className="w-full relative z-0 image-rendering-crisp"
                    loading="lazy"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>

                {/* Card content */}
                <div className="px-2 flex flex-col flex-1">
                  {/* Step indicator + title */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="lg:hidden text-[11px] font-bold text-primary/70 bg-primary/[0.06] border border-primary/10 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </span>
                    <h3 className="text-foreground font-semibold text-[15px] leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-[13px] leading-relaxed flex-1">
                    {step.desc}
                  </p>

                  {/* Highlight tag */}
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-primary/80 bg-primary/[0.05] border border-primary/10 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {step.highlight}
                    </span>
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
