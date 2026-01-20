import React, { useState } from 'react';
import { 
  CreditCard, 
  QrCode, 
  ChefHat, 
  Package, 
  Users, 
  BarChart3, 
  Calculator, 
  Building2, 
  Sparkles,
  Zap
} from 'lucide-react';

const modules = [
  { id: 'pos', icon: CreditCard, name: 'POS & Billing', position: 'top', angle: 0 },
  { id: 'qr', icon: QrCode, name: 'QR Ordering', position: 'top-right', angle: 45 },
  { id: 'kds', icon: ChefHat, name: 'Kitchen Display', position: 'right', angle: 90 },
  { id: 'inventory', icon: Package, name: 'Inventory', position: 'bottom-right', angle: 135 },
  { id: 'analytics', icon: BarChart3, name: 'Analytics', position: 'bottom', angle: 180 },
  { id: 'accounting', icon: Calculator, name: 'Accounting', position: 'bottom-left', angle: 225 },
  { id: 'crm', icon: Users, name: 'CRM', position: 'left', angle: 270 },
  { id: 'multi', icon: Building2, name: 'Multi-branch', position: 'top-left', angle: 315 },
];

const connections = [
  { from: 'pos', to: 'kds', label: 'Orders flow instantly' },
  { from: 'pos', to: 'inventory', label: 'Stock updates live' },
  { from: 'qr', to: 'pos', label: 'Unified billing' },
  { from: 'kds', to: 'analytics', label: 'Speed metrics' },
  { from: 'inventory', to: 'accounting', label: 'Cost tracking' },
  { from: 'crm', to: 'analytics', label: 'Guest insights' },
  { from: 'multi', to: 'analytics', label: 'Branch overview' },
];

const SwirlOperatingSystemView: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [hoveredConnection, setHoveredConnection] = useState<string | null>(null);

  const getModulePosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180);
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    };
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6 animate-on-scroll">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">System Architecture</span>
          </div>
          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            One Platform. One Database.
            <br />
            <span className="text-primary">One Operating System.</span>
          </h2>
          <p className="animate-on-scroll animate-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every module connects. Every action syncs. Every insight flows from a single source of truth.
          </p>
        </div>

        {/* System Architecture Visualization */}
        <div className="relative flex items-center justify-center animate-on-scroll animate-delay-300">
          <div className="relative w-full max-w-3xl aspect-square">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="-200 -200 400 400">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="activeLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Orbital rings */}
              <circle cx="0" cy="0" r="140" fill="none" stroke="hsl(var(--primary) / 0.08)" strokeWidth="1" />
              <circle cx="0" cy="0" r="100" fill="none" stroke="hsl(var(--primary) / 0.05)" strokeWidth="1" strokeDasharray="4,4" />
              <circle cx="0" cy="0" r="60" fill="none" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />

              {/* Connection lines between modules */}
              {connections.map((conn, i) => {
                const fromModule = modules.find(m => m.id === conn.from);
                const toModule = modules.find(m => m.id === conn.to);
                if (!fromModule || !toModule) return null;

                const from = getModulePosition(fromModule.angle, 140);
                const to = getModulePosition(toModule.angle, 140);
                const isActive = activeModule === conn.from || activeModule === conn.to || hoveredConnection === `${conn.from}-${conn.to}`;

                return (
                  <g key={i}>
                    <line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={isActive ? "url(#activeLineGradient)" : "url(#lineGradient)"}
                      strokeWidth={isActive ? "2" : "1"}
                      className="transition-all duration-300"
                    />
                    {isActive && (
                      <circle r="4" fill="hsl(var(--primary))">
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          path={`M${from.x},${from.y} L${to.x},${to.y}`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ transform: 'scale(1.5)' }} />
                
                {/* Core circle */}
                <div 
                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-2xl shadow-primary/30 cursor-pointer hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setActiveModule('core')}
                  onMouseLeave={() => setActiveModule(null)}
                >
                  <div className="text-center text-white">
                    <Sparkles className="w-8 h-8 mx-auto mb-1" />
                    <span className="text-xs font-bold tracking-wide">SWIRL</span>
                    <span className="block text-[10px] opacity-80">CORE</span>
                  </div>
                </div>

                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '30s' }} />
              </div>
            </div>

            {/* Module nodes */}
            {modules.map((module, index) => {
              const pos = getModulePosition(module.angle, 140);
              const isActive = activeModule === module.id;

              return (
                <div
                  key={module.id}
                  className="absolute top-1/2 left-1/2 z-10"
                  style={{
                    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                  }}
                >
                  <div
                    className={`
                      group relative cursor-pointer transition-all duration-300
                      ${isActive ? 'scale-110' : 'hover:scale-105'}
                    `}
                    onMouseEnter={() => setActiveModule(module.id)}
                    onMouseLeave={() => setActiveModule(null)}
                  >
                    {/* Glow on hover */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-primary/20 blur-xl transition-opacity duration-300
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                    `} />

                    {/* Module card */}
                    <div className={`
                      relative bg-white rounded-2xl border p-3 md:p-4 shadow-lg transition-all duration-300
                      ${isActive ? 'border-primary shadow-xl shadow-primary/10' : 'border-gray-100 hover:border-primary/30'}
                    `}>
                      <div className={`
                        w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-2 transition-colors duration-300
                        ${isActive ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}
                      `}>
                        <module.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">{module.name}</p>
                      
                      {/* Connected indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
                    </div>

                    {/* Connection tooltip */}
                    {isActive && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-foreground text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                        Connected to all modules
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-12 md:mt-16 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/5 to-blue-50 rounded-full border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-foreground font-medium">
              All 9 modules share one unified database — changes reflect everywhere, instantly.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwirlOperatingSystemView;
