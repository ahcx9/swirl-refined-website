import React from 'react';
import { 
  CreditCard, 
  QrCode, 
  Check,
  Banknote,
  SplitSquareVertical,
  CheckCircle2,
  Smartphone,
  Plus,
  ShoppingCart
} from 'lucide-react';
import { Button } from './ui/button';
import CustomCTAButton from './CustomCTAButton';

// Reduced to 5 logos only
const logos = [
  { src: "/lovable-uploads/9623693d-a2e0-48ea-8d68-911775324f30.png", alt: "Seern Restaurant" },
  { src: "/lovable-uploads/72bc496f-dfad-4fef-a00b-a049a08c0700.png", alt: "Uccelli Café" },
  { src: "/lovable-uploads/a1037d43-9706-4594-98e2-b879fa17ae5c.png", alt: "Bombay Restaurant & Cafe" },
  { src: "/lovable-uploads/4127f4ed-f4a1-452d-bdba-5bc27d6fb8bc.png", alt: "La Pino'z Pizza" },
  { src: "/lovable-uploads/6e0d0241-ba77-477a-84cd-a700f8183303.png", alt: "Kaleda Traditional Indian Taste" },
];

// SVG Doodle Components
const DoodlePOS = () => (
  <svg className="absolute top-16 left-4 w-24 h-24 md:w-32 md:h-32 opacity-[0.06]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="20" y="10" width="60" height="80" rx="4" className="stroke-primary" />
    <rect x="25" y="18" width="50" height="30" rx="2" className="stroke-primary" />
    <circle cx="50" cy="70" r="8" className="stroke-primary" />
    <line x1="25" y1="55" x2="75" y2="55" className="stroke-primary" />
  </svg>
);

const DoodleQRCode = () => (
  <svg className="absolute bottom-32 right-8 w-20 h-20 md:w-28 md:h-28 opacity-[0.06]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="10" y="10" width="30" height="30" rx="2" className="stroke-primary" />
    <rect x="60" y="10" width="30" height="30" rx="2" className="stroke-primary" />
    <rect x="10" y="60" width="30" height="30" rx="2" className="stroke-primary" />
    <rect x="18" y="18" width="14" height="14" className="stroke-primary fill-primary/10" />
    <rect x="68" y="18" width="14" height="14" className="stroke-primary fill-primary/10" />
    <rect x="18" y="68" width="14" height="14" className="stroke-primary fill-primary/10" />
    <rect x="60" y="60" width="10" height="10" className="stroke-primary" />
    <rect x="75" y="60" width="15" height="10" className="stroke-primary" />
    <rect x="60" y="75" width="10" height="15" className="stroke-primary" />
    <rect x="80" y="80" width="10" height="10" className="stroke-primary" />
  </svg>
);

const DoodleChart = () => (
  <svg className="absolute top-24 right-16 w-20 h-20 md:w-24 md:h-24 opacity-[0.05] hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
    <line x1="10" y1="90" x2="90" y2="90" className="stroke-primary" />
    <line x1="10" y1="10" x2="10" y2="90" className="stroke-primary" />
    <polyline points="20,70 35,50 50,60 65,30 80,40" className="stroke-primary" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="70" r="3" className="stroke-primary fill-primary/20" />
    <circle cx="35" cy="50" r="3" className="stroke-primary fill-primary/20" />
    <circle cx="50" cy="60" r="3" className="stroke-primary fill-primary/20" />
    <circle cx="65" cy="30" r="3" className="stroke-primary fill-primary/20" />
    <circle cx="80" cy="40" r="3" className="stroke-primary fill-primary/20" />
  </svg>
);

const DoodleCloud = () => (
  <svg className="absolute bottom-16 left-16 w-16 h-16 md:w-20 md:h-20 opacity-[0.05] hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M25 65 C10 65, 10 45, 25 45 C25 30, 45 25, 55 35 C65 25, 90 35, 85 50 C100 50, 100 70, 80 70 L25 70 C15 70, 10 60, 25 65 Z" className="stroke-primary" />
    <line x1="40" y1="75" x2="40" y2="85" className="stroke-primary" strokeDasharray="2 2" />
    <line x1="55" y1="75" x2="55" y2="90" className="stroke-primary" strokeDasharray="2 2" />
    <line x1="70" y1="75" x2="70" y2="82" className="stroke-primary" strokeDasharray="2 2" />
  </svg>
);

