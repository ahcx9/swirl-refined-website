import React from 'react';
import { Star, Stamp, Crown, Check, Trash2, Plus } from 'lucide-react';

const PointsSetupVisual = () => (
  <div className="bg-background border border-border rounded-3xl p-6 shadow-xl shadow-foreground/5">
    <div className="mb-5">
      <div className="text-lg font-bold text-foreground">Create Loyalty Program</div>
      <div className="text-xs text-muted-foreground">Configure how your customers earn rewards</div>
    </div>
    <div className="space-y-4">
      <div>
        <label className="text-xs font-semibold text-foreground mb-1.5 block">Program Name</label>
        <div className="border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground bg-background">
          Coffee Rewards
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold text-foreground mb-1.5 block">Program Type</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Star, label: 'Points', sub: 'Earn & Burn', active: true },
            { icon: Stamp, label: 'Punch Card', sub: 'Visit-based' },
            { icon: Crown, label: 'Tiered', sub: 'Status-based' },
          ].map((t) => (
            <div
              key={t.label}
              className={`p-3 rounded-lg border-2 ${
                t.active ? 'border-foreground bg-muted/30' : 'border-border'
              }`}
            >
              <t.icon className={`w-4 h-4 mb-1.5 ${t.active ? 'text-foreground' : 'text-muted-foreground'}`} />
              <div className="text-xs font-bold text-foreground">{t.label}</div>
              <div className="text-[10px] text-muted-foreground">{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-muted/30 border border-border rounded-xl p-4">
        <div className="text-xs font-semibold text-foreground mb-3">Points Configuration</div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-[10px] text-muted-foreground mb-1">Points per unit spent</div>
            <div className="border border-border rounded-md px-3 py-1.5 text-sm bg-background text-foreground">10</div>
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground mb-1">Currency value per point</div>
            <div className="border border-border rounded-md px-3 py-1.5 text-sm bg-background text-foreground">0.1</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="text-[10px] text-muted-foreground mb-1">Minimum points for redemption</div>
          <div className="border border-border rounded-md px-3 py-1.5 text-sm bg-background text-foreground">100</div>
        </div>
      </div>
    </div>
  </div>
);

const PunchProgressVisual = () => (
  <div className="bg-background border border-border rounded-3xl p-6 shadow-xl shadow-foreground/5">
    <div className="flex items-center gap-2 mb-4">
      <Stamp className="w-4 h-4 text-primary" />
      <span className="text-sm font-bold text-foreground">Coffee Rewards</span>
    </div>
    <div className="border border-border rounded-2xl p-5 bg-muted/20">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground">5/8 punches</span>
        <span className="text-xs text-muted-foreground">3 more for reward</span>
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-xl flex items-center justify-center transition-all ${
              i < 5
                ? 'bg-primary/10 border-2 border-primary/40'
                : 'bg-muted/30 border border-border'
            }`}
          >
            {i < 5 ? (
              <Stamp className="w-5 h-5 text-primary" />
            ) : (
              <span className="text-xs text-muted-foreground/50">{i + 1}</span>
            )}
          </div>
        ))}
      </div>
      <div className="text-[10px] text-center text-muted-foreground mt-3">5 total punches all time</div>
    </div>
    <div className="mt-4 grid grid-cols-3 gap-2">
      {[
        { label: 'Any reward item', active: true },
        { label: 'Same or lower' },
        { label: 'Value cap' },
      ].map((r) => (
        <div
          key={r.label}
          className={`text-[10px] text-center px-2 py-1.5 rounded-md border ${
            r.active
              ? 'border-foreground bg-foreground text-background font-semibold'
              : 'border-border text-muted-foreground'
          }`}
        >
          {r.label}
        </div>
      ))}
    </div>
  </div>
);

const TierVisual = () => (
  <div className="bg-background border border-border rounded-3xl p-6 shadow-xl shadow-foreground/5">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-bold text-foreground">Tiers</span>
      <button className="flex items-center gap-1 text-xs font-semibold text-foreground border border-border rounded-md px-2.5 py-1.5">
        <Plus className="w-3 h-3" /> Add Tier
      </button>
    </div>
    <div className="space-y-3">
      {[
        { name: 'Bronze', min: '0', mult: '1×', dot: 'bg-orange-400' },
        { name: 'Silver', min: '500', mult: '1.2×', dot: 'bg-gray-400' },
        { name: 'Gold', min: '1500', mult: '1.5×', dot: 'bg-yellow-400' },
      ].map((t) => (
        <div key={t.name} className="border border-border rounded-xl p-3.5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
              <span className="text-sm font-semibold text-foreground">{t.name}</span>
            </div>
            <Trash2 className="w-3.5 h-3.5 text-destructive/60" />
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div>
              <div className="text-muted-foreground">Min Points</div>
              <div className="font-semibold text-foreground">{t.min}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Multiplier</div>
              <div className="font-semibold text-foreground">{t.mult}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Color</div>
              <div className="font-semibold text-foreground">{t.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StoryBlock: React.FC<{
  reverse?: boolean;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  visual: React.ReactNode;
}> = ({ reverse, eyebrow, title, description, features, visual }) => (
  <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
    <div className="animate-on-scroll">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/15 mb-4">
        <span className="text-xs font-semibold tracking-wide text-primary uppercase">{eyebrow}</span>
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">{title}</h3>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm md:text-base text-foreground">{f}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="animate-on-scroll animate-delay-200">{visual}</div>
  </div>
);

const LoyaltyStorySections: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Built for how restaurants
              <br />
              <span className="text-primary">actually reward customers.</span>
            </h2>
            <p className="animate-on-scroll animate-delay-100 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Configure once, run forever. Every program lives inside the same operating
              system your team already uses.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            <StoryBlock
              eyebrow="Points"
              title="Spend-based rewards, configured your way."
              description="Set how many points each unit spent earns, the value per point, and the minimum redemption threshold. Customers see balances live in their account — staff just ring up the order."
              features={[
                'Custom earn rates per spend',
                'Set redemption minimums',
                'Native to POS — no codes, no friction',
                'Tracks across every branch',
              ]}
              visual={<PointsSetupVisual />}
            />

            <StoryBlock
              reverse
              eyebrow="Punch Card"
              title="Visit-based loyalty that drives habit."
              description="The classic 'buy 8, get 1 free' — done right. Choose how many visits unlock a reward, control which items count, and let customers track progress in real time."
              features={[
                'Visits required for reward',
                'Reward eligibility: any item, same/lower price, or value cap',
                'Live progress visible to guests',
                'Perfect for cafés, drinks, and dessert brands',
              ]}
              visual={<PunchProgressVisual />}
            />

            <StoryBlock
              eyebrow="Tiered"
              title="VIP recognition that keeps best guests close."
              description="Build Bronze, Silver, Gold-style progression with custom point thresholds, earn multipliers, and tier-specific benefits. Reward your best customers automatically."
              features={[
                'Unlimited tiers with custom thresholds',
                'Earn multipliers per tier',
                'Configurable benefits and perks',
                'Auto-progression based on spend',
              ]}
              visual={<TierVisual />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyStorySections;
