import React from 'react';
import { Monitor, Printer, CreditCard, Package, Wifi, Smartphone, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HardwareShowcaseSection from '@/components/features/hardware/HardwareShowcaseSection';
import HardwareProductCard from '@/components/features/hardware/HardwareProductCard';
import PackageBundleCard from '@/components/features/hardware/PackageBundleCard';
import IntegrationSteps from '@/components/features/hardware/IntegrationSteps';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const SwirlHardware = () => {
  useScrollAnimation();

  const hardwareProducts = [
    {
      icon: Smartphone,
      title: 'POS Tablets',
      description: 'Professional-grade tablets optimized for restaurant operations with iPad and Android compatibility.',
      price: '$499',
      features: [
        'iPad & Android support',
        'High-resolution display',
        'All-day battery life',
        'Spill & dust resistant',
        'Premium protective case'
      ]
    },
    {
      icon: Printer,
      title: 'Thermal Printers',
      description: 'Lightning-fast receipt and kitchen order printers with auto-cutter technology.',
      price: '$299',
      features: [
        'High-speed printing',
        'Auto-cutter included',
        'USB & Ethernet connectivity',
        'Compact design',
        'Low maintenance'
      ],
      popular: true
    },
    {
      icon: CreditCard,
      title: 'Payment Terminals',
      description: 'Secure payment processing with support for all major credit cards and mobile payments.',
      price: '$199',
      features: [
        'EMV chip & contactless',
        'Apple Pay & Google Pay',
        'End-to-end encryption',
        'Fast transaction speed',
        'PCI compliant'
      ]
    },
    {
      icon: Monitor,
      title: 'Kitchen Display',
      description: 'Durable kitchen-grade displays that streamline order preparation and reduce errors.',
      price: '$599',
      features: [
        'Heat & splash resistant',
        'Real-time order updates',
        '15.6" HD display',
        'Wall mountable',
        'Easy to clean'
      ]
    },
    {
      icon: Package,
      title: 'Cash Drawers',
      description: 'Secure cash management with automatic opening and multiple compartment options.',
      price: '$149',
      features: [
        'Auto-open with printer',
        'Locking mechanism',
        '5 bill / 5 coin slots',
        'Steel construction',
        'Under-counter mounting'
      ]
    },
    {
      icon: Wifi,
      title: 'Networking Kit',
      description: 'Enterprise-grade networking equipment for reliable connectivity across your restaurant.',
      price: '$249',
      features: [
        'High-speed router',
        'Extended range',
        'Multiple device support',
        'Guest network option',
        'Professional setup'
      ]
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$1,499',
      priceSubtext: 'One-time payment',
      description: 'Perfect for food trucks and small cafes',
      hardware: [
        '1x POS Tablet (iPad/Android)',
        '1x Receipt Printer',
        '1x Payment Terminal',
        '1x Cash Drawer'
      ],
      features: [
        'Complete POS software included',
        'Free setup & training',
        '1-year warranty',
        'Email support',
        'Cloud backup included'
      ]
    },
    {
      name: 'Professional',
      price: '$3,999',
      priceSubtext: 'Best value for restaurants',
      description: 'Most popular choice for full-service restaurants',
      hardware: [
        '2x POS Tablets',
        '2x Receipt Printers',
        '1x Kitchen Display System',
        '2x Payment Terminals',
        '1x Cash Drawer',
        '1x Networking Kit'
      ],
      features: [
        'Everything in Starter',
        'Kitchen display system',
        'Multi-station support',
        'Priority phone support',
        '2-year warranty',
        'Free on-site installation',
        'Advanced analytics included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      priceSubtext: 'Tailored to your needs',
      description: 'For multi-location restaurants and chains',
      hardware: [
        'Unlimited POS Tablets',
        'Unlimited Printers',
        'Multiple Kitchen Displays',
        'Payment Terminal Fleet',
        'Complete Network Setup',
        'Custom Configuration'
      ],
      features: [
        'Everything in Professional',
        'Multi-location management',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom integrations',
        'Lifetime warranty',
        'On-site training program',
        'White-glove setup service'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-36 md:pt-44 pb-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-on-scroll">
            {/* Floating badges */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-purple-200 flex items-center gap-2 hover:scale-105 transition-transform">
                <Shield className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900">Trusted by 1000+ Restaurants</span>
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-200 flex items-center gap-2 hover:scale-105 transition-transform">
                <Zap className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">Enterprise Grade</span>
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-indigo-200 flex items-center gap-2 hover:scale-105 transition-transform">
                <Globe className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-900">Global Shipping</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 leading-tight">
              Premium POS Hardware
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Everything you need to run your restaurant efficiently. Enterprise-grade hardware that's beautiful, reliable, and built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
              >
                <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
                  Get Started Now
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="rounded-xl px-8 py-6 text-lg font-semibold border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 hover:scale-105 transition-all duration-300"
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
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
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

      {/* Package Bundles Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Complete Package Bundles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need in one package. Save time and money with our curated bundles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <PackageBundleCard key={idx} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <IntegrationSteps />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your Restaurant?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get a personalized hardware package recommendation based on your restaurant's specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                asChild
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
                  Talk to Hardware Expert
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <a href="/contact">
                  Schedule a Demo
                </a>
              </Button>
            </div>

            {/* Guarantee badges */}
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { icon: Shield, text: '2-Year Warranty' },
                { icon: Zap, text: 'Free Setup' },
                { icon: Package, text: 'Free Shipping' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <item.icon className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwirlHardware;
