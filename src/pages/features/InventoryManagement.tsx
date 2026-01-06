import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Package, TrendingUp, TrendingDown, Clock, Bell, RefreshCw, LineChart, Database, Link2, Boxes, Users, BarChart, FileText, Calculator, ArrowRight, Check, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import InventoryMockup from '@/components/features/inventory/InventoryMockup';

const InventoryManagement = () => {
  const { t } = useLanguage();
  useScrollAnimation();

  const stats = [
    { value: "40%", label: "Waste Reduction", icon: TrendingDown },
    { value: "30%", label: "Cost Savings", icon: TrendingUp },
    { value: "10hrs", label: "Saved Per Week", icon: Clock }
  ];

  const features = [
    { title: "Real-time Tracking", description: "Monitor inventory levels across all locations instantly", icon: LineChart },
    { title: "Low Stock Alerts", description: "Get notified before you run out of key items", icon: Bell },
    { title: "Auto Ordering", description: "Automatic purchase orders when stock runs low", icon: RefreshCw },
    { title: "Waste Tracking", description: "Monitor and reduce food waste with analytics", icon: TrendingDown },
    { title: "Multi-Location", description: "Manage all locations from one dashboard", icon: Database },
    { title: "Recipe Costing", description: "Calculate exact food costs per dish", icon: Calculator },
    { title: "Supplier Management", description: "Track vendors and manage orders", icon: Users },
    { title: "Reports & Exports", description: "Detailed reports you can export anytime", icon: FileText }
  ];

  const benefits = [
    { title: "Reduce Food Waste", description: "Cut waste by up to 40% with precise tracking", icon: TrendingDown, stat: "40%" },
    { title: "Lower Costs", description: "Save 20-30% on inventory carrying costs", icon: BarChart, stat: "30%" },
    { title: "Never Run Out", description: "Automated alerts prevent stockouts", icon: Bell, stat: "0" },
    { title: "Multi-Location", description: "One dashboard for all your restaurants", icon: Database, stat: "∞" },
    { title: "Auto Ordering", description: "Set it and forget it ordering system", icon: RefreshCw, stat: "24/7" },
    { title: "Seamless Integration", description: "Works with your existing tools", icon: Link2, stat: "100%" }
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Two Column Layout */}
        <section className="relative pt-32 pb-20 bg-white overflow-hidden">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column - Content */}
                <div className="lg:sticky lg:top-32">
                  {/* Badge */}
                  <div className="animate-on-scroll mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                      <Package className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">Inventory Management</span>
                    </div>
                  </div>
                  
                  {/* Heading */}
                  <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Know Your Stock.<br />
                    <span className="text-primary">Control Your Costs.</span>
                  </h1>
                  <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 mb-8">
                    Reduce waste, prevent stockouts, and take control of food costs across every location with real-time inventory tracking.
                  </p>
                  
                  {/* Stats Row */}
                  <div className="animate-on-scroll animate-delay-300 grid grid-cols-3 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="animate-on-scroll animate-delay-400">
                    <div className="btn-conteiner scale-90">
                      <a 
                        className="btn-content" 
                        href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="btn-title">Book Demo</span>
                        <span className="icon-arrow">
                          <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                              <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                              <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                            </g>
                          </svg>
                        </span> 
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Mockup */}
                <div className="animate-on-scroll animate-delay-200 relative">
                  <InventoryMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Icon Grid */}
        <section className="py-20 bg-gray-50">
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
                <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
                  8 powerful features that work together to give you complete control
                </p>
              </div>
              
              {/* Icon Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index % 4 + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center`}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/20">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Bento Grid */}
        <section className="py-20 bg-white">
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
                    className={`animate-on-scroll animate-delay-${(index % 3 + 1) * 100} group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
                  >
                    {/* Stat Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-sm font-bold text-primary">{benefit.stat}</span>
                    </div>
                    
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
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Seamless Integrations
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600 mb-12">
                Connect with your existing restaurant technology ecosystem
              </p>
              
              <div className="animate-on-scroll animate-delay-200 grid md:grid-cols-3 gap-6">
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Boxes className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">POS Integration</h3>
                  <p className="text-gray-600 text-sm">Auto-update inventory with every sale</p>
                </div>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Supplier Connections</h3>
                  <p className="text-gray-600 text-sm">Direct ordering from vendors</p>
                </div>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
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
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="animate-on-scroll animate-delay-100">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl mb-3 border-0 px-6">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary hover:no-underline">
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
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Control Your Inventory?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join 1000+ restaurants cutting costs and reducing waste with swirl
              </p>
              <div className="animate-on-scroll animate-delay-200 flex justify-center">
                <div className="btn-conteiner scale-90">
                  <a 
                    className="btn-content" 
                    href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="btn-title">Book Demo</span>
                    <span className="icon-arrow">
                      <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                          <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                          <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                        </g>
                      </svg>
                    </span> 
                  </a>
                </div>
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