import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  MessageSquare, 
  FileSpreadsheet, 
  BarChart2, 
  ChefHat,
  AlertTriangle,
  Wifi,
  Clock,
  X,
  Calculator,
  Users,
  Package,
  Phone,
  CheckCircle
} from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const InterfaceProblemStory: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { formatAmount } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const start = rect.top + sectionHeight * 0.2;
      const end = rect.top - viewportHeight * 0.3;
      const progress = Math.max(0, Math.min(1, 1 - (start / (start - end))));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chaosOpacity = Math.max(0, 1 - scrollProgress * 2);
  const unifiedOpacity = Math.max(0, (scrollProgress - 0.4) * 2.5);
  const unifiedScale = 0.9 + (Math.min(1, Math.max(0, (scrollProgress - 0.4) * 2)) * 0.1);

  const tools = [
    { icon: CreditCard, label: 'POS', path: '/features/point-of-sale' },
    { icon: ChefHat, label: 'Kitchen', path: '/features/kitchen-display' },
    { icon: Package, label: 'Inventory', path: '/features/inventory-management' },
    { icon: BarChart2, label: 'Analytics', path: '/features/financial-reports' },
    { icon: Users, label: 'CRM', path: '/features/crm' },
    { icon: Calculator, label: 'Accounting', path: '/features/accounting' },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="sticky top-0 h-screen flex items-center justify-center py-4">
        <div className="container-custom relative">
          {/* Header with transition */}
          <div className="text-center mb-6 animate-on-scroll">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">
              The reality today
            </p>
            <div className="relative h-14 md:h-16 overflow-hidden">
              <h2 
                className={`absolute inset-x-0 text-xl md:text-3xl lg:text-4xl font-bold text-foreground transition-all duration-500 ${
                  scrollProgress < 0.5 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                }`}
              >
                Too many tools. <span className="text-red-500">No control.</span>
              </h2>
              <h2 
                className={`absolute inset-x-0 text-xl md:text-3xl lg:text-4xl font-bold text-foreground transition-all duration-500 ${
                  scrollProgress >= 0.5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                One platform. <span className="text-primary">Complete control.</span>
              </h2>
            </div>
          </div>

          {/* Chaotic Systems - Compact layout */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-all duration-500 pt-12"
            style={{ 
              opacity: chaosOpacity,
              transform: `scale(${1 - scrollProgress * 0.05})`,
              pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
            }}
          >
            <div className="relative w-full max-w-5xl h-[380px] md:h-[420px]">
              {/* Row 1: POS, WhatsApp, Phone */}
              <div 
                className="absolute top-0 left-[2%] w-36 md:w-44 bg-white rounded-xl border border-red-200 shadow-lg p-2.5 transform -rotate-2"
                style={{ animation: 'float-chaos 4s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center">
                    <CreditCard className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-xs font-medium text-red-600">POS System A</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-red-100 rounded w-full" />
                  <div className="h-1.5 bg-red-50 rounded w-3/4" />
                  <div className="flex items-center gap-1 text-[8px] text-red-500 mt-1">
                    <Wifi className="w-2 h-2" />
                    <span>Sync failed</span>
                  </div>
                </div>
              </div>

              <div 
                className="absolute top-2 left-[32%] w-32 md:w-40 bg-white rounded-xl border border-orange-200 shadow-lg p-2.5 transform rotate-2"
                style={{ animation: 'float-chaos 5s ease-in-out infinite', animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center">
                    <MessageSquare className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-xs font-medium">WhatsApp</span>
                </div>
                <div className="space-y-1 text-[8px]">
                  <div className="bg-gray-100 rounded p-1">
                    <p className="text-gray-600">"1 biryani plz"</p>
                  </div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <Clock className="w-2 h-2" />
                    <span>12 unread</span>
                  </div>
                </div>
              </div>

              <div 
                className="absolute top-0 right-[32%] w-32 md:w-36 bg-white rounded-xl border border-purple-200 shadow-lg p-2.5 transform rotate-3"
                style={{ animation: 'float-chaos 4.5s ease-in-out infinite', animationDelay: '1.2s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Phone className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-xs font-medium">Phone Orders</span>
                </div>
                <div className="text-[8px]">
                  <p className="text-purple-500">5 missed calls</p>
                  <p className="text-gray-400">Notes on paper...</p>
                </div>
              </div>

              <div 
                className="absolute top-4 right-[2%] w-36 md:w-44 bg-white rounded-xl border border-gray-300 shadow-lg p-2.5 transform -rotate-2"
                style={{ animation: 'float-chaos 5.5s ease-in-out infinite', animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
                    <BarChart2 className="w-3 h-3 text-gray-500" />
                  </div>
                  <span className="text-xs font-medium">Reports</span>
                </div>
                <div className="space-y-1">
                  <div className="h-4 bg-gray-100 rounded animate-pulse" />
                  <p className="text-[7px] text-gray-400">Last updated: 3 days ago</p>
                </div>
              </div>

              {/* Row 2: Excel, Kitchen, Tally */}
              <div 
                className="absolute top-[35%] left-[5%] w-40 md:w-48 bg-white rounded-xl border border-yellow-200 shadow-lg p-2.5 transform rotate-1"
                style={{ animation: 'float-chaos 4.5s ease-in-out infinite', animationDelay: '1s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center">
                    <FileSpreadsheet className="w-3 h-3 text-green-700" />
                  </div>
                  <span className="text-xs font-medium">Excel Inventory</span>
                  <span className="text-[7px] text-yellow-600 bg-yellow-50 px-1 py-0.5 rounded ml-auto">Outdated</span>
                </div>
                <div className="grid grid-cols-3 gap-0.5 text-[7px]">
                  <div className="bg-gray-50 p-0.5 text-center border">Item</div>
                  <div className="bg-gray-50 p-0.5 text-center border">Stock</div>
                  <div className="bg-gray-50 p-0.5 text-center border">???</div>
                  <div className="p-0.5 border">Tomato</div>
                  <div className="p-0.5 border text-red-500">-12</div>
                  <div className="p-0.5 border text-red-500">#ERR</div>
                </div>
              </div>

              <div 
                className="absolute top-[38%] left-[40%] w-32 md:w-40 bg-white rounded-xl border border-gray-300 shadow-lg p-2.5 transform -rotate-1"
                style={{ animation: 'float-chaos 4.2s ease-in-out infinite', animationDelay: '0.8s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
                    <ChefHat className="w-3 h-3 text-gray-600" />
                  </div>
                  <span className="text-xs font-medium">Kitchen</span>
                  <X className="w-2 h-2 text-red-400 ml-auto" />
                </div>
                <div className="bg-red-50 border border-red-200 rounded p-1 text-[8px] text-red-600">
                  Order #142 - MISSING
                </div>
              </div>

              <div 
                className="absolute top-[32%] right-[8%] w-36 md:w-40 bg-white rounded-xl border border-blue-200 shadow-lg p-2.5 transform rotate-2"
                style={{ animation: 'float-chaos 4.8s ease-in-out infinite', animationDelay: '0.3s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Calculator className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Tally / Zoho</span>
                </div>
                <div className="text-[8px]">
                  <p className="text-gray-500">Manual entry...</p>
                  <div className="text-orange-500 flex items-center gap-1">
                    <AlertTriangle className="w-2 h-2" />
                    <span>2hr daily</span>
                  </div>
                </div>
              </div>

              {/* Row 3: CRM, Stock */}
              <div 
                className="absolute bottom-[15%] left-[20%] w-32 md:w-36 bg-white rounded-xl border border-pink-200 shadow-lg p-2.5 transform -rotate-2"
                style={{ animation: 'float-chaos 5.2s ease-in-out infinite', animationDelay: '0.6s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-pink-100 flex items-center justify-center">
                    <Users className="w-3 h-3 text-pink-600" />
                  </div>
                  <span className="text-xs font-medium">Customers</span>
                </div>
                <div className="text-[8px] text-gray-500">
                  <p>No guest history...</p>
                  <p className="text-pink-500">Who ordered what?</p>
                </div>
              </div>

              <div 
                className="absolute bottom-[12%] right-[18%] w-32 md:w-36 bg-white rounded-xl border border-amber-200 shadow-lg p-2.5 transform rotate-1"
                style={{ animation: 'float-chaos 4.6s ease-in-out infinite', animationDelay: '0.9s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Package className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Stock?</span>
                </div>
                <div className="text-[8px]">
                  <p className="text-amber-600">Wastage unknown</p>
                  <p className="text-gray-400">Margins guessed</p>
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <defs>
                  <linearGradient id="brokenLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="0" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <line x1="18%" y1="12%" x2="40%" y2="35%" stroke="url(#brokenLine)" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="60%" y1="35%" x2="78%" y2="15%" stroke="url(#brokenLine)" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="22%" y1="75%" x2="42%" y2="50%" stroke="url(#brokenLine)" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            </div>
          </div>

          {/* Unified Swirl Dashboard - Real mockup style */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-all duration-700 pt-12"
            style={{ 
              opacity: unifiedOpacity,
              transform: `scale(${unifiedScale})`,
              pointerEvents: scrollProgress > 0.5 ? 'auto' : 'none'
            }}
          >
            <div className="w-full max-w-4xl px-4">
              <div className="bg-white rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-blue-600 px-4 py-2.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                  <span className="text-white font-semibold text-sm">Swirl Dashboard</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-xs hidden sm:inline">All systems connected</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 bg-gradient-to-br from-blue-50/50 to-white">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
                    {tools.map((tool, i) => (
                      <Link 
                        key={i}
                        to={tool.path}
                        className="group bg-white rounded-xl border border-primary/10 p-3 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                          <tool.icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-xs font-medium text-foreground">{tool.label}</p>
                      </Link>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2.5">
                    {[
                      { label: 'Today\'s Sales', value: formatAmount(48250) },
                      { label: 'Active Orders', value: '12' },
                      { label: 'Inventory Accuracy', value: '98%' },
                      { label: 'Repeat Customers', value: '68%' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-primary/5 rounded-lg p-2.5 text-center">
                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Connection indicator */}
                  <div className="mt-3 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>All data synced</span>
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Single source of truth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-chaos {
          0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-6px) rotate(var(--rotation, 0deg)); }
        }
      `}</style>
    </section>
  );
};

export default InterfaceProblemStory;
