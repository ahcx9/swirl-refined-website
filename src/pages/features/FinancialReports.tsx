import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { LayoutDashboard, Clock, Printer, History, PieChart, DollarSign, TrendingUp } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCurrency } from '@/hooks/useCurrency';
import ReportsHeroMockup from '@/components/features/financial-reports/ReportsHeroMockup';
import ReportsRealityToday from '@/components/features/financial-reports/ReportsRealityToday';
import ReportsSystemFlow from '@/components/features/financial-reports/ReportsSystemFlow';
import ReportsGrid from '@/components/features/financial-reports/ReportsGrid';
import ReportsFeaturedMockups from '@/components/features/financial-reports/ReportsFeaturedMockups';
import ReportsLiveInsight from '@/components/features/financial-reports/ReportsLiveInsight';
import ReportsIntelligence from '@/components/features/financial-reports/ReportsIntelligence';

const FinancialReports = () => {
  useScrollAnimation();
  const { amounts } = useCurrency();

  const shiftReportFeatures = [
    { icon: Printer, text: 'Print complete sales data at shift end' },
    { icon: History, text: 'View all past shift reports anytime' },
    { icon: PieChart, text: 'Sales breakdown by category' },
    { icon: DollarSign, text: 'Cash drawer reconciliation' },
    { icon: TrendingUp, text: 'Staff performance per shift' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-28 pb-24 bg-white overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container-custom">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                <LayoutDashboard className="w-5 h-5 text-primary" />
                <span className="text-base md:text-sm font-bold md:font-semibold text-primary">Reports</span>
              </div>

              <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Every number.<br />
                <span className="text-primary">One clear picture.</span>
              </h1>

              <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                From sales to staff, payments to performance — see your entire business in real time, without switching between systems.
              </p>

              <div className="animate-on-scroll animate-delay-300 flex items-center justify-center gap-4 flex-wrap">
                <SwirlCTA />
                <BookDemoCTA />
              </div>
            </div>

            <div className="animate-on-scroll animate-delay-400 px-4 pb-16 md:pb-24">
              <ReportsHeroMockup />
            </div>
          </div>
        </section>

        {/* Reality Today */}
        <ReportsRealityToday />

        {/* System View */}
        <ReportsSystemFlow />

        {/* Reports Grid (categorized) */}
        <ReportsGrid />

        {/* Featured Mockups */}
        <ReportsFeaturedMockups />

        {/* Live Insight Flow */}
        <ReportsLiveInsight />

        {/* Intelligence Layer */}
        <ReportsIntelligence />

        {/* Shift Reports Section - PRESERVED */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-6 border border-primary/20">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-base md:text-sm font-bold md:font-semibold text-primary">Shift Reports</span>
                    <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">ESSENTIAL</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    End-of-Shift Reports<br />
                    <span className="text-primary">Made Easy</span>
                  </h2>

                  <p className="text-lg text-gray-600 mb-8">
                    Complete sales summary at the end of every shift. Print instantly or view anytime from your dashboard.
                  </p>

                  <div className="space-y-4">
                    {shiftReportFeatures.map((feature, index) => (
                      <div key={index} className="group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-gray-700 font-medium pt-2">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="animate-on-scroll animate-delay-200 relative">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                      <div>
                        <h4 className="font-bold text-gray-900">Shift Report</h4>
                        <p className="text-sm text-gray-500">Dec 18, 2025 • Evening Shift</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                          <Printer className="w-4 h-4 text-primary" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Total Sales</p>
                        <p className="text-2xl font-bold text-gray-900">{amounts.shiftTotalSales}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Orders</p>
                        <p className="text-2xl font-bold text-gray-900">156</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Avg Order</p>
                        <p className="text-2xl font-bold text-gray-900">{amounts.shiftAvgOrder}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Cash Collected</p>
                        <p className="text-2xl font-bold text-gray-900">{amounts.shiftCashCollected}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Dine In</span>
                        <span className="font-bold">{amounts.shiftDineIn}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Takeaway</span>
                        <span className="font-bold">{amounts.shiftTakeaway}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Delivery</span>
                        <span className="font-bold">{amounts.shiftDelivery}</span>
                      </div>
                    </div>

                    <div className="absolute -top-4 -right-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg">
                      One-Click Print
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2">
                    <History className="w-4 h-4" />
                    View Past Reports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
          <div className="absolute inset-0 -z-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Understand your business in seconds.
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Replace spreadsheets, exports, and guesswork with one connected reporting system.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <SwirlCTA />
                <BookDemoCTA />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialReports;
