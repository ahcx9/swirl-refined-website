import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Shield, 
  Brain, 
  Heart,
  TrendingUp,
  Clock,
  CheckCircle,
  Users,
  Package,
  BarChart3,
  Sparkles
} from 'lucide-react';

const dashboards = [
  {
    id: 'speed',
    icon: Zap,
    title: 'Faster Operations',
    subtitle: 'Orders flowing. Kitchen moving. Guests happy.',
    stat: '40%',
    statLabel: 'faster service',
    color: 'from-primary to-blue-600',
    widgets: [
      { label: 'Active Orders', value: '12', trend: 'live' },
      { label: 'Avg Prep Time', value: '8 min', trend: 'down' },
      { label: 'Tables Served', value: '47', trend: 'up' },
    ],
    liveElements: ['orderFlow', 'kitchenQueue', 'billingSpeed']
  },
  {
    id: 'control',
    icon: Shield,
    title: 'Tighter Control',
    subtitle: 'Stock tracked. Costs managed. Leaks sealed.',
    stat: '30%',
    statLabel: 'less wastage',
    color: 'from-primary to-blue-500',
    widgets: [
      { label: 'Stock Accuracy', value: '98%', trend: 'up' },
      { label: 'Daily Variance', value: 'AED 240', trend: 'down' },
      { label: 'Staff on Duty', value: '8', trend: 'live' },
    ],
    liveElements: ['inventoryLevels', 'staffPerformance', 'outletDashboard']
  },
  {
    id: 'decisions',
    icon: Brain,
    title: 'Smarter Decisions',
    subtitle: 'Reports updating. Insights emerging. Profits growing.',
    stat: '2x',
    statLabel: 'profit visibility',
    color: 'from-blue-500 to-primary',
    widgets: [
      { label: 'Today\'s Revenue', value: 'AED 48,250', trend: 'up' },
      { label: 'Gross Margin', value: '68%', trend: 'up' },
      { label: 'Top Item', value: 'Biryani', trend: 'live' },
    ],
    liveElements: ['revenueChart', 'marginAnalysis', 'profitIntelligence']
  },
  {
    id: 'loyalty',
    icon: Heart,
    title: 'Stronger Relationships',
    subtitle: 'Guests remembered. Loyalty rewarded. Retention rising.',
    stat: '2x',
    statLabel: 'repeat visits',
    color: 'from-primary to-blue-600',
    widgets: [
      { label: 'Repeat Guests', value: '342', trend: 'up' },
      { label: 'Loyalty Points', value: '12,840', trend: 'live' },
      { label: 'Avg Rating', value: '4.8', trend: 'up' },
    ],
    liveElements: ['guestProfiles', 'loyaltyInsights', 'repeatPatterns']
  },
];

const OperationalDashboards: React.FC = () => {
  const [activeDashboard, setActiveDashboard] = useState(0);
  const [animatingNumbers, setAnimatingNumbers] = useState<Record<string, number>>({});

  // Auto-rotate dashboards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDashboard(prev => (prev + 1) % dashboards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate numbers when dashboard changes
  useEffect(() => {
    const dashboard = dashboards[activeDashboard];
    const newAnimatingNumbers: Record<string, number> = {};
    
    dashboard.widgets.forEach((widget, i) => {
      const numericValue = parseInt(widget.value.replace(/[^0-9]/g, '')) || 0;
      let current = 0;
      const step = numericValue / 30;
      
      const animate = () => {
        current += step;
        if (current < numericValue) {
          newAnimatingNumbers[`${dashboard.id}-${i}`] = Math.floor(current);
          setAnimatingNumbers({ ...newAnimatingNumbers });
          requestAnimationFrame(animate);
        } else {
          newAnimatingNumbers[`${dashboard.id}-${i}`] = numericValue;
          setAnimatingNumbers({ ...newAnimatingNumbers });
        }
      };
      
      setTimeout(() => animate(), i * 100);
    });
  }, [activeDashboard]);

  const current = dashboards[activeDashboard];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Live Dashboards</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See the transformation.
            <br />
            <span className="text-primary">Live.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every metric, every insight, every decision — all in real-time workspaces.
          </p>
        </div>

        {/* Dashboard Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 animate-on-scroll">
          {dashboards.map((dashboard, index) => (
            <button
              key={dashboard.id}
              onClick={() => setActiveDashboard(index)}
              className={`
                flex items-center gap-2 px-4 md:px-6 py-3 rounded-full border transition-all duration-300
                ${activeDashboard === index 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25' 
                  : 'bg-white text-foreground border-gray-200 hover:border-primary/30 hover:shadow-md'
                }
              `}
            >
              <dashboard.icon className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">{dashboard.title}</span>
            </button>
          ))}
        </div>

        {/* Active Dashboard View */}
        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100/50 overflow-hidden">
            {/* Dashboard Header Bar */}
            <div className={`bg-gradient-to-r ${current.color} px-6 py-4 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
                <div className="w-px h-4 bg-white/20" />
                <current.icon className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">{current.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/80 text-xs">Live</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50/50 to-white">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Main Stat */}
                <div className="md:col-span-1 flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl border border-gray-100">
                  <div className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                    {current.stat}
                  </div>
                  <p className="text-muted-foreground mt-2">{current.statLabel}</p>
                </div>

                {/* Widget Grid */}
                <div className="md:col-span-2 grid gap-4">
                  {current.widgets.map((widget, i) => (
                    <div 
                      key={i}
                      className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                    >
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{widget.label}</p>
                        <p className="text-2xl font-bold text-foreground mt-1">{widget.value}</p>
                      </div>
                      <div className={`
                        flex items-center gap-1 px-2 py-1 rounded text-xs font-medium
                        ${widget.trend === 'up' ? 'bg-green-50 text-green-600' : 
                          widget.trend === 'down' ? 'bg-blue-50 text-blue-600' : 
                          'bg-primary/10 text-primary'}
                      `}>
                        {widget.trend === 'up' && <TrendingUp className="w-3 h-3" />}
                        {widget.trend === 'down' && <Clock className="w-3 h-3" />}
                        {widget.trend === 'live' && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
                        {widget.trend === 'up' ? 'Improving' : widget.trend === 'down' ? 'Optimized' : 'Live'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Activity Bar */}
              <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{current.subtitle}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      All systems synced
                    </span>
                    <span>Updated just now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {dashboards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDashboard(index)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${activeDashboard === index ? 'w-8 bg-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalDashboards;
