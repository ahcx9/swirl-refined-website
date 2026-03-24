import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Printer, Shield, Zap, CheckCircle, ArrowRight, Sparkles, Wifi, Building2, Headphones, Settings, Receipt, Clock, ThermometerSun, Usb, Network, Gauge, Award, Layers } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
const SwirlHardware = () => {
  useScrollAnimation();
  const posFeatures = [{
    icon: Zap,
    title: "Lightning Fast",
    description: "Process orders in milliseconds, even during peak hours"
  }, {
    icon: Wifi,
    title: "Offline Ready",
    description: "Continue operations seamlessly without internet"
  }, {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption and secure payments"
  }, {
    icon: Layers,
    title: "Multi-Outlet Sync",
    description: "Real-time synchronization across all locations"
  }];
  const posSpecs = [{
    title: "CPU",
    value: "Intel Alder Lake-N97 Quad-Core, Up to 3.60GHz"
  }, {
    title: "Memory",
    value: "8G RAM + 128G ROM"
  }, {
    title: "Operating System",
    value: "Windows 11"
  }, {
    title: "Color",
    value: "Black / White"
  }, {
    title: "Main Screen",
    value: "15.6 / 15.6 inch, Resolution 1920*1080"
  }, {
    title: "Secondary Screen",
    value: "11.6-inch 1366*768 (A15P-W)"
  }, {
    title: "Interface",
    value: "5× External USB, 1× HDMI | 1× COM (RS232), 1× RJ45, 1× Line Out, 1× Mic In"
  }, {
    title: "Network Connection",
    value: "1000M Ethernet, Wi-Fi 2.4GHz / 5.0GHz, Bluetooth 5.0"
  }, {
    title: "Speaker",
    value: "8W / 2Ω"
  }, {
    title: "Power Adapter",
    value: "Output: 12V / 5A"
  }, {
    title: "Package Size",
    value: "515mm x 315mm x 485mm"
  }, {
    title: "Weight",
    value: "Package Weight: 6.98KG / 9.18KG"
  }];
  const printerTypes = [{
    title: "Receipt Printer",
    description: "High-speed thermal printing for customer receipts",
    features: ["250mm/s print speed", "Auto-cutter", "80mm paper width", "USB + LAN connectivity"]
  }, {
    title: "Kitchen Printer",
    description: "Durable printing designed for kitchen environments",
    features: ["Heat & moisture resistant", "Loud buzzer alerts", "Large font output", "Network enabled"]
  }];
  const printerFeatures = [{
    icon: Gauge,
    title: "High Speed",
    description: "250mm/s thermal printing"
  }, {
    icon: ThermometerSun,
    title: "Kitchen Grade",
    description: "Heat & moisture resistant"
  }, {
    icon: Network,
    title: "Network Ready",
    description: "LAN + USB connectivity"
  }, {
    icon: Clock,
    title: "Always On",
    description: "24/7 reliable operation"
  }];
  const whySwirlHardware = [{
    icon: Building2,
    title: "Built for Restaurants",
    description: "Designed specifically for F&B operations, not retail"
  }, {
    icon: Settings,
    title: "Fully Integrated",
    description: "Works seamlessly with Swirl software platform"
  }, {
    icon: Shield,
    title: "Enterprise-Grade",
    description: "Reliable hardware that performs under pressure"
  }, {
    icon: Headphones,
    title: "Easy Support",
    description: "Installation help and ongoing technical support"
  }, {
    icon: Zap,
    title: "Scales With You",
    description: "From single outlet to large multi-location chains"
  }];
  return <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 md:pt-28 pb-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll max-w-4xl mx-auto pt-8 md:pt-12">

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
                Hardware for Every Part of<br />
                <span className="text-primary">Your Restaurant/Cafe</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Professional-grade POS terminals and printers built for high-volume restaurant operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <SwirlCTA />
                <BookDemoCTA />
              </div>
            </div>
          </div>
        </section>

        {/* ============ SWIRL POS SECTION ============ */}
        <section id="pos-section" className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6 border border-primary/10">
                <Monitor className="w-5 h-5 text-primary" />
                <span className="text-base md:text-sm font-bold md:font-semibold text-primary">Point of Sale Terminal</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Swirl POS Terminal
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A fast, stable, and intuitive POS system built for high-volume restaurants. Process orders seamlessly during peak hours.
              </p>
            </div>

            {/* POS Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image Placeholder */}
              <div className="animate-on-scroll animate-delay-100 order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl -z-10 scale-105" />
                  <img src="/lovable-uploads/swirl-pos-terminal.jpg" alt="Swirl POS Terminal" className="w-full rounded-3xl shadow-2xl" />
                </div>
              </div>

              {/* Features */}
              <div className="animate-on-scroll animate-delay-200 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Restaurants Choose Swirl POS</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {posFeatures.map((feature, idx) => <div key={idx} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="animate-on-scroll animate-delay-300 bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posSpecs.map((spec, idx) => <div key={idx} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <h5 className="text-white font-bold mb-2">{spec.title}</h5>
                    <p className="text-gray-300 text-sm">{spec.value}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRINTER SECTION ============ */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6 border border-primary/10">
                <Printer className="w-5 h-5 text-primary" />
                <span className="text-base md:text-sm font-bold md:font-semibold text-primary">Professional Printing</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                High-Performance Printers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reliable receipt and kitchen printers designed for continuous operations. Fast, durable, and built to last.
              </p>
            </div>

            {/* Printer Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {printerFeatures.map((feature, idx) => <div key={idx} className={`animate-on-scroll animate-delay-${(idx + 1) * 100} group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center`}>
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>)}
            </div>

            {/* Printer Image & Types */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Single Printer Image */}
              <div className="animate-on-scroll animate-delay-100">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl -z-10 scale-105" />
                  <img src="/lovable-uploads/swirl-printers.png" alt="Swirl High-Performance Printers" className="w-full rounded-3xl" />
                </div>
              </div>

              {/* Printer Types */}
              <div className="animate-on-scroll animate-delay-200 space-y-6">
                {printerTypes.map((printer, idx) => <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{printer.title}</h3>
                    <p className="text-gray-600 mb-4">{printer.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {printer.features.map((feature, i) => <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>)}
                    </div>
                  </div>)}
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
              {whySwirlHardware.map((item, idx) => <div key={idx} className={`animate-on-scroll animate-delay-${(idx % 5 + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center`}>
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        
      </main>
      <Footer />
    </div>;
};
export default SwirlHardware;