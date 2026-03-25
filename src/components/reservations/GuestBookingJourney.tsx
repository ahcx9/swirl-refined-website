import React from 'react';
import step1Img from '@/assets/res-guest-step1.png';
import step2Img from '@/assets/res-guest-step2.png';
import step3Img from '@/assets/res-guest-step3.png';
import step4Img from '@/assets/res-guest-step4.png';

const steps = [
  {
    number: '01',
    title: 'Select date, time & guests',
    desc: 'Guests choose their party size, preferred date, and available time slot — all in a clean, intuitive interface.',
    img: step1Img,
    alt: 'Step 1 — Party size selection, calendar picker, and available time slots',
  },
  {
    number: '02',
    title: 'Enter guest details',
    desc: 'Name, email, and phone number captured effortlessly with country code support and clear form design.',
    img: step2Img,
    alt: 'Step 2 — Guest contact information form with name, email, and phone',
  },
  {
    number: '03',
    title: 'Preferences & personalization',
    desc: 'Occasion tags, allergy selections, and dietary restrictions — ensuring every visit is tailored to the guest.',
    img: step3Img,
    alt: 'Step 3 — Occasion, allergies, and dietary restriction preferences',
  },
  {
    number: '04',
    title: 'Instant confirmation',
    desc: 'Guests receive a confirmation code, booking summary, and Google Calendar link — all in one screen.',
    img: step4Img,
    alt: 'Step 4 — Reservation confirmed with confirmation code and booking details',
  },
];

const GuestBookingJourney = () => {
  return (
    <section className="py-24 md:py-36 bg-muted/[0.15]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24 animate-on-scroll">
          <p className="text-primary text-base md:text-sm font-bold md:font-semibold uppercase tracking-wide md:tracking-widest mb-4">
            Guest Experience
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
            Booking in{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              four effortless steps
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A smooth, branded reservation flow your guests will love — from selection to confirmation in under a minute.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="animate-on-scroll group">
              {/* Step number */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-sm font-bold text-primary bg-primary/[0.06] border border-primary/10 w-9 h-9 rounded-xl flex items-center justify-center">
                  {step.number}
                </span>
                <h3 className="text-foreground font-semibold text-[15px] leading-snug">{step.title}</h3>
              </div>

              {/* Mockup card */}
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] border border-border/20 bg-card mb-5 group-hover:shadow-[0_12px_40px_-10px_rgba(0,82,204,0.1)] group-hover:-translate-y-1 transition-all duration-300">
                <img
                  src={step.img}
                  alt={step.alt}
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestBookingJourney;
