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
    features: ['21.5" touchscreen', 'Payment integration', 'Custom branding', 'Multiple language support', 'Queue management']
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

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">point-of-sale hardware system</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Everything you need to run your restaurant efficiently. Enterprise-grade hardware that's beautiful, reliable, and built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="rounded-xl px-8 py-6 text-lg font-semibold">
                <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">Get Started For Free!</a>
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
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - Left Side */}
            <div className="animate-on-scroll order-2 md:order-1">
              <img 
                src="/lovable-uploads/mini-kiosk.jpg" 
                alt="Swirl Self-Service Kiosk with Printer and Payment Terminal" 
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto h-auto"
              />
            </div>
            
            {/* Content - Right Side */}
            <div className="space-y-6 animate-on-scroll order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Self-Service Kiosk Experience
              </h2>
              <p className="text-xl text-gray-600">
                Empower your customers with fast, intuitive self-checkout that reduces wait times and increases order accuracy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">HD touchscreen for easy navigation and menu browsing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integrated thermal printer for instant receipt printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Built-in payment terminal for seamless transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reduces wait times by up to 40% during peak hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Increases order accuracy and customer satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Restaurant Setup Section */}
      <section className="py-20 bg-gray-50">
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
              <img 
                src="/lovable-uploads/pos-hardware-setup.png" 
                alt="Complete Swirl Restaurant Hardware Setup" 
                className="rounded-2xl shadow-lg w-full max-w-lg mx-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50 border-t">
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
                <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
                  Talk to Hardware Expert
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl px-8 py-6 text-lg font-semibold">
                <a href="/contact">
                  Schedule a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default SwirlHardware;