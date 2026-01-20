import React from 'react';
import { 
  Layers, 
  Globe, 
  Server, 
  Wifi, 
  Sparkles, 
  Link as LinkIcon,
  Building2,
  Shield,
  CheckCircle,
  X,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const differentiators = [
  {
    icon: Layers,
    title: 'All-in-One Platform',
    description: 'POS, KDS, inventory, CRM, accounting, analytics — unified.',
    oldWay: 'Multiple disconnected tools',
  },
  {
    icon: Globe,
    title: 'Middle East Ready',
    description: 'Arabic UI, multi-currency, VAT compliant, local payments.',
    oldWay: 'Western-only software',
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
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Command Center</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why restaurants choose
            <br />
            <span className="text-primary">Swirl.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The old way is fragmented, expensive, and limiting. Swirl changes everything.
          </p>
        </div>

        {/* Command Center Dashboard */}
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
            {/* Dashboard Header */}
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="w-px h-4 bg-gray-700" />
                <span className="text-white font-semibold text-sm">Swirl Command Center</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  All systems operational
                </span>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Old Way */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <X className="w-5 h-5 text-red-400" />
                    <span className="text-gray-400 font-medium">The Old Way</span>
                  </div>
                  {differentiators.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/20">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{item.oldWay}</span>
                    </div>
                  ))}
                </div>

                {/* Swirl Way */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-white font-medium">The Swirl Way</span>
                  </div>
                  {differentiators.map((item, i) => (
                    <div 
                      key={i} 
                      className="group flex items-start gap-3 p-3 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{item.title}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stats Bar */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Restaurants', value: '500+' },
                  { label: 'Countries', value: '5+' },
                  { label: 'Orders Processed', value: '10M+' },
                  { label: 'Uptime', value: '99.9%' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
          >
            See Swirl in Action
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySwirlCommandCenter;
