import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Monitor, ShieldCheck, Eye, ArrowRight, CheckCircle, Sparkles, Receipt, Gift, Megaphone, CreditCard } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/* ============ PREMIUM 3D HARDWARE MOCKUP ============ */
const CustomerDisplayMockup = () => (
  <div className="relative mx-auto max-w-3xl py-8">
    <div className="relative flex items-end justify-center gap-0" style={{ perspective: '1800px' }}>
      
      {/* === POS Terminal (Main Screen) === */}
      <div className="relative z-10 w-[280px] md:w-[380px]" style={{ transform: 'rotateY(6deg) rotateX(2deg)' }}>
        {/* Bezel */}
        <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16162a] rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)]">
          {/* Screen */}
          <div className="bg-background rounded-xl overflow-hidden">
            {/* Status bar */}
            <div className="bg-gradient-to-r from-primary to-primary/90 px-4 py-2 flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/90 tracking-wider uppercase">Cashier — Order #1042</span>
              <span className="text-[9px] text-white/60">3:47 PM</span>
            </div>
            {/* POS Content */}
            <div className="p-4 space-y-2.5">
              {[
                { name: 'Grilled Chicken Burger', qty: 2, price: 38 },
                { name: 'Caesar Salad', qty: 1, price: 28 },
                { name: 'Iced Latte', qty: 1, price: 18 },
                { name: 'Truffle Fries', qty: 1, price: 22 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">{item.qty}</span>
                    <span className="text-foreground font-medium text-xs">{item.name}</span>
                  </div>
                  <span className="font-semibold text-foreground text-xs">AED {item.price * item.qty}</span>
                </div>
              ))}
              <div className="border-t-2 border-primary/20 pt-3 flex justify-between font-bold text-base">
                <span className="text-foreground">Total</span>
                <span className="text-primary">AED 164.00</span>
              </div>
              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="bg-primary text-white text-[10px] font-semibold py-2 rounded-lg text-center">Settle Bill</div>
                <div className="bg-muted text-foreground text-[10px] font-semibold py-2 rounded-lg text-center">Print KOT</div>
              </div>
            </div>
          </div>
        </div>
        {/* Stand */}
        <div className="mx-auto w-16 h-12 bg-gradient-to-b from-[#1a1a2e] to-[#2a2a3e] rounded-b-lg" />
        <div className="mx-auto w-32 h-2 bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e] rounded-full" />
      </div>

      {/* === Customer-Facing Display (Secondary Screen) === */}
      <div className="relative z-20 w-[220px] md:w-[300px] -ml-6 md:-ml-10 mb-2" style={{ transform: 'rotateY(-8deg) rotateX(1deg)' }}>
        {/* Bezel */}
        <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16162a] rounded-2xl p-2.5 shadow-[0_25px_70px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)]">
          {/* Screen */}
          <div className="bg-background rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-center">
              <span className="text-xs font-bold text-white tracking-wider uppercase">Your Order</span>
            </div>
            {/* Items */}
            <div className="p-4 space-y-2.5">
              {[
                { name: 'Grilled Chicken Burger', qty: 2, price: 76 },
                { name: 'Caesar Salad', qty: 1, price: 28 },
                { name: 'Iced Latte', qty: 1, price: 18 },
                { name: 'Truffle Fries', qty: 1, price: 22 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <div>
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-muted-foreground ml-1.5">×{item.qty}</span>
                  </div>
                  <span className="font-semibold text-foreground">AED {item.price}</span>
                </div>
              ))}
              <div className="border-t border-border pt-2.5 mt-2.5 space-y-1">
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>Subtotal</span><span>AED 144.00</span>
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>VAT (5%)</span><span>AED 7.20</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-foreground pt-1">
                  <span>Total</span><span className="text-primary">AED 151.20</span>
                </div>
              </div>
            </div>
            {/* Loyalty */}
            <div className="mx-3 mb-3 bg-primary/5 border border-primary/10 rounded-lg p-2.5 text-center">
              <Gift className="w-3.5 h-3.5 text-primary mx-auto mb-1" />
              <p className="text-[10px] text-primary font-semibold">You earned 151 loyalty points! 🎉</p>
            </div>
            {/* Promo */}
            <div className="bg-gradient-to-r from-primary to-primary/80 px-3 py-2.5 text-center">
              <p className="text-[10px] text-white font-medium">🔥 Happy Hour: 20% off all drinks until 6 PM</p>
            </div>
          </div>
        </div>
        {/* Stand */}
        <div className="mx-auto w-10 h-10 bg-gradient-to-b from-[#1a1a2e] to-[#2a2a3e] rounded-b-lg" />
        <div className="mx-auto w-24 h-2 bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e] rounded-full" />
      </div>
    </div>

    {/* Reflection / surface shadow */}
    <div className="mt-4 mx-auto w-[80%] h-6 bg-gradient-to-r from-transparent via-foreground/5 to-transparent rounded-full blur-xl" />
  </div>
);

/* ============ PAGE ============ */
const CustomerDisplay = () => {
  useScrollAnimation();

  const features = [
    { title: "Live Order View", description: "Customers see every item as it's added — full transparency at the counter", icon: Eye },
    { title: "Running Total", description: "Real-time price updates with tax breakdown so there are no surprises", icon: Receipt },
    { title: "Loyalty Integration", description: "Show points earned, tier progress, and available rewards automatically", icon: Gift },
    { title: "Promo Banners", description: "Display time-based offers, combos, and promotions on the customer screen", icon: Megaphone },
    { title: "Payment Confirmation", description: "Clear payment status and receipt option displayed post-transaction", icon: CreditCard },
    { title: "Brand Customization", description: "Match your restaurant's branding with custom colors, logo, and messaging", icon: Sparkles },
  ];

  const benefits = [
    "Eliminates billing disputes before they happen",
    "Increases average order value through upsell prompts",
    "Builds trust with complete price transparency",
    "Promotes loyalty program enrollment at checkout",
    "Displays rotating promotions without staff effort",
    "Creates a modern, premium checkout experience",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero — Apple-style product showcase */}
        <section className="relative pt-32 pb-12 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Customer Display</span>
                </div>
                <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Transparency That<br />
                  <span className="text-primary">Builds Trust</span>
                </h1>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Give your customers a clear view of their order, total, and loyalty rewards — right at the checkout counter.
                </p>
                <div className="animate-on-scroll animate-delay-300">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    get started for free
                  </CustomCTAButton>
                </div>
              </div>
              {/* 3D Hardware Mockup */}
              <div className="animate-on-scroll animate-delay-400">
                <CustomerDisplayMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Features</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-foreground mb-4">
                  More Than Just a Screen
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className={`animate-on-scroll animate-delay-${(index % 3 + 1) * 100} group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                    <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Why It Matters</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Trust at Every Transaction
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    A customer display screen isn't just about showing numbers — it's about building confidence and driving revenue.
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="animate-on-scroll animate-delay-200">
                  <CustomerDisplayMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Upgrade Your Checkout Experience
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-primary-foreground/80 mb-8">
                Add a customer display screen to your POS setup and watch trust — and revenue — grow.
              </p>
              <div className="animate-on-scroll animate-delay-200">
                <a href="https://app.swirl.cx/register" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-primary font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  get started for free
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerDisplay;
