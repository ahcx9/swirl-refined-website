import React from 'react';
import { CreditCard, QrCode, Check, Banknote, SplitSquareVertical, CheckCircle2, Plus, ShoppingCart, ArrowRight, BarChart3, Receipt, Package, Monitor, Clock, Calculator, TrendingUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useCurrency } from '@/hooks/useCurrency';

// ============ DOODLES - Positioned in outer margins only ============

const DoodleBilling = () => <svg className="w-20 h-24" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="15" y="5" width="70" height="95" rx="4" className="stroke-primary" />
    <line x1="25" y1="20" x2="75" y2="20" className="stroke-primary" />
    <line x1="25" y1="32" x2="65" y2="32" className="stroke-primary" />
    <line x1="25" y1="44" x2="60" y2="44" className="stroke-primary" />
    <line x1="25" y1="56" x2="70" y2="56" className="stroke-primary" />
    <line x1="25" y1="68" x2="55" y2="68" className="stroke-primary" />
    <line x1="25" y1="85" x2="75" y2="85" className="stroke-primary" strokeWidth="1.8" />
    <text x="28" y="95" fontSize="8" className="fill-primary" fontFamily="sans-serif">TOTAL</text>
  </svg>;
const DoodleQRCode = () => <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="60" y="8" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="8" y="60" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="16" y="16" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="68" y="16" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="16" y="68" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="60" y="60" width="12" height="12" className="stroke-primary" />
    <rect x="76" y="60" width="16" height="12" className="stroke-primary" />
    <rect x="60" y="76" width="12" height="16" className="stroke-primary" />
  </svg>;
const DoodleInventory = () => <svg className="w-18 h-20" viewBox="0 0 80 110" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="8" y="70" width="64" height="35" rx="3" className="stroke-primary" />
    <rect x="14" y="40" width="52" height="35" rx="3" className="stroke-primary" />
    <rect x="20" y="10" width="40" height="35" rx="3" className="stroke-primary" />
    <line x1="32" y1="85" x2="48" y2="85" className="stroke-primary" />
    <line x1="28" y1="55" x2="44" y2="55" className="stroke-primary" />
    <line x1="32" y1="25" x2="45" y2="25" className="stroke-primary" />
  </svg>;
const DoodleAnalytics = () => <svg className="w-24 h-20" viewBox="0 0 140 120" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="10" y="10" width="120" height="90" rx="5" className="stroke-primary" />
    <line x1="25" y1="85" x2="25" y2="25" className="stroke-primary" />
    <line x1="25" y1="85" x2="115" y2="85" className="stroke-primary" />
    <polyline points="35,70 55,45 70,55 90,28 110,40" className="stroke-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <circle cx="55" cy="45" r="4" className="stroke-primary fill-primary/20" />
    <circle cx="70" cy="55" r="4" className="stroke-primary fill-primary/20" />
    <circle cx="90" cy="28" r="4" className="stroke-primary fill-primary/20" />
  </svg>;
const DoodleKDSSmall = () => <svg className="w-20 h-16" viewBox="0 0 110 90" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="5" y="5" width="100" height="65" rx="4" className="stroke-primary" />
    <line x1="38" y1="5" x2="38" y2="70" className="stroke-primary" />
    <line x1="72" y1="5" x2="72" y2="70" className="stroke-primary" />
    <rect x="10" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="44" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="78" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="5" y="75" width="100" height="10" rx="3" className="stroke-primary" />
  </svg>;
const DoodleCRM = () => <svg className="w-20 h-18" viewBox="0 0 110 90" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="30" cy="28" r="14" className="stroke-primary" />
    <circle cx="80" cy="28" r="14" className="stroke-primary" />
    <circle cx="55" cy="62" r="14" className="stroke-primary" />
    <path d="M42 34 L46 52" className="stroke-primary" strokeDasharray="3 2" />
    <path d="M68 34 L64 52" className="stroke-primary" strokeDasharray="3 2" />
    <path d="M44 28 L66 28" className="stroke-primary" strokeDasharray="3 2" />
    <circle cx="30" cy="25" r="6" className="stroke-primary fill-primary/15" />
    <circle cx="80" cy="25" r="6" className="stroke-primary fill-primary/15" />
    <circle cx="55" cy="59" r="6" className="stroke-primary fill-primary/15" />
  </svg>;
