import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import POSMockup from '@/components/features/pos/POSMockup';
import InventoryMockup from '@/components/features/inventory/InventoryMockup';

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

// ============ MAIN HERO COMPONENT ============

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-32 md:pt-36 lg:pt-32 pb-8">
      
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
          <div className="order-2 relative flex items-center justify-center lg:justify-end">
            {/* Mockup Container with perspective */}
            <div className="relative w-full max-w-[900px] h-[500px] md:h-[600px] lg:h-[700px]">
              
              {/* POS Mockup - Primary, foreground */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 origin-top-left
                           transform scale-[0.38] md:scale-[0.45] lg:scale-[0.5] xl:scale-[0.55]
                           hover:scale-[0.40] md:hover:scale-[0.47] lg:hover:scale-[0.52] xl:hover:scale-[0.57]
                           transition-transform duration-500 ease-out"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 82, 204, 0.15))',
                }}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-2xl">
                  <POSMockup />
                </div>
              </div>
              
              {/* Inventory Mockup - Secondary, background offset */}
              <div 
                className="absolute right-0 md:right-[-5%] lg:right-[-10%] top-1/2 -translate-y-[40%] z-10 origin-top-right
                           transform scale-[0.35] md:scale-[0.42] lg:scale-[0.48] xl:scale-[0.52]
                           hover:scale-[0.37] md:hover:scale-[0.44] lg:hover:scale-[0.50] xl:hover:scale-[0.54]
                           transition-transform duration-500 ease-out
                           hidden md:block"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 82, 204, 0.12))',
                }}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                  <InventoryMockup />
                </div>
              </div>

              {/* Decorative gradient backdrop */}
              <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
