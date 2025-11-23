import React from 'react';
import { TrendingUp, DollarSign, PieChart, BarChart3, CreditCard, FileText, Calendar, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CustomCTAButton from '@/components/CustomCTAButton';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const HomeFinancialAnalyticsSection = () => {
  const features = [
    { icon: PieChart, text: 'Revenue Breakdown', color: 'text-blue-600' },
    { icon: BarChart3, text: 'Sales Analytics', color: 'text-blue-600' },
    { icon: CreditCard, text: 'Payment Tracking', color: 'text-blue-600' },
    { icon: FileText, text: 'Custom Reports', color: 'text-blue-600' },
    { icon: Calendar, text: 'Period Comparison', color: 'text-blue-600' },
    { icon: Target, text: 'Goal Monitoring', color: 'text-blue-600' }
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,82,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,82,204,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 mb-6">
            <TrendingUp className="h-4 w-4" />
            <span className="font-semibold text-sm">Data-Driven Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Financial Reports & Analytics
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Make informed decisions with comprehensive financial reporting and real-time analytics for your restaurant business.
          </p>
        </div>

        {/* Stats Row - Large animated counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Daily Revenue */}
          <Card className="group relative overflow-hidden border-2 border-blue-100 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-500/10"></div>
            <div className="relative p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={12800} prefix="$" className="text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Daily Revenue</div>
            </div>
          </Card>

          {/* Growth Percentage */}
          <Card className="group relative overflow-hidden border-2 border-green-100 hover:border-green-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/10"></div>
            <div className="relative p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-green-600 text-white mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                <span className="text-green-600">+</span>
                <AnimatedCounter end={34} suffix="%" className="text-green-600" />
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Monthly Growth</div>
            </div>
          </Card>

          {/* Payment Methods */}
          <Card className="group relative overflow-hidden border-2 border-purple-100 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/10"></div>
            <div className="relative p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-purple-600 text-white mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={5} className="text-purple-600" />
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Payment Methods</div>
            </div>
          </Card>
        </div>

        {/* Center Image - Dashboard in Frame */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Decorative frame effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            
            <Card className="relative overflow-hidden border-2 border-blue-100 shadow-2xl rounded-2xl group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/financial-analytics-dashboard.jpg" 
                  alt="Financial Analytics Dashboard showing revenue reports and insights" 
                  className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={800}
                  loading="lazy"
                  style={{ transform: 'translateZ(0)' }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm border border-blue-200 px-5 py-3 rounded-xl shadow-xl">
                  <div className="text-xs text-gray-600 font-medium">Live Analytics</div>
                  <div className="text-lg font-bold text-blue-600">Real-time</div>
                </div>
              </div>
            </Card>

            {/* Decorative floating elements */}
            <div className="absolute -left-8 top-1/4 hidden lg:block">
              <div className="bg-white shadow-xl rounded-2xl px-6 py-4 border border-blue-200 animate-float">
                <div className="text-xs text-gray-600 font-medium mb-1">Profit Margin</div>
                <div className="text-2xl font-bold text-green-600">+18%</div>
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 hidden lg:block" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white shadow-xl rounded-2xl px-6 py-4 border border-blue-200 animate-float">
                <div className="text-xs text-gray-600 font-medium mb-1">Orders Today</div>
                <div className="text-2xl font-bold text-blue-600">342</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icon Grid - Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border-2 border-blue-100 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-4 rounded-xl bg-blue-600 text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
            get started for free
          </CustomCTAButton>
        </div>
      </div>
    </section>
  );
};

export default HomeFinancialAnalyticsSection;
