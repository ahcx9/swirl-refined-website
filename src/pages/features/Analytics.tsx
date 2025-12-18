import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { BarChart, PieChart, LineChart, TrendingUp, Database, ArrowRight, Sparkles, Users, Clock, DollarSign, CheckCircle } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Analytics = () => {
  useScrollAnimation();

  const stats = [
    { value: "25%", label: "Higher Revenue", icon: TrendingUp },
    { value: "40%", label: "Better Decisions", icon: BarChart },
    { value: "60%", label: "Time Saved", icon: Clock }
  ];

  const features = [
    { title: "Real-time Dashboards", description: "Monitor performance with live updates and key metrics at a glance", icon: BarChart },
    { title: "Sales Tracking", description: "Analyze sales by time periods, categories, and payment methods", icon: LineChart },
    { title: "Customer Insights", description: "Understand customer behavior and spending habits", icon: Users },
    { title: "Performance Trends", description: "Identify growth opportunities with trend analysis", icon: TrendingUp },
    { title: "Data Export", description: "Export data in multiple formats for external use", icon: Database },
    { title: "Menu Analytics", description: "Track which items perform best and optimize pricing", icon: PieChart }
  ];

  const analyticsCategories = [
    {
      title: "Sales Analytics",
      icon: DollarSign,
      items: ["Daily, weekly, monthly revenue", "Sales by category and item", "Average check value analysis", "Peak hours identification"]
    },
    {
      title: "Menu Performance",
      icon: BarChart,
      items: ["Item profitability analysis", "Menu engineering metrics", "Promotion effectiveness", "Seasonal performance"]
    },
    {
      title: "Customer Insights",
      icon: Users,
      items: ["Customer frequency & retention", "Spending pattern segmentation", "Channel preferences", "Loyalty program metrics"]
    }
  ];

  const decisions = [
    {
      title: "Optimize Your Menu",
      description: "Use sales and profitability data to make informed menu decisions",
      items: ["Identify top-performing dishes", "Optimize pricing strategies", "Analyze seasonal trends"]
    },
    {
      title: "Staff Efficiently",
      description: "Schedule your team based on actual business needs",
      items: ["Identify peak service hours", "Optimize labor costs", "Track employee performance"]
    }
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
              {/* Badge */}
              <div className="animate-on-scroll flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                  <BarChart className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Restaurant Analytics</span>
                </div>
              </div>

              <div className="text-center mb-12">
                <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Data That Drives<br />
                  <span className="text-primary">Decisions</span>
                </h1>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Transform raw data into actionable insights. Understand your business, optimize operations, and make informed decisions.
                </p>
                <div className="animate-on-scroll animate-delay-300">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    get started for free
                  </CustomCTAButton>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="animate-on-scroll animate-delay-400 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <img 
                    src="/lovable-uploads/35e9fd73-7370-41cc-89e5-6259df112af0.png" 
                    alt="Analytics Dashboard" 
                    className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
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
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
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
                  Everything You Need to Understand Your Business
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

        {/* Data-Driven Decisions */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Make Data-Driven Decisions
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {decisions.map((decision, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{decision.title}</h3>
                    <p className="text-gray-600 mb-6">{decision.description}</p>
                    <ul className="space-y-3">
                      {decision.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Categories */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Analytics That Matter for Restaurants
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {analyticsCategories.map((category, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
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
                Ready to Unlock Your Restaurant Data?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join smart restaurant operators using swirl analytics to increase profits and deliver exceptional experiences.
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

export default Analytics;