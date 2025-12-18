import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import CustomCTAButton from '@/components/CustomCTAButton';
import { Car, MapPin, Clock, CreditCard, Bell, Smartphone, CheckCircle, ArrowRight, Sparkles, TrendingUp, Users, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const InCarOrdering = () => {
  useScrollAnimation();

  const processSteps = [
    { step: "01", icon: MapPin, title: "Scan & Check In", description: "Customer parks and scans unique QR code" },
    { step: "02", icon: Smartphone, title: "Browse & Order", description: "Browse full menu and submit order" },
    { step: "03", icon: Clock, title: "Track Progress", description: "Real-time updates on order status" },
    { step: "04", icon: CreditCard, title: "Pay & Receive", description: "Pay securely, get delivery to car" }
  ];

  const features = [
    { title: "GPS Location Tracking", description: "Pinpoint customer location in your parking lot", icon: MapPin },
    { title: "Digital Car Hop", description: "Streamline curbside pickup with digital notifications", icon: Bell },
    { title: "Real-time Status", description: "Keep customers informed with automatic updates", icon: Clock },
    { title: "Secure Payments", description: "Process payments directly through customer devices", icon: CreditCard }
  ];

  const benefits = [
    { title: "Increased Sales", description: "Serve more customers without adding tables", icon: TrendingUp, stat: "+30%" },
    { title: "Enhanced Experience", description: "Convenience for customers who prefer to stay in vehicles", icon: Users, stat: "5★" },
    { title: "Optimized Workflow", description: "Digital ordering reduces errors", icon: Clock, stat: "-40%" },
    { title: "Competitive Edge", description: "Stand out with modern ordering options", icon: Shield, stat: "#1" }
  ];

  const whySwirl = [
    { icon: Smartphone, title: "Mobile-Optimized", description: "Perfect on any device, no app needed" },
    { icon: Bell, title: "Smart Notifications", description: "Automated alerts throughout the process" },
    { icon: CreditCard, title: "Secure Payments", description: "PCI-compliant with multiple options" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-white overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                    <Car className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">In-Car Ordering</span>
                  </div>
                  
                  <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Order From<br />
                    <span className="text-primary">Your Car</span>
                  </h1>
                  
                  <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 mb-8">
                    Skip the lines and order effortlessly. Browse menus, place orders, and pay without leaving your vehicle.
                  </p>
                  
                  <div className="animate-on-scroll animate-delay-300">
                    <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                      get started for free
                    </CustomCTAButton>
                  </div>
                </div>
                
                <div className="animate-on-scroll animate-delay-400">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      alt="In-Car Ordering Service" 
                      className="w-full h-auto"
                      src="/lovable-uploads/535c3886-674a-48f2-a7e7-99cbc2c15dbc.png" 
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How In-Car Ordering Works
                </h2>
              </div>

              {/* Horizontal Timeline */}
              <div className="relative">
                <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
                <div className="grid md:grid-cols-4 gap-6">
                  {processSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`animate-on-scroll animate-delay-${(index + 1) * 100} group text-center`}
                    >
                      <div className="relative">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white border-2 border-gray-100 group-hover:border-primary/50 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Features */}
                <div className="animate-on-scroll">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Key Features</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Everything You Need
                  </h2>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div 
                        key={index}
                        className="group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

                {/* Benefits Grid */}
                <div className="animate-on-scroll animate-delay-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Benefits for Your Business</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <benefit.icon className="w-6 h-6 text-primary" />
                          <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">{benefit.stat}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-xs text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Swirl */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose swirl?
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {whySwirl.map((item, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center`}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Revolutionize Curbside Service?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join forward-thinking restaurants enhancing customer convenience and increasing revenue.
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

export default InCarOrdering;