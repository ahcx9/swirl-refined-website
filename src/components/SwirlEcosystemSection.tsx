import React from 'react';
import { Link } from 'react-router-dom';
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
  ArrowRight 
} from 'lucide-react';

const products = [
  {
    icon: CreditCard,
    name: 'Point of Sale',
    impact: 'Process orders 40% faster with intuitive, touch-optimized workflows.',
    path: '/features/point-of-sale',
    size: 'large',
  },
  {
    icon: QrCode,
    name: 'QR Ordering',
    impact: 'Let guests order from their phones. Reduce wait staff dependency.',
    path: '/features/qr-ordering',
    size: 'medium',
  },
  {
    icon: ChefHat,
    name: 'Kitchen Display',
    impact: 'Real-time order routing. Zero lost tickets. Faster throughput.',
    path: '/features/kitchen-display',
    size: 'medium',
  },
  {
    icon: Package,
    name: 'Inventory',
    impact: 'Track every ingredient. Reduce waste by 30%. Never run out.',
    path: '/features/inventory-management',
    size: 'large',
  },
  {
    icon: Users,
    name: 'CRM',
    impact: 'Know your guests. Reward loyalty. Drive repeat visits.',
    path: '/features/crm',
    size: 'medium',
  },
  {
    icon: BarChart3,
    name: 'Analytics',
    impact: 'Real-time dashboards. Actionable insights. Data-driven decisions.',
    path: '/features/financial-reports',
    size: 'medium',
  },
  {
    icon: Calculator,
    name: 'Accounting',
    impact: 'Auto-sync to Zoho, Xero, QuickBooks. Close books in minutes.',
    path: '/features/accounting',
    size: 'medium',
  },
  {
    icon: Building2,
    name: 'Multi-Branch',
    impact: 'Manage 1 or 100 locations from a single dashboard.',
    path: '/features/point-of-sale',
    size: 'medium',
  },
  {
    icon: Sparkles,
    name: 'AI Insights',
    impact: 'Predictive analytics. Smart recommendations. Future-ready.',
    path: '/features/visitor-analytics',
    size: 'large',
  },
];

const SwirlEcosystemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6 animate-on-scroll">
            <span className="text-sm font-medium text-primary">The Complete Ecosystem</span>
          </div>

          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Every tool you need.
            <br />
            <span className="text-primary">Working as one.</span>
          </h2>

          <p className="animate-on-scroll animate-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nine powerful modules, zero integration headaches. Each designed for hospitality, 
            all connected by default.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Link
              key={product.name}
              to={product.path}
              className={`animate-on-scroll animate-delay-${Math.min((index + 1) * 100, 600)} group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                product.size === 'large' ? 'md:col-span-1 lg:row-span-1' : ''
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <product.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                {product.name}
                <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.impact}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Explore All Features
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SwirlEcosystemSection;
