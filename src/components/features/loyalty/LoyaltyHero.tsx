import React from 'react';
import { Sparkles, Star, Crown, Stamp, Gift, TrendingUp, Check } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';

const LoyaltyHero: React.FC = () => {
  return (
    <section className="relative pt-32 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-background">
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-gradient-radial from-primary/10 via-primary/3 to-transparent blur-3xl" />
        <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          }}
        />
      </div>

      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy column */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/5 rounded-full border border-primary/15 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                  Swirl Loyalty
                </span>
              </div>

              <h1 className="animate-on-scroll animate-delay-100 text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-foreground leading-[1.05] tracking-tight mb-6">
                Loyalty restaurants
                <br />
                <span className="text-primary">actually want to run.</span>
              </h1>

              <p className="animate-on-scroll animate-delay-200 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Launch points, punch card, and VIP tier programs in one integrated
                platform — built for restaurants, cafés, and hospitality brands that
                want repeat customers, not manual work.
              </p>

              <div className="animate-on-scroll animate-delay-300 flex items-center justify-center lg:justify-start gap-3 flex-wrap mb-8">
                <SwirlCTA />
                <BookDemoCTA />
              </div>

              <div className="animate-on-scroll animate-delay-400 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {['Native to POS', 'Multi-branch ready', 'No setup fees'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual column */}
            <div className="lg:col-span-6 relative">
              <div className="animate-on-scroll animate-delay-200 relative">
                {/* Floating chips */}
                <div className="hidden md:flex absolute -top-4 -left-2 z-20 items-center gap-2 bg-background/90 backdrop-blur-md border border-border shadow-xl shadow-foreground/5 rounded-full px-3.5 py-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">Points</span>
                </div>
                <div className="hidden md:flex absolute top-16 -right-3 z-20 items-center gap-2 bg-background/90 backdrop-blur-md border border-border shadow-xl shadow-foreground/5 rounded-full px-3.5 py-2">
                  <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
                    <Stamp className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">Punch Card</span>
                </div>
                <div className="hidden md:flex absolute -bottom-2 left-6 z-20 items-center gap-2 bg-background/90 backdrop-blur-md border border-border shadow-xl shadow-foreground/5 rounded-full px-3.5 py-2">
                  <div className="w-7 h-7 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Crown className="w-3.5 h-3.5 text-yellow-600" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">VIP Tiers</span>
                </div>

                {/* Main customer card */}
                <div className="relative bg-foreground rounded-[28px] p-5 shadow-2xl shadow-foreground/10">
                  <div className="bg-background rounded-2xl overflow-hidden">
                    {/* Header */}
                    <div className="px-5 pt-5 pb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Crown className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold text-foreground">
                          Happiness Program
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wide bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                          Gold
                        </span>
                      </div>
                      <Gift className="w-4 h-4 text-muted-foreground" />
                    </div>

                    {/* Balance card */}
                    <div className="mx-5 rounded-2xl bg-foreground text-background p-5 mb-4 relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl" />
                      <div className="relative">
                        <div className="text-[10px] font-semibold tracking-widest text-background/60 uppercase mb-1">
                          Points Balance
                        </div>
                        <div className="flex items-baseline justify-between">
                          <div className="text-4xl font-bold">2,357</div>
                          <div className="text-xs text-background/60">≈ 235.70 value</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-background/10">
                          <div>
                            <div className="text-[10px] text-background/60 uppercase tracking-wide">Total Earned</div>
                            <div className="text-sm font-semibold">2,357</div>
                          </div>
                          <div>
                            <div className="text-[10px] text-background/60 uppercase tracking-wide">Redeemed</div>
                            <div className="text-sm font-semibold">0</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tier progress */}
                    <div className="px-5 pb-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                          Tier Progress
                        </span>
                        <span className="text-[10px] text-muted-foreground">Silver → Gold</span>
                      </div>
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="h-2 flex-1 rounded-full bg-orange-400" />
                        <div className="h-2 flex-1 rounded-full bg-muted" />
                        <div className="h-2 flex-1 rounded-full bg-yellow-400 ring-2 ring-yellow-200" />
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: 'Add', icon: '+' },
                          { label: 'Deduct', icon: '−' },
                          { label: 'Redeem', icon: '★' },
                        ].map((b) => (
                          <button
                            key={b.label}
                            className="text-xs font-medium text-foreground border border-border rounded-lg py-2 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                          >
                            <span className="mr-1">{b.icon}</span>
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side mini-card: punch progress */}
                <div className="hidden lg:block absolute -bottom-10 -right-6 w-64 bg-background border border-border rounded-2xl shadow-2xl shadow-foreground/10 p-4 z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <Stamp className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Coffee Rewards</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">3/8</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-medium ${
                          i < 3
                            ? 'bg-primary/10 text-primary border border-primary/30'
                            : 'bg-muted/40 text-muted-foreground/50 border border-border'
                        }`}
                      >
                        {i < 3 ? <Stamp className="w-3 h-3" /> : i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-3 pt-3 border-t border-border">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span className="text-[10px] text-muted-foreground">5 more for free coffee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyHero;
