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
  Receipt
} from 'lucide-react';
import { Button } from './ui/button';
import CustomCTAButton from './CustomCTAButton';

// Reduced to 5 premium logos
const logos = [
  { src: "/lovable-uploads/9623693d-a2e0-48ea-8d68-911775324f30.png", alt: "Seern Restaurant" },
  { src: "/lovable-uploads/72bc496f-dfad-4fef-a00b-a049a08c0700.png", alt: "Uccelli Café" },
  { src: "/lovable-uploads/a1037d43-9706-4594-98e2-b879fa17ae5c.png", alt: "Bombay Restaurant & Cafe" },
  { src: "/lovable-uploads/4127f4ed-f4a1-452d-bdba-5bc27d6fb8bc.png", alt: "La Pino'z Pizza" },
  { src: "/lovable-uploads/6e0d0241-ba77-477a-84cd-a700f8183303.png", alt: "Kaleda Traditional Indian Taste" },
];

// ============ COMPREHENSIVE DOODLE ECOSYSTEM ============

// Doodle 1: Billing / Receipt
const DoodleBilling = () => (
  <svg className="absolute top-20 left-6 w-24 h-28 opacity-[0.06]" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="15" y="5" width="70" height="95" rx="4" className="stroke-primary" />
    <line x1="25" y1="20" x2="75" y2="20" className="stroke-primary" />
    <line x1="25" y1="32" x2="65" y2="32" className="stroke-primary" />
    <line x1="25" y1="44" x2="60" y2="44" className="stroke-primary" />
    <line x1="25" y1="56" x2="70" y2="56" className="stroke-primary" />
    <line x1="25" y1="68" x2="55" y2="68" className="stroke-primary" />
    <line x1="25" y1="85" x2="75" y2="85" className="stroke-primary" strokeWidth="1.8" />
    <text x="28" y="95" fontSize="8" className="fill-primary" fontFamily="sans-serif">TOTAL</text>
    <circle cx="68" cy="92" r="6" className="stroke-primary" />
    <path d="M65 92 L68 95 L73 88" className="stroke-primary" strokeWidth="1.5" />
  </svg>
);

// Doodle 2: QR Code Pattern
const DoodleQRCode = () => (
  <svg className="absolute bottom-40 right-8 w-22 h-22 opacity-[0.07]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="60" y="8" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="8" y="60" width="32" height="32" rx="3" className="stroke-primary" />
    <rect x="16" y="16" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="68" y="16" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="16" y="68" width="16" height="16" className="stroke-primary fill-primary/15" />
    <rect x="60" y="60" width="12" height="12" className="stroke-primary" />
    <rect x="76" y="60" width="16" height="12" className="stroke-primary" />
    <rect x="60" y="76" width="12" height="16" className="stroke-primary" />
    <rect x="80" y="80" width="12" height="12" className="stroke-primary fill-primary/10" />
  </svg>
);

// Doodle 3: Inventory Boxes
const DoodleInventory = () => (
  <svg className="absolute top-1/2 left-4 w-18 h-24 opacity-[0.05] -translate-y-1/2 hidden lg:block" viewBox="0 0 80 110" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="8" y="70" width="64" height="35" rx="3" className="stroke-primary" />
    <rect x="14" y="40" width="52" height="35" rx="3" className="stroke-primary" />
    <rect x="20" y="10" width="40" height="35" rx="3" className="stroke-primary" />
    <line x1="32" y1="85" x2="48" y2="85" className="stroke-primary" />
    <line x1="28" y1="55" x2="44" y2="55" className="stroke-primary" />
    <line x1="32" y1="25" x2="45" y2="25" className="stroke-primary" />
    <path d="M22 75 L40 65 L58 75" className="stroke-primary" strokeDasharray="2 2" />
  </svg>
);

// Doodle 4: Analytics Chart
const DoodleAnalytics = () => (
  <svg className="absolute top-16 right-1/4 w-32 h-28 opacity-[0.055] hidden md:block" viewBox="0 0 140 120" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="10" y="10" width="120" height="90" rx="5" className="stroke-primary" />
    <line x1="25" y1="85" x2="25" y2="25" className="stroke-primary" />
    <line x1="25" y1="85" x2="115" y2="85" className="stroke-primary" />
    <polyline points="35,70 55,45 70,55 90,28 110,40" className="stroke-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <circle cx="55" cy="45" r="4" className="stroke-primary fill-primary/20" />
    <circle cx="70" cy="55" r="4" className="stroke-primary fill-primary/20" />
    <circle cx="90" cy="28" r="4" className="stroke-primary fill-primary/20" />
    <circle cx="110" cy="40" r="4" className="stroke-primary fill-primary/20" />
    <text x="30" y="20" fontSize="7" className="fill-primary/60" fontFamily="sans-serif">ANALYTICS</text>
  </svg>
);

