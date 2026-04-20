import React from 'react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
import { Sparkles } from 'lucide-react';

const LoyaltyFinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="animate-on-scroll relative overflow-hidden rounded-[32px] bg-foreground text-background p-10 md:p-16 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, hsl(var(--background)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--background)) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-background/10 backdrop-blur-md rounded-full border border-background/20 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold tracking-wide text-background uppercase">
                  Ready when you are
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-[1.05]">
                Build loyalty into
                <br />
                <span className="text-primary">every order.</span>
              </h2>
              <p className="text-base md:text-lg text-background/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Launch restaurant loyalty that's easy for teams to run and valuable
                enough for guests to come back to.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <SwirlCTA />
                <BookDemoCTA className="!border-background/30 !text-background hover:!bg-background/10 hover:!border-background/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyFinalCTA;
