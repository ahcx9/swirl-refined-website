import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  Utensils, 
  ChefHat, 
  Truck, 
  Building2, 
  Hotel,
  ArrowRight,
  Users,
  Package,
  CreditCard,
  Wifi,
  BarChart3,
  Star,
  Clock,
  TrendingUp
} from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const UseCasesControlPanel: React.FC = () => {
  const { formatAmount } = useCurrency();
  
  const businessTypes = [
    {
      id: 'cafe',
      name: 'Cafés & Bakeries',
      icon: Coffee,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
      description: 'Fast billing, loyalty programs, and repeat guest tracking.',
      kpis: [
        { label: 'Avg Ticket', value: formatAmount(45) },
        { label: 'Repeat Rate', value: '68%' },
        { label: 'Peak Hour', value: '9 AM' },
      ],
      features: ['Quick Billing', 'Loyalty Points', 'Guest History', 'QR Menu'],
      workflow: 'counter',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 'qsr',
      name: 'Quick Service',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
      description: 'High-volume orders, kitchen flow optimization.',
      kpis: [
        { label: 'Orders/Hr', value: '45' },
        { label: 'Prep Time', value: '6 min' },
        { label: 'Daily', value: '320+' },
      ],
      features: ['KDS Integration', 'Order Queue', 'Multi-Counter', 'Aggregators'],
      workflow: 'counter',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 'finedining',
      name: 'Fine Dining',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      description: 'Table management, guest profiles, premium experiences.',
      kpis: [
        { label: 'Avg Cover', value: formatAmount(380) },
        { label: 'Table Turn', value: '2.1x' },
        { label: 'VIPs', value: '124' },
      ],
      features: ['Table Mapping', 'Guest Profiles', 'Course Timing', 'Reservations'],
      workflow: 'table',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'cloudkitchen',
      name: 'Cloud Kitchens',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      description: 'Multi-brand control, cost intelligence, delivery focus.',
      kpis: [
        { label: 'Brands', value: '4' },
        { label: 'Food Cost', value: '28%' },
        { label: 'Delivery', value: '92%' },
      ],
      features: ['Multi-Brand', 'Cost Analysis', 'Aggregator Sync', 'Rider Tracking'],
      workflow: 'delivery',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'foodtruck',
      name: 'Food Trucks',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&q=80',
      description: 'Offline capability, fast menus, mobile-first ops.',
      kpis: [
        { label: 'Daily', value: formatAmount(2850) },
        { label: 'Txns', value: '85' },
        { label: 'Uptime', value: '99.9%' },
      ],
      features: ['Offline Mode', 'Quick Menu', 'Mobile POS', 'GPS Tracking'],
      workflow: 'mobile',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'hotel',
      name: 'Hotels & Resorts',
      icon: Hotel,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      description: 'Multi-outlet dashboards, room charging, enterprise oversight.',
      kpis: [
        { label: 'Outlets', value: '6' },
        { label: 'Room Orders', value: '45/day' },
        { label: 'F&B Rev', value: formatAmount(48000) },
      ],
      features: ['Multi-Outlet', 'Room Charge', 'Central Menu', 'Enterprise Reports'],
      workflow: 'enterprise',
      gradient: 'from-blue-500 to-primary'
    },
  ];

  const [activeType, setActiveType] = useState(businessTypes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTypeChange = (type: typeof businessTypes[0]) => {
    if (type.id === activeType.id) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveType(type);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Every Business Type</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Serving Every Corner
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            of Hospitality
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From cozy cafés to luxury hotels — Swirl adapts to your unique workflow.
          </p>
        </div>

        {/* Business Type Cards - Horizontal Scroll on Mobile */}
        <div className="mb-8 animate-on-scroll">
          {/* Mobile: Horizontal scroll */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {businessTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type)}
                className={`
                  flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300
                  ${activeType.id === type.id 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25' 
                    : 'bg-white text-foreground border-gray-200'
                  }
                `}
              >
                <type.icon className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">{type.name}</span>
              </button>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-3">
            {businessTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type)}
                className={`
                  flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300
                  ${activeType.id === type.id 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105' 
                    : 'bg-white text-foreground border-gray-100 hover:border-primary/30 hover:shadow-md'
                  }
                `}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeType.id === type.id ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  <type.icon className={`w-6 h-6 ${activeType.id === type.id ? 'text-white' : 'text-primary'}`} />
                </div>
                <span className="text-sm font-semibold text-center">{type.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Business Type Showcase */}
        <div className={`
          max-w-5xl mx-auto transition-all duration-200
          ${isTransitioning ? 'opacity-0 scale-98' : 'opacity-100 scale-100'}
        `}>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Image with Overlay */}
              <div className="relative h-64 lg:h-auto min-h-[320px]">
                <img 
                  src={activeType.image} 
                  alt={activeType.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activeType.gradient} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Content on image */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <activeType.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{activeType.name}</h3>
                      <p className="text-white/80 text-sm">{activeType.description}</p>
                    </div>
                  </div>
                  
                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {activeType.features.map((feature, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Dashboard Preview */}
              <div className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white">
                {/* KPIs */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {activeType.kpis.map((kpi, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                      <p className="text-2xl lg:text-3xl font-bold text-primary">{kpi.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
                    </div>
                  ))}
                </div>

                {/* Mini Dashboard */}
                <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-foreground">Live Dashboard</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Swirl for {activeType.name}</span>
                  </div>
                  
                  {/* Simulated data rows */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-foreground">Today's Revenue</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">{formatAmount(12450)}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">Avg Wait Time</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">4.2 min</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-foreground">Customer Rating</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">4.8 ★</span>
                    </div>
                  </div>
                </div>

                {/* Workflow Type & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {activeType.workflow === 'counter' && <CreditCard className="w-5 h-5 text-primary" />}
                      {activeType.workflow === 'table' && <Users className="w-5 h-5 text-primary" />}
                      {activeType.workflow === 'delivery' && <Package className="w-5 h-5 text-primary" />}
                      {activeType.workflow === 'mobile' && <Wifi className="w-5 h-5 text-primary" />}
                      {activeType.workflow === 'enterprise' && <BarChart3 className="w-5 h-5 text-primary" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground capitalize">{activeType.workflow} Workflow</p>
                      <p className="text-xs text-muted-foreground">Optimized for your ops</p>
                    </div>
                  </div>
                  <Link 
                    to="/use-cases"
                    className="flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center animate-on-scroll">
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            Explore All Use Cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCasesControlPanel;