// Doodle 5: KDS (Kitchen Display System)
const DoodleKDS = () => (
  <svg className="absolute bottom-1/3 left-1/4 w-24 h-20 opacity-[0.04] hidden lg:block" viewBox="0 0 110 90" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="5" y="5" width="100" height="65" rx="4" className="stroke-primary" />
    <line x1="38" y1="5" x2="38" y2="70" className="stroke-primary" />
    <line x1="72" y1="5" x2="72" y2="70" className="stroke-primary" />
    <rect x="10" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="44" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="78" y="12" width="22" height="20" rx="2" className="stroke-primary fill-primary/8" />
    <rect x="10" y="38" width="22" height="20" rx="2" className="stroke-primary" />
    <rect x="44" y="38" width="22" height="20" rx="2" className="stroke-primary" />
    <rect x="5" y="75" width="100" height="10" rx="3" className="stroke-primary" />
    <text x="35" y="83" fontSize="6" className="fill-primary/50" fontFamily="sans-serif">KDS MONITOR</text>
  </svg>
);

// Doodle 6: CRM Users Connected
const DoodleCRM = () => (
  <svg className="absolute bottom-24 left-12 w-26 h-22 opacity-[0.05] hidden md:block" viewBox="0 0 110 90" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="30" cy="28" r="14" className="stroke-primary" />
    <circle cx="80" cy="28" r="14" className="stroke-primary" />
    <circle cx="55" cy="62" r="14" className="stroke-primary" />
    <path d="M42 34 L46 52" className="stroke-primary" strokeDasharray="3 2" />
    <path d="M68 34 L64 52" className="stroke-primary" strokeDasharray="3 2" />
    <path d="M44 28 L66 28" className="stroke-primary" strokeDasharray="3 2" />
    <circle cx="30" cy="25" r="6" className="stroke-primary fill-primary/15" />
    <circle cx="80" cy="25" r="6" className="stroke-primary fill-primary/15" />
    <circle cx="55" cy="59" r="6" className="stroke-primary fill-primary/15" />
    <text x="30" y="80" fontSize="6" className="fill-primary/50" fontFamily="sans-serif">CRM</text>
  </svg>
);

// Doodle 7: Reports Document
const DoodleReports = () => (
  <svg className="absolute top-1/3 right-6 w-18 h-24 opacity-[0.05] hidden lg:block" viewBox="0 0 80 105" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M10 10 L55 10 L70 25 L70 95 L10 95 Z" className="stroke-primary" />
    <path d="M55 10 L55 25 L70 25" className="stroke-primary" />
    <line x1="18" y1="40" x2="60" y2="40" className="stroke-primary" />
    <line x1="18" y1="50" x2="52" y2="50" className="stroke-primary" />
    <line x1="18" y1="60" x2="58" y2="60" className="stroke-primary" />
    <line x1="18" y1="70" x2="45" y2="70" className="stroke-primary" />
    <line x1="18" y1="80" x2="55" y2="80" className="stroke-primary" />
    <rect x="18" y="28" width="18" height="6" className="stroke-primary fill-primary/15" rx="1" />
    <text x="20" y="90" fontSize="6" className="fill-primary/50" fontFamily="sans-serif">REPORT</text>
  </svg>
);

// Doodle Connectors (System Diagram Lines)
const DoodleConnectors = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none hidden lg:block" viewBox="0 0 1400 900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4">
    {/* Horizontal flow lines */}
    <path d="M80 180 Q250 160, 420 180" className="stroke-primary" />
    <path d="M980 140 Q1150 160, 1320 140" className="stroke-primary" />
    <path d="M100 680 Q300 700, 500 680" className="stroke-primary" />
    {/* Vertical flow lines */}
    <path d="M120 250 Q100 420, 120 590" className="stroke-primary" />
    <path d="M1280 200 Q1300 400, 1280 600" className="stroke-primary" />
    {/* Diagonal connections */}
    <path d="M180 140 Q380 320, 580 380" className="stroke-primary" />
    <path d="M1200 180 Q1000 360, 800 420" className="stroke-primary" />
    {/* Node circles at key intersections */}
    <circle cx="120" cy="180" r="5" className="fill-primary/25" />
    <circle cx="420" cy="180" r="5" className="fill-primary/25" />
    <circle cx="120" cy="590" r="5" className="fill-primary/25" />
    <circle cx="1280" cy="140" r="5" className="fill-primary/25" />
    <circle cx="580" cy="380" r="5" className="fill-primary/25" />
    <circle cx="800" cy="420" r="5" className="fill-primary/25" />
  </svg>
);

// CTA Arrow Doodle (guiding eye to button)
const CTAArrowDoodle = () => (
  <svg className="absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-10 opacity-[0.12] text-primary hidden xl:block" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 25 Q18 18, 30 25 T55 25" strokeLinecap="round" className="stroke-primary" />
    <path d="M46 18 L56 25 L46 32" strokeLinecap="round" strokeLinejoin="round" className="stroke-primary" />
  </svg>
);

