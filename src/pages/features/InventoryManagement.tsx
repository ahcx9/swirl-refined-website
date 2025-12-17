import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Package, TrendingUp, Clipboard, Users, BarChart, AlertTriangle, ArrowRight, Check, Sparkles, TrendingDown, Clock, Boxes, Bell, RefreshCw, LineChart, Database, Link2, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const InventoryManagement = () => {
  const { t } = useLanguage();
  useScrollAnimation();

  const stats = [
    { value: "40%", label: "Waste Reduction", icon: TrendingDown },
    { value: "30%", label: "Cost Savings", icon: TrendingUp },
    { value: "10hrs", label: "Saved Per Week", icon: Clock }
  ];

  const features = [
    {
      title: "Real-time Tracking",
      description: "Monitor inventory levels across all locations instantly. Get immediate visibility into stock levels, usage patterns, and inventory valuation with live updates.",
      icon: LineChart,
      image: "/lovable-uploads/inventory-overview.png"
    },
    {
      title: "Smart Alerts & Notifications",
      description: "Never run out of stock again. Set custom thresholds and receive instant alerts when items are running low, preventing stockouts and service interruptions.",
      icon: Bell,
      image: "/lovable-uploads/inventory-overview.png"
    },
    {
      title: "Automated Ordering",
      description: "Save hours on manual ordering. The system automatically generates purchase orders when items hit minimum levels, ensuring optimal stock without the hassle.",
      icon: RefreshCw,
      image: "/lovable-uploads/inventory-overview.png"
    }
  ];

  const benefits = [
    { title: "Reduce Food Waste", description: "Cut waste by up to 40% with precise tracking", icon: TrendingDown },
    { title: "Lower Costs", description: "Save 20-30% on inventory carrying costs", icon: BarChart },
    { title: "Real-time Alerts", description: "Get notified before you run out", icon: Bell },
    { title: "Multi-Location", description: "Manage all locations from one dashboard", icon: Database },
    { title: "Auto Ordering", description: "Never manually reorder again", icon: RefreshCw },
    { title: "Seamless Integration", description: "Works with your existing tools", icon: Link2 }
  ];

  const faqs = [
    {
      question: "How does real-time tracking work?",
      answer: "Our system integrates directly with your POS, automatically updating inventory levels with every sale. You can also perform manual stock counts that sync instantly across all your locations."
    },
    {
      question: "Can I manage multiple restaurant locations?",
      answer: "Yes! Our multi-location support allows you to manage inventory across all your restaurants from a single dashboard. Transfer stock between locations, compare performance, and maintain optimal levels everywhere."
    },
    {
      question: "How does automated ordering save time?",
      answer: "Set minimum stock thresholds for each item, and the system automatically generates purchase orders when levels drop. You can review and approve orders with one click, or enable full automation for routine items."
    },
    {
      question: "What reports are available?",
      answer: "Access detailed reports on inventory turnover, waste tracking, cost analysis, supplier performance, and usage patterns. All reports can be exported and scheduled for automatic delivery."
    },
    {
      question: "Does it integrate with my current POS?",
      answer: "Swirl Inventory Management integrates seamlessly with Swirl POS and can also connect with popular third-party POS systems. Our team will help you set up the integration during onboarding."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Dark Theme */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Badge */}
              <div className="animate-on-scroll flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Package className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-white">{t('inventory.title')}</span>
                </div>
              </div>
              
              {/* Heading */}
              <div className="text-center mb-10">
                <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Take Control of Your<br />
                  <span className="text-primary">Food Costs</span>
                </h1>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Reduce waste, stop variance, and take charge of food costs across every location with real-time inventory tracking.
                </p>
                <div className="animate-on-scroll animate-delay-300">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    {t('cta.getStarted')}
                  </CustomCTAButton>
                </div>
              </div>
              
              {/* Stats */}
              <div className="animate-on-scroll animate-delay-400 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Hero Image */}
              <div className="animate-on-scroll animate-delay-500 relative max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 rounded-xl" />
                <img 
                  src="/lovable-uploads/inventory-overview.png" 
                  alt="Inventory Management Dashboard" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Powerful Features</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything You Need to Control Inventory
                </h2>
              </div>
              
              {/* Feature Cards */}
              <div className="space-y-16">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <feature.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <a href="https://app.swirl.cx/register" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                    <div className={`rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <img src={feature.image} alt={feature.title} className="w-full h-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Bento Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Restaurants Choose swirl
                </h2>
                <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600">
                  Join thousands of restaurants optimizing their inventory
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Seamless Integrations
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600 mb-12">
                Connect with your existing restaurant technology ecosystem
              </p>
              
              <div className="animate-on-scroll animate-delay-200 grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <Boxes className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">POS Integration</h3>
                  <p className="text-gray-600 text-sm">Auto-update inventory with every sale</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Supplier Connections</h3>
                  <p className="text-gray-600 text-sm">Direct ordering from vendors</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <BarChart className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Financial Software</h3>
                  <p className="text-gray-600 text-sm">Sync with your accounting tools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="animate-on-scroll animate-delay-100">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl mb-3 border border-gray-100 px-6">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Inventory Management?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join 1000+ restaurants cutting costs and reducing waste with swirl
              </p>
              <div className="animate-on-scroll animate-delay-200">
                <a 
                  href="https://app.swirl.cx/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
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

export default InventoryManagement;
