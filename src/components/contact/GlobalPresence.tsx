import React from 'react';
import { Phone, Globe } from 'lucide-react';

const locations = [
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    phone: '+971 54 385 3877',
    href: 'tel:+971543853877',
    label: 'Sales & Support',
    color: 'from-primary/10 to-blue-400/10',
    borderColor: 'border-primary/20',
  },
  {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    phone: '+966 53 995 0024',
    href: 'tel:+966539950024',
    label: 'Sales & Support',
    color: 'from-emerald-500/10 to-teal-400/10',
    borderColor: 'border-emerald-500/20',
  },
  {
    country: 'India',
    flag: '🇮🇳',
    phone: '+91 97959 97070',
    href: 'tel:+919795997070',
    label: 'Sales & Support',
    color: 'from-orange-500/10 to-amber-400/10',
    borderColor: 'border-orange-500/20',
  },
];

const GlobalPresence = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] text-primary px-5 py-2.5 rounded-full mb-6 text-sm font-medium">
            <Globe size={16} />
            <span>Global Presence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reach Us From Anywhere
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're available across multiple regions to support your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {locations.map((loc, i) => (
            <a
              key={loc.country}
              href={loc.href}
              className={`group relative bg-gradient-to-br ${loc.color} backdrop-blur-sm border ${loc.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-5xl mb-5">{loc.flag}</div>
                <h3 className="text-xl font-bold text-foreground mb-1">{loc.country}</h3>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{loc.label}</span>
                
                <div className="mt-6 flex items-center gap-3 text-primary font-semibold text-lg group-hover:gap-4 transition-all">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={18} />
                  </div>
                  {loc.phone}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
