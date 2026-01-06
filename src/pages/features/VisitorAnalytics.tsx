import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { BarChart, PieChart, LineChart, TrendingUp, Database, ArrowRight, Sparkles, Users, Clock, DollarSign, CheckCircle, QrCode, UserPlus, RefreshCw, Smartphone, Eye, Calendar } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Visitor Analytics Dashboard Mockup Component
const VisitorAnalyticsMockup = () => {
  return <div className="bg-white rounded-2xl shadow-2xl shadow-primary/20 border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Menu & Visitor Dashboard</h3>
            <p className="text-sm text-gray-500">Analytics will help you understand your customers and their behavior on your menu</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Dec 07, 2025 - Jan 06, 2026</span>
          </div>
        </div>
      </div>

      {/* Daily Visitors Section */}
      <div className="p-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Daily Visitors</h4>
        
        {/* Stats Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-medium text-blue-600">Total Visitors</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">33</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <UserPlus className="w-5 h-5 text-green-600" />
              <span className="text-xs font-medium text-green-600">Unique Visitors</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">24</p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="w-5 h-5 text-purple-600" />
              <span className="text-xs font-medium text-purple-600">Repeat Visitors</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">9</p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <span className="text-xs font-medium text-orange-600">Repeat Percentage</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">27.27%</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-sm font-semibold text-gray-700">Unique Visits</h5>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="w-3 h-0.5 bg-primary rounded"></span>
              <span>Trend</span>
            </div>
          </div>
          
          {/* Simplified Chart Representation */}
          <div className="h-32 flex items-end justify-between gap-1 px-2">
            {[8, 12, 6, 15, 10, 18, 14, 20, 16, 22, 12, 24, 18, 26, 20, 28, 15, 30, 22, 25, 18, 28, 24, 30, 20, 26, 22, 24, 18, 20].map((height, i) => <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t" style={{
            height: `${height * 3}px`
          }} />)}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-gray-400 px-2">
            <span>Dec 07</span>
            <span>Dec 15</span>
            <span>Dec 23</span>
            <span>Dec 31</span>
            <span>Jan 06</span>
          </div>
        </div>
      </div>
    </div>;
};
const VisitorAnalytics = () => {
  useScrollAnimation();
  const stats = [{
    value: "25%",
    label: "Higher Engagement",
    icon: TrendingUp
  }, {
    value: "40%",
    label: "Better Insights",
    icon: BarChart
  }, {
    value: "60%",
    label: "Time Saved",
    icon: Clock
  }];
  const features = [{
    title: "Real-time Dashboards",
    description: "Monitor visitor activity with live updates and key metrics at a glance",
    icon: BarChart
  }, {
    title: "QR Scan Tracking",
    description: "Analyze how customers interact with your digital menu through QR codes",
    icon: QrCode
  }, {
    title: "Customer Insights",
    description: "Understand visitor behavior and engagement patterns",
    icon: Users
  }, {
    title: "Repeat Visitor Analysis",
    description: "Identify loyal customers and track return rates",
    icon: RefreshCw
  }, {
    title: "Data Export",
    description: "Export visitor data in multiple formats for external use",
    icon: Database
  }, {
    title: "Menu Performance",
    description: "Track which menu items get the most views",
    icon: PieChart
  }];
  const visitorStats = [{
    icon: QrCode,
    value: "12,450",
    label: "Total QR Scans",
    change: "+24% this month"
  }, {
    icon: RefreshCw,
    value: "68%",
    label: "Repeat Visitors",
    change: "Loyal customers"
  }, {
    icon: UserPlus,
    value: "32%",
    label: "New Visitors",
    change: "Growing audience"
  }];
  const visitorInsights = [{
    icon: Clock,
    text: "Peak scanning hours: 12-2pm & 7-9pm"
  }, {
    icon: Smartphone,
    text: "Device breakdown: 85% Mobile, 15% Tablet"
  }, {
    icon: Eye,
    text: "Avg menu view time: 4.2 minutes"
  }];
  const analyticsCategories = [{
    title: "Visitor Analytics",
    icon: Users,
    items: ["Daily, weekly, monthly visitors", "Unique vs repeat tracking", "Peak hours identification", "Device breakdown analysis"]
  }, {
    title: "Menu Engagement",
    icon: BarChart,
    items: ["Menu item view tracking", "Popular categories analysis", "Time spent per section", "Seasonal performance"]
  }, {
    title: "Customer Insights",
    icon: TrendingUp,
    items: ["Customer frequency & retention", "Engagement patterns", "QR scan locations", "Loyalty identification"]
  }];
  const decisions = [{
    title: "Optimize Your Menu",
    description: "Use visitor data to make informed menu decisions",
    items: ["Identify most-viewed dishes", "Optimize menu layout", "Analyze viewing patterns"]
  }, {
    title: "Target Your Audience",
    description: "Understand who your customers are and when they visit",
    items: ["Identify peak visit times", "Track customer retention", "Segment by behavior"]
  }];
  return <div className="min-h-screen flex flex-col bg-white">
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
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div>
                  <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Visitor Analytics</span>
                  </div>

                  <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Understand Your<br />
                    <span className="text-primary">Visitors</span>
                  </h1>
                  
                  <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 mb-8">
                    Track every interaction and gain insights into customer behavior. Know who's scanning your QR codes and how they engage with your menu.
                  </p>
                  
                  <div className="animate-on-scroll animate-delay-300">
                    <div className="btn-conteiner scale-90">
                      <a className="btn-content" href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl" target="_blank" rel="noopener noreferrer">
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

                {/* Dashboard Mockup */}
                <div className="animate-on-scroll animate-delay-400 relative">
                  {/* Floating data points */}
                  
                  
                  <div className="absolute -bottom-4 left-1/4 px-3 py-2 bg-purple-500 text-white text-sm font-bold rounded-full shadow-lg z-10">
                    24 Unique
                  </div>

                  {/* Blue glow effect */}
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl -z-10 scale-110" />

                  {/* Main Mockup */}
                  <VisitorAnalyticsMockup />
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
                {stats.map((stat, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center`}>
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Visitor Stats Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-6 border border-primary/20">
                  <QrCode className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">QR Scan Analytics</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  See Who's Scanning<br />
                  <span className="text-primary">Your QR Codes</span>
                </h2>
                <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
                  Track every interaction and understand your audience with detailed visitor analytics.
                </p>
              </div>

              {/* Visitor Stats Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {visitorStats.map((stat, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center`}>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
                    <p className="text-sm text-primary">{stat.change}</p>
                  </div>)}
              </div>

              {/* Additional Insights */}
              <div className="grid md:grid-cols-3 gap-4">
                {visitorInsights.map((insight, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <insight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{insight.text}</span>
                  </div>)}
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
                  <span className="text-sm font-semibold text-primary">Key Features</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything You Need to Understand Your Visitors
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index % 3 + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                    <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Data-Driven Decisions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Make Data-Driven Decisions
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {decisions.map((decision, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{decision.title}</h3>
                    <p className="text-gray-600 mb-6">{decision.description}</p>
                    <ul className="space-y-3">
                      {decision.items.map((item, i) => <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-gray-700">{item}</span>
                        </li>)}
                    </ul>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Analytics That Matter for Your Business
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {analyticsCategories.map((category, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300`}>
                    <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>)}
                    </ul>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Understand Your Visitors?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join smart restaurant operators using Swirl visitor analytics to increase engagement and deliver exceptional experiences.
              </p>
              <div className="animate-on-scroll animate-delay-200 flex justify-center">
                <div className="btn-conteiner scale-90">
                  <a className="btn-content" href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl" target="_blank" rel="noopener noreferrer">
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
    </div>;
};
export default VisitorAnalytics;