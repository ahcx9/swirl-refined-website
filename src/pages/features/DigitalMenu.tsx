import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { FileText, Globe, DollarSign, Utensils, Clock, Star, Bot, Smartphone, BarChart, Sparkles, Check, ArrowRight, Palette, Languages, Zap } from 'lucide-react';
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

  const benefits = [
    { 
      icon: Zap, 
      title: "Instant Updates", 
      description: "Change prices, add items, or update descriptions in seconds. No reprinting needed.",
      stat: "Zero printing costs"
    },
    { 
      icon: Globe, 
      title: "Reach More Guests", 
      description: "Automatic translations and currency conversion welcome international visitors.",
      stat: "30+ languages"
    },
    { 
      icon: BarChart, 
      title: "Data-Driven Insights", 
      description: "See which items customers view most and optimize your menu accordingly.",
      stat: "2x engagement"
    },
    { 
      icon: Palette, 
      title: "Beautiful Design", 
      description: "Professionally designed templates that showcase your food beautifully.",
      stat: "Custom branding"
    }
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
              {/* Badge */}
              <div className="animate-on-scroll flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{t('digitalMenu.title')}</span>
                </div>
              </div>
              
              {/* Heading */}
              <div className="text-center mb-12">
                <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Menus That Sell<br />
                  <span className="text-primary">Themselves</span>
                </h1>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Transform your menu into an interactive sales tool with beautiful designs, real-time updates, and AI-powered features.
                </p>
                <div className="animate-on-scroll animate-delay-300">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    {t('cta.getStarted')}
                  </CustomCTAButton>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="animate-on-scroll animate-delay-400 relative max-w-4xl mx-auto">
                <img 
                  src="/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png" 
                  alt="Digital Menu on Multiple Devices" 
                  className="w-full h-auto drop-shadow-2xl"
                  loading="eager"
                />
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
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-gray-50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
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
        <section className="py-20 bg-gray-50">
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
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500`}
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
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get Started in Minutes
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} text-center`}>
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

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
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
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300`}
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
