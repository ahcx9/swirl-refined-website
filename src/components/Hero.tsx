import React from 'react';
import { 
  CreditCard, 
  QrCode, 
  Check,
  Banknote,
  SplitSquareVertical,
  CheckCircle2,
  Plus,
  ShoppingCart,
  ArrowRight,
  BarChart3,
  Receipt,
  Package,
  Monitor,
  Clock
} from 'lucide-react';
import { Button } from './ui/button';

// Updated 6 logos
const logos = [
  { src: "/lovable-uploads/9000dd52-fbe9-4430-8c38-eb0ab5e87e57.png", alt: "Seern Restaurant" },
  { src: "/lovable-uploads/uccelli-cafe-logo.jpeg", alt: "Uccelli Café" },
  { src: "/lovable-uploads/bombay-logo-new.png", alt: "Bombay Restaurant & Cafe" },
  { src: "/lovable-uploads/bb-logo.jpeg", alt: "B&B" },
  { src: "/lovable-uploads/b2a2c52b-6298-4bda-8fd2-e0cab6171584.png", alt: "Garage Café" },
  { src: "/lovable-uploads/kaleda-logo.png", alt: "Kaleda Traditional Indian Taste" },
];

// ============ DOODLES - Positioned in outer margins only ============

const DoodleBilling = () => (
  <svg className="w-20 h-24" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="15" y="5" width="70" height="95" rx="4" className="stroke-primary" />
    <line x1="25" y1="20" x2="75" y2="20" className="stroke-primary" />
    <line x1="25" y1="32" x2="65" y2="32" className="stroke-primary" />
    <line x1="25" y1="44" x2="60" y2="44" className="stroke-primary" />
    <line x1="25" y1="56" x2="70" y2="56" className="stroke-primary" />
    <line x1="25" y1="68" x2="55" y2="68" className="stroke-primary" />
    <line x1="25" y1="85" x2="75" y2="85" className="stroke-primary" strokeWidth="1.8" />
    <text x="28" y="95" fontSize="8" className="fill-primary" fontFamily="sans-serif">TOTAL</text>
  </svg>
);

const DoodleQRCode = () => (
  <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="60" y="8" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="8" y="60" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="16" y="16" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="68" y="16" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="16" y="68" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="60" y="60" width="12" height="12" className="stroke-primary" />
    <rect x="76" y="60" width="16" height="12" className="stroke-primary" />
    <rect x="60" y="76" width="12" height="16" className="stroke-primary" />
  </svg>
);

const DoodleInventory = () => (
  <svg className="w-18 h-20" viewBox="0 0 80 110" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="8" y="70" width="64" height="35" rx="3" className="stroke-primary" />
    <rect x="14" y="40" width="52" height="35" rx="3" className="stroke-primary" />
    <rect x="20" y="10" width="40" height="35" rx="3" className="stroke-primary" />
    <line x1="32" y1="85" x2="48" y2="85" className="stroke-primary" />
    <line x1="28" y1="55" x2="44" y2="55" className="stroke-primary" />
    <line x1="32" y1="25" x2="45" y2="25" className="stroke-primary" />
  </svg>
);

const DoodleAnalytics = () => (
  <svg className="w-24 h-20" viewBox="0 0 140 120" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="10" y="10" width="120" height="90" rx="5" className="stroke-primary" />
    <line x1="25" y1="85" x2="25" y2="25" className="stroke-primary" />
    <line x1="25" y1="85" x2="115" y2="85" className="stroke-primary" />
    <polyline points="35,70 55,45 70,55 90,28 110,40" className="stroke-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <circle cx="55" cy="45" r="4" className="stroke-primary fill-primary/20" />
    <circle cx="70" cy="55" r="4" className="stroke-primary fill-primary/20" />
    <circle cx="90" cy="28" r="4" className="stroke-primary fill-primary/20" />
  </svg>
);

const DoodleKDSSmall = () => (
  <svg className="w-20 h-16" viewBox="0 0 110 90" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="5" y="5" width="100" height="65" rx="4" className="stroke-primary" />
    <line x1="38" y1="5" x2="38" y2="70" className="stroke-primary" />
    <line x1="72" y1="5" x2="72" y2="70" className="stroke-primary" />
    <rect x="10" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="44" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="78" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="5" y="75" width="100" height="10" rx="3" className="stroke-primary" />
  </svg>
);