const DoodleReports = () => <svg className="w-16 h-20" viewBox="0 0 80 105" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M10 10 L55 10 L70 25 L70 95 L10 95 Z" className="stroke-primary" />
    <path d="M55 10 L55 25 L70 25" className="stroke-primary" />
    <line x1="18" y1="40" x2="60" y2="40" className="stroke-primary" />
    <line x1="18" y1="50" x2="52" y2="50" className="stroke-primary" />
    <line x1="18" y1="60" x2="58" y2="60" className="stroke-primary" />
    <line x1="18" y1="70" x2="45" y2="70" className="stroke-primary" />
    <rect x="18" y="28" width="18" height="6" className="stroke-primary fill-primary/15" rx="1" />
  </svg>;
const DoodleAccounting = () => <svg className="w-18 h-20" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="10" y="10" width="60" height="80" rx="4" className="stroke-primary" />
    <line x1="10" y1="28" x2="70" y2="28" className="stroke-primary" />
    <rect x="18" y="36" width="12" height="10" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="34" y="36" width="12" height="10" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="50" y="36" width="12" height="10" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="18" y="50" width="12" height="10" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="34" y="50" width="12" height="10" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="50" y="50" width="12" height="10" rx="2" className="stroke-primary fill-primary/8" />
    <text x="18" y="22" fontSize="7" className="fill-primary" fontFamily="monospace">12,450.00</text>
    <rect x="34" y="68" width="28" height="14" rx="2" className="stroke-primary fill-primary/15" />
  </svg>;

// CTA Arrow Doodle
const CTAArrowDoodle = () => <svg className="absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-10 opacity-[0.15] text-primary hidden xl:block" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 25 Q18 18, 30 25 T55 25" strokeLinecap="round" className="stroke-primary" />
    <path d="M46 18 L56 25 L46 32" strokeLinecap="round" strokeLinejoin="round" className="stroke-primary" />
  </svg>;

// ============ MOCKUP COMPONENTS ============

// POS Mockup Component
const POSMockup = ({
  amounts
}: {
  amounts: {
    chickenShawarma: string;
    grilledLambKebab: string;
    posSubtotal: string;
    posTotal: string;
  };
}) => <div className="bg-white rounded-2xl shadow-2xl shadow-primary/20 border border-gray-100 overflow-hidden w-full max-w-[420px]">
    {/* POS Header Bar */}
    <div className="bg-primary px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <Receipt className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-semibold text-sm">Swirl POS</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-white/80 text-xs font-medium">Table 5</span>
      </div>
    </div>
    
    {/* Order Items */}
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-sm font-bold text-primary">2×</div>
          <div>
            <span className="text-sm font-medium text-foreground block">Chicken Shawarma</span>
            <span className="text-xs text-muted-foreground">Extra garlic sauce</span>
          </div>
        </div>
        <span className="text-sm font-semibold text-foreground">{amounts.chickenShawarma}</span>
      </div>
      <div className="flex items-center justify-between py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-sm font-bold text-primary">1×</div>
          <div>
            <span className="text-sm font-medium text-foreground block">Grilled Lamb Kebab</span>
            <span className="text-xs text-muted-foreground">Medium spice</span>
          </div>
        </div>
        <span className="text-sm font-semibold text-foreground">{amounts.grilledLambKebab}</span>
      </div>
      
      {/* Totals */}
      <div className="pt-3 space-y-2 border-t border-gray-100">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Subtotal</span>
          <span>{amounts.posSubtotal}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-gray-200">
          <span>Total</span>
          <span className="text-primary">{amounts.posTotal}</span>
        </div>
      </div>
      
      {/* Payment Buttons */}
      <div className="grid grid-cols-3 gap-2 pt-3">
        <button className="flex flex-col items-center gap-1 p-3 bg-green-500 rounded-xl">
          <Banknote className="w-5 h-5 text-white" />
          <span className="text-[10px] font-semibold text-white">Cash</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-3 bg-primary rounded-xl">
          <CreditCard className="w-5 h-5 text-white" />
          <span className="text-[10px] font-semibold text-white">Card</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-3 bg-gray-600 rounded-xl">
          <SplitSquareVertical className="w-5 h-5 text-white" />
          <span className="text-[10px] font-semibold text-white">Split</span>
        </button>
      </div>
    </div>
  </div>;

