import React from 'react';
import { 
  Package, TrendingUp, AlertTriangle, FileText, ArrowRightLeft, 
  CheckCircle2, User, Clock, MapPin, Phone, Mail, ChefHat,
  Flame, Snowflake, Timer
} from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const HomeHeroMockup: React.FC = () => {
  const { formatAmount } = useCurrency();

  // Inventory metrics data
  const inventoryMetrics = [
    { label: 'Inventory on hand', value: formatAmount(125000), icon: Package, highlight: true },
    { label: 'PO fill rate', value: '94.2%', icon: TrendingUp },
    { label: 'Items below par', value: '12', icon: AlertTriangle },
    { label: 'Requisitions', value: '8', icon: FileText },
    { label: 'Transfers', value: '5', icon: ArrowRightLeft },
    { label: 'OTIF performance', value: '97.8%', icon: CheckCircle2 },
  ];

  // POS order items
  const orderItems = [
    { name: 'Red Velvet Latte', qty: 1, price: 22 },
    { name: 'Spanish Latte', qty: 2, price: 20 },
    { name: 'Pistachio Latte', qty: 1, price: 24 },
    { name: 'Texas BBQ\'ed Chicken', qty: 1, price: 45 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  // KDS orders
  const kdsOrders = [
    { 
      id: '#100031', 
      table: 'T-04', 
      time: '3:45', 
      status: 'prep',
      items: [{ name: 'Hawaiian', qty: 2, type: 'hot' }]
    },
    { 
      id: '#100032', 
      table: 'T-07', 
      time: '8:12', 
      status: 'late',
      items: [
        { name: 'Pepperoni Olive', qty: 1, type: 'hot' },
        { name: 'Fresh Juice', qty: 2, type: 'cold' }
      ]
    },
    { 
      id: '#100038', 
      table: 'T-02', 
      time: '1:30', 
      status: 'prep',
      items: [{ name: 'Classic Margherita', qty: 1, type: 'hot' }]
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main Container with Glass Effect */}
      <div className="relative">
        {/* Decorative glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-60" />
        
        {/* Inventory Metrics Strip - Top Layer */}
        <div className="relative z-20 mb-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-border/50 p-3 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {inventoryMetrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl min-w-[140px] transition-all duration-200 hover:scale-[1.02] ${
                    metric.highlight 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'bg-muted/50 border border-transparent'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${metric.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/10 text-muted-foreground'}`}>
                    <metric.icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground truncate">{metric.label}</p>
                    <p className={`text-sm font-semibold ${metric.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {metric.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Dashboard - Two Column Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-3">
          
          {/* POS Order Interface - Left Column (Primary Focus) */}
          <div className="lg:col-span-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 overflow-hidden">
            {/* Order Header */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 border-b border-border/30">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-foreground">#100736</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                    IN PROGRESS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-muted/50 rounded-lg">
                    <User className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">shamim</span>
                    <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded">Admin</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Table 5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Content */}
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Order Items */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Order Items</h4>
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center bg-primary/10 text-primary text-xs font-medium rounded">
                          {item.qty}
                        </span>
                        <span className="text-sm text-foreground">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{formatAmount(item.price * item.qty)}</span>
                    </div>
                  ))}
                </div>

                {/* Billing & Customer */}
                <div className="space-y-4">
                  {/* Billing Summary */}
                  <div className="bg-muted/20 rounded-xl p-3 border border-border/30">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Billing</h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">{formatAmount(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">VAT (5%)</span>
                        <span className="text-foreground">{formatAmount(vat)}</span>
                      </div>
                      <div className="border-t border-border/50 pt-1.5 mt-1.5">
                        <div className="flex justify-between">
                          <span className="text-sm font-semibold text-foreground">Total</span>
                          <span className="text-base font-bold text-primary">{formatAmount(total)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="bg-muted/20 rounded-xl p-3 border border-border/30">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Customer</h4>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-foreground">Abid Rahman</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-muted-foreground">+971 50 123 4567</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-muted-foreground">abid@email.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
                <button className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Settle Bill
                </button>
                <button className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-lg hover:bg-muted/80 transition-colors">
                  Print KOT
                </button>
                <button className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-lg hover:bg-muted/80 transition-colors">
                  Add Item
                </button>
                <button className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-lg hover:bg-muted/80 transition-colors">
                  Change Status
                </button>
              </div>
            </div>
          </div>

          {/* KDS Interface - Right Column */}
          <div className="lg:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 overflow-hidden hidden lg:block">
            {/* KDS Header */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent p-3 border-b border-border/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Kitchen Display</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-medium rounded-full">
                    3 prep
                  </span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-medium rounded-full">
                    1 late
                  </span>
                </div>
              </div>
            </div>

            {/* KDS Orders Grid */}
            <div className="p-3 space-y-2 max-h-[320px] overflow-y-auto">
              {kdsOrders.map((order, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-xl border transition-all duration-200 hover:shadow-md ${
                    order.status === 'late' 
                      ? 'bg-red-50/50 border-red-200' 
                      : 'bg-muted/30 border-border/30'
                  }`}
                >
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-foreground">{order.id}</span>
                      <span className="px-1.5 py-0.5 bg-muted text-muted-foreground text-[10px] rounded">
                        {order.table}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Timer className="w-3 h-3 text-muted-foreground" />
                      <span className={`text-[10px] font-medium ${
                        order.status === 'late' ? 'text-red-600' : 'text-muted-foreground'
                      }`}>
                        {order.time}
                      </span>
                      {order.status === 'late' && (
                        <span className="px-1.5 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded ml-1">
                          LATE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-1 mb-2">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2 text-xs">
                        <span className="w-4 h-4 flex items-center justify-center bg-primary/10 text-primary font-medium rounded text-[10px]">
                          {item.qty}
                        </span>
                        <span className="text-foreground flex-1">{item.name}</span>
                        {item.type === 'hot' ? (
                          <Flame className="w-3 h-3 text-orange-500" />
                        ) : (
                          <Snowflake className="w-3 h-3 text-blue-500" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-1.5">
                    <button className="flex-1 px-2 py-1 bg-primary text-primary-foreground text-[10px] font-medium rounded-lg hover:bg-primary/90 transition-colors">
                      Mark ready
                    </button>
                    <button className="px-2 py-1 bg-muted text-foreground text-[10px] font-medium rounded-lg hover:bg-muted/80 transition-colors">
                      Bump
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live indicator */}
        <div className="absolute -top-2 -right-2 z-30 flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full shadow-lg border border-border/50">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-medium text-muted-foreground">Live Demo</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroMockup;
