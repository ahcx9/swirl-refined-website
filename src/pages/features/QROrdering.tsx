import React, { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import { QrCode, ScanLine, ShoppingCart, CreditCard, Utensils, TrendingUp, Clock, Users, Smartphone, CheckCircle, Star, ArrowRight, Sparkles, Zap, BarChart, Shield, Phone } from 'lucide-react';
import { preloadImages } from '@/utils/imagePreloader';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const QROrdering = () => {
  useScrollAnimation();
  
  useEffect(() => {
    preloadImages([
      "/lovable-uploads/b782c244-bfdc-479d-929c-fbb28e8a4040.png",
      "/lovable-uploads/cb050b33-51a3-4f11-bd02-f9fe6ffdde44.png"
    ], 2);
  }, []);

  const processSteps = [
    { icon: ScanLine, title: "Scan", description: "Scan QR code at table" },
    { icon: ShoppingCart, title: "Browse", description: "View menu & customize" },
    { icon: Utensils, title: "Order", description: "Place order instantly" },
    { icon: CreditCard, title: "Pay", description: "Pay securely online" }
  ];

  const stats = [
    { value: "+20%", label: "Revenue Increase", icon: TrendingUp },
    { value: "-30%", label: "Wait Time", icon: Clock },
    { value: "+15%", label: "Average Order", icon: BarChart },
    { value: "99.9%", label: "Uptime", icon: Shield }
  ];

  const customerBenefits = [
    "Browse menu with high-quality images",
    "View nutritional info and allergens",
    "Customize orders with special requests",
    "Pay securely through multiple options",
    "Track order status in real-time"
  ];

  const restaurantBenefits = [
    "Reduce labor costs significantly",
    "Minimize order errors to near zero",
    "Increase table turnover by 20%",
    "Gather valuable customer data",
    "Update menu and prices instantly"
  ];

  const features = [
    {
      icon: Smartphone,
      title: "No App Required",
      description: "Works on any smartphone browser — no downloads needed"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Orders go directly to kitchen, cutting wait times dramatically"
    },
    {
      icon: TrendingUp,
      title: "Smart Upselling",
      description: "AI-powered recommendations increase average order value"
    },
    {
      icon: BarChart,
      title: "Rich Analytics",
      description: "Understand customer preferences and optimize your menu"
    }
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
              {/* Badge */}
              <div className="animate-on-scroll flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20">
                  <QrCode className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">QR Ordering System</span>
                </div>
              </div>
              
              {/* Heading */}
              <div className="text-center mb-12">
                <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Scan. Order.<br />
                  <span className="text-primary">Enjoy.</span>
                </h1>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Transform your dining experience with contactless ordering that delights customers and boosts revenue.
                </p>
                <div className="animate-on-scroll animate-delay-300">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    get started for free
                  </CustomCTAButton>
                </div>
              </div>
              
              {/* Process Flow */}
              <div className="animate-on-scroll animate-delay-400 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-1/2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-12 bg-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-2" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Powerful Features</span>
                  </div>
                  <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Streamline Your Ordering Process
                  </h2>
                  <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 mb-8">
                    Our QR ordering system allows customers to scan, browse, customize, and pay directly from their smartphones — no app download required.
                  </p>
                  
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div 
                        key={index}
                        className={`animate-on-scroll animate-delay-${(index + 2) * 100} flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="animate-on-scroll animate-delay-300 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/b782c244-bfdc-479d-929c-fbb28e8a4040.png" 
                    alt="QR code scanning experience" 
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Benefits for Everyone
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* For Customers */}
                <div className="animate-on-scroll animate-delay-100 bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">For Your Customers</h3>
                  </div>
                  <ul className="space-y-4">
                    {customerBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* For Restaurant */}
                <div className="animate-on-scroll animate-delay-200 bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">For Your Restaurant</h3>
                  </div>
                  <ul className="space-y-4">
                    {restaurantBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order at Ease Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/cb050b33-51a3-4f11-bd02-f9fe6ffdde44.png" 
                    alt="Order at your ease on smartphone" 
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
                
                <div className="order-1 md:order-2">
                  <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Order at Your Ease
                  </h2>
                  <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600 mb-8">
                    Give your customers the seamless ordering experience they deserve. View detailed descriptions, dietary information, prep times, and customize every order — all from their phone.
                  </p>
                  
                  <div className="animate-on-scroll animate-delay-200 space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Mobile Optimized</h3>
                        <p className="text-gray-600 text-sm">Works perfectly on any device — no app needed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Table Splitting</h3>
                        <p className="text-gray-600 text-sm">Let groups order and pay separately</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Customization</h3>
                        <p className="text-gray-600 text-sm">Detailed modifiers and special requests</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustedRestaurants />

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Revolutionize Your Ordering?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600 mb-8">
                Join thousands of restaurants using QR ordering to boost efficiency and revenue
              </p>
              <div className="animate-on-scroll animate-delay-200">
                <a 
                  href="https://app.swirl.cx/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

export default QROrdering;
