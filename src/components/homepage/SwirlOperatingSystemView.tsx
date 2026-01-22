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
  { id: 'pos', icon: CreditCard, name: 'POS & Billing', color: 'from-blue-500 to-blue-600' },
  { id: 'qr', icon: QrCode, name: 'QR Ordering', color: 'from-cyan-500 to-cyan-600' },
  { id: 'kds', icon: ChefHat, name: 'Kitchen Display', color: 'from-orange-500 to-orange-600' },
  { id: 'inventory', icon: Package, name: 'Inventory', color: 'from-emerald-500 to-emerald-600' },
  { id: 'analytics', icon: BarChart3, name: 'Analytics', color: 'from-purple-500 to-purple-600' },
  { id: 'accounting', icon: Calculator, name: 'Accounting', color: 'from-indigo-500 to-indigo-600' },
  { id: 'crm', icon: Users, name: 'CRM', color: 'from-pink-500 to-pink-600' },
  { id: 'multi', icon: Building2, name: 'Multi-branch', color: 'from-slate-500 to-slate-600' },
  { id: 'ai', icon: Sparkles, name: 'AI Intelligence', color: 'from-amber-500 to-amber-600' },
];

const SwirlOperatingSystemView: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5 animate-on-scroll">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">System Architecture</span>
          </div>
          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            One Platform. One Database.
          </h2>
          <p className="animate-on-scroll animate-delay-100 text-2xl md:text-3xl font-bold text-primary mb-4">
            One Operating System.
          </p>
          <p className="animate-on-scroll animate-delay-200 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Every module connects. Every action syncs. Every insight flows from a single source of truth.
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="max-w-6xl mx-auto animate-on-scroll animate-delay-300">
          {/* Central Core + Modules Grid */}
          <div className="relative">
            {/* Top row of modules */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-3 md:mb-4">
              {modules.slice(0, 5).map((module) => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  isActive={activeModule === module.id}
                  onHover={setActiveModule}
                />
              ))}
            </div>

            {/* Central Core */}
            <div className="flex justify-center my-6 md:my-8">
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveModule('core')}
                onMouseLeave={() => setActiveModule(null)}
              >
                {/* Glow rings */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150 animate-pulse" />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-[2] group-hover:scale-[2.5] transition-transform duration-500" />
                
                {/* Core */}
                <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary via-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <span className="text-sm md:text-base font-bold tracking-wide">SWIRL</span>
                    <span className="block text-xs opacity-80">CORE ENGINE</span>
                  </div>
                </div>

                {/* Rotating ring */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-[-16px] rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              </div>
            </div>

            {/* Connection lines (visual) */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
              <svg className="absolute w-full h-full" style={{ top: 0, left: 0 }}>
                <defs>
                  <linearGradient id="connGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Bottom row of modules */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-3 md:mt-4">
              {modules.slice(5).map((module) => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  isActive={activeModule === module.id}
                  onHover={setActiveModule}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-10 md:mt-14 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-primary/10 shadow-lg shadow-primary/5">
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

// Module Card Component
interface ModuleCardProps {
  module: typeof modules[0];
  isActive: boolean;
  onHover: (id: string | null) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, isActive, onHover }) => {
  return (
    <div
      className={`
        group relative cursor-pointer transition-all duration-300
        ${isActive ? 'scale-105 z-10' : 'hover:scale-102'}
      `}
      onMouseEnter={() => onHover(module.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-2xl bg-primary/20 blur-xl transition-opacity duration-300
        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
      `} />

      {/* Card */}
      <div className={`
        relative bg-white rounded-2xl border p-4 md:p-5 shadow-md transition-all duration-300
        ${isActive ? 'border-primary shadow-xl shadow-primary/10' : 'border-gray-100 hover:border-primary/30 hover:shadow-lg'}
      `}>
        <div className={`
          w-11 h-11 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-2 md:mb-3 transition-all duration-300
          ${isActive 
            ? `bg-gradient-to-br ${module.color} text-white shadow-lg` 
            : 'bg-primary/10 text-primary group-hover:bg-primary/20'
          }
        `}>
          <module.icon className="w-5 h-5 md:w-7 md:h-7" />
        </div>
        <p className="text-xs md:text-sm font-semibold text-foreground">{module.name}</p>
        
        {/* Connected indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow-sm" />
        
        {/* Connection pulse */}
        {isActive && (
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-ping" />
        )}
      </div>
    </div>
  );
};

export default SwirlOperatingSystemView;
