import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  ArrowRight, 
  Receipt, 
  Package, 
  Monitor, 
  Clock, 
  Check,
  Banknote,
  SplitSquareVertical,
  TrendingUp,
  Calculator,
  FileText,
  PieChart
} from 'lucide-react';
import { Button } from './ui/button';
import { useCurrency } from '@/hooks/useCurrency';

// ============ COMPACT ACCOUNTING MOCKUP ============
const AccountingMockup = ({ formatAmount }: { formatAmount: (amount: number) => string }) => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full max-w-[320px]">
    {/* Header */}
    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
          <Calculator className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-white font-semibold text-sm">Accounting</span>
      </div>
      <span className="text-white/80 text-xs">Auto-synced</span>
    </div>
    
    {/* Content */}
    <div className="p-3 space-y-3">
      {/* Revenue Card */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-emerald-700 font-medium">Today's Revenue</span>
          <TrendingUp className="w-4 h-4 text-emerald-500" />
        </div>
        <p className="text-xl font-bold text-emerald-700">{formatAmount(48250)}</p>
        <p className="text-[10px] text-emerald-600">+12.5% vs yesterday</p>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <FileText className="w-4 h-4 text-primary mx-auto mb-1" />
          <p className="text-sm font-bold text-foreground">156</p>
          <p className="text-[9px] text-muted-foreground">Invoices</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <PieChart className="w-4 h-4 text-amber-500 mx-auto mb-1" />
          <p className="text-sm font-bold text-foreground">28%</p>
          <p className="text-[9px] text-muted-foreground">Food Cost</p>
        </div>
      </div>
      
      {/* Status */}
      <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
        <span>Tally/Zoho sync active</span>
      </div>
    </div>
  </div>
);

