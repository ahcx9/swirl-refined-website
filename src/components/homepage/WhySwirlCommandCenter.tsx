import React from 'react';
import { 
  Layers, 
  Globe, 
  Server, 
  Wifi, 
  Sparkles, 
  Building2,
  Shield,
  CheckCircle,
  X
} from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: 'All-in-One Platform',
    description: 'POS, KDS, inventory, CRM, accounting, analytics — unified.',
    oldWay: 'Multiple disconnected tools',
  },
  {
    icon: Globe,
    title: 'Global Ready',
    description: 'Multi-language, multi-currency, VAT compliant, local payments.',
    oldWay: 'Single-region software',
  },
  {
    icon: Building2,
    title: 'Enterprise Scale',
    description: 'From 1 outlet to 100+ with central control.',
    oldWay: 'Single-location focus',
  },
  {
    icon: Wifi,
    title: 'Offline Capable',
    description: 'Keep billing even when internet drops.',
    oldWay: 'Cloud-only dependency',
  },
  {
    icon: Sparkles,
    title: 'AI Intelligence',
    description: 'Forecasting, alerts, and smart recommendations.',
    oldWay: 'Manual reporting only',
  },
  {
    icon: Shield,
    title: 'Built-in Accounting',
    description: 'No external tools. Swirl does it all.',
    oldWay: 'Requires Zoho/Tally',
  },
];

const WhySwirlCommandCenter: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Command Center</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Why restaurants choose
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Swirl.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The old way is fragmented, expensive, and limiting. Swirl changes everything.
          </p>
        </div>

        {/* Command Center Dashboard */}
        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xl">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                </div>
                <div className="w-px h-4 bg-white/20" />
                <span className="text-white font-semibold text-sm">Swirl Command Center</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  All systems operational
                </span>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="p-5 md:p-7">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Old Way */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <X className="w-5 h-5 text-red-400" />
                    <span className="text-muted-foreground font-medium">The Old Way</span>
                  </div>
                  {differentiators.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item.oldWay}</span>
                    </div>
                  ))}
                </div>

                {/* Swirl Way */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">The Swirl Way</span>
                  </div>
                  {differentiators.map((item, i) => (
                    <div 
                      key={i} 
                      className="group flex items-start gap-3 p-3 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium text-sm">{item.title}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stats Bar */}
              <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Restaurants', value: '500+' },
                  { label: 'Countries', value: '5+' },
                  { label: 'Orders Processed', value: '100K+' },
                  { label: 'Uptime', value: '99.9%' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySwirlCommandCenter;
