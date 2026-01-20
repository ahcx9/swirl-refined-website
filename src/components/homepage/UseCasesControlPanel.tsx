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
  Clock,
  TrendingUp,
  Package,
  CreditCard,
  QrCode,
  BarChart3,
  Wifi
} from 'lucide-react';

const businessTypes = [
  {
    id: 'cafe',
    name: 'Cafés & Bakeries',
    icon: Coffee,
    image: '/lovable-uploads/cafe-interior.jpg',
    description: 'Fast billing, loyalty programs, and repeat guest tracking for neighborhood favorites.',
    kpis: [
      { label: 'Avg Transaction', value: '₹280' },
      { label: 'Repeat Rate', value: '68%' },
      { label: 'Peak Hour', value: '9 AM' },
    ],
    features: ['Quick Billing', 'Loyalty Points', 'Guest History', 'Menu QR'],
    workflow: 'counter'
  },
  {
    id: 'qsr',
    name: 'Quick Service',
    icon: Utensils,
    image: '/lovable-uploads/quick-service.jpg',
    description: 'High-volume orders, kitchen flow optimization, and outlet control for speed-focused operations.',
    kpis: [
      { label: 'Orders/Hour', value: '45' },
      { label: 'Avg Prep Time', value: '6 min' },
      { label: 'Daily Orders', value: '320' },
    ],
    features: ['KDS Integration', 'Order Queue', 'Multi-Counter', 'Aggregators'],
    workflow: 'counter'
  },
  {
    id: 'finedining',
    name: 'Fine Dining',
    icon: ChefHat,
    image: '/lovable-uploads/fine-dining-interior.jpg',
    description: 'Table management, guest profiles, and sophisticated workflows for premium experiences.',
    kpis: [
      { label: 'Avg Cover', value: '₹2,400' },
      { label: 'Table Turn', value: '2.1x' },
      { label: 'VIP Guests', value: '124' },
    ],
    features: ['Table Mapping', 'Guest Profiles', 'Course Timing', 'Wine Pairing'],
    workflow: 'table'
  },
  {
    id: 'cloudkitchen',
    name: 'Cloud Kitchens',
    icon: Building2,
    image: '/lovable-uploads/cloud-kitchen.jpg',
    description: 'Multi-brand control, cost intelligence, and delivery optimization for virtual restaurants.',
    kpis: [
      { label: 'Brands', value: '4' },
      { label: 'Food Cost', value: '28%' },
      { label: 'Delivery %', value: '92%' },
    ],
    features: ['Multi-Brand', 'Cost Analysis', 'Aggregator Sync', 'Rider Tracking'],
    workflow: 'delivery'
  },
  {
    id: 'foodtruck',
    name: 'Food Trucks',
    icon: Truck,
    image: '/lovable-uploads/food-truck.jpg',
    description: 'Offline capability, fast menus, and mobile-first operations for on-the-go businesses.',
    kpis: [
      { label: 'Daily Sales', value: '₹18,500' },
      { label: 'Transactions', value: '85' },
      { label: 'Uptime', value: '99.9%' },
    ],
    features: ['Offline Mode', 'Quick Menu', 'Mobile POS', 'GPS Tracking'],
    workflow: 'mobile'
  },
  {
    id: 'hotel',
    name: 'Hotels & Resorts',
    icon: Hotel,
    image: '/lovable-uploads/hotel-resort.jpg',
    description: 'Multi-outlet dashboards, room charging, and enterprise oversight for hospitality groups.',
    kpis: [
      { label: 'Outlets', value: '6' },
      { label: 'Room Orders', value: '45/day' },
      { label: 'F&B Revenue', value: '₹3.2L' },
    ],
    features: ['Multi-Outlet', 'Room Charge', 'Central Menu', 'Enterprise Reports'],
    workflow: 'enterprise'
  },
];

const UseCasesControlPanel: React.FC = () => {
  const [activeType, setActiveType] = useState(businessTypes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTypeChange = (type: typeof businessTypes[0]) => {
    if (type.id === activeType.id) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveType(type);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Business Types</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            One platform.
            <br />
            <span className="text-primary">Every format.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your business type and watch Swirl adapt to your specific workflows.
          </p>
        </div>

        {/* Business Type Selector Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 animate-on-scroll">
          {businessTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type)}
              className={`
                flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full border transition-all duration-300
                ${activeType.id === type.id 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25' 
                  : 'bg-white text-foreground border-gray-200 hover:border-primary/30 hover:shadow-md'
                }
              `}
            >
              <type.icon className="w-4 h-4" />
              <span className="text-sm font-medium whitespace-nowrap">{type.name}</span>
            </button>
          ))}
        </div>

        {/* Adaptive Dashboard View */}
        <div className={`
          max-w-6xl mx-auto transition-all duration-300
          ${isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}
        `}>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100/50 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
                <div className="w-px h-4 bg-white/20" />
                <activeType.icon className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Swirl for {activeType.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/80 text-xs">Live Preview</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left: Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto">
                <img 
                  src={activeType.image} 
                  alt={activeType.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm">{activeType.description}</p>
                </div>
              </div>

              {/* Right: Dashboard */}
              <div className="lg:col-span-3 p-6 md:p-8 bg-gradient-to-br from-gray-50/50 to-white">
                {/* KPIs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {activeType.kpis.map((kpi, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 text-center hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                      <p className="text-2xl md:text-3xl font-bold text-primary">{kpi.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
                    </div>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {activeType.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 bg-primary/5 rounded-lg px-3 py-2 border border-primary/10">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Workflow Indicator */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
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
                        <p className="text-xs text-muted-foreground">Optimized for your operations</p>
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
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-foreground rounded-full font-medium hover:border-primary/30 hover:shadow-lg transition-all"
          >
            See all use cases
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCasesControlPanel;
