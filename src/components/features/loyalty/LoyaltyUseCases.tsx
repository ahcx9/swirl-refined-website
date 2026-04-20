import React from 'react';
import { Coffee, Utensils, IceCream, ChefHat, Building2 } from 'lucide-react';

const cases = [
  {
    icon: Coffee,
    name: 'Cafés',
    bestModel: 'Punch Card + Points',
    desc: 'Drive habit with visit-based rewards, layer points for high-spenders.',
  },
  {
    icon: Utensils,
    name: 'QSR',
    bestModel: 'Points',
    desc: 'Spend-based rewards built for high-volume, fast-checkout environments.',
  },
  {
    icon: IceCream,
    name: 'Dessert brands',
    bestModel: 'Punch Card',
    desc: 'Classic visit-based loyalty perfect for repeat-item categories.',
  },
  {
    icon: ChefHat,
    name: 'Dine-in',
    bestModel: 'Points + Tiered',
    desc: 'Reward spend and recognize VIPs with status-driven progression.',
  },
  {
    icon: Building2,
    name: 'Multi-branch',
    bestModel: 'Tiered + Centralized',
    desc: 'One loyalty program across every location with brand-level oversight.',
  },
];

const LoyaltyUseCases: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/5 rounded-full border border-primary/15 mb-5">
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                Use cases
              </span>
            </div>
            <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Built for every kind
              <br />
              <span className="text-primary">of hospitality brand.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((c, i) => (
              <div
                key={c.name}
                className={`animate-on-scroll animate-delay-${((i % 3) + 1) * 100} group bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <c.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {c.bestModel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyUseCases;