// Inventory Mockup Component  
const InventoryMockup = ({
  amounts
}: {
  amounts: {
    accountingToday: string;
    accountingWeek: string;
    accountingMonth: string;
  };
}) => <div className="bg-white rounded-2xl shadow-2xl shadow-primary/20 border border-gray-100 overflow-hidden w-full max-w-[380px]">
    {/* Header */}
    <div className="bg-gradient-to-r from-primary to-primary/90 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <Package className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-semibold text-sm">Inventory</span>
      </div>
      <div className="px-2 py-1 bg-white/20 rounded-full">
        <span className="text-white/90 text-xs font-medium">Live</span>
      </div>
    </div>
    
    {/* Metrics Grid */}
    <div className="p-4 space-y-4">
      {/* Top Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
          <p className="text-2xl font-bold text-gray-900">847</p>
          <p className="text-[10px] text-blue-600 font-medium">Items in Stock</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
          <p className="text-2xl font-bold text-gray-900">98%</p>
          <p className="text-[10px] text-green-600 font-medium">Fill Rate</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-3 text-center border border-purple-100">
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-[10px] text-purple-600 font-medium">Low Stock</p>
        </div>
      </div>
      
      {/* Stock Status */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Stock Alerts</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Chicken Breast</span>
            </div>
            <span className="text-xs font-bold text-red-500 px-2 py-1 bg-red-50 rounded-full">Low</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Olive Oil</span>
            </div>
            <span className="text-xs font-bold text-amber-600 px-2 py-1 bg-amber-50 rounded-full">Med</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Fresh Tomatoes</span>
            </div>
            <span className="text-xs font-bold text-green-600 px-2 py-1 bg-green-50 rounded-full">OK</span>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          <span className="text-sm font-medium text-emerald-700">Inventory Value</span>
        </div>
        <span className="text-lg font-bold text-emerald-600">{amounts.accountingMonth}</span>
      </div>
    </div>
  </div>;

// KDS Mockup Component for Hero
const KDSMockup = () => {
  const orders = [{
    id: "#100736",
    table: "Table 009",
    status: "In prep",
    cardBg: "bg-red-50",
    borderColor: "border-l-4 border-l-red-500",
    isLate: true,
    time: "16:54",
    waitTime: "5m 19s",
    items: [{
      qty: 1,
      name: "Red Velvet Latte"
    }, {
      qty: 1,
      name: "Spanish Latte"
    }]
  }, {
    id: "#100742",
    table: "Table 1",
    status: "In prep",
    cardBg: "bg-blue-50",
    borderColor: "border-l-4 border-l-blue-500",
    isLate: false,
    time: "13:57",
    waitTime: "2m 15s",
    items: [{
      qty: 1,
      name: "Pistachio Latte"
    }, {
      qty: 2,
      name: "Red Velvet Latte"
    }]
  }, {
    id: "#100744",
    table: "Takeaway",
    status: "Takeaway",
    cardBg: "bg-amber-50",
    borderColor: "border-l-4 border-l-amber-500",
    isTakeaway: true,
    isLate: false,
    time: "14:10",
    waitTime: "02m 58s",
    items: [{
      qty: 1,
      name: "Vanilla Affogato"
    }, {
      qty: 1,
      name: "Texas BBQ'ed"
    }]
  }, {
    id: "#0",
    table: "Table 10",
    status: "served",
    cardBg: "bg-emerald-50",
    borderColor: "border-l-4 border-l-emerald-500",
    isLate: false,
    isServed: true,
    time: "14:27",
    waitTime: "Complete",
    items: [{
      qty: 1,
      name: "Brownie Ice cream"
    }, {
      qty: 1,
      name: "Red Velvet"
    }]
  }];
  return <div className="bg-white rounded-2xl shadow-2xl shadow-primary/20 border border-gray-100 overflow-hidden w-full max-w-[800px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <Monitor className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-semibold text-sm">Kitchen Display</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-[10px] font-medium text-emerald-300">0 prep</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-500/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <span className="text-[10px] font-medium text-blue-300">7 active</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-red-500/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
            <span className="text-[10px] font-medium text-red-300">5 late</span>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="p-3 grid grid-cols-2 md:grid-cols-4 gap-3">
        {orders.map((order, idx) => <div key={idx} className={`${order.cardBg} rounded-xl border border-gray-200 overflow-hidden ${order.borderColor}`}>
            {/* Order Header */}
            <div className="p-2.5 border-b border-gray-100/50">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-gray-900 text-xs">{order.id}</span>
                <div className="flex items-center gap-1">
                  {order.isServed ? <span className="text-[10px] font-medium text-gray-400">served</span> : order.isTakeaway ? <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[10px] rounded font-semibold">
                      Takeaway
                    </span> : order.isLate ? <span className="px-1.5 py-0.5 bg-red-500 text-white text-[10px] rounded font-semibold">
                      LATE
                    </span> : <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[10px] rounded font-semibold">
                      In prep
                    </span>}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500">{order.table}</span>
                <span className={`text-[10px] font-bold ${order.isLate ? 'text-red-500' : order.isServed ? 'text-gray-400' : 'text-blue-500'}`}>
                  {order.waitTime}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-2.5 space-y-1.5">
              {order.items.map((item, i) => <div key={i} className="flex items-center gap-2">
                  <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center flex-shrink-0 ${order.isServed ? 'border-emerald-400 bg-emerald-50' : 'border-gray-300'}`}>
                    {order.isServed && <Check className="w-2.5 h-2.5 text-emerald-500" />}
                  </div>
                  <span className="font-bold text-gray-800 text-[10px]">{item.qty}×</span>
                  <span className="text-gray-600 text-[10px] truncate">{item.name}</span>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
};

// ============ MAIN HERO COMPONENT ============

const Hero: React.FC = () => {
  const {
    amounts
  } = useCurrency();
  return <section className="relative min-h-screen bg-white overflow-hidden pt-32 md:pt-36 lg:pt-32 pb-8">
      
      {/* ======== DOODLES - Outer margins only, hidden on mobile/tablet ======== */}
      <div className="absolute inset-0 pointer-events-none text-primary hidden xl:block">
        {/* Left margin doodles */}
        <div className="absolute top-32 left-4 opacity-[0.06]">
          <DoodleBilling />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-6 opacity-[0.05]">
          <DoodleInventory />
        </div>
        <div className="absolute bottom-32 left-8 opacity-[0.05]">
          <DoodleCRM />
        </div>
        
        {/* Right margin doodles */}
        <div className="absolute top-28 right-4 opacity-[0.055]">
          <DoodleAnalytics />
        </div>
        <div className="absolute bottom-28 right-6 opacity-[0.05]">
          <DoodleReports />
        </div>
        
        {/* Corner doodles */}
        <div className="absolute top-40 left-28 opacity-[0.04]">
          <DoodleKDSSmall />
        </div>
        <div className="absolute bottom-40 right-24 opacity-[0.06]">
          <DoodleQRCode />
        </div>
        <div className="absolute top-1/3 right-28 opacity-[0.05]">
          <DoodleAccounting />
        </div>
      </div>

      {/* ======== MAIN CONTENT ======== */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh] shadow-none py-[40px]">
          
          {/* ======== LEFT COLUMN: COPY & CTAs ======== */}
          <div className="space-y-7 text-center lg:text-left order-1">
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold text-foreground leading-[1.08] tracking-tight animate-fade-in">
              The Operating System{" "}
              <span className="bg-gradient-to-r from-primary via-primary/85 to-primary/65 bg-clip-text text-transparent">
                Powering
              </span>{" "}
              Modern Restaurants
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in animation-delay-200">
              POS, QR Ordering, Inventory, Accounting, CRM, Analytics & AI — unified into one powerful platform designed for serious F&B brands.
            </p>

            {/* CTA Zone */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative animate-fade-in animation-delay-400">
              <CTAArrowDoodle />
              <a href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Swirl" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" style={{
                animation: 'pulse-glow 2s ease-in-out infinite'
              }}>
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-muted-foreground animate-fade-in animation-delay-600">
              
            </p>
          </div>

          {/* ======== RIGHT COLUMN: PRODUCT MOCKUPS ======== */}
          <div className="relative animate-fade-in animation-delay-600 order-2">
            <div className="flex flex-col gap-6 items-center justify-center">
              {/* Top Row - POS and Inventory */}
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                {/* POS Mockup - Primary */}
                <div className="transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <POSMockup amounts={amounts} />
                </div>
                
                {/* Inventory Mockup - Secondary, offset */}
                <div className="transform lg:rotate-[2deg] lg:-translate-y-8 hover:rotate-0 transition-transform duration-500 hidden md:block">
                  <InventoryMockup amounts={amounts} />
                </div>
              </div>
              
              {/* Bottom Row - KDS Mockup spanning full width */}
              <div className="transform hover:scale-[1.01] transition-transform duration-500 hidden md:block w-full max-w-[800px]">
                <KDSMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;