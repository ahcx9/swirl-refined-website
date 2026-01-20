import React, { useState, useEffect, useRef } from 'react';
import { 
  CreditCard, 
  MessageSquare, 
  FileSpreadsheet, 
  BarChart2, 
  ChefHat,
  AlertTriangle,
  Wifi,
  Clock,
  X
} from 'lucide-react';

const InterfaceProblemStory: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress as section moves through viewport
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
  const unifiedScale = 0.8 + (Math.min(1, Math.max(0, (scrollProgress - 0.4) * 2)) * 0.2);

  return (
    <section ref={sectionRef} className="relative min-h-[150vh] bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container-custom relative">
          {/* Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
              The reality today
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {scrollProgress < 0.5 ? (
                <>Too many tools. <span className="text-muted-foreground/60">No control.</span></>
              ) : (
                <>One platform. <span className="text-primary">Complete control.</span></>
              )}
            </h2>
          </div>

          {/* Chaotic Systems - Fade out as you scroll */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-all duration-500"
            style={{ 
              opacity: chaosOpacity,
              transform: `scale(${1 - scrollProgress * 0.1})`,
              pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
            }}
          >
            <div className="relative w-full max-w-5xl h-[500px]">
              {/* Disconnected POS */}
              <div 
                className="absolute top-0 left-[5%] w-48 md:w-56 bg-white rounded-2xl border border-red-200 shadow-lg p-4 transform -rotate-6"
                style={{ 
                  animation: 'float-chaos 4s ease-in-out infinite',
                  animationDelay: '0s'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-xs font-medium text-red-600">POS System A</span>
                  <AlertTriangle className="w-3 h-3 text-red-400 ml-auto" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-red-100 rounded w-full" />
                  <div className="h-2 bg-red-50 rounded w-3/4" />
                  <div className="flex items-center gap-1 text-[10px] text-red-500 mt-2">
                    <Wifi className="w-3 h-3" />
                    <span>Sync failed</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Orders */}
              <div 
                className="absolute top-4 right-[10%] w-44 md:w-52 bg-white rounded-2xl border border-orange-200 shadow-lg p-4 transform rotate-3"
                style={{ 
                  animation: 'float-chaos 5s ease-in-out infinite',
                  animationDelay: '0.5s'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-foreground">WhatsApp</span>
                </div>
                <div className="space-y-2 text-[10px]">
                  <div className="bg-gray-100 rounded-lg p-2">
                    <p className="text-gray-600">"1 biryani plz"</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <p className="text-gray-600">"when order coming?"</p>
                  </div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <Clock className="w-3 h-3" />
                    <span>12 unread</span>
                  </div>
                </div>
              </div>

              {/* Spreadsheet Inventory */}
              <div 
                className="absolute bottom-20 left-[8%] w-52 md:w-64 bg-white rounded-2xl border border-yellow-200 shadow-lg p-4 transform rotate-2"
                style={{ 
                  animation: 'float-chaos 4.5s ease-in-out infinite',
                  animationDelay: '1s'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <FileSpreadsheet className="w-4 h-4 text-green-700" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Excel Inventory</span>
                  <span className="text-[9px] text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded ml-auto">Outdated</span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[9px]">
                  <div className="bg-gray-50 p-1 text-center border">Item</div>
                  <div className="bg-gray-50 p-1 text-center border">Stock</div>
                  <div className="bg-gray-50 p-1 text-center border">???</div>
                  <div className="p-1 border">Tomato</div>
                  <div className="p-1 border text-red-500">-12</div>
                  <div className="p-1 border text-red-500">#ERR</div>
                  <div className="p-1 border">Oil</div>
                  <div className="p-1 border">???</div>
                  <div className="p-1 border">—</div>
                </div>
              </div>

              {/* Random Reports */}
              <div 
                className="absolute bottom-16 right-[5%] w-48 md:w-56 bg-white rounded-2xl border border-gray-200 shadow-lg p-4 transform -rotate-4"
                style={{ 
                  animation: 'float-chaos 5.5s ease-in-out infinite',
                  animationDelay: '1.5s'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <BarChart2 className="w-4 h-4 text-gray-500" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Reports</span>
                </div>
                <div className="space-y-1">
                  <div className="h-6 bg-gray-100 rounded animate-pulse" />
                  <div className="h-4 bg-gray-50 rounded w-2/3" />
                  <p className="text-[9px] text-gray-400 mt-2">Last updated: 3 days ago</p>
                </div>
              </div>

              {/* Kitchen Display */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 md:w-52 bg-white rounded-2xl border border-gray-300 shadow-lg p-4 transform rotate-1"
                style={{ 
                  animation: 'float-chaos 4.2s ease-in-out infinite',
                  animationDelay: '0.8s'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Kitchen</span>
                  <X className="w-3 h-3 text-red-400 ml-auto" />
                </div>
                <div className="space-y-2">
                  <div className="bg-red-50 border border-red-200 rounded p-2 text-[10px] text-red-600">
                    Order #142 - MISSING
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-2 text-[10px] text-yellow-600">
                    Ticket printed twice
                  </div>
                </div>
              </div>

              {/* Connection lines showing disconnection */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="brokenLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="0" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <line x1="30%" y1="20%" x2="70%" y2="30%" stroke="url(#brokenLine)" strokeWidth="2" strokeDasharray="8,8" />
                <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="url(#brokenLine)" strokeWidth="2" strokeDasharray="8,8" />
                <line x1="50%" y1="70%" x2="80%" y2="60%" stroke="url(#brokenLine)" strokeWidth="2" strokeDasharray="8,8" />
              </svg>
            </div>
          </div>

          {/* Unified Swirl Dashboard - Fade in as you scroll */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-all duration-700"
            style={{ 
              opacity: unifiedOpacity,
              transform: `scale(${unifiedScale})`,
              pointerEvents: scrollProgress > 0.5 ? 'auto' : 'none'
            }}
          >
            <div className="w-full max-w-4xl">
              {/* Unified Dashboard */}
              <div className="bg-white rounded-3xl border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-primary to-blue-600 px-6 py-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <span className="text-white font-semibold text-sm ml-4">Swirl Restaurant OS</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-xs">All systems connected</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-blue-50/50 to-white">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Mini Dashboard Cards */}
                    {[
                      { icon: CreditCard, label: 'POS & Billing', value: '₹48,250', status: 'Live' },
                      { icon: ChefHat, label: 'Kitchen', value: '12 orders', status: 'Active' },
                      { icon: FileSpreadsheet, label: 'Inventory', value: '98% accurate', status: 'Synced' },
                      { icon: BarChart2, label: 'Analytics', value: 'Real-time', status: 'Updated' },
                    ].map((item, i) => (
                      <div 
                        key={i}
                        className="bg-white rounded-xl border border-primary/10 p-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">{item.status}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-lg font-bold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Connection indicator */}
                  <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>All data synced</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200" />
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
          0%, 100% {
            transform: translateY(0) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-8px) rotate(var(--rotation, 0deg));
          }
        }
      `}</style>
    </section>
  );
};

export default InterfaceProblemStory;
