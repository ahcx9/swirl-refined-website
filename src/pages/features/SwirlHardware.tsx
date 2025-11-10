import React from 'react';
import { Monitor, Printer, Tablet, ScanLine, MonitorSmartphone, Tv, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HardwareShowcaseSection from '@/components/features/hardware/HardwareShowcaseSection';
import HardwareProductCard from '@/components/features/hardware/HardwareProductCard';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const SwirlHardware = () => {
  useScrollAnimation();

  const hardwareProducts = [
    {
      icon: Tablet,
      title: 'Point-of-Sale System',
      description: 'Complete POS solution with intuitive touchscreen interface for order taking and payment processing',
      features: [
        'iPad & Android compatible',
        'Cloud-based',
        'Real-time sync',
        'Multi-user access',
        'Offline mode support'
      ]
    },
    {
      icon: Printer,
      title: 'Thermal Printers',
      description: 'High-speed receipt and kitchen order printers with auto-cutter technology',
      features: [
        'Fast printing speed',
        'Auto-cutter included',
        'USB & Ethernet connectivity',
        'Compact design',
        'Low maintenance'
      ]
    },
    {
      icon: Monitor,
      title: 'Kitchen Display System (KDS)',
      description: 'Digital display system that replaces paper tickets in the kitchen for better order management',
      features: [
        'Real-time order updates',
        '15.6" HD touchscreen',
        'Heat & splash resistant',
        'Order tracking',
        'Color-coded priorities'
      ]
    },
    {
      icon: ScanLine,
      title: 'Barcode Scanner',
      description: 'Fast and accurate barcode scanning for inventory management and quick product lookup',
      features: [
        '1D & 2D barcode support',
        'Wireless connectivity',
        'Long battery life',
        'Ergonomic design',
        'Plug & play setup'
      ]
    },
    {
      icon: MonitorSmartphone,
      title: 'Self-Service Kiosks',
      description: 'Customer-facing ordering kiosks to reduce wait times and increase order accuracy',
      features: [
        '21.5" touchscreen',
        'Payment integration',
        'Custom branding',
        'Multiple language support',
        'Queue management'
      ]
    },
    {
      icon: Tv,
      title: 'Menu Display Screen',
      description: 'Digital menu boards for showcasing your offerings with dynamic content management',
      features: [
        '43" 4K display',
        'Remote content updates',
        'Scheduling system',
        'Eye-catching animations',
        'Easy content management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Premium POS Hardware
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Everything you need to run your restaurant efficiently. Enterprise-grade hardware that's beautiful, reliable, and built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="rounded-xl px-8 py-6 text-lg font-semibold"
              >
                <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
                  Get Started Now
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="rounded-xl px-8 py-6 text-lg font-semibold"
              >
                <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
                  Request a Quote
                </a>
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
            {hardwareProducts.map((product, idx) => (
              <HardwareProductCard key={idx} {...product} />
            ))}
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
              <Button 
                asChild
                className="rounded-xl px-8 py-6 text-lg font-semibold"
              >
                <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
                  Talk to Hardware Expert
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="rounded-xl px-8 py-6 text-lg font-semibold"
              >
                <a href="/contact">
                  Schedule a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwirlHardware;