const DoodleCRM = () => (
  <svg className="w-20 h-18" viewBox="0 0 110 90" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="30" cy="28" r="14" className="stroke-primary" />
    <circle cx="80" cy="28" r="14" className="stroke-primary" />
    <circle cx="55" cy="62" r="14" className="stroke-primary" />
    <path d="M42 34 L46 52" className="stroke-primary" strokeDasharray="3 2" />
    <path d="M68 34 L64 52" className="stroke-primary" strokeDasharray="3 2" />
    <path d="M44 28 L66 28" className="stroke-primary" strokeDasharray="3 2" />
    <circle cx="30" cy="25" r="6" className="stroke-primary fill-primary/15" />
    <circle cx="80" cy="25" r="6" className="stroke-primary fill-primary/15" />
    <circle cx="55" cy="59" r="6" className="stroke-primary fill-primary/15" />
  </svg>
);

const DoodleReports = () => (
  <svg className="w-16 h-20" viewBox="0 0 80 105" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M10 10 L55 10 L70 25 L70 95 L10 95 Z" className="stroke-primary" />
    <path d="M55 10 L55 25 L70 25" className="stroke-primary" />
    <line x1="18" y1="40" x2="60" y2="40" className="stroke-primary" />
    <line x1="18" y1="50" x2="52" y2="50" className="stroke-primary" />
    <line x1="18" y1="60" x2="58" y2="60" className="stroke-primary" />
    <line x1="18" y1="70" x2="45" y2="70" className="stroke-primary" />
    <rect x="18" y="28" width="18" height="6" className="stroke-primary fill-primary/15" rx="1" />
  </svg>
);

// CTA Arrow Doodle
const CTAArrowDoodle = () => (
  <svg className="absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-10 opacity-[0.15] text-primary hidden xl:block" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 25 Q18 18, 30 25 T55 25" strokeLinecap="round" className="stroke-primary" />
    <path d="M46 18 L56 25 L46 32" strokeLinecap="round" strokeLinejoin="round" className="stroke-primary" />
  </svg>
);

// ============ HARDWARE MOCKUP COMPONENTS ============

