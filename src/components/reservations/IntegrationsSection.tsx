import React from 'react';
import { CreditCard, ChefHat, Users, Heart, BarChart3, ShoppingCart } from 'lucide-react';

const integrations = [
  { icon: CreditCard, name: 'Point of Sale', desc: 'Unified checkout' },
  { icon: ChefHat, name: 'Kitchen Display', desc: 'Live order flow' },
  { icon: Users, name: 'CRM', desc: 'Guest intelligence' },
  { icon: Heart, name: 'Loyalty', desc: 'Reward programs' },
  { icon: BarChart3, name: 'Analytics', desc: 'Business insights' },
  { icon: ShoppingCart, name: 'Online Ordering', desc: 'Digital orders' },
];

const IntegrationsSection = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Ecosystem</p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">
            Part of the Complete{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Restaurant Platform
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Reservations connect seamlessly with every module in the swirl.cx ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll group p-6 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm hover:shadow-[0_12px_40px_-10px_rgba(0,82,204,0.1)] hover:border-primary/15 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] border border-primary/[0.08] flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
