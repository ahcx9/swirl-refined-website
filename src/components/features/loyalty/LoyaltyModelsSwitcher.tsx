import React, { useState } from 'react';
import { Star, Stamp, Crown, Check, ArrowRight } from 'lucide-react';

type ModelKey = 'points' | 'punch' | 'tiered';

const models = {
  points: {
    key: 'points' as const,
    title: 'Points',
    tagline: 'Earn & Burn',
    icon: Star,
    accent: 'text-primary',
    bg: 'bg-primary/10',
    description:
      'Spend-based rewards customers can build up and redeem at checkout. Best for flexible incentives and steady repeat frequency.',
    bestFor: ['QSR & dine-in', 'Spend-driven retention', 'Flexible rewards'],
    preview: <PointsPreview />,
  },
  punch: {
    key: 'punch' as const,
    title: 'Punch Card',
    tagline: 'Visit-based',
    icon: Stamp,
    accent: 'text-amber-600',
    bg: 'bg-amber-100',
    description:
      'Visit-based loyalty that drives habit. Ideal for coffee, drinks, desserts, and repeat-item purchases customers come back for.',
    bestFor: ['Cafés & dessert brands', 'Habit-forming items', 'Simple rewards'],
    preview: <PunchPreview />,
  },
  tiered: {
    key: 'tiered' as const,
    title: 'Tiered',
    tagline: 'VIP progression',
    icon: Crown,
    accent: 'text-yellow-600',
    bg: 'bg-yellow-100',
    description:
      'Bronze, Silver, Gold-style progression for VIP recognition. Higher retention, better lifetime value, and a status customers want.',
    bestFor: ['Premium brands', 'Multi-branch groups', 'High-value guests'],
    preview: <TieredPreview />,
  },
};

function PointsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider">Balance</div>
          <div className="text-3xl font-bold text-foreground">2,450 <span className="text-sm font-medium text-muted-foreground">pts</span></div>
        </div>
        <div className="text-xs text-primary font-semibold">≈ 245 value</div>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div className="h-full w-[72%] bg-primary rounded-full" />
      </div>
      <div className="rounded-xl border border-border bg-muted/30 p-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">10 pts per 1 spent</span>
        <span className="text-xs font-semibold text-foreground">Min 100 to redeem</span>
      </div>
    </div>
  );
}

function PunchPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground">3/8 punches</span>
        <span className="text-xs text-muted-foreground">5 to free coffee</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg flex items-center justify-center ${
              i < 3
                ? 'bg-primary/10 border-2 border-primary/30'
                : 'bg-muted/30 border border-border'
            }`}
          >
            {i < 3 ? <Stamp className="w-4 h-4 text-primary" /> : <span className="text-xs text-muted-foreground/50">{i + 1}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function TieredPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground">Silver → Gold</span>
        <span className="text-xs text-yellow-600 font-semibold">1.5× multiplier</span>
      </div>
      <div className="space-y-2">
        {[
          { name: 'Bronze', pts: '0+', color: 'bg-orange-400' },
          { name: 'Silver', pts: '500+', color: 'bg-gray-400' },
          { name: 'Gold', pts: '1500+', color: 'bg-yellow-400', active: true },
        ].map((t) => (
          <div
            key={t.name}
            className={`flex items-center justify-between p-2.5 rounded-lg border ${
              t.active ? 'border-yellow-400 bg-yellow-50' : 'border-border bg-background'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${t.color}`} />
              <span className="text-xs font-medium text-foreground">{t.name}</span>
            </div>
            <span className="text-xs text-muted-foreground">{t.pts} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const LoyaltyModelsSwitcher: React.FC = () => {
  const [active, setActive] = useState<ModelKey>('points');
  const current = models[active];

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/5 rounded-full border border-primary/15 mb-5">
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                Three models, one platform
              </span>
            </div>
            <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Pick the loyalty model
              <br />
              <span className="text-primary">your guests deserve.</span>
            </h2>
            <p className="animate-on-scroll animate-delay-200 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Run one program type or all three at once. Every model is native to Swirl —
              no separate apps, no data silos.
            </p>
          </div>

          {/* Model selector */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {(Object.keys(models) as ModelKey[]).map((key, i) => {
              const m = models[key];
              const isActive = active === key;
              const Icon = m.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`group text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-primary bg-background shadow-xl shadow-primary/10 -translate-y-1'
                      : 'border-border bg-background hover:border-primary/30 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${m.accent}`} />
                    </div>
                    {isActive && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                    {m.tagline}
                  </div>
                  <div className="text-xl font-bold text-foreground mb-2">{m.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                </button>
              );
            })}
          </div>

          {/* Active preview */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-background border border-border rounded-3xl p-6 md:p-10 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-10 h-10 rounded-xl ${current.bg} flex items-center justify-center`}>
                  <current.icon className={`w-5 h-5 ${current.accent}`} />
                </div>
                <span className="text-sm font-semibold text-foreground">{current.title} loyalty</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                Built for {current.tagline.toLowerCase()} retention.
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{current.description}</p>
              <ul className="space-y-2.5 mb-6">
                {current.bestFor.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Configurable in minutes
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="bg-muted/30 border border-border rounded-2xl p-6">
              {current.preview}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyModelsSwitcher;
