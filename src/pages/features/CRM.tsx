import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Users, UserCheck, BarChart, Mail, Gift, Star, ArrowRight, CheckCircle, Sparkles, TrendingUp, Heart } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CRMMockup from '@/components/features/crm/CRMMockup';

const CRM = () => {
  useScrollAnimation();

  const features = [
    { title: "Customer Profiles", description: "Build profiles with preferences, allergies, birthdays, and history", icon: UserCheck },
    { title: "Loyalty Programs", description: "Create custom programs with points, tiers, and special rewards", icon: Gift },
    { title: "Marketing Campaigns", description: "Design targeted email and SMS campaigns", icon: Mail },
    { title: "Customer Analytics", description: "Track acquisition, retention, and lifetime value", icon: BarChart },
    { title: "Feedback Management", description: "Collect and respond to customer feedback", icon: Star }
  ];

  const stats = [
    { value: "25%", label: "More Return Visits", icon: TrendingUp },
    { value: "15%", label: "Higher Spend", icon: BarChart },
    { value: "30%", label: "Better Marketing", icon: Mail }
  ];

  const howItWorks = [
    { step: "1", title: "Collect Data", description: "Gather customer info through reservations, orders, and sign-ups" },
    { step: "2", title: "Build Profiles", description: "Create comprehensive profiles with preferences and history" },
    { step: "3", title: "Segment Customers", description: "Group by behavior, preferences, or spending" },
    { step: "4", title: "Engage & Reward", description: "Send targeted offers that drive repeat visits" }
  ];

  const turnGuestsItems = [
    "Recognize returning customers and acknowledge loyalty",
    "Send personalized offers based on ordering history",
    "Reward repeat business with points and exclusive perks",
    "Re-engage lapsed customers before they're gone"
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
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Customer Relations</span>
                  </div>
                  
                  <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Turn Guests Into<br />
                    <span className="text-primary">Regulars</span>
                  </h1>
                  
                  <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 mb-8">
                    Build lasting relationships with your customers. Understand preferences, reward loyalty, and deliver personalized experiences.
                  </p>
                  
                  <div className="animate-on-scroll animate-delay-300">
                    <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                      get started for free
                    </CustomCTAButton>
                  </div>
                </div>
                
                <div className="animate-on-scroll animate-delay-400 hidden lg:block">
                  <CRMMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center`}
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
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
                  <span className="text-sm font-semibold text-primary">Key Features</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything to Build Customer Loyalty
                </h2>
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

        {/* Turn Guests into Regulars */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Build Loyalty</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Turn Guests into Regulars
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    In today's competitive restaurant industry, building customer loyalty is more important than ever.
                  </p>
                  
                  <ul className="space-y-4">
                    {turnGuestsItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="animate-on-scroll animate-delay-200">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                      alt="Happy restaurant customers" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
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
                  How Our CRM Works
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {howItWorks.map((item, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} text-center`}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
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
                Ready to Transform Customer Relationships?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join successful restaurants building stronger customer loyalty with swirl CRM
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

export default CRM;