// ============ HARDWARE MOCKUP COMPONENTS ============

// Premium POS Hardware Mockup (Tablet on Stand)
const POSHardwareMockup = () => (
  <div className="relative" style={{ transform: 'perspective(1200px) rotateY(-4deg) rotateX(2deg)' }}>
    {/* Tablet Stand - Base */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-36 h-5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-lg" />
    {/* Tablet Stand - Neck */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-5 h-20 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-sm shadow-md" />
    
    {/* Tablet Body Frame */}
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-2 shadow-2xl shadow-black/40">
      {/* Camera notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700" />
      
      {/* Screen Content */}
      <div className="bg-white rounded-xl overflow-hidden w-[280px] md:w-[320px] lg:w-[340px]">
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

// iPhone QR Ordering Mockup (Realistic Proportions)
const IPhoneQRMockup = () => (
  <div 
    className="absolute -right-2 md:right-6 lg:right-10 top-16 md:top-12 z-20"
    style={{ 
      transform: 'perspective(1200px) rotateY(6deg)',
      animation: 'float-slow 6s ease-in-out infinite'
    }}
  >
    {/* iPhone Frame */}
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.8rem] p-2 shadow-2xl shadow-black/50">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
      
      {/* Screen */}
      <div className="bg-white rounded-[2.2rem] overflow-hidden w-[170px] md:w-[185px] h-[360px] md:h-[390px]">
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
          
          <div className="flex gap-2 p-2.5 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-300 rounded-xl flex items-center justify-center text-xl">🍝</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[11px] text-foreground truncate">Carbonara</p>
              <p className="text-[9px] text-muted-foreground">Creamy bacon pasta</p>
              <p className="text-xs font-bold text-primary mt-0.5">AED 55</p>
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

// Floating Badge Component
const FloatingBadge = ({ children, className = "", delay = "0s" }: { children: React.ReactNode; className?: string; delay?: string }) => (
  <div 
    className={`absolute bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/8 border border-gray-100/80 ${className}`}
    style={{ animation: 'float-slow 5s ease-in-out infinite', animationDelay: delay }}
  >
    {children}
  </div>
);

// ============ MAIN HERO COMPONENT ============

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background to-gray-50/40 overflow-hidden pt-20 pb-16">
      {/* ======== BACKGROUND LAYER ======== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orbs for depth */}
        <div className="absolute top-16 right-0 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '70px 70px'
          }}
        />
      </div>

      {/* ======== DOODLE ECOSYSTEM LAYER ======== */}
      <div className="absolute inset-0 pointer-events-none text-primary">
        <DoodleBilling />
        <DoodleQRCode />
        <DoodleInventory />
        <DoodleAnalytics />
        <DoodleKDS />
        <DoodleCRM />
        <DoodleReports />
        <DoodleConnectors />
      </div>

      {/* ======== MAIN CONTENT ======== */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[75vh]">
          
          {/* ======== LEFT COLUMN: COPY & CTAs ======== */}
          <div className="space-y-7 text-center lg:text-left order-2 lg:order-1">
            
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
              <CustomCTAButton href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Swirl">
                Book a Free Demo
              </CustomCTAButton>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToFeatures}
                className="h-12 px-7 text-base font-semibold border-primary/25 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                Explore the Platform
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-muted-foreground animate-fade-in animation-delay-600">
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Trusted by leading restaurant brands across the Middle East
              </span>
            </p>

            {/* 5 Logo Strip - Greyscale to Color on Hover */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-7 md:gap-10 pt-3 animate-fade-in animation-delay-800">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="h-9 md:h-11 lg:h-12 grayscale brightness-[0.35] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
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

          {/* ======== RIGHT COLUMN: PRODUCT MOCKUPS ======== */}
          <div className="relative h-[480px] md:h-[540px] lg:h-[600px] animate-fade-in animation-delay-600 order-1 lg:order-2">
            
            {/* Glow Background Behind Mockups */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Floating Badges */}
            <FloatingBadge className="top-0 right-6 md:right-20 lg:right-28 z-30" delay="0.3s">
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

            <FloatingBadge className="top-1/3 -left-2 md:left-0 z-30" delay="0.7s">
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

            <FloatingBadge className="bottom-28 md:bottom-24 left-0 md:left-4 z-30" delay="1.1s">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Live Orders</p>
                  <p className="text-[10px] text-primary font-bold">12 Active</p>
                </div>
              </div>
            </FloatingBadge>

            {/* POS Hardware Mockup (Main) */}
            <div className="flex justify-center lg:justify-start pt-8">
              <POSHardwareMockup />
            </div>

            {/* iPhone QR Mockup (Overlapping) */}
            <IPhoneQRMockup />
          </div>
        </div>
      </div>

      {/* ======== SECTION TRANSITION ======== */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 animate-bounce">
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
