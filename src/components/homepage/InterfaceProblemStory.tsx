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
  CheckCircle,
  Receipt,
  Banknote,
  SplitSquareVertical
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
      
      const start = rect.top + sectionHeight * 0.15;
      const end = rect.top - viewportHeight * 0.4;
      const progress = Math.max(0, Math.min(1, 1 - (start / (start - end))));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chaosOpacity = Math.max(0, 1 - scrollProgress * 2.5);
  const unifiedOpacity = Math.max(0, (scrollProgress - 0.35) * 3);
  const unifiedScale = 0.92 + (Math.min(1, Math.max(0, (scrollProgress - 0.35) * 2.5)) * 0.08);

  const tools = [
    { icon: CreditCard, label: 'POS', path: '/features/point-of-sale' },
    { icon: ChefHat, label: 'Kitchen', path: '/features/kitchen-display' },
    { icon: Package, label: 'Inventory', path: '/features/inventory-management' },
    { icon: BarChart2, label: 'Analytics', path: '/features/financial-reports' },
    { icon: Users, label: 'CRM', path: '/features/crm' },
    { icon: Calculator, label: 'Accounting', path: '/features/accounting' },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="sticky top-0 h-[75vh] flex items-center justify-center">
        <div className="container-custom relative">
          {/* Header with transition - positioned at very top */}
          <div className="absolute top-4 left-0 right-0 text-center z-20">
            <p className="text-primary font-semibold text-xs tracking-widest uppercase mb-1">
              The reality today
            </p>
            <div className="relative h-12 md:h-14 overflow-hidden">
              <h2 
                className={`absolute inset-x-0 text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-400 ${
                  scrollProgress < 0.45 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                }`}
              >
                <span className="text-foreground">Too many tools.</span> <span className="text-red-500 font-extrabold">No control.</span>
              </h2>
              <h2 
                className={`absolute inset-x-0 text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-400 ${
                  scrollProgress >= 0.45 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-foreground">One platform.</span> <span className="text-primary font-extrabold">Complete control.</span>
              </h2>
            </div>
          </div>

          {/* Chaotic Systems - Compact layout */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-all duration-400 pt-16"
            style={{ 
              opacity: chaosOpacity,
              transform: `scale(${1 - scrollProgress * 0.08})`,
              pointerEvents: scrollProgress > 0.4 ? 'none' : 'auto'
            }}
          >
            <div className="relative w-full max-w-4xl h-[320px] md:h-[360px]">
              {/* Row 1: POS, WhatsApp, Phone, Reports */}
              <div 
                className="absolute top-0 left-[3%] w-32 md:w-40 bg-white rounded-xl border border-red-200 shadow-lg p-2 transform -rotate-2"
                style={{ animation: 'float-chaos 3.5s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-red-100 flex items-center justify-center">
                    <CreditCard className="w-2.5 h-2.5 text-red-500" />
                  </div>
                  <span className="text-[10px] font-medium text-red-600">POS System A</span>
                </div>
                <div className="space-y-0.5">
                  <div className="h-1 bg-red-100 rounded w-full" />
                  <div className="h-1 bg-red-50 rounded w-3/4" />
                  <div className="flex items-center gap-0.5 text-[7px] text-red-500 mt-0.5">
                    <Wifi className="w-2 h-2" />
                    <span>Sync failed</span>
                  </div>
                </div>
              </div>

              <div 
                className="absolute top-2 left-[28%] w-28 md:w-36 bg-white rounded-xl border border-orange-200 shadow-lg p-2 transform rotate-2"
                style={{ animation: 'float-chaos 4s ease-in-out infinite', animationDelay: '0.3s' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-green-100 flex items-center justify-center">
                    <MessageSquare className="w-2.5 h-2.5 text-green-600" />
                  </div>
                  <span className="text-[10px] font-medium">WhatsApp</span>
                </div>
                <div className="space-y-0.5 text-[7px]">
                  <div className="bg-gray-100 rounded p-0.5">
                    <p className="text-gray-600">"1 biryani plz"</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-orange-500">
                    <Clock className="w-2 h-2" />
                    <span>12 unread</span>
                  </div>
                </div>
              </div>

              <div 
                className="absolute top-0 right-[28%] w-28 md:w-32 bg-white rounded-xl border border-purple-200 shadow-lg p-2 transform rotate-3"
                style={{ animation: 'float-chaos 3.8s ease-in-out infinite', animationDelay: '0.8s' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Phone className="w-2.5 h-2.5 text-purple-600" />
                  </div>
                  <span className="text-[10px] font-medium">Phone Orders</span>
                </div>
                <div className="text-[7px]">
                  <p className="text-purple-500">5 missed calls</p>
                  <p className="text-gray-400">Notes on paper...</p>
                </div>
              </div>

              <div 
                className="absolute top-2 right-[3%] w-32 md:w-40 bg-white rounded-xl border border-gray-300 shadow-lg p-2 transform -rotate-2"
                style={{ animation: 'float-chaos 4.5s ease-in-out infinite', animationDelay: '1s' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-gray-100 flex items-center justify-center">
                    <BarChart2 className="w-2.5 h-2.5 text-gray-500" />
                  </div>
                  <span className="text-[10px] font-medium">Reports</span>
                </div>
                <div className="space-y-0.5">
                  <div className="h-3 bg-gray-100 rounded animate-pulse" />
                  <p className="text-[6px] text-gray-400">Last updated: 3 days ago</p>
                </div>
              </div>

              {/* Row 2: Excel, Kitchen, Tally */}
              <div 
                className="absolute top-[32%] left-[6%] w-36 md:w-44 bg-white rounded-xl border border-yellow-200 shadow-lg p-2 transform rotate-1"
                style={{ animation: 'float-chaos 4s ease-in-out infinite', animationDelay: '0.6s' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-green-100 flex items-center justify-center">
                    <FileSpreadsheet className="w-2.5 h-2.5 text-green-700" />
                  </div>
                  <span className="text-[10px] font-medium">Excel Inventory</span>
                  <span className="text-[6px] text-yellow-600 bg-yellow-50 px-1 py-0.5 rounded ml-auto">Outdated</span>
                </div>
                <div className="grid grid-cols-3 gap-0.5 text-[6px]">
                  <div className="bg-gray-50 p-0.5 text-center border">Item</div>
                  <div className="bg-gray-50 p-0.5 text-center border">Stock</div>
                  <div className="bg-gray-50 p-0.5 text-center border">???</div>
                  <div className="p-0.5 border">Tomato</div>
                  <div className="p-0.5 border text-red-500">-12</div>
                  <div className="p-0.5 border text-red-500">#ERR</div>
                </div>
              </div>

              <div 
                className="absolute top-[35%] left-[42%] w-28 md:w-36 bg-white rounded-xl border border-gray-300 shadow-lg p-2 transform -rotate-1"
                style={{ animation: 'float-chaos 3.6s ease-in-out infinite', animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-gray-100 flex items-center justify-center">
                    <ChefHat className="w-2.5 h-2.5 text-gray-600" />
                  </div>
                  <span className="text-[10px] font-medium">Kitchen</span>
                  <X className="w-2 h-2 text-red-400 ml-auto" />
                </div>
                <div className="bg-red-50 border border-red-200 rounded p-0.5 text-[7px] text-red-600">
                  Order #142 - MISSING
                </div>
              </div>

              <div 
                className="absolute top-[30%] right-[6%] w-32 md:w-36 bg-white rounded-xl border border-blue-200 shadow-lg p-2 transform rotate-2"
                style={{ animation: 'float-chaos 4.2s ease-in-out infinite', animationDelay: '0.2s' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Calculator className="w-2.5 h-2.5 text-blue-600" />
                  </div>
                  <span className="text-[10px] font-medium">Tally / Zoho</span>
                </div>
                <div className="text-[7px]">
                  <p className="text-gray-500">Manual entry...</p>
                  <div className="text-orange-500 flex items-center gap-0.5">
                    <AlertTriangle className="w-2 h-2" />
                    <span>2hr daily</span>
                  </div>
                </div>
              </div>

              {/* Row 3: CRM, Stock */}
              <div 
                className="absolute bottom-[18%] left-[18%] w-28 md:w-32 bg-white rounded-xl border border-pink-200 shadow-lg p-2 transform -rotate-2"
                style={{ animation: 'float-chaos 4.5s ease-in-out infinite', animationDelay: '0.4s' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-pink-100 flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 text-pink-600" />
                  </div>
                  <span className="text-[10px] font-medium">Customers</span>
                </div>
                <div className="text-[7px] text-gray-500">
                  <p>No guest history...</p>
                  <p className="text-pink-500">Who ordered what?</p>
                </div>
              </div>

              <div 
                className="absolute bottom-[15%] right-[16%] w-28 md:w-32 bg-white rounded-xl border border-amber-200 shadow-lg p-2 transform rotate-1"
                style={{ animation: 'float-chaos 3.9s ease-in-out infinite', animationDelay: '0.7s' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Package className="w-2.5 h-2.5 text-amber-600" />
                  </div>
                  <span className="text-[10px] font-medium">Stock?</span>
                </div>
                <div className="text-[7px]">
                  <p className="text-amber-600">Wastage unknown</p>
                  <p className="text-gray-400">Margins guessed</p>
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <defs>
                  <linearGradient id="brokenLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="0" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <line x1="18%" y1="10%" x2="38%" y2="32%" stroke="url(#brokenLine)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="62%" y1="32%" x2="80%" y2="12%" stroke="url(#brokenLine)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="22%" y1="70%" x2="42%" y2="45%" stroke="url(#brokenLine)" strokeWidth="1" strokeDasharray="3,3" />
              </svg>
            </div>
          </div>

          {/* Unified Swirl Dashboard - Real POS Mockup */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-all duration-500 pt-16"
            style={{ 
              opacity: unifiedOpacity,
              transform: `scale(${unifiedScale})`,
              pointerEvents: scrollProgress > 0.4 ? 'auto' : 'none'
            }}
          >
            <div className="w-full max-w-4xl px-2">
              <div className="bg-white rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-blue-600 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                  <span className="text-white font-semibold text-xs">Swirl POS</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-[10px] hidden sm:inline">Table 5 • All synced</span>
                  </div>
                </div>

                {/* POS Interface */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left: Order Items */}
                  <div className="p-3 border-r border-gray-100">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Receipt className="w-3 h-3 text-primary" />
                      <h4 className="text-xs font-bold text-foreground">Order #100736</h4>
                      <span className="ml-auto px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[8px] font-medium rounded">IN PROGRESS</span>
                    </div>
                    
                    <div className="space-y-1.5 mb-3">
                      {[
                        { name: 'Chicken Shawarma', qty: 2, price: 45 },
                        { name: 'Grilled Lamb Kebab', qty: 1, price: 68 },
                        { name: 'Arabic Coffee', qty: 2, price: 24 }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 bg-primary/10 rounded text-[9px] font-bold text-primary flex items-center justify-center">{item.qty}×</span>
                            <span className="text-[10px] font-medium text-foreground">{item.name}</span>
                          </div>
                          <span className="text-[10px] font-semibold text-foreground">{formatAmount(item.price * item.qty)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center py-2 px-2 bg-primary/5 rounded-lg border border-primary/10">
                      <span className="text-xs font-bold text-foreground">Total</span>
                      <span className="text-sm font-bold text-primary">{formatAmount(182)}</span>
                    </div>
                  </div>

                  {/* Right: Billing */}
                  <div className="p-3 bg-gray-50/50">
                    <div className="flex items-center gap-1.5 mb-2">
                      <CreditCard className="w-3 h-3 text-primary" />
                      <h4 className="text-xs font-bold text-foreground">Billing</h4>
                      <span className="ml-auto px-1.5 py-0.5 bg-primary/10 text-primary text-[8px] font-medium rounded">READY</span>
                    </div>

                    {/* Payment Buttons */}
                    <div className="grid grid-cols-3 gap-1.5 mb-3">
                      <button className="flex flex-col items-center gap-0.5 p-2 bg-green-500 rounded-lg">
                        <Banknote className="w-4 h-4 text-white" />
                        <span className="text-[8px] font-semibold text-white">Cash</span>
                      </button>
                      <button className="flex flex-col items-center gap-0.5 p-2 bg-primary rounded-lg">
                        <CreditCard className="w-4 h-4 text-white" />
                        <span className="text-[8px] font-semibold text-white">Card</span>
                      </button>
                      <button className="flex flex-col items-center gap-0.5 p-2 bg-gray-700 rounded-lg">
                        <SplitSquareVertical className="w-4 h-4 text-white" />
                        <span className="text-[8px] font-semibold text-white">Split</span>
                      </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-white rounded-lg p-2 text-center border border-gray-100">
                        <p className="text-sm font-bold text-primary">{formatAmount(48250)}</p>
                        <p className="text-[8px] text-muted-foreground">Today's Sales</p>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center border border-gray-100">
                        <p className="text-sm font-bold text-green-600">12</p>
                        <p className="text-[8px] text-muted-foreground">Active Orders</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module Links */}
                <div className="border-t border-gray-100 px-3 py-2 bg-gradient-to-r from-blue-50/50 to-white">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {tools.map((tool, i) => (
                      <Link 
                        key={i}
                        to={tool.path}
                        className="flex items-center gap-1 px-2 py-1 bg-white rounded-full border border-primary/10 hover:border-primary/30 hover:shadow-sm transition-all text-[9px] font-medium text-foreground"
                      >
                        <tool.icon className="w-3 h-3 text-primary" />
                        {tool.label}
                      </Link>
                    ))}
                    <div className="flex items-center gap-1 text-[9px] text-green-600">
                      <CheckCircle className="w-3 h-3" />
                      <span>All connected</span>
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
          0%, 100% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-6px) rotate(calc(var(--rotation, 0deg) + 1deg)); }
        }
      `}</style>
    </section>
  );
};

export default InterfaceProblemStory;
