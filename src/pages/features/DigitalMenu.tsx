import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { FileText, Globe, DollarSign, Utensils, Clock, Star, Bot, Smartphone, BarChart, Sparkles, Check, ArrowRight, Palette, Languages, Zap, Upload, Brain, Wand2, FileImage, Timer, GitBranch, Building, Copy, RefreshCw, Settings } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const DigitalMenu = () => {
  const { t } = useLanguage();
  useScrollAnimation();

  const features = [
    { icon: Languages, title: "30+ Languages", description: "Auto-translate your menu for international guests" },
    { icon: DollarSign, title: "Multi-Currency", description: "Real-time currency conversion for travelers" },
    { icon: Utensils, title: "Nutrition Info", description: "Display calories, allergens, and dietary tags" },
    { icon: Clock, title: "Prep Times", description: "Set expectations with estimated wait times" },
    { icon: Star, title: "Customer Reviews", description: "Show ratings to help customers choose" },
    { icon: Bot, title: "AI Descriptions", description: "Generate enticing descriptions automatically" }
  ];

  const menuAIFeatures = [
    { icon: Upload, title: "Upload Any Format", description: "PDF, image, or photo of your menu" },
    { icon: Brain, title: "AI Auto-Categorization", description: "Items sorted into categories instantly" },
    { icon: DollarSign, title: "Smart Pricing Extraction", description: "Prices detected automatically" },
    { icon: Wand2, title: "One-Click Enhancement", description: "Beautify descriptions with AI" }
  ];

  const menuAIStats = [
    { value: "10", unit: "sec", label: "Average Processing" },
    { value: "99", unit: "%", label: "Accuracy Rate" },
    { value: "50+", unit: "", label: "Supported Formats" }
  ];

  const benefits = [
    { icon: Zap, title: "Instant Updates", description: "Change prices, add items, or update descriptions in seconds. No reprinting needed.", stat: "Zero printing costs" },
    { icon: Globe, title: "Reach More Guests", description: "Automatic translations and currency conversion welcome international visitors.", stat: "30+ languages" },
    { icon: BarChart, title: "Data-Driven Insights", description: "See which items customers view most and optimize your menu accordingly.", stat: "2x engagement" },
    { icon: Palette, title: "Beautiful Design", description: "Professionally designed templates that showcase your food beautifully.", stat: "Custom branding" }
  ];

  const steps = [
    { number: "01", title: "Create", description: "Upload your menu items with photos and descriptions" },
    { number: "02", title: "Customize", description: "Choose your design, colors, and enable features" },
    { number: "03", title: "Share", description: "Generate a QR code or link to share with customers" }
  ];

  const testimonials = [
    { name: "Marco R.", role: "Fine Dining Owner", quote: "Our international guests love being able to view the menu in their language." },
    { name: "Sarah L.", role: "Café Manager", quote: "We update specials daily without printing anything. Game changer!" },
    { name: "Ahmed K.", role: "Restaurant Chain", quote: "Rolling out menu changes across 12 locations takes minutes now." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="animate-on-scroll flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{t('digitalMenu.title')}</span>
                </div>
              </div>
              
              <div className="text-center mb-12">
                <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Menus That Sell<br />
                  <span className="text-primary">Themselves</span>
                </h1>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Transform your menu into an interactive sales tool with beautiful designs, real-time updates, and AI-powered features.
                </p>
                <div className="animate-on-scroll animate-delay-300">
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
          </div>
        </section>

        {/* Menu AI Section - NEW */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-6 border border-primary/20">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Menu AI</span>
                  <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">NEW</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Upload Your Menu.<br />
                  Let <span className="text-primary">AI</span> Do the Rest.
                </h2>
                <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
                  Transform any menu PDF or image into a fully categorized digital menu in seconds. No manual data entry needed.
                </p>
              </div>

              {/* AI Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16">
                {menuAIStats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} text-center group`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                        {stat.value}<span className="text-2xl">{stat.unit}</span>
                      </div>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Upload Visual & Features */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Upload Animation Visual */}
                <div className="animate-on-scroll order-2 md:order-1">
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl shadow-primary/30 animate-pulse">
                        <Upload className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Drop your menu here</h3>
                      <p className="text-gray-500 mb-4">PDF, JPG, PNG, or take a photo</p>
                      
                      {/* Processing Animation */}
                      <div className="flex items-center justify-center gap-3 text-sm">
                        <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-full">
                          <Timer className="w-4 h-4 text-primary animate-spin" />
                          <span className="text-primary font-medium">Processing...</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="flex items-center gap-2 px-3 py-2 bg-green-100 rounded-full">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-medium">Done!</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating badges */}
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                      AI Powered
                    </div>
                    <div className="absolute -bottom-3 -left-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Instant Results
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="animate-on-scroll order-1 md:order-2 space-y-4">
                  {menuAIFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Powerful Features</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything Your Menu Needs
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white hover:bg-white rounded-2xl p-6 border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Go Digital?
                </h2>
                <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600">
                  More than just a menu — a complete guest experience solution
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {benefit.stat}
                          </span>
                        </div>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get Started in Minutes
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} text-center`}
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">{step.number}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Branch Menu Import Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Multi-Branch Ready</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Clone Your Menu to<br />
                  <span className="text-primary">New Branches Instantly</span>
                </h2>
                <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
                  Save hours of setup time when opening new locations. Transfer your entire menu structure in seconds.
                </p>
              </div>

              {/* Branch Transfer Visual */}
              <div className="animate-on-scroll animate-delay-300 max-w-4xl mx-auto mb-16">
                <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Source Branch */}
                    <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 relative shadow-lg">
                      <div className="absolute -top-3 left-4 px-3 py-1 bg-gray-700 text-white text-xs font-bold rounded-full">
                        Source
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Building className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Branch A</p>
                          <p className="text-xs text-gray-500">Main Store</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">150 menu items</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">12 categories</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">All modifiers</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">Images & pricing</span>
                        </div>
                      </div>
                    </div>

                    {/* Transfer Animation */}
                    <div className="flex flex-col items-center justify-center py-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl shadow-primary/30 animate-pulse">
                          <Copy className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -inset-2 border-2 border-dashed border-primary/40 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
                      </div>
                      <p className="mt-4 text-sm font-bold text-primary">Clone in seconds!</p>
                      <div className="flex items-center gap-1 mt-2">
                        <ArrowRight className="w-4 h-4 text-primary animate-pulse" />
                        <ArrowRight className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <ArrowRight className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>

                    {/* Destination Branch */}
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-2 border-primary/30 relative overflow-hidden shadow-lg">
                      <div className="absolute -top-3 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                        New Branch
                      </div>
                      <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                            <Building className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Branch B</p>
                            <p className="text-xs text-primary font-medium">New Store</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-gray-700 font-medium">150 items cloned</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-gray-700 font-medium">12 categories</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-gray-700 font-medium">All modifiers</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-gray-700 font-medium">Ready to customize</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {[
                  { icon: Copy, title: "Full Menu Copy", desc: "All items & categories" },
                  { icon: RefreshCw, title: "Sync or Customize", desc: "Your choice" },
                  { icon: FileImage, title: "Keep All Images", desc: "Auto-transferred" },
                  { icon: DollarSign, title: "Retain Pricing", desc: "Structure intact" },
                  { icon: Settings, title: "All Modifiers", desc: "Sizes & add-ons" },
                  { icon: Upload, title: "Bulk Import", desc: "CSV/Excel support" }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} bg-gray-50 rounded-xl p-4 text-center border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Loved by Restaurants Worldwide
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Revolutionize Your Menu?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join restaurants worldwide using digital menus to enhance guest experience
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

export default DigitalMenu;
