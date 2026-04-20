import React from 'react';
import { Users, CreditCard, Megaphone, Gift, Building2, BarChart3, Eye } from 'lucide-react';

const blocks = [
  {
    icon: Users,
    title: 'Unified customer profiles',
    desc: 'Loyalty status, order history, and preferences live on one customer record — across every branch.',
  },
  {
    icon: CreditCard,
    title: 'POS-linked earning & redemption',
    desc: 'Points and punches earn automatically at checkout. Redemption is one tap — no codes, no lookups.',
  },
  {
    icon: Megaphone,
    title: 'CRM campaigns built-in',
    desc: 'Trigger personalized offers based on tier, visit frequency, last order, or spend behavior.',
  },
  {
    icon: Gift,
    title: 'Reward item control',
    desc: 'Decide which items qualify as rewards, set value caps, and prevent abuse with smart rules.',
  },
  {
    icon: Building2,
    title: 'Brand-level consistency',
    desc: 'Run one loyalty program across every branch — or customize per location with central oversight.',
  },
  {
    icon: BarChart3,
    title: 'Retention analytics',
    desc: 'See who your repeat customers are, what they buy, and which rewards drive return visits.',
  },
];

const LoyaltyOperationalPower: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/5 rounded-full border border-primary/15 mb-5">
              <Eye className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">More than rewards</span>
            </div>
            <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Loyalty becomes powerful when
              <br />
              <span className="text-primary">it's connected to everything.</span>
            </h2>
            <p className="animate-on-scroll animate-delay-200 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Swirl Loyalty doesn't sit alone. It runs through your POS, customer data,
              campaigns, and reporting — making every part of the business smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blocks.map((b, i) => (
              <div
                key={b.title}
                className={`animate-on-scroll animate-delay-${((i % 3) + 1) * 100} group bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <b.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyOperationalPower;
