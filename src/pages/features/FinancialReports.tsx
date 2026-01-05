import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { LayoutDashboard, PieChart, LineChart, FilePlus2, Calculator, DollarSign, TrendingUp, CreditCard, Wallet, Receipt, ArrowRight, Sparkles, Clock, Printer, History, FileText, CheckCircle, BarChart3, Percent, Calendar } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCurrency } from '@/hooks/useCurrency';
import FinancialReportsMockup from '@/components/features/financial-reports/FinancialReportsMockup';
const FinancialReports = () => {
  useScrollAnimation();
  const {
    amounts
  } = useCurrency();
  const dashboardMetrics = [{
    icon: DollarSign,
    label: "Total Revenue",
    value: amounts.totalRevenue,
    change: "+12.5%",
    positive: true
  }, {
    icon: Receipt,
    label: "Avg Order Value",
    value: amounts.avgOrderValue,
    change: "+8.2%",
    positive: true
  }, {
    icon: Percent,
    label: "Total Discounts",
    value: amounts.totalDiscounts,
    change: "-15%",
    positive: true
  }, {
    icon: TrendingUp,
    label: "Net Profit",
    value: amounts.reportNetProfit,
    change: "+18.7%",
    positive: true
  }];
  const paymentMethods = [{
    name: "Card Payments",
    percentage: 45,
    icon: CreditCard,
    color: "bg-primary"
  }, {
    name: "Cash",
    percentage: 25,
    icon: DollarSign,
    color: "bg-green-500"
  }, {
    name: "UPI / Wallets",
    percentage: 20,
    icon: Wallet,
    color: "bg-purple-500"
  }, {
    name: "Online Orders",
    percentage: 10,
    icon: Receipt,
    color: "bg-orange-500"
  }];
  const keyFeatures = [{
    icon: LineChart,
    title: "Daily Sales Reports",
    description: "Track revenue by hour, day, or week"
  }, {
    icon: Calculator,
    title: "P&L Statements",
    description: "Complete profit & loss breakdown"
  }, {
    icon: PieChart,
    title: "Cost Analysis",
    description: "Food, labor & overhead tracking"
  }, {
    icon: TrendingUp,
    title: "Revenue Forecasting",
    description: "AI-powered predictions"
  }, {
    icon: FilePlus2,
    title: "Tax Compliance",
    description: "Ready for accounting & audits"
  }, {
    icon: BarChart3,
    title: "Data Export",
    description: "Export to Excel, CSV, PDF"
  }];
  const shiftReportFeatures = [{
    icon: Printer,
    text: "Print complete sales data at shift end"
  }, {
    icon: History,
    text: "View all past shift reports anytime"
  }, {
    icon: PieChart,
    text: "Sales breakdown by category"
  }, {
    icon: DollarSign,
    text: "Cash drawer reconciliation"
  }, {
    icon: TrendingUp,
    text: "Staff performance per shift"
  }];
  const specializedReports = [{
    title: "Daily Sales Reports",
    description: "Track daily revenue with detailed breakdowns",
    items: ["Hourly sales tracking", "Payment method analysis", "Server performance metrics"]
  }, {
    title: "Food & Labor Cost",
    description: "Monitor your biggest expenses",
    items: ["COGS percentage tracking", "Labor cost ratios", "Item profitability analysis"]
  }, {
    title: "Tax & Compliance",
    description: "Simplify tax preparation",
    items: ["Sales tax reporting", "Payroll tax calculations", "Year-end reporting"]
  }];
  return <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 bg-white overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="container-custom">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                <LayoutDashboard className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Financial Reports</span>
              </div>
              
              <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Know Your Numbers.<br />
                <span className="text-primary">Grow Your Business.</span>
              </h1>
              
              <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Complete visibility into your restaurant's financial health. Track performance, control costs, and make data-driven decisions.
              </p>
              
              <div className="animate-on-scroll animate-delay-300">
                <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                  get started for free
                </CustomCTAButton>
              </div>
            </div>

            {/* Financial Reports Mockup */}
            <div className="animate-on-scroll animate-delay-400 px-4">
              <FinancialReportsMockup />
            </div>
          </div>
        </section>

        {/* Dashboard Metrics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {dashboardMetrics.map((metric, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <metric.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className={`text-sm font-bold px-2 py-1 rounded-full ${metric.positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">{metric.value}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Payment Method Breakdown */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                    <PieChart className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Payment Analytics</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Payment Method Breakdown
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Understand how your customers pay. Optimize payment options based on real data.
                  </p>
                  
                  <div className="space-y-4">
                    {paymentMethods.map((method, index) => <div key={index} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg ${method.color} flex items-center justify-center`}>
                              <method.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-medium text-gray-900">{method.name}</span>
                          </div>
                          <span className="font-bold text-gray-900">{method.percentage}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full ${method.color} rounded-full transition-all duration-1000`} style={{
                        width: `${method.percentage}%`
                      }} />
                        </div>
                      </div>)}
                  </div>
                </div>

                <div className="animate-on-scroll animate-delay-200 relative">
                  {/* Payment Breakdown Mockup */}
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900">Payment Summary</h4>
                        <p className="text-sm text-gray-500">Today's transactions</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-green-600">Live</span>
                      </div>
                    </div>

                    {/* Donut Chart Visual */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-40 h-40">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Background circle */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                          {/* Card Payments - 45% */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#0052CC" strokeWidth="12" strokeDasharray="113.1 251.3" strokeLinecap="round" className="transition-all duration-1000" />
                          {/* Cash - 25% */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="12" strokeDasharray="62.8 251.3" strokeDashoffset="-113.1" strokeLinecap="round" className="transition-all duration-1000" />
                          {/* UPI/Wallets - 20% */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#a855f7" strokeWidth="12" strokeDasharray="50.3 251.3" strokeDashoffset="-175.9" strokeLinecap="round" className="transition-all duration-1000" />
                          {/* Online Orders - 10% */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="12" strokeDasharray="25.1 251.3" strokeDashoffset="-226.2" strokeLinecap="round" className="transition-all duration-1000" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-2xl font-bold text-gray-900">256</span>
                          <span className="text-xs text-gray-500">Transactions</span>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <div>
                          <p className="text-xs text-gray-500">Card</p>
                          <p className="text-sm font-bold text-gray-900">{amounts.frInStoreRevenue}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div>
                          <p className="text-xs text-gray-500">Cash</p>
                          <p className="text-sm font-bold text-gray-900">{amounts.shiftCashCollected}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <div>
                          <p className="text-xs text-gray-500">UPI/Wallets</p>
                          <p className="text-sm font-bold text-gray-900">{amounts.shiftTakeaway}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <div>
                          <p className="text-xs text-gray-500">Online</p>
                          <p className="text-sm font-bold text-gray-900">{amounts.frOnlineRevenue}</p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                    Real-time Data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Key Features</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything You Need to Track Finances
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyFeatures.map((feature, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index % 3 + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
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

        {/* Shift Reports Section - GRAND */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="animate-on-scroll">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-6 border border-primary/20">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Shift Reports</span>
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
                    {shiftReportFeatures.map((feature, index) => <div key={index} className="group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-gray-700 font-medium pt-2">{feature.text}</span>
                      </div>)}
                  </div>
                </div>

                {/* Visual */}
                <div className="animate-on-scroll animate-delay-200 relative">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative">
                    {/* Header */}
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

                    {/* Stats */}
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

                    {/* Categories */}
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

                    {/* Badge */}
                    <div className="absolute -top-4 -right-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg">
                      One-Click Print
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2">
                    <History className="w-4 h-4" />
                    View Past Reports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Reports */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Specialized Financial Reports
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {specializedReports.map((report, index) => <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-gray-600 mb-6">{report.description}</p>
                    <ul className="space-y-3">
                      {report.items.map((item, i) => <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
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
                Transform Your Financial Management
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-white/80 mb-8">
                Join successful restaurant owners who have improved profit margins with complete financial visibility.
              </p>
              <div className="animate-on-scroll animate-delay-200">
                <a href="https://app.swirl.cx/register" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  get started for free
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default FinancialReports;