// ============ FULL POS MOCKUP (from POS page) ============
const FullPOSMockup = ({ formatAmount }: { formatAmount: (amount: number) => string }) => {
  const orderItems = [
    { name: 'Red Velvet Latte', qty: 1, price: 25 },
    { name: 'Spanish Latte', qty: 1, price: 28 },
    { name: 'Pistachio Latte', qty: 1, price: 25 },
  ];
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-[480px]">
      {/* Top Header Bar */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-900">Order #100736</h2>
          <p className="text-[10px] text-gray-500">Dec 30, 2025, 4:54 PM</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-full border border-gray-200">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-xs font-medium text-gray-700">shamim</span>
          </div>
          <div className="px-2 py-1 bg-gray-50 rounded-full border border-gray-200 text-xs text-gray-700">
            Table #009
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left Panel - Order Items */}
        <div className="p-4 border-r border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-bold text-gray-900 text-sm">Order</h3>
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-medium rounded">IN PROGRESS</span>
          </div>
          
          <div className="space-y-2 mb-4">
            {orderItems.map((item, index) => (
              <div key={index} className="p-3 bg-white border border-gray-100 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                    <p className="text-[10px] text-gray-500">{item.qty} × {formatAmount(item.price)}</p>
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{formatAmount(item.price)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button className="px-3 py-2 text-xs font-medium text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
              Change Status
            </button>
            <button className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Add Item
            </button>
          </div>
        </div>

        {/* Right Panel - Billing */}
        <div className="p-4 bg-gray-50/50">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-bold text-gray-900 text-sm">Billing</h3>
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-medium rounded">UNPAID</span>
          </div>

          {/* Invoice Card */}
          <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
            <div className="text-center mb-3">
              <h4 className="font-bold text-gray-900 text-sm">Swirl Cafe</h4>
              <p className="text-[10px] text-gray-500">Al Khalidya</p>
              <p className="text-[9px] text-gray-400">VAT: VAT123456789</p>
            </div>

            {/* Totals */}
            <div className="border-t border-gray-100 pt-3 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Sub Total</span>
                <span className="text-gray-900">{formatAmount(subtotal)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">VAT (5%)</span>
                <span className="text-gray-900">{formatAmount(vat)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-2 border-t border-gray-100">
                <span className="text-gray-900">Total</span>
                <span className="text-primary">{formatAmount(total)}</span>
              </div>
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <button className="flex flex-col items-center gap-1 p-2 bg-green-500 rounded-xl">
              <Banknote className="w-4 h-4 text-white" />
              <span className="text-[9px] font-semibold text-white">Cash</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 bg-primary rounded-xl">
              <CreditCard className="w-4 h-4 text-white" />
              <span className="text-[9px] font-semibold text-white">Card</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 bg-gray-700 rounded-xl">
              <SplitSquareVertical className="w-4 h-4 text-white" />
              <span className="text-[9px] font-semibold text-white">Split</span>
            </button>
          </div>

          <button className="w-full px-3 py-2.5 text-xs font-medium text-white bg-gray-900 rounded-lg flex items-center justify-center gap-2">
            <Receipt className="w-4 h-4" />
            Print Bill & Settle
          </button>
        </div>
      </div>
    </div>
  );
};

// ============ COMPACT INVENTORY MOCKUP ============
const CompactInventoryMockup = ({ formatAmount }: { formatAmount: (amount: number) => string }) => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full max-w-[320px]">
    {/* Header */}
    <div className="bg-gradient-to-r from-primary to-blue-600 px-4 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
          <Package className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-white font-semibold text-sm">Inventory</span>
      </div>
      <div className="px-2 py-0.5 bg-white/20 rounded-full">
        <span className="text-white/90 text-[10px] font-medium">Live</span>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-3 space-y-3">
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-blue-50 rounded-xl p-2 text-center border border-blue-100">
          <p className="text-lg font-bold text-gray-900">847</p>
          <p className="text-[9px] text-blue-600 font-medium">Items</p>
        </div>
        <div className="bg-green-50 rounded-xl p-2 text-center border border-green-100">
          <p className="text-lg font-bold text-gray-900">98%</p>
          <p className="text-[9px] text-green-600 font-medium">Fill Rate</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-2 text-center border border-amber-100">
          <p className="text-lg font-bold text-gray-900">12</p>
          <p className="text-[9px] text-amber-600 font-medium">Low Stock</p>
        </div>
      </div>
      
      {/* Stock Alerts */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <span className="text-xs text-gray-700">Chicken Breast</span>
          </div>
          <span className="text-[9px] font-bold text-red-500 px-1.5 py-0.5 bg-red-50 rounded-full">Low</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-xs text-gray-700">Fresh Tomatoes</span>
          </div>
          <span className="text-[9px] font-bold text-green-600 px-1.5 py-0.5 bg-green-50 rounded-full">OK</span>
        </div>
      </div>
      
      {/* Value */}
      <div className="flex items-center justify-between p-2.5 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-medium text-emerald-700">Stock Value</span>
        </div>
        <span className="text-sm font-bold text-emerald-600">{formatAmount(125000)}</span>
      </div>
    </div>
  </div>
);

// ============ MAIN HERO COMPONENT ============
const Hero: React.FC = () => {
  const { formatAmount } = useCurrency();
  
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-28 md:pt-32 pb-8">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh] py-8">
          
          {/* LEFT COLUMN: COPY & CTAs */}
          <div className="space-y-6 text-center lg:text-left order-1">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight animate-fade-in">
              The Operating System{" "}
              <span className="bg-gradient-to-r from-primary via-primary/85 to-primary/65 bg-clip-text text-transparent">
                Powering
              </span>{" "}
              Modern Restaurants
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in animation-delay-200">
              POS, QR Ordering, Inventory, Accounting, CRM, Analytics & AI — unified into one powerful platform designed for serious F&B brands.
            </p>

            {/* CTA Zone */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <a href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Swirl" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/features/point-of-sale">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold">
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in animation-delay-600">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                Free setup
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                24/7 support
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                500+ restaurants
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT MOCKUPS */}
          <div className="relative animate-fade-in animation-delay-600 order-2">
            {/* Desktop Layout */}
            <div className="hidden lg:block relative">
              {/* Main POS Mockup */}
              <div className="transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
                <FullPOSMockup formatAmount={formatAmount} />
              </div>
              
              {/* Side cards - Inventory & Accounting */}
              <div className="absolute -right-4 top-4 transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 scale-90">
                <CompactInventoryMockup formatAmount={formatAmount} />
              </div>
              
              <div className="absolute -right-8 bottom-8 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 scale-85">
                <AccountingMockup formatAmount={formatAmount} />
              </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:flex lg:hidden flex-col gap-4 items-center">
              <FullPOSMockup formatAmount={formatAmount} />
              <div className="flex gap-4">
                <div className="scale-90">
                  <CompactInventoryMockup formatAmount={formatAmount} />
                </div>
                <div className="scale-90">
                  <AccountingMockup formatAmount={formatAmount} />
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col gap-4 items-center">
              {/* Simplified POS */}
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-primary px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-white" />
                    <span className="text-white font-semibold text-sm">Swirl POS</span>
                  </div>
                  <span className="text-white/80 text-xs">Table 5</span>
                </div>
                <div className="p-4">
                  <div className="space-y-2 mb-4">
                    {[
                      { name: 'Red Velvet Latte', qty: 1, price: 25 },
                      { name: 'Spanish Latte', qty: 1, price: 28 },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 bg-primary/10 rounded text-xs font-bold text-primary flex items-center justify-center">{item.qty}×</span>
                          <span className="text-sm text-foreground">{item.name}</span>
                        </div>
                        <span className="text-sm font-semibold">{formatAmount(item.price)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-200">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="text-lg font-bold text-primary">{formatAmount(55.65)}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <button className="p-2 bg-green-500 rounded-lg flex flex-col items-center">
                      <Banknote className="w-4 h-4 text-white" />
                      <span className="text-[9px] text-white font-medium">Cash</span>
                    </button>
                    <button className="p-2 bg-primary rounded-lg flex flex-col items-center">
                      <CreditCard className="w-4 h-4 text-white" />
                      <span className="text-[9px] text-white font-medium">Card</span>
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg flex flex-col items-center">
                      <SplitSquareVertical className="w-4 h-4 text-white" />
                      <span className="text-[9px] text-white font-medium">Split</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Mobile Inventory Card */}
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <h3 className="text-sm font-bold text-foreground">Inventory</h3>
                  </div>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-primary/5 rounded-lg p-2 text-center">
                    <p className="text-lg font-bold text-foreground">847</p>
                    <p className="text-[9px] text-muted-foreground">Items</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 text-center">
                    <p className="text-lg font-bold text-foreground">98%</p>
                    <p className="text-[9px] text-muted-foreground">Fill Rate</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-2 text-center">
                    <p className="text-lg font-bold text-amber-600">12</p>
                    <p className="text-[9px] text-muted-foreground">Low Stock</p>
                  </div>
                </div>
              </div>

              {/* Mobile Accounting Card */}
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-sm font-bold text-foreground">Accounting</h3>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Synced</span>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-700">Today's Revenue</span>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-xl font-bold text-emerald-700 mt-1">{formatAmount(48250)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
