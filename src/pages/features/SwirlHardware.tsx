import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Printer, Tablet, ScanLine, MonitorSmartphone, Tv, Shield, Zap, CheckCircle, ArrowRight, Sparkles, Clock, Wifi, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import CustomCTAButton from '@/components/CustomCTAButton';

const SwirlHardware = () => {
  useScrollAnimation();

  const hardwareProducts = [
    {
      icon: Tablet,
      title: 'Point-of-Sale System',
      description: 'Complete POS solution with intuitive touchscreen interface',
      features: ['iPad & Android compatible', 'Cloud-based', 'Real-time sync', 'Offline mode']
    },
    {
      icon: Printer,
      title: 'Thermal Printers',
      description: 'High-speed receipt and kitchen order printers',
      features: ['Fast printing', 'Auto-cutter', 'USB & Ethernet', 'Low maintenance']
    },
    {
      icon: Monitor,
      title: 'Kitchen Display System',
      description: 'Digital display system for better order management',
      features: ['Real-time updates', '15.6" touchscreen', 'Heat resistant', 'Color-coded']
    },
    {
      icon: ScanLine,
      title: 'Barcode Scanner',
      description: 'Fast barcode scanning for inventory management',
      features: ['1D & 2D support', 'Wireless', 'Long battery', 'Plug & play']
    },
    {
      icon: MonitorSmartphone,
      title: 'Self-Service Kiosks',
      description: 'Customer-facing ordering kiosks',
      features: ['10.5" touchscreen', 'Payment ready', 'Custom branding', 'Multi-language']
    },
    {
      icon: Tv,
      title: 'Menu Display Screen',
      description: 'Digital menu boards with dynamic content',
      features: ['43" 4K display', 'Remote updates', 'Scheduling', 'Easy management']
    }
  ];

  const showcaseFeatures = [
    { icon: CheckCircle, title: 'Multi Screen Options', desc: 'Flexible display for any setup' },
    { icon: Zap, title: 'Lightning Fast Billing', desc: 'Process orders in seconds' },
    { icon: Package, title: 'iPad Compatible', desc: 'Works with iOS devices' },
    { icon: Clock, title: '24/7 Support', desc: 'Always here to help' }
  ];

  const kioskBenefits = [
    "HD touchscreen for easy menu browsing",
    "Integrated thermal printer for receipts",
    "Built-in payment terminal",
    "Reduces wait times by up to 40%",
    "Increases order accuracy"
  ];

  const setupFeatures = [
    "All devices sync in real-time",
    "Kitchen receives orders instantly via KDS",
    "Printers automatically route tickets",
    "One system, zero complexity"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
              {/* Badges */}
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

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">swirl hardware</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Everything you need to run your restaurant efficiently. Enterprise-grade hardware that's beautiful, reliable, and built to last.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                  get started for free
                </CustomCTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Complete Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Modern POS for Your Restaurant
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for seamless operations, beautifully designed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll relative">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/swirl-pos-hardware.jpg" 
                    alt="Swirl POS Hardware Setup" 
                    className="rounded-2xl shadow-2xl w-full max-w-lg h-auto mx-auto hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
                    Lightning Fast
                  </div>
                </div>
              </div>

              <div className="space-y-4 animate-on-scroll">
                {showcaseFeatures.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="group flex gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Premium Hardware Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional-grade equipment designed for modern restaurants
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareProducts.map((product, idx) => (
                <div 
                  key={idx} 
                  className={`animate-on-scroll animate-delay-${(idx % 3 + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
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

        {/* Self-Service Kiosk */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 md:order-1 relative">
                <img 
                  src="/lovable-uploads/kiosk-latest.png" 
                  alt="Swirl Self-Service Kiosk" 
                  className="w-full max-w-md mx-auto h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 right-8 bg-primary text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
                  40% Faster Service
                </div>
              </div>
              
              <div className="space-y-6 animate-on-scroll order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                  <MonitorSmartphone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Self-Service Technology</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Self-Service Kiosk
                </h2>
                <p className="text-xl text-gray-600">
                  Empower customers with fast, intuitive self-checkout that reduces wait times and increases order accuracy.
                </p>
                
                <div className="space-y-3">
                  {kioskBenefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Setup */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Complete Restaurant Setup
                </h2>
                <p className="text-xl text-gray-600">
                  Everything works together seamlessly — from front of house to back of kitchen
                </p>
                <ul className="space-y-4">
                  {setupFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-on-scroll">
                <img 
                  src="/lovable-uploads/pos-hardware-setup.png" 
                  alt="Complete Swirl Restaurant Hardware Setup" 
                  className="rounded-2xl shadow-xl w-full max-w-lg mx-auto h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Upgrade Your Restaurant?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Get a personalized hardware package based on your restaurant's specific needs.
              </p>

              <a 
                href="https://app.swirl.cx/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                get started for free
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SwirlHardware;