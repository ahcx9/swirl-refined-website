import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, QrCode, ChefHat, Package, Users, BarChart3, Calculator, Building2, Sparkles, Zap } from 'lucide-react';

const modules = [
  { id: 'pos', icon: CreditCard, name: 'POS & Billing', path: '/features/point-of-sale' },
  { id: 'qr', icon: QrCode, name: 'QR Ordering', path: '/features/qr-ordering' },
  { id: 'kds', icon: ChefHat, name: 'Kitchen Display', path: '/features/kitchen-display' },
  { id: 'inventory', icon: Package, name: 'Inventory', path: '/features/inventory-management' },
  { id: 'analytics', icon: BarChart3, name: 'Analytics', path: '/features/financial-reports' },
  { id: 'accounting', icon: Calculator, name: 'Accounting', path: '/features/accounting' },
  { id: 'crm', icon: Users, name: 'CRM', path: '/features/crm' },
  { id: 'multi', icon: Building2, name: 'Multi-branch', path: '/features/point-of-sale' },
  { id: 'ai', icon: Sparkles, name: 'AI Intelligence', path: '/features/visitor-analytics' }
];

const SwirlOperatingSystemView: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }} 
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5 animate-on-scroll">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">System Architecture</span>
          </div>
          <h2 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            One Platform. One Database.
          </h2>
          <p className="animate-on-scroll text-2xl md:text-3xl font-bold text-primary mb-4">
            One Operating System.
          </p>
          <p className="animate-on-scroll text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Every module connects. Every action syncs. Every insight flows from a single source of truth.
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="max-w-5xl mx-auto animate-on-scroll">
          {/* Top row of modules */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2.5 md:gap-3 mb-3">
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
          <div className="flex justify-center my-5 md:my-6">
            <div 
              className="relative group cursor-pointer" 
              onMouseEnter={() => setActiveModule('core')} 
              onMouseLeave={() => setActiveModule(null)}
            >
              {/* Glow rings */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-125 animate-pulse" />
              
              {/* Core */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary via-blue-500 to-blue-600 flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1.5 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-xs md:text-sm font-bold tracking-wide">SWIRL</span>
                  <span className="block text-[10px] opacity-80">CORE ENGINE</span>
                </div>
              </div>

              {/* Rotating ring */}
              <div 
                className="absolute inset-[-6px] rounded-full border-2 border-dashed border-primary/30 animate-spin" 
                style={{ animationDuration: '20s' }} 
              />
            </div>
          </div>

          {/* Bottom row of modules */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 mt-3">
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
    <Link 
      to={module.path}
      className={`
        group relative cursor-pointer transition-all duration-300
        ${isActive ? 'scale-105 z-10' : 'hover:scale-102'}
      `} 
      onMouseEnter={() => onHover(module.id)} 
      onMouseLeave={() => onHover(null)}
    >
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-xl bg-primary/20 blur-lg transition-opacity duration-300
        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
      `} />

      {/* Card */}
      <div className={`
        relative bg-white rounded-xl border p-3 md:p-4 shadow-sm transition-all duration-300
        ${isActive ? 'border-primary shadow-lg shadow-primary/10' : 'border-gray-100 hover:border-primary/30 hover:shadow-md'}
      `}>
        <div className={`
          w-9 h-9 md:w-11 md:h-11 rounded-lg flex items-center justify-center mb-2 transition-all duration-300
          ${isActive ? 'bg-primary text-white shadow-lg' : 'bg-primary/10 text-primary group-hover:bg-primary/20'}
        `}>
          <module.icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <p className="text-xs md:text-sm font-semibold text-foreground">{module.name}</p>
        
        {/* Connected indicator */}
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white shadow-sm" />
        
        {/* Connection pulse */}
        {isActive && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />}
      </div>
    </Link>
  );
};

export default SwirlOperatingSystemView;