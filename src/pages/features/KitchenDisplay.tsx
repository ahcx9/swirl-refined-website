import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import CustomCTAButton from '@/components/CustomCTAButton';
import { ChefHat, Timer, Bell, ClipboardCheck, Settings, ArrowRight, CheckCircle, Users, BarChart3, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const KitchenDisplay = () => {
  useScrollAnimation();

  const stats = [
    { value: "25%", label: "Faster Orders" },
    { value: "40%", label: "Fewer Errors" },
    { value: "30%", label: "More Efficient" },
    { value: "95%", label: "Satisfaction" }
  ];

  const features = [
    { title: "Real-time Order Management", description: "Monitor and manage orders with instant updates from front-of-house", icon: Timer },
    { title: "Recipe Management", description: "Access digital recipes, prep instructions, and plating guides", icon: ChefHat },
    { title: "Order Priority & Alerts", description: "Smart prioritization with customizable alerts for urgent orders", icon: Bell },
    { title: "Performance Analytics", description: "Track kitchen metrics, preparation times, and efficiency", icon: ClipboardCheck },
    { title: "Customizable Interface", description: "Tailor the display layout to your kitchen's specific needs", icon: Settings }
  ];

  const benefits = [
    { icon: Zap, title: "Increase Kitchen Speed", description: "Reduce ticket times by 25% with streamlined order flow" },
    { icon: CheckCircle, title: "Reduce Errors", description: "Digital orders eliminate handwriting confusion" },
    { icon: Users, title: "Improve Communication", description: "Keep front and back of house perfectly synchronized" },
    { icon: BarChart3, title: "Data-Driven Insights", description: "Make informed decisions with performance analytics" }
  ];

  const howItWorks = [
    { step: "1", title: "Order Received", description: "Orders automatically appear with all details and modifications clearly visible" },
    { step: "2", title: "Smart Prioritization", description: "Intelligent system prioritizes orders based on prep time and wait times" },
    { step: "3", title: "Real-time Updates", description: "Mark items complete with real-time updates to front-of-house and customers" }
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
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                    <ChefHat className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Kitchen Display System</span>
                  </div>
                  
                  <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                    Streamline Your<br />
                    <span className="text-primary">Kitchen</span>
                  </h1>
                  
                  <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 mb-8">
                    Transform your kitchen efficiency with our advanced Kitchen Display System. Reduce errors, improve communication, and speed up service.
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
                      src="/lovable-uploads/kitchen-display-hero.png" 
                      alt="Kitchen Display System Interface" 
                      className="w-full h-auto"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center`}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Features</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything for Kitchen Excellence
                </h2>
                <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive tools your kitchen needs to operate at peak efficiency
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index % 3 + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                  >
                    <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Proven Results for Your Kitchen
                </h2>
                <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600 max-w-3xl mx-auto">
                  Join thousands of restaurants that have transformed their operations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How Our KDS Works
                </h2>
                <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600 max-w-3xl mx-auto">
                  From order receipt to completion, streamlined for efficiency
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {howItWorks.map((item, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} text-center`}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
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
                Ready to Transform Your Kitchen?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join thousands of restaurants using swirl KDS to streamline operations
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

export default KitchenDisplay;