const DoodleInventory = () => (
  <svg className="absolute top-1/2 left-8 w-14 h-14 md:w-16 md:h-16 opacity-[0.04] hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="15" y="35" width="30" height="25" rx="2" className="stroke-primary" />
    <rect x="55" y="35" width="30" height="25" rx="2" className="stroke-primary" />
    <rect x="35" y="55" width="30" height="25" rx="2" className="stroke-primary" />
    <line x1="20" y1="42" x2="40" y2="42" className="stroke-primary" />
    <line x1="60" y1="42" x2="80" y2="42" className="stroke-primary" />
  </svg>
);

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20 pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-primary/4 rounded-full blur-3xl" />
      </div>

      {/* Blueprint Doodle Elements */}
      <div className="absolute inset-0 pointer-events-none text-primary">
        <DoodlePOS />
        <DoodleQRCode />
        <DoodleChart />
        <DoodleCloud />
        <DoodleInventory />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight animate-fade-in">
              The Operating System for{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Modern Restaurants
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              Run billing, QR ordering, inventory, accounting, CRM & analytics from one connected platform — built to scale F&B businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <CustomCTAButton href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Swirl">
                Book a Free Demo
              </CustomCTAButton>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToFeatures}
                className="h-12 px-6 text-base font-medium border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300"
              >
                Explore the Platform
              </Button>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-muted-foreground animate-fade-in animation-delay-600">
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Trusted by leading restaurant brands across the Middle East
              </span>
            </p>

            {/* 5 Logo Strip - Static, No Marquee */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 pt-2 animate-fade-in animation-delay-800">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="h-8 md:h-10 grayscale brightness-0 opacity-60 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Combined POS + QR Mockup */}
          <div className="relative h-[450px] md:h-[520px] lg:h-[560px] animate-fade-in animation-delay-600 order-1 lg:order-2">
            {/* Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Main POS Billing Screen */}
            <div className="absolute left-0 lg:left-4 top-8 w-[280px] md:w-[320px] lg:w-[340px] z-10">
              <div className="bg-white rounded-2xl shadow-2xl shadow-primary/20 border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                {/* POS Header */}
                <div className="bg-primary px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm">Swirl POS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs">Table 5</span>
                  </div>
                </div>
                
                {/* Order Items */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center text-xs font-bold text-primary">2×</div>
                      <span className="text-sm font-medium text-foreground">Chicken Shawarma</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">AED 36</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center text-xs font-bold text-primary">1×</div>
                      <span className="text-sm font-medium text-foreground">Grilled Kebab</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">AED 28</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center text-xs font-bold text-primary">3×</div>
                      <span className="text-sm font-medium text-foreground">Arabic Coffee</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">AED 27</span>
                  </div>
                  
                  {/* Total Section */}
                  <div className="pt-2 space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Subtotal</span>
                      <span>AED 91.00</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>VAT (5%)</span>
                      <span>AED 4.55</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-foreground pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span className="text-primary">AED 95.55</span>
                    </div>
                  </div>
                  
                  {/* Payment Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-3">
                    <button className="flex flex-col items-center gap-1 p-2.5 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors">
                      <Banknote className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-medium text-foreground">Cash</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 p-2.5 bg-primary rounded-xl">
                      <CreditCard className="w-4 h-4 text-white" />
                      <span className="text-[10px] font-medium text-white">Card</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 p-2.5 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors">
                      <SplitSquareVertical className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-medium text-foreground">Split</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile QR Ordering Screen - Overlapping */}
            <div 
              className="absolute right-0 lg:right-4 top-20 md:top-16 w-[180px] md:w-[200px] z-20"
              style={{ animation: 'float-slow 6s ease-in-out infinite' }}
            >
              <div className="bg-gray-900 rounded-[28px] p-2 shadow-2xl">
                {/* Phone Frame */}
                <div className="bg-white rounded-[22px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-primary/10 px-3 py-1.5 flex items-center justify-between">
                    <span className="text-[8px] text-muted-foreground">9:41</span>
                    <div className="w-12 h-3 bg-gray-900 rounded-full" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-sm" />
                      <div className="w-2 h-2 bg-gray-400 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-primary px-3 py-2 flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-white" />
                    <span className="text-white text-xs font-semibold">Scan to Order</span>
                  </div>
                  
                  {/* Menu Content */}
                  <div className="p-3 space-y-2">
                    <div className="text-[10px] font-semibold text-foreground mb-2">Popular Items</div>
                    
                    {/* Menu Item 1 */}
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🍔</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-medium text-foreground">Classic Burger</p>
                        <p className="text-[9px] text-muted-foreground">AED 32</p>
                      </div>
                      <button className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Plus className="w-3 h-3 text-white" />
                      </button>
                    </div>
                    
                    {/* Menu Item 2 */}
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🥗</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-medium text-foreground">Caesar Salad</p>
                        <p className="text-[9px] text-muted-foreground">AED 24</p>
                      </div>
                      <button className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <Plus className="w-3 h-3 text-primary" />
                      </button>
                    </div>
                    
                    {/* Cart Button */}
                    <button className="w-full mt-2 py-2 bg-primary rounded-lg flex items-center justify-center gap-2">
                      <ShoppingCart className="w-3 h-3 text-white" />
                      <span className="text-[10px] font-semibold text-white">View Cart (2)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Placed Badge - Floating */}
            <div 
              className="absolute bottom-24 right-16 lg:right-24 z-30 hidden md:block"
              style={{ animation: 'float-slow 5s ease-in-out infinite', animationDelay: '0.5s' }}
            >
              <div className="bg-white rounded-xl px-4 py-3 shadow-xl shadow-primary/10 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Order Placed!</p>
                    <p className="text-[10px] text-muted-foreground">Table 5 • #1248</p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Badge - Floating Bottom Left */}
            <div 
              className="absolute bottom-8 left-4 lg:left-8 z-30 hidden md:block"
              style={{ animation: 'float-slow 7s ease-in-out infinite', animationDelay: '1s' }}
            >
              <div className="bg-white rounded-xl p-3 shadow-xl shadow-primary/10 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg p-2 flex items-center justify-center">
                    <QrCode className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">QR Scanned</p>
                    <p className="text-[10px] text-muted-foreground">Menu loaded</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smartphone Icon - Behind */}
            <div className="absolute top-0 right-1/4 opacity-[0.03] hidden lg:block">
              <Smartphone className="w-32 h-32 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
