import React, { useRef, useState, useEffect } from 'react';
import { Globe, CheckCircle, QrCode, Languages, Percent, FileCheck, BadgeCheck, Shield } from 'lucide-react';

const HomeZATCASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const complianceFeatures = [
    { icon: QrCode, title: 'Auto QR Generation', desc: 'QR codes generated on every invoice' },
    { icon: Languages, title: 'Arabic + English', desc: 'Bilingual invoice support' },
    { icon: Percent, title: 'VAT Calculation', desc: 'Automatic 15% VAT computation' },
    { icon: FileCheck, title: 'Real-time Reporting', desc: 'Instant ZATCA submission' },
    { icon: BadgeCheck, title: 'Digital Stamp', desc: 'Cryptographic validation' },
    { icon: Shield, title: 'Audit Ready', desc: 'Complete compliance logs' },
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-green-50/20 to-background" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-green-100/30 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200/60 backdrop-blur-sm">
            <Globe className="w-4 h-4 text-green-600" />
            <span className="text-green-700 font-semibold text-sm">Saudi Arabia Compliant</span>
            <span className="px-2 py-0.5 bg-green-600 text-white text-[10px] font-bold rounded-full">ZATCA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-bold mb-4 text-foreground leading-tight">
            ZATCA Phase 2
            <div className="h-1.5 md:h-3" />
            <span className="text-green-600">Ready</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full e-invoicing compliance for Saudi restaurants. Generate ZATCA-compliant invoices with QR codes automatically.
          </p>
        </div>

        {/* Compliance Badges */}
        <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 md:mb-14 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[
            { icon: CheckCircle, title: 'Phase 1', sub: 'Generation' },
            { icon: CheckCircle, title: 'Phase 2', sub: 'Integration' },
            { icon: QrCode, title: 'Fatoora', sub: 'QR Ready' },
          ].map((badge, i) => (
            <div key={i} className="bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-sm border border-green-100/60 flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-50 rounded-full flex items-center justify-center">
                <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{badge.title}</p>
                <p className="text-[11px] text-muted-foreground">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Invoice Mockup */}
          <div className={`order-2 lg:order-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl shadow-xl border border-border/40 max-w-sm mx-auto overflow-hidden">
              {/* Invoice Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-5 py-3.5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] opacity-80">Tax Invoice</p>
                    <p className="font-bold text-base">فاتورة ضريبية</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] opacity-80">Invoice #</p>
                    <p className="font-bold text-sm">INV-2024-0142</p>
                  </div>
                </div>
              </div>

              {/* Invoice Body */}
              <div className="p-5">
                <div className="text-center mb-4 pb-3 border-b border-dashed border-border/40">
                  <p className="font-bold text-foreground">مطعم السعادة</p>
                  <p className="text-xs text-muted-foreground">Happiness Restaurant</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-0.5">VAT: 300000000000003</p>
                </div>

                <div className="space-y-1.5 mb-4 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Chicken Shawarma x2</span><span className="text-foreground">SAR 40.00</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Hummus</span><span className="text-foreground">SAR 15.00</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Fresh Juice x2</span><span className="text-foreground">SAR 24.00</span></div>
                </div>

                <div className="border-t border-border/40 pt-3 space-y-1.5">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>SAR 79.00</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">VAT (15%)</span><span>SAR 11.85</span></div>
                  <div className="flex justify-between font-bold text-base pt-2 border-t border-border/40">
                    <span className="text-foreground">Total / المجموع</span>
                    <span className="text-green-600">SAR 90.85</span>
                  </div>
                </div>

                {/* QR */}
                <div className="mt-4 pt-3 border-t border-dashed border-border/40 flex items-center gap-3">
                  <div className="w-16 h-16 bg-muted rounded-lg p-1.5 flex items-center justify-center flex-shrink-0">
                    <div className="w-full h-full bg-foreground rounded" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23fff' width='100' height='100'/%3E%3Crect fill='%23000' x='10' y='10' width='20' height='20'/%3E%3Crect fill='%23000' x='40' y='10' width='10' height='10'/%3E%3Crect fill='%23000' x='70' y='10' width='20' height='20'/%3E%3Crect fill='%23000' x='10' y='40' width='10' height='10'/%3E%3Crect fill='%23000' x='30' y='40' width='10' height='10'/%3E%3Crect fill='%23000' x='50' y='40' width='20' height='10'/%3E%3Crect fill='%23000' x='80' y='40' width='10' height='10'/%3E%3Crect fill='%23000' x='10' y='70' width='20' height='20'/%3E%3Crect fill='%23000' x='40' y='60' width='10' height='10'/%3E%3Crect fill='%23000' x='60' y='70' width='10' height='10'/%3E%3Crect fill='%23000' x='80' y='70' width='10' height='20'/%3E%3C/svg%3E")`,
                      backgroundSize: 'cover'
                    }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">ZATCA Compliant QR</p>
                    <p className="text-[11px] text-muted-foreground/70">Scan to verify authenticity</p>
                    <div className="flex items-center gap-1 mt-1">
                      <BadgeCheck className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-[11px] font-medium text-green-600">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="group bg-white rounded-xl p-4 sm:p-5 border border-border/40 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-105 transition-transform shadow-sm shadow-green-200/50">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-0.5 text-xs sm:text-sm">{feature.title}</h4>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-4 bg-green-50/80 border border-green-200/50 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                <BadgeCheck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-green-800 text-sm">100% ZATCA Compliant</p>
                <p className="text-xs text-green-700/80">Phase 1 & Phase 2 certified for Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeZATCASection;
