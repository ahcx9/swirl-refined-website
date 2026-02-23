import React, { useState } from 'react';
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
  ArrowRight,
  TrendingUp,
  Zap,
  Receipt,
  FileText,
  PieChart,
  Store,
  Smartphone,
  Globe
} from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const SwirlEcosystemGallery: React.FC = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const { formatAmount } = useCurrency();

  const ecosystemModules = [
    {
      id: 'pos',
      icon: CreditCard,
      name: 'POS & Billing',
      tagline: 'Orders. Speed. Revenue.',
      metrics: ['40% faster checkout', 'Zero errors'],
      path: '/products/restaurant-point-of-sale',
      preview: {
        type: 'billing',
        items: [
          { name: 'Paneer Tikka', qty: 2, price: 380 },
          { name: 'Butter Naan', qty: 4, price: 160 },
          { name: 'Dal Makhani', qty: 1, price: 220 },
        ]
      }
    },
    {
      id: 'qr',
      icon: QrCode,
      name: 'QR Ordering',
      tagline: 'Scan. Order. Done.',
      metrics: ['No app download', '30% more orders'],
      path: '/products/qr-ordering',
      subIcons: [Smartphone, Globe],
      preview: {
        type: 'menu',
        categories: ['Starters', 'Mains', 'Desserts']
      }
    },
    {
      id: 'kds',
      icon: ChefHat,
      name: 'Kitchen Display',
      tagline: 'Orders. Flow. Accuracy.',
      metrics: ['Zero lost tickets', '2x throughput'],
      path: '/products/kitchen-display',
      preview: {
        type: 'orders',
        orders: ['#142 - 2 items', '#143 - 5 items', '#144 - 3 items']
      }
    },
    {
      id: 'inventory',
      icon: Package,
      name: 'Inventory',
      tagline: 'Stock. Control. Margins.',
      metrics: ['30% less waste', 'Auto reorder'],
      path: '/products/inventory-management',
      preview: {
        type: 'stock',
        items: [
          { name: 'Tomatoes', level: 85 },
          { name: 'Onions', level: 42 },
          { name: 'Oil', level: 68 },
        ]
      }
    },
    {
      id: 'crm',
      icon: Users,
      name: 'CRM',
      tagline: 'Guests. Loyalty. Retention.',
      metrics: ['2x repeat visits', 'Guest history'],
      path: '/products/customer-relationship-management',
      preview: {
        type: 'guests',
        count: '2,847 guests'
      }
    },
    {
      id: 'analytics',
      icon: BarChart3,
      name: 'Analytics',
      tagline: 'Data. Insights. Decisions.',
      metrics: ['Real-time reports', 'Profit trends'],
      path: '/products/restaurant-analytics',
      preview: {
        type: 'chart',
        trend: '+18%'
      }
    },
    {
      id: 'accounting',
      icon: Calculator,
      name: 'Accounting',
      tagline: 'Books. Tax. Compliance.',
      metrics: ['Auto reconciliation', 'VAT ready'],
      path: '/products/accounting',
      subIcons: [Receipt, FileText, PieChart],
      preview: {
        type: 'ledger',
        balance: 482500
      }
    },
    {
      id: 'multi',
      icon: Building2,
      name: 'Multi-Branch',
      tagline: 'Scale. Control. Oversight.',
      metrics: ['Unlimited outlets', 'Central control'],
      path: '/products/restaurant-point-of-sale',
      subIcons: [Store, Globe],
      preview: {
        type: 'branches',
        count: 12
      }
    },
    {
      id: 'ai',
      icon: Sparkles,
      name: 'AI Intelligence',
      tagline: 'Predict. Automate. Grow.',
      metrics: ['Smart forecasts', 'Auto alerts'],
      path: '/products/restaurant-analytics',
      preview: {
        type: 'ai',
        prediction: 'Peak at 7PM'
      }
    },
  ];

  const renderPreview = (module: typeof ecosystemModules[0]) => {
    const preview = module.preview;
    
    switch (preview.type) {
      case 'billing':
        return (
          <div className="space-y-2">
            {preview.items?.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-muted-foreground">{item.name} x{item.qty}</span>
                <span className="text-foreground font-medium">{formatAmount(item.price)}</span>
              </div>
            ))}
            <div className="border-t border-gray-100 pt-2 flex justify-between text-sm font-bold">
              <span>Total</span>
              <span className="text-primary">{formatAmount(760)}</span>
            </div>
          </div>
        );
      case 'stock':
        return (
          <div className="space-y-2">
            {preview.items?.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className={item.level < 50 ? 'text-red-500' : 'text-green-600'}>{item.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${item.level < 50 ? 'bg-red-400' : 'bg-green-500'}`}
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      case 'orders':
        return (
          <div className="space-y-2">
            {preview.orders?.map((order, i) => (
              <div key={i} className={`text-xs px-2 py-1.5 rounded ${i === 0 ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-50 text-gray-600'}`}>
                {order} {i === 0 && <span className="float-right">PREPARING</span>}
              </div>
            ))}
          </div>
        );
      case 'chart':
        return (
          <div className="flex items-end justify-center gap-1 h-16">
            {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
              <div key={i} className="w-4 bg-primary/20 rounded-t" style={{ height: `${h}%` }}>
                <div className="w-full bg-primary rounded-t transition-all duration-300" style={{ height: '40%' }} />
              </div>
            ))}
            <div className="ml-2 text-green-600 text-sm font-bold flex items-center">
              <TrendingUp className="w-3 h-3 mr-0.5" />
              {preview.trend}
            </div>
          </div>
        );
      case 'guests':
        return (
          <div className="text-center">
            <div className="flex justify-center -space-x-2 mb-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-white" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground">{preview.count}</p>
          </div>
        );
      case 'ledger':
        return (
          <div className="text-center py-2">
            <p className="text-xs text-muted-foreground mb-1">Current Balance</p>
            <p className="text-lg font-bold text-primary">{formatAmount(preview.balance as number)}</p>
          </div>
        );
      case 'branches':
        return (
          <div className="text-center py-2">
            <div className="grid grid-cols-4 gap-1 mb-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                  <Store className="w-3 h-3 text-primary" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-foreground">{preview.count}+ Outlets</p>
          </div>
        );
      case 'ai':
        return (
          <div className="text-center">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-2 animate-pulse" />
            <p className="text-xs text-muted-foreground">AI Prediction</p>
            <p className="text-sm font-bold text-primary">{preview.prediction}</p>
          </div>
        );
      default:
        return (
          <div className="h-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded animate-pulse" />
        );
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Product Showroom</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Every tool you need.
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            All in one place.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse the Swirl ecosystem. Each module is designed for hospitality, built to work together.
          </p>
        </div>

        {/* Floating Product Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {ecosystemModules.map((module, index) => (
            <Link
              key={module.id}
              to={module.path}
              className="animate-on-scroll group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 30}ms` }}
              onMouseEnter={() => setHoveredModule(module.id)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <module.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{module.name}</h3>
                      <p className="text-xs text-muted-foreground">{module.tagline}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </div>

                {/* Live Preview Window */}
                <div className="bg-gray-50/80 rounded-xl p-3 border border-gray-100 mb-3 min-h-[90px]">
                  {renderPreview(module)}
                </div>

                {/* Sub Icons (for Accounting, Multi-branch, QR) */}
                {module.subIcons && (
                  <div className="flex items-center gap-2 mb-3">
                    {module.subIcons.map((SubIcon, i) => (
                      <div key={i} className="w-7 h-7 rounded-lg bg-primary/5 flex items-center justify-center">
                        <SubIcon className="w-3.5 h-3.5 text-primary" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {module.metrics.map((metric, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-full border border-primary/10"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            Explore All Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SwirlEcosystemGallery;
