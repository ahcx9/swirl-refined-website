import React from 'react';
import { 
  Check, 
  X, 
  Layers, 
  UtensilsCrossed, 
  Globe, 
  Building2, 
  WifiOff, 
  Sparkles, 
  Plug 
} from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: 'All-in-One Platform',
    oldWay: 'Juggling 5+ disconnected tools',
    swirlWay: 'One unified system for everything',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality-First',
    oldWay: 'Generic retail software adapted for food',
    swirlWay: 'Built from day one for restaurants',
  },
  {
    icon: Globe,
    title: 'Middle East Ready',
    oldWay: 'Western tools with poor localization',
    swirlWay: 'Arabic, multi-currency, VAT compliant',
  },
  {
    icon: Building2,
    title: 'Enterprise Scale',
    oldWay: 'Tools that break at 10+ locations',
    swirlWay: 'Built for single outlets to 100+ chains',
  },
  {
    icon: WifiOff,
    title: 'Offline Capable',
    oldWay: 'Dead in the water when internet drops',
    swirlWay: 'Full functionality, auto-sync when back online',
  },
  {
    icon: Sparkles,
    title: 'AI Intelligence',
    oldWay: 'Static reports and manual analysis',
    swirlWay: 'Predictive insights and smart automation',
  },
  {
    icon: Plug,
    title: 'Open Integrations',
    oldWay: 'Locked ecosystems, limited options',
    swirlWay: 'Connect to any tool via open APIs',
  },
];

const WhySwirlWinsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6 animate-on-scroll">
            <span className="text-sm font-medium text-primary">Why Swirl Wins</span>
          </div>

          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Not another POS.
            <br />
            <span className="text-primary">A complete advantage.</span>
          </h2>

          <p className="animate-on-scroll animate-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            See why leading hospitality brands choose Swirl over fragmented solutions.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-5xl mx-auto space-y-4">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`animate-on-scroll animate-delay-${Math.min((index + 1) * 100, 600)} group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0">
                {/* Feature Name */}
                <div className="md:col-span-3 p-4 md:p-6 flex items-center gap-3 bg-gray-50/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{item.title}</span>
                </div>

                {/* Old Way */}
                <div className="md:col-span-4 p-4 md:p-6 flex items-center gap-3 bg-red-50/30 border-t md:border-t-0 md:border-l border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="text-sm text-gray-600">{item.oldWay}</span>
                </div>

                {/* Swirl Way */}
                <div className="md:col-span-5 p-4 md:p-6 flex items-center gap-3 bg-green-50/30 border-t md:border-t-0 md:border-l border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.swirlWay}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySwirlWinsSection;
