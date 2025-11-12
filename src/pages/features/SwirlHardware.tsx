import React from 'react';
import { Monitor, Printer, Tablet, ScanLine, MonitorSmartphone, Tv, Shield, Zap, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HardwareShowcaseSection from '@/components/features/hardware/HardwareShowcaseSection';
import HardwareProductCard from '@/components/features/hardware/HardwareProductCard';
import useScrollAnimation from '@/hooks/useScrollAnimation';
const SwirlHardware = () => {
  useScrollAnimation();
  const hardwareProducts = [{
    icon: Tablet,
    title: 'Point-of-Sale System',
    description: 'Complete POS solution with intuitive touchscreen interface for order taking and payment processing',
    features: ['iPad & Android compatible', 'Cloud-based', 'Real-time sync', 'Multi-user access', 'Offline mode support']
  }, {
    icon: Printer,
    title: 'Thermal Printers',
    description: 'High-speed receipt and kitchen order printers with auto-cutter technology',
    features: ['Fast printing speed', 'Auto-cutter included', 'USB & Ethernet connectivity', 'Compact design', 'Low maintenance']
  }, {
    icon: Monitor,
    title: 'Kitchen Display System (KDS)',
    description: 'Digital display system that replaces paper tickets in the kitchen for better order management',
    features: ['Real-time order updates', '15.6" HD touchscreen', 'Heat & splash resistant', 'Order tracking', 'Color-coded priorities']
  }, {
    icon: ScanLine,
    title: 'Barcode Scanner',
    description: 'Fast and accurate barcode scanning for inventory management and quick product lookup',
    features: ['1D & 2D barcode support', 'Wireless connectivity', 'Long battery life', 'Ergonomic design', 'Plug & play setup']
  }, {
    icon: MonitorSmartphone,
    title: 'Self-Service Kiosks',
    description: 'Customer-facing ordering kiosks to reduce wait times and increase order accuracy',
    features: ['10.5" touchscreen', 'Payment integration', 'Custom branding', 'Multiple language support', 'Queue management']
  }, {
    icon: Tv,
    title: 'Menu Display Screen',
    description: 'Digital menu boards for showcasing your offerings with dynamic content management',
    features: ['43" 4K display', 'Remote content updates', 'Scheduling system', 'Eye-catching animations', 'Easy content management']
  }];
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-36 md:pt-44 pb-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            {/* Floating badges */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
                <Shield className="h-4 w-4 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">Trusted by 1000+ Restaurants</span>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
                <Zap className="h-4 w-4 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">Enterprise Grade</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">swirl hardware</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Everything you need to run your restaurant efficiently. Enterprise-grade hardware that's beautiful, reliable, and built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="rounded-xl px-8 py-6 text-lg font-semibold">
                <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">get started for free</a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl px-8 py-6 text-lg font-semibold">
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Showcase Section */}
      <HardwareShowcaseSection />

      {/* Products Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Premium Hardware Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade equipment designed for the demands of modern restaurants
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareProducts.map((product, idx) => <HardwareProductCard key={idx} {...product} />)}
          </div>
        </div>
      </section>

      {/* Self-Service Kiosk Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image - Left Side */}
            <div className="animate-on-scroll order-2 md:order-1 relative">
              <div className="relative">
                {/* Image container with floating animation */}
                <div className="relative">
                  <img src="/lovable-uploads/kiosk-latest.png" alt="Swirl Self-Service Kiosk with Printer and Payment Terminal" className="w-full max-w-lg mx-auto h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-white border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="font-bold text-sm">40% Faster</span>
                </div>
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="space-y-8 animate-on-scroll order-1 md:order-2">
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-white border border-gray-300 text-gray-800 text-sm font-semibold rounded-full shadow-lg">
                    Self-Service Technology
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Self-Service Kiosk Experience
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Empower your customers with fast, intuitive self-checkout that reduces wait times and increases order accuracy.
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-foreground text-lg leading-relaxed">HD touchscreen for easy navigation and menu browsing</span>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-foreground text-lg leading-relaxed">Integrated thermal printer for instant receipt printing</span>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-foreground text-lg leading-relaxed">Built-in payment terminal for seamless transactions</span>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-foreground text-lg leading-relaxed">Reduces wait times by up to 40% during peak hours</span>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-foreground text-lg leading-relaxed">Increases order accuracy and customer satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Restaurant Setup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6 animate-on-scroll order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Complete Restaurant Setup
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything works together seamlessly - from front of house to back of kitchen
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground text-lg">All devices sync in real-time across your restaurant</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground text-lg">Kitchen receives orders instantly via KDS</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground text-lg">Printers automatically route tickets to right stations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground text-lg">One system, zero complexity</span>
                </li>
              </ul>
            </div>

            {/* Image - Right Side */}
            <div className="animate-on-scroll order-1 md:order-2">
              <img src="/lovable-uploads/pos-hardware-setup.png" alt="Complete Swirl Restaurant Hardware Setup" className="rounded-2xl shadow-lg w-full max-w-lg mx-auto h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Upgrade Your Restaurant?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get a personalized hardware package recommendation based on your restaurant's specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="rounded-xl px-8 py-6 text-lg font-semibold">
                <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">get started for free</a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl px-8 py-6 text-lg font-semibold">
                
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default SwirlHardware;