import React from 'react';
import { TrendingUp, Users, Gift, Repeat, Trophy, PieChart } from 'lucide-react';

const metrics = [
  { icon: Users, label: 'Active members', value: '4,827', delta: '+12.4%', positive: true },
  { icon: Gift, label: 'Redemption rate', value: '38%', delta: '+5.1%', positive: true },
  { icon: Repeat, label: 'Repeat visit rate', value: '64%', delta: '+8.2%', positive: true },
  { icon: TrendingUp, label: 'Points earned', value: '128,450', delta: 'this month' },
];

const LoyaltyAnalytics: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/5 rounded-full border border-primary/15 mb-5">
                <PieChart className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                  Intelligence
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                See what loyalty is
                <br />
                <span className="text-primary">actually doing for you.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Track member growth, redemption behavior, and retention impact — all in
                a dashboard built for operators, not analysts.
              </p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Real-time member and tier distribution
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Top-performing rewards and programs
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Points earned vs redeemed liability
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Branch-level loyalty performance
                </li>
              </ul>
            </div>

            <div className="animate-on-scroll animate-delay-200 grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-background border border-border rounded-2xl p-5 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <m.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-1">{m.value}</div>
                  <div className="text-xs text-muted-foreground mb-2">{m.label}</div>
                  <div className={`inline-flex items-center gap-1 text-[11px] font-semibold ${m.positive ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {m.positive && <TrendingUp className="w-3 h-3" />}
                    {m.delta}
                  </div>
                </div>
              ))}
              <div className="col-span-2 bg-foreground text-background rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <div className="text-xs text-background/60">Top reward</div>
                    </div>
                    <div className="text-lg font-bold">Free Premium Latte</div>
                    <div className="text-xs text-background/60 mt-0.5">Redeemed 1,284 times</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-background/60">Tier mix</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-1.5 h-8 rounded-full bg-orange-400" />
                      <div className="w-1.5 h-12 rounded-full bg-gray-300" />
                      <div className="w-1.5 h-16 rounded-full bg-yellow-400" />
                    </div>
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

export default LoyaltyAnalytics;
