import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Printer, Tablet, ScanLine, MonitorSmartphone, Tv, Shield, Zap, CheckCircle, ArrowRight, Sparkles, Clock, Wifi, Package, Building2, Headphones, Settings, CreditCard } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CustomCTAButton from '@/components/CustomCTAButton';

const SwirlHardware = () => {
  useScrollAnimation();

  const hardwareProducts = [
    {
      icon: Tablet,
      title: 'Swirl POS Terminal',
      description: 'A fast, stable, and intuitive POS system built for high-volume restaurants.',
      features: ['Touch-friendly interface', 'Built for speed & peak hours', 'Works online & offline', 'Seamless integration']
    },
    {
      icon: Printer,
      title: 'High-Performance Printers',
      description: 'Reliable receipt and kitchen printers designed for continuous operations.',
      features: ['Fast thermal printing', 'Network & USB support', 'Durable for kitchen use', 'Auto-cut & low maintenance']
    },
    {
      icon: ScanLine,
      title: 'Scanner',
      description: 'Fast and accurate scanning for billing, inventory, and order workflows.',
      features: ['High-speed scanning', 'Barcode & QR support', 'Plug-and-play with Swirl POS']
    },
    {
      icon: Monitor,
      title: 'Kitchen Display Screen',
      description: 'Replace paper tickets with real-time digital order displays.',
      features: ['Live order flow from POS', 'Color-coded order status', 'Faster preparation']
    },
    {
      icon: Tv,
      title: 'Digital Menu Boards',
      description: 'High-impact digital menu displays fully synced with your Swirl menu.',
      features: ['Real-time menu updates', 'Dynamic pricing & promotions', 'Bright, high-resolution']
    }
  ];

  const kioskFeatures = [
    "Fully integrated with Swirl POS",
    "Upselling & modifiers supported",
    "Card & digital wallet ready",
    "Ideal for QSRs, food courts & high-traffic"
  ];

  const whySwirlHardware = [
    { icon: Building2, title: "Built for Restaurants", description: "Not retail — designed specifically for F&B operations" },
    { icon: Settings, title: "Fully Integrated", description: "Works seamlessly with Swirl software platform" },
    { icon: Shield, title: "Enterprise-Grade", description: "Reliable hardware that performs under pressure" },
    { icon: Headphones, title: "Easy Support", description: "Installation help and ongoing technical support" },
    { icon: Zap, title: "Scales With You", description: "From single outlet to large multi-location chains" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Premium */}
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll max-w-4xl mx-auto">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <div className="px-4 py-2 bg-primary/5 rounded-full flex items-center gap-2 border border-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-700">Trusted by 1000+ Restaurants</span>
                </div>
                <div className="px-4 py-2 bg-primary/5 rounded-full flex items-center gap-2 border border-primary/10">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-700">Enterprise Grade</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
                Hardware That Powers<br />
                <span className="text-primary">Every Restaurant Touchpoint</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                From POS to kitchens to self-service — Swirl hardware is built to perform, scale, and integrate seamlessly with your operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                  Talk to Sales
                </CustomCTAButton>
                <a 
                  href="#hardware-ecosystem" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  View Hardware Setup
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Ecosystem Section */}
        <section id="hardware-ecosystem" className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Hardware Ecosystem</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                A Complete Suite of Restaurant-Grade Devices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed to work flawlessly with the Swirl platform — reliable, fast, and built for real-world operations.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {hardwareProducts.map((product, idx) => (
                <div 
                  key={idx} 
                  className={`animate-on-scroll animate-delay-${(idx % 3 + 1) * 100} group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Self-Ordering Kiosk - Premium Image Section */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6 border border-primary/20">
                <MonitorSmartphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Self-Ordering Kiosk</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Self-Ordering Kiosk
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Reduce queues, increase order value, and give customers full control with Swirl self-ordering kiosks.
              </p>
            </div>

            {/* Kiosk Images Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="animate-on-scroll animate-delay-100 group">
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src="/lovable-uploads/kiosk-1.webp" 
                    alt="Swirl Self-Service Kiosk" 
                    className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="animate-on-scroll animate-delay-200 group">
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src="/lovable-uploads/kiosk-2.webp" 
                    alt="Swirl Kiosk Interface" 
                    className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="animate-on-scroll animate-delay-300 group">
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src="/lovable-uploads/kiosk-3.webp" 
                    alt="Swirl Kiosk Design" 
                    className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Kiosk Features */}
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {kioskFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="animate-on-scroll flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Swirl Hardware Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Swirl Hardware?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whySwirlHardware.map((item, idx) => (
                <div 
                  key={idx}
                  className={`animate-on-scroll animate-delay-${(idx % 5 + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                One Platform. One Hardware Ecosystem.<br />
                <span className="text-white/90">Total Control.</span>
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Whether you're launching your first outlet or scaling across regions, Swirl hardware is designed to grow with you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.swirl.cx/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="https://app.swirl.cx/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                >
                  Get Hardware Pricing
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

export default SwirlHardware;