// Premium POS Hardware Mockup - LARGER
const POSHardwareMockup = () => (
  <div className="relative" style={{ transform: 'perspective(1200px) rotateY(-3deg) rotateX(1deg)' }}>
    {/* Tablet Stand - Base */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 md:w-40 h-5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-lg" />
    {/* Tablet Stand - Neck */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-5 h-16 md:h-20 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-sm shadow-md" />
    
    {/* Tablet Body Frame */}
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-2 shadow-2xl shadow-black/40">
      {/* Camera notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700" />
      
      {/* Screen Content - BIGGER */}
      <div className="bg-white rounded-xl overflow-hidden w-[280px] md:w-[340px] lg:w-[380px]">
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
        
        {/* Order Items List */}
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-xs font-bold text-primary">2×</div>
              <div>
                <span className="text-sm font-medium text-foreground block">Chicken Shawarma</span>
                <span className="text-[10px] text-muted-foreground">Extra garlic sauce</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-foreground">AED 36</span>
          </div>
          <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-xs font-bold text-primary">1×</div>
              <div>
                <span className="text-sm font-medium text-foreground block">Grilled Lamb Kebab</span>
                <span className="text-[10px] text-muted-foreground">Medium spice</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-foreground">AED 42</span>
          </div>
          <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-xs font-bold text-primary">3×</div>
              <div>
                <span className="text-sm font-medium text-foreground block">Arabic Coffee</span>
                <span className="text-[10px] text-muted-foreground">Traditional blend</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-foreground">AED 27</span>
          </div>
          
          {/* Totals Section */}
          <div className="pt-3 space-y-1.5 border-t border-gray-100 mt-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Subtotal</span>
              <span>AED 105.00</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>VAT (5%)</span>
              <span>AED 5.25</span>
            </div>
            <div className="flex justify-between text-base font-bold text-foreground pt-2 border-t border-gray-200">
              <span>Total</span>
              <span className="text-primary">AED 110.25</span>
            </div>
          </div>
          
          {/* Payment Method Buttons */}
          <div className="grid grid-cols-3 gap-2 pt-3">
            <button className="flex flex-col items-center gap-1.5 p-3 bg-green-500 hover:bg-green-600 rounded-xl transition-colors shadow-sm">
              <Banknote className="w-5 h-5 text-white" />
              <span className="text-[10px] font-semibold text-white">Cash</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 p-3 bg-primary hover:bg-primary/90 rounded-xl transition-colors shadow-sm">
              <CreditCard className="w-5 h-5 text-white" />
              <span className="text-[10px] font-semibold text-white">Card</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 p-3 bg-gray-600 hover:bg-gray-700 rounded-xl transition-colors shadow-sm">
              <SplitSquareVertical className="w-5 h-5 text-white" />
              <span className="text-[10px] font-semibold text-white">Split</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// iPhone QR Ordering Mockup - STATIC (no animation)
const IPhoneQRMockup = () => (
  <div 
    className="relative"
    style={{ transform: 'perspective(1200px) rotateY(6deg)' }}
  >
    {/* iPhone Frame */}
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.8rem] p-2 shadow-2xl shadow-black/50">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
      
      {/* Screen */}
      <div className="bg-white rounded-[2.2rem] overflow-hidden w-[170px] md:w-[190px] h-[360px] md:h-[400px]">
        {/* Header with QR branding */}
        <div className="bg-gradient-to-r from-primary to-primary/85 px-4 pt-10 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <QrCode className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">Scan to Order</span>
          </div>
          <p className="text-white/75 text-[10px]">La Bella Italia • Table 8</p>
        </div>
        
        {/* Category Tabs */}
        <div className="px-3 pt-3">
          <div className="flex gap-1.5 overflow-x-auto pb-2">
            <span className="px-3 py-1.5 bg-primary text-white text-[10px] font-medium rounded-full whitespace-nowrap">Mains</span>
            <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full whitespace-nowrap">Drinks</span>
            <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full whitespace-nowrap">Desserts</span>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="px-3 space-y-2 mt-1">
          <div className="flex gap-2 p-2.5 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center text-xl">🍕</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[11px] text-foreground truncate">Margherita Pizza</p>
              <p className="text-[9px] text-muted-foreground">Fresh tomato, mozzarella</p>
              <p className="text-xs font-bold text-primary mt-0.5">AED 48</p>
            </div>
            <button className="self-center w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
              <Plus className="w-4 h-4 text-white" />
            </button>
          </div>
          
          <div className="flex gap-2 p-2.5 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-green-300 rounded-xl flex items-center justify-center text-xl">🥗</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[11px] text-foreground truncate">Greek Salad</p>
              <p className="text-[9px] text-muted-foreground">Feta, olives, cucumber</p>
              <p className="text-xs font-bold text-primary mt-0.5">AED 32</p>
            </div>
            <button className="self-center w-7 h-7 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
              <Plus className="w-4 h-4 text-primary" />
            </button>
          </div>
        </div>
        
        {/* Cart Button Fixed at Bottom */}
        <div className="absolute bottom-5 left-3 right-3">
          <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            View Cart (2) • AED 80
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Inventory Mockup - STATIC (no animation)
const InventoryMockup = ({ compact = false }: { compact?: boolean }) => (
  <div className={`bg-white rounded-xl shadow-xl border border-gray-100 p-3 ${compact ? 'w-[130px]' : 'w-[160px] md:w-[180px]'}`}>
    <div className="flex items-center gap-2 mb-2">
      <div className={`${compact ? 'w-5 h-5' : 'w-7 h-7'} rounded-lg bg-primary/10 flex items-center justify-center`}>
        <Package className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} text-primary`} />
      </div>
      <span className={`${compact ? 'text-[10px]' : 'text-xs'} font-bold`}>Inventory</span>
    </div>
    {/* Stock alerts */}
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-[10px]">
        <span className="text-muted-foreground">Chicken</span>
        <span className="text-red-500 font-bold px-1 py-0.5 bg-red-50 rounded text-[9px]">Low</span>
      </div>
      <div className="flex justify-between items-center text-[10px]">
        <span className="text-muted-foreground">Olive Oil</span>
        <span className="text-amber-600 font-bold px-1 py-0.5 bg-amber-50 rounded text-[9px]">Med</span>
      </div>
      {!compact && (
        <div className="flex justify-between items-center text-[10px]">
          <span className="text-muted-foreground">Flour</span>
          <span className="text-green-600 font-bold px-1 py-0.5 bg-green-50 rounded text-[9px]">OK</span>
        </div>
      )}
    </div>
    {!compact && (
      <div className="h-10 mt-2 bg-gray-50 rounded-lg flex items-center justify-center">
        <BarChart3 className="w-6 h-6 text-primary/20" />
      </div>
    )}
  </div>
);

// KDS Mockup - STATIC (no animation)
const KDSMockup = ({ compact = false }: { compact?: boolean }) => (
  <div className={`bg-gray-900 rounded-xl shadow-xl p-2.5 ${compact ? 'w-[130px]' : 'w-[150px] md:w-[170px]'}`}>
    <div className="flex items-center gap-2 mb-2">
      <Monitor className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} text-white`} />
      <span className={`${compact ? 'text-[9px]' : 'text-[10px]'} font-bold text-white`}>Kitchen Display</span>
    </div>
    {/* Running orders */}
    <div className="space-y-1.5">
      <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg px-2 py-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-amber-300 font-bold">#1247</span>
          <div className="flex items-center gap-1">
            <Clock className="w-2.5 h-2.5 text-amber-400" />
            <span className="text-[9px] text-amber-400">3:45</span>
          </div>
        </div>
        <span className="text-[9px] text-white/70">Preparing...</span>
      </div>
      <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-2 py-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-green-300 font-bold">#1246</span>
          <span className="text-[9px] text-green-400 font-medium">Ready</span>
        </div>
        <span className="text-[9px] text-white/70">Table 3</span>
      </div>
      {!compact && (
        <div className="bg-primary/20 border border-primary/30 rounded-lg px-2 py-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-primary/80 font-bold">#1245</span>
            <span className="text-[9px] text-primary/60">New</span>
          </div>
          <span className="text-[9px] text-white/70">Dine-in</span>
        </div>
      )}
    </div>
  </div>
);

// Floating Badge Component - STATIC (no animation)
const FloatingBadge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/8 border border-gray-100/80 ${className}`}>
    {children}
  </div>
);

// ============ MAIN HERO COMPONENT ============

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-28 md:pt-32 pb-8">
      
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
        
        {/* Right margin doodles - above/below mockup area */}
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
      </div>

      {/* ======== MAIN CONTENT ======== */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh]">
          
          {/* ======== LEFT COLUMN: COPY & CTAs - order-1 on mobile (text first) ======== */}
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

            {/* CTA Zone with Arrow Doodle */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative animate-fade-in animation-delay-400">
              <CTAArrowDoodle />
              <a 
                href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Swirl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-muted-foreground animate-fade-in animation-delay-600">
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Trusted by leading restaurant brands across the Middle East
              </span>
            </p>

            {/* 6 Logo Strip - Greyscale to Color on Hover */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 md:gap-8 pt-3 animate-fade-in animation-delay-800">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="h-8 md:h-10 lg:h-11 grayscale brightness-[0.35] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ======== RIGHT COLUMN: PRODUCT MOCKUPS ECOSYSTEM - order-2 on mobile ======== */}
          <div className="relative h-[520px] md:h-[560px] lg:h-[640px] animate-fade-in animation-delay-600 order-2 mt-4 md:mt-0">
            
            {/* Inventory Mockup - Top left corner */}
            <div className="absolute top-0 left-0 z-20">
              {/* Compact version on mobile/tablet */}
              <div className="block lg:hidden">
                <InventoryMockup compact />
              </div>
              {/* Full version on desktop */}
              <div className="hidden lg:block">
                <InventoryMockup />
              </div>
            </div>

            {/* Floating Badge - Hidden on mobile */}
            <FloatingBadge className="hidden md:flex top-0 right-0 lg:right-auto lg:left-[200px] z-30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Order Placed!</p>
                  <p className="text-[10px] text-muted-foreground">Table 5 • #1248</p>
                </div>
              </div>
            </FloatingBadge>

            {/* Main POS Hardware - Center */}
            <div className="flex justify-center pt-16 md:pt-20 lg:pt-12">
              <POSHardwareMockup />
            </div>

            {/* iPhone QR Mockup - Right of POS, hidden on mobile */}
            <div className="hidden md:block absolute right-0 top-20 lg:top-16 z-20">
              <IPhoneQRMockup />
            </div>

            {/* KDS Mockup - Bottom right corner */}
            <div className="absolute bottom-0 right-0 z-20">
              {/* Compact version on mobile/tablet */}
              <div className="block lg:hidden">
                <KDSMockup compact />
              </div>
              {/* Full version on desktop */}
              <div className="hidden lg:block">
                <KDSMockup />
              </div>
            </div>

            {/* Floating Badge - QR Scanned, hidden on mobile */}
            <FloatingBadge className="hidden lg:flex bottom-1/3 left-0 z-30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <QrCode className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">QR Scanned</p>
                  <p className="text-[10px] text-muted-foreground">Menu Loaded</p>
                </div>
              </div>
            </FloatingBadge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
