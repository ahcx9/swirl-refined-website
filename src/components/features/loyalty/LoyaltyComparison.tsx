import React from 'react';
import { X, Check, Sparkles } from 'lucide-react';

const typical = [
  'Disconnected from POS',
  'Separate customer database',
  'Limited redemption control',
  'Weak or generic reporting',
  'Confusing for staff to operate',
  'Generic — not built for hospitality',
  'One program type, take it or leave it',
];

const swirl = [
  'Native to POS, CRM, and orders',
  'Single customer profile across all channels',
  'Granular reward and item rules',
  'Retention, redemption, and tier analytics built-in',
  'One-tap workflow your team learns in minutes',
  'Designed for restaurants, cafés, and groups',
  'Points, punch card, and tiered — together',
];

const LoyaltyComparison: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/5 rounded-full border border-primary/15 mb-5">
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                The difference
              </span>
            </div>
            <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Loyalty, but not bolted on.
            </h2>
            <p className="animate-on-scroll animate-delay-200 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Most loyalty tools live outside the restaurant's operating system. Swirl
              builds it into the way your team already works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Typical */}
            <div className="animate-on-scroll bg-background border border-border rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <X className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-sm font-semibold text-muted-foreground">Typical loyalty tools</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Disconnected, manual, generic</h3>
              <ul className="space-y-3">
                {typical.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Swirl */}
            <div className="animate-on-scroll animate-delay-100 relative bg-foreground text-background rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl shadow-foreground/20">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-background/80">Swirl Loyalty</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">Integrated, intelligent, hospitality-native</h3>
                <ul className="space-y-3">
                  {swirl.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-background/90">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyComparison;
