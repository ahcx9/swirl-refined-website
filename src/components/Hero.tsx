import React from 'react';
import { CreditCard, QrCode, Check, Banknote, SplitSquareVertical, CheckCircle2, Plus, ShoppingCart, ArrowRight, BarChart3, Receipt, Package, Monitor, Clock, Calculator, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { useCurrency } from '@/hooks/useCurrency';

// Updated 6 logos
const logos = [{
  src: "/lovable-uploads/9000dd52-fbe9-4430-8c38-eb0ab5e87e57.png",
  alt: "Seern Restaurant"
}, {
  src: "/lovable-uploads/uccelli-cafe-logo.jpeg",
  alt: "Uccelli Café"
}, {
  src: "/lovable-uploads/bombay-logo-new.png",
  alt: "Bombay Restaurant & Cafe"
}, {
  src: "/lovable-uploads/bb-logo.jpeg",
  alt: "B&B"
}, {
  src: "/lovable-uploads/b2a2c52b-6298-4bda-8fd2-e0cab6171584.png",
  alt: "Garage Café"
}, {
  src: "/lovable-uploads/kaleda-logo.png",
  alt: "Kaleda Traditional Indian Taste"
}];

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

// ============ HARDWARE MOCKUP COMPONENTS ============

// Premium POS Hardware Mockup
const POSHardwareMockup = ({
  amounts
}: {
  amounts: {
    chickenShawarma: string;
    grilledLambKebab: string;
    posSubtotal: string;
    posTotal: string;
  };
}) => <div className="relative" style={{
  transform: 'perspective(1200px) rotateY(-3deg) rotateX(1deg)'
}}>
    {/* Tablet Stand - Base */}
    
    {/* Tablet Stand - Neck */}
    
    
    {/* Tablet Body Frame */}
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-2 shadow-2xl shadow-black/40">
      {/* Camera notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700" />
      
      {/* Screen Content */}
      <div className="bg-white rounded-xl overflow-hidden w-[240px] md:w-[300px] lg:w-[380px] xl:w-[420px]">
        {/* POS Header Bar */}
        <div className="bg-primary px-3 lg:px-4 py-2.5 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 lg:w-8 lg:h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Receipt className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white" />
            </div>
            <span className="text-white font-semibold text-xs lg:text-sm">Swirl POS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-[10px] lg:text-xs font-medium">Table 5</span>
          </div>
        </div>
        
        {/* Order Items List */}
        <div className="p-3 lg:p-4 space-y-1.5 lg:space-y-2">
          <div className="flex items-center justify-between py-2 lg:py-2.5 border-b border-gray-100">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary/10 rounded-md flex items-center justify-center text-[10px] lg:text-xs font-bold text-primary">2×</div>
              <div>
                <span className="text-xs lg:text-sm font-medium text-foreground block">Chicken Shawarma</span>
                <span className="text-[9px] lg:text-[10px] text-muted-foreground">Extra garlic sauce</span>
              </div>
            </div>
            <span className="text-xs lg:text-sm font-semibold text-foreground">{amounts.chickenShawarma}</span>
          </div>
          <div className="flex items-center justify-between py-2 lg:py-2.5 border-b border-gray-100">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary/10 rounded-md flex items-center justify-center text-[10px] lg:text-xs font-bold text-primary">1×</div>
              <div>
                <span className="text-xs lg:text-sm font-medium text-foreground block">Grilled Lamb Kebab</span>
                <span className="text-[9px] lg:text-[10px] text-muted-foreground">Medium spice</span>
              </div>
            </div>
            <span className="text-xs lg:text-sm font-semibold text-foreground">{amounts.grilledLambKebab}</span>
          </div>
          
          {/* Totals Section */}
          <div className="pt-2 lg:pt-3 space-y-1 border-t border-gray-100 mt-1">
            <div className="flex justify-between text-[10px] lg:text-xs text-muted-foreground">
              <span>Subtotal</span>
              <span>{amounts.posSubtotal}</span>
            </div>
            <div className="flex justify-between text-sm lg:text-base font-bold text-foreground pt-1 border-t border-gray-200">
              <span>Total</span>
              <span className="text-primary">{amounts.posTotal}</span>
            </div>
          </div>
          
          {/* Payment Method Buttons */}
          <div className="grid grid-cols-3 gap-1.5 lg:gap-2 pt-2 lg:pt-3">
            <button className="flex flex-col items-center gap-1 p-2 lg:p-2.5 bg-green-500 rounded-lg">
              <Banknote className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              <span className="text-[9px] lg:text-[10px] font-semibold text-white">Cash</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 lg:p-2.5 bg-primary rounded-lg">
              <CreditCard className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              <span className="text-[9px] lg:text-[10px] font-semibold text-white">Card</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 lg:p-2.5 bg-gray-600 rounded-lg">
              <SplitSquareVertical className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              <span className="text-[9px] lg:text-[10px] font-semibold text-white">Split</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;

// iPhone QR Ordering Mockup
const IPhoneQRMockup = ({
  amounts
}: {
  amounts: {
    margheritaPizza: string;
    greekSalad: string;
    cartTotal: string;
  };
}) => <div className="relative" style={{
  transform: 'perspective(1200px) rotateY(6deg)'
}}>
    {/* iPhone Frame */}
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] lg:rounded-[3rem] p-1.5 lg:p-2 shadow-2xl shadow-black/50">
      {/* Dynamic Island */}
      <div className="absolute top-2.5 lg:top-3 left-1/2 -translate-x-1/2 w-16 lg:w-20 h-4 lg:h-5 bg-black rounded-full z-10" />
      
      {/* Screen */}
      <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden w-[150px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[320px] md:h-[340px] lg:h-[380px] xl:h-[420px]">
        {/* Header with QR branding */}
        <div className="bg-gradient-to-r from-primary to-primary/85 px-3 lg:px-4 pt-8 lg:pt-10 pb-3 lg:pb-4">
          <div className="flex items-center gap-1.5 lg:gap-2 mb-1">
            <QrCode className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            <span className="text-white font-bold text-xs lg:text-sm">Scan to Order</span>
          </div>
          <p className="text-white/75 text-[9px] lg:text-[10px]">La Bella Italia • Table 8</p>
        </div>
        
        {/* Category Tabs */}
        <div className="px-2 lg:px-3 pt-2 lg:pt-3">
          <div className="flex gap-1 lg:gap-1.5 overflow-x-auto pb-1.5 lg:pb-2">
            <span className="px-2 lg:px-3 py-1 lg:py-1.5 bg-primary text-white text-[9px] lg:text-[10px] font-medium rounded-full whitespace-nowrap">Mains</span>
            <span className="px-2 lg:px-3 py-1 lg:py-1.5 bg-gray-100 text-gray-600 text-[9px] lg:text-[10px] font-medium rounded-full whitespace-nowrap">Drinks</span>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="px-2 lg:px-3 space-y-1.5 lg:space-y-2 mt-1 lg:mt-2">
          <div className="flex gap-1.5 lg:gap-2 p-2 lg:p-2.5 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center text-base lg:text-lg">🍕</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[10px] lg:text-xs text-foreground truncate">Margherita Pizza</p>
              <p className="text-[8px] lg:text-[9px] text-muted-foreground">Fresh tomato</p>
              <p className="text-[10px] lg:text-xs font-bold text-primary mt-0.5">{amounts.margheritaPizza}</p>
            </div>
            <button className="self-center w-6 h-6 lg:w-7 lg:h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Plus className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white" />
            </button>
          </div>
          
          <div className="flex gap-1.5 lg:gap-2 p-2 lg:p-2.5 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center text-base lg:text-lg">🥗</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[10px] lg:text-xs text-foreground truncate">Greek Salad</p>
              <p className="text-[8px] lg:text-[9px] text-muted-foreground">Feta, olives</p>
              <p className="text-[10px] lg:text-xs font-bold text-primary mt-0.5">{amounts.greekSalad}</p>
            </div>
            <button className="self-center w-6 h-6 lg:w-7 lg:h-7 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
              <Plus className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-primary" />
            </button>
          </div>
        </div>
        
        {/* Cart Button Fixed at Bottom */}
        <div className="absolute bottom-4 lg:bottom-5 left-2 lg:left-3 right-2 lg:right-3">
          <button className="w-full py-2 lg:py-2.5 bg-primary text-white text-[10px] lg:text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-lg shadow-primary/30">
            <ShoppingCart className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
            View Cart (2) • {amounts.cartTotal}
          </button>
        </div>
      </div>
    </div>
  </div>;

// Inventory Mockup
const InventoryMockup = ({
  compact = false
}: {
  compact?: boolean;
}) => <div className={`bg-white rounded-xl shadow-xl border border-gray-100 ${compact ? 'p-2 w-[110px]' : 'p-3 lg:p-4 w-[140px] lg:w-[180px]'}`}>
    <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-3">
      <div className={`${compact ? 'w-5 h-5' : 'w-6 h-6 lg:w-7 lg:h-7'} rounded-lg bg-primary/10 flex items-center justify-center`}>
        <Package className={`${compact ? 'w-2.5 h-2.5' : 'w-3 h-3 lg:w-4 lg:h-4'} text-primary`} />
      </div>
      <span className={`${compact ? 'text-[9px]' : 'text-[10px] lg:text-xs'} font-bold`}>Inventory</span>
    </div>
    <div className="space-y-1 lg:space-y-1.5">
      <div className="flex justify-between items-center text-[9px] lg:text-[10px]">
        <span className="text-muted-foreground">Chicken</span>
        <span className="text-red-500 font-bold px-1 lg:px-1.5 py-0.5 bg-red-50 rounded text-[8px] lg:text-[9px]">Low</span>
      </div>
      <div className="flex justify-between items-center text-[9px] lg:text-[10px]">
        <span className="text-muted-foreground">Olive Oil</span>
        <span className="text-amber-600 font-bold px-1 lg:px-1.5 py-0.5 bg-amber-50 rounded text-[8px] lg:text-[9px]">Med</span>
      </div>
      {!compact && <>
          <div className="flex justify-between items-center text-[9px] lg:text-[10px]">
            <span className="text-muted-foreground">Flour</span>
            <span className="text-green-600 font-bold px-1 lg:px-1.5 py-0.5 bg-green-50 rounded text-[8px] lg:text-[9px]">OK</span>
          </div>
          <div className="hidden lg:flex justify-between items-center text-[10px]">
            <span className="text-muted-foreground">Tomatoes</span>
            <span className="text-green-600 font-bold px-1.5 py-0.5 bg-green-50 rounded text-[9px]">OK</span>
          </div>
        </>}
    </div>
  </div>;

// KDS Mockup
const KDSMockup = ({
  compact = false
}: {
  compact?: boolean;
}) => <div className={`bg-gray-900 rounded-xl shadow-xl ${compact ? 'p-2 w-[110px]' : 'p-2.5 lg:p-3 w-[140px] lg:w-[220px] xl:w-[260px]'}`}>
    <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-3">
      <Monitor className={`${compact ? 'w-2.5 h-2.5' : 'w-3 h-3 lg:w-4 lg:h-4'} text-white`} />
      <span className={`${compact ? 'text-[8px]' : 'text-[9px] lg:text-xs'} font-bold text-white`}>Kitchen Display</span>
    </div>
    <div className="space-y-1 lg:space-y-1.5">
      <div className="bg-amber-500/20 border border-amber-500/30 rounded-md px-1.5 lg:px-2 py-1 lg:py-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[9px] lg:text-xs text-amber-300 font-bold">#1247</span>
          <div className="flex items-center gap-0.5 lg:gap-1">
            <Clock className="w-2 h-2 lg:w-3 lg:h-3 text-amber-400" />
            <span className="text-[8px] lg:text-[10px] text-amber-400">3:45</span>
          </div>
        </div>
      </div>
      <div className="bg-green-500/20 border border-green-500/30 rounded-md px-1.5 lg:px-2 py-1 lg:py-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[9px] lg:text-xs text-green-300 font-bold">#1246</span>
          <span className="text-[8px] lg:text-[10px] text-green-400 font-medium">Ready</span>
        </div>
      </div>
      {/* Additional rows for desktop */}
      {!compact && <>
          <div className="hidden lg:block bg-blue-500/20 border border-blue-500/30 rounded-md px-2 py-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-300 font-bold">#1248</span>
              <span className="text-[10px] text-blue-400 font-medium">New</span>
            </div>
          </div>
          <div className="hidden lg:block bg-purple-500/20 border border-purple-500/30 rounded-md px-2 py-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-purple-300 font-bold">#1249</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-purple-400" />
                <span className="text-[10px] text-purple-400">1:20</span>
              </div>
            </div>
          </div>
        </>}
    </div>
  </div>;

// Accounting Mockup - NEW
const AccountingMockup = ({
  compact = false,
  amounts
}: {
  compact?: boolean;
  amounts: {
    accountingToday: string;
    accountingWeek: string;
    accountingMonth: string;
  };
}) => <div className={`bg-white rounded-xl shadow-xl border border-gray-100 ${compact ? 'p-2 w-[110px]' : 'p-3 lg:p-4 w-[140px] lg:w-[180px]'}`}>
    <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-3">
      <div className={`${compact ? 'w-5 h-5' : 'w-6 h-6 lg:w-7 lg:h-7'} rounded-lg bg-emerald-100 flex items-center justify-center`}>
        <Calculator className={`${compact ? 'w-2.5 h-2.5' : 'w-3 h-3 lg:w-4 lg:h-4'} text-emerald-600`} />
      </div>
      <span className={`${compact ? 'text-[9px]' : 'text-[10px] lg:text-xs'} font-bold`}>Accounting</span>
    </div>
    <div className="space-y-1 lg:space-y-1.5">
      <div className="flex justify-between items-center text-[9px] lg:text-[10px]">
        <span className="text-muted-foreground">Today</span>
        <span className="text-emerald-600 font-bold">{amounts.accountingToday}</span>
      </div>
      <div className="flex justify-between items-center text-[9px] lg:text-[10px]">
        <span className="text-muted-foreground">Week</span>
        <span className="text-primary font-bold">{amounts.accountingWeek}</span>
      </div>
      {!compact && <>
          <div className="hidden lg:flex justify-between items-center text-[10px]">
            <span className="text-muted-foreground">Month</span>
            <span className="text-primary font-bold">{amounts.accountingMonth}</span>
          </div>
          <div className="h-6 lg:h-8 mt-1.5 lg:mt-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-md flex items-center justify-center">
            <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500" />
            <span className="text-[8px] lg:text-[10px] ml-1 text-emerald-600 font-medium">+12.5%</span>
          </div>
        </>}
    </div>
  </div>;

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh]">
          
          {/* ======== LEFT COLUMN: COPY & CTAs - order-1 on mobile (text first) ======== */}
          <div className="space-y-7 text-center lg:text-left order-1 lg:-translate-x-16 xl:-translate-x-24">
            
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

            {/* CTA Zone with Arrow Doodle */}
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

            {/* 6 Logo Strip - Circular Modern Design */}
            
          </div>

          {/* ======== RIGHT COLUMN: PRODUCT MOCKUPS ECOSYSTEM - order-2 on mobile ======== */}
          <div className="relative h-[500px] md:h-[560px] lg:h-[680px] xl:h-[720px] animate-fade-in animation-delay-600 order-2 mt-4 md:mt-0 lg:translate-x-24 xl:translate-x-32">
            
            {/* Inventory Mockup - Far left, completely outside POS */}
            <div className="absolute top-0 left-0 md:top-4 lg:top-24 lg:-left-40 xl:-left-52 z-20">
              {/* Mobile/Tablet: compact version */}
              <div className="lg:hidden">
                <InventoryMockup compact />
              </div>
              {/* Desktop: full version */}
              <div className="hidden lg:block">
                <InventoryMockup compact={false} />
              </div>
            </div>

            {/* Accounting Mockup - Far right, completely outside iPhone */}
            <div className="absolute top-0 right-0 md:top-4 lg:top-24 lg:-right-40 xl:-right-52 z-20">
              {/* Mobile/Tablet: compact version */}
              <div className="lg:hidden">
                <AccountingMockup compact amounts={amounts} />
              </div>
              {/* Desktop: full version */}
              <div className="hidden lg:block">
                <AccountingMockup compact={false} amounts={amounts} />
              </div>
            </div>

            {/* Main POS + iPhone Row - Centered */}
            <div className="flex items-start justify-center gap-4 md:gap-5 lg:gap-8 xl:gap-10 pt-20 md:pt-16 lg:pt-6">
              <POSHardwareMockup amounts={amounts} />
              {/* iPhone - hidden on mobile */}
              <div className="hidden md:block">
                <IPhoneQRMockup amounts={amounts} />
              </div>
            </div>

            {/* KDS Mockup - Bottom center, closer to POS/iPhone */}
            <div className="absolute bottom-0 lg:bottom-4 left-[55%] -translate-x-1/2 z-20">
              {/* Mobile/Tablet: compact version */}
              <div className="lg:hidden">
                <KDSMockup compact />
              </div>
              {/* Desktop: full version with more rows */}
              <div className="hidden lg:block">
                <KDSMockup compact={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;