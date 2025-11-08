import React from 'react';
import { CheckCircle, Package, Printer, CreditCard, Monitor, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
const SwirlHardware = () => {
  const hardwareItems = [{
    icon: <Monitor className="h-6 w-6 md:h-8 md:w-8 text-swirl-blue" />,
    title: 'POS Tablets',
    description: 'Professional-grade tablets with iPad and Android compatibility for seamless operations.'
  }, {
    icon: <Printer className="h-6 w-6 md:h-8 md:w-8 text-swirl-blue" />,
    title: 'Thermal Printers',
    description: 'High-speed receipt printers with auto-cutter and multiple connectivity options.'
  }, {
    icon: <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-swirl-blue" />,
    title: 'pos hardware',
    description: 'Complete POS hardware ecosystem including tablets, printers, payment terminals, and accessories for seamless restaurant operations.'
  }, {
    icon: <Monitor className="h-6 w-6 md:h-8 md:w-8 text-swirl-blue" />,
    title: 'Kitchen Display',
    description: 'Durable kitchen-grade displays for efficient order management and preparation.'
  }, {
    icon: <Package className="h-6 w-6 md:h-8 md:w-8 text-swirl-blue" />,
    title: 'Cash Drawers',
    description: 'Secure cash management solutions with automatic opening and lock mechanisms.'
  }, {
    icon: <Wifi className="h-6 w-6 md:h-8 md:w-8 text-swirl-blue" />,
    title: 'Networking Equipment',
    description: 'Enterprise-grade routers and network setup for reliable connectivity.'
  }];
  const benefits = [{
    icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
    text: 'Commercial-grade reliability for 24/7 operations'
  }, {
    icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
    text: 'Seamless integration with Swirl POS software'
  }, {
    icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
    text: 'Full warranty and technical support included'
  }, {
    icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
    text: 'Easy setup with plug-and-play configuration'
  }, {
    icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
    text: 'Scalable solutions from single to multi-location'
  }, {
    icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
    text: 'Competitive pricing with flexible payment plans'
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 lg:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">cloud based point-of-sale system<Package className="h-4 w-4" />
                Complete Hardware Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">swirl POS hardware solutions</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">Everything you need to run your restaurant efficiently. From tablets to printers,kitchen display screen - all optimized for Swirl POS.</p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Button asChild className="bg-gradient-to-r from-swirl-blue to-blue-500 hover:from-swirl-blue/90 hover:to-blue-600 text-white rounded-xl px-5 py-3 md:px-6 md:py-3.5">
                  <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl px-5 py-3 md:px-6 md:py-3.5">
                  
                </Button>
              </div>
            </div>
            <div className="order-first md:order-last">
              <img src="/lovable-uploads/swirl-pos-hardware.jpg" alt="Swirl POS Hardware - Tablets, Printers, and Payment Terminals" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Components */}
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Complete hardware solution for restaurants/cafes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Modern systems designed for fast moving restaurant to ensure smoothest billing you/your staff can have</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hardwareItems.map((item, index) => <div key={index} className="rounded-2xl border border-black/10 shadow-sm p-5 md:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Swirl Hardware */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Choose Swirl Hardware?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">Our hardware solutions are specifically selected and configured to work seamlessly with swirl POS software, ensuring maximum reliability and performance.</p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                    {benefit.icon}
                    <span className="text-foreground">{benefit.text}</span>
                  </div>)}
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 shadow-sm p-6 md:p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Upgrade Your Restaurant?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a personalized hardware package recommendation based on your restaurant's needs.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-gradient-to-r from-swirl-blue to-blue-500 hover:from-swirl-blue/90 hover:to-blue-600 text-white rounded-xl px-5 py-3 md:px-6 md:py-3.5">
                  <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
                    Request a Quote
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-xl px-5 py-3 md:px-6 md:py-3.5">
                  <a href="/contact">
                    Schedule a Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default SwirlHardware;