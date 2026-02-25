import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Monitor, ShieldCheck, Eye, ArrowRight, CheckCircle, Sparkles, Receipt, Gift, Megaphone, CreditCard } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CustomerDisplayMockup = () => (
  <div className="relative mx-auto max-w-2xl">
    {/* 3D perspective wrapper */}
    <div className="relative" style={{ perspective: '1200px' }}>
      {/* POS Terminal */}
      <div className="relative z-10 bg-foreground rounded-2xl p-6 shadow-2xl" style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }}>
        <div className="bg-background rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-sm font-bold text-foreground">Cashier View</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Active</span>
          </div>
          <div className="space-y-2">
            {['Grilled Chicken Burger', 'Caesar Salad', 'Iced Latte'].map((item, i) => (
              <div key={i} className="flex justify-between text-sm text-foreground">
                <span>{item}</span>
                <span className="font-medium text-muted-foreground">AED {[38, 28, 18][i]}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-2 flex justify-between font-bold text-foreground">
            <span>Total</span>
            <span className="text-primary">AED 84.00</span>
          </div>
        </div>
      </div>

      {/* Customer-Facing Display */}
      <div className="absolute top-4 -right-8 md:-right-16 z-20 w-64 md:w-80 bg-foreground rounded-2xl p-4 shadow-2xl border-4 border-foreground/80" style={{ transform: 'rotateY(8deg) rotateX(-2deg)' }}>
        <div className="bg-background rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary px-4 py-3 text-center">
            <span className="text-xs font-bold text-primary-foreground tracking-wider uppercase">Your Order</span>
          </div>
          {/* Items */}
          <div className="p-4 space-y-3">
            {[
              { name: 'Grilled Chicken Burger', qty: 1, price: 38 },
              { name: 'Caesar Salad', qty: 1, price: 28 },
              { name: 'Iced Latte', qty: 1, price: 18 },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <div>
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="text-muted-foreground ml-2">×{item.qty}</span>
                </div>
                <span className="font-semibold text-foreground">AED {item.price}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 mt-3">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Subtotal</span><span>AED 84.00</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>VAT (5%)</span><span>AED 4.20</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-foreground">
                <span>Total</span><span className="text-primary">AED 88.20</span>
              </div>
            </div>
          </div>
          {/* Loyalty message */}
          <div className="mx-4 mb-3 bg-primary/5 border border-primary/10 rounded-lg p-3 text-center">
            <Gift className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-xs text-primary font-semibold">You earned 88 loyalty points! 🎉</p>
          </div>
          {/* Promo banner */}
          <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-center">
            <p className="text-xs text-primary-foreground font-medium">🔥 Happy Hour: 20% off all drinks until 6 PM</p>
          </div>
        </div>
      </div>
    </div>
    {/* Shadow/base */}
    <div className="mt-8 mx-auto w-3/4 h-4 bg-foreground/5 rounded-full blur-xl" />
  </div>
);

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
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-background overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
          </div>
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Customer Display</span>
                </div>
                <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Transparency That<br />
                  <span className="text-primary">Builds Trust</span>
                </h1>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Give your customers a clear view of their order, total, and loyalty rewards — right at the checkout counter.
                </p>
                <div className="animate-on-scroll animate-delay-300">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    get started for free
                  </CustomCTAButton>
                </div>
              </div>
              {/* Mockup */}
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
                  {/* Compact secondary mockup */}
                  <div className="bg-foreground rounded-2xl p-6 shadow-2xl max-w-sm mx-auto">
                    <div className="bg-background rounded-xl overflow-hidden">
                      <div className="bg-primary px-4 py-3 text-center">
                        <span className="text-sm font-bold text-primary-foreground">Customer View</span>
                      </div>
                      <div className="p-5 space-y-3">
                        <div className="flex justify-between text-sm"><span className="text-foreground">Margherita Pizza</span><span className="font-medium text-foreground">AED 45</span></div>
                        <div className="flex justify-between text-sm"><span className="text-foreground">Garlic Bread</span><span className="font-medium text-foreground">AED 15</span></div>
                        <div className="flex justify-between text-sm"><span className="text-foreground">Sparkling Water</span><span className="font-medium text-foreground">AED 12</span></div>
                        <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
                          <span className="text-foreground">Total</span>
                          <span className="text-primary">AED 75.60</span>
                        </div>
                        <div className="bg-primary/5 rounded-lg p-2 text-center">
                          <p className="text-xs text-primary font-medium">⭐ Gold Member — 5% discount applied</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
