import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCurrency } from '@/hooks/useCurrency';
import { 
  Calculator, Zap, TrendingUp, Receipt, Building2, RefreshCw,
  CreditCard, Package, ShoppingCart, Users, Wallet, BarChart3,
  BookOpen, FileText, Truck, CalendarCheck, ArrowRight, Shield,
  MapPin, ChevronRight, Download, PieChart, LineChart, DollarSign,
  Clock, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Accounting = () => {
  useScrollAnimation();
  const { amounts, currency } = useCurrency();

  const whatsappLink = "https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl%20Accounting";

  // Value proposition cards
  const valueCards = [
    {
      icon: Zap,
      title: "Automatic Journal Entries",
      description: "Sales, purchases, inventory & expenses post automatically"
    },
    {
      icon: TrendingUp,
      title: "Live Profit & Loss",
      description: "See today's profit, not last month's"
    },
    {
      icon: Receipt,
      title: "VAT-Ready by Default",
      description: "Built for UAE & KSA compliance"
    },
    {
      icon: Building2,
      title: "Outlet-Wise Accounting",
      description: "Track each branch separately or combined"
    },
    {
      icon: RefreshCw,
      title: "No Manual Reconciliation",
      description: "POS, inventory & accounting always in sync"
    }
  ];

  // Ecosystem modules
  const ecosystemModules = [
    { icon: CreditCard, name: "POS", description: "Every sale syncs instantly" },
    { icon: Package, name: "Inventory", description: "Stock movements auto-posted" },
    { icon: ShoppingCart, name: "Purchasing", description: "Supplier invoices flow in" },
    { icon: Users, name: "CRM", description: "Customer credits tracked" },
    { icon: Wallet, name: "Payments", description: "Settlements reconciled" },
    { icon: BarChart3, name: "Analytics", description: "Data feeds reports" }
  ];

  // Key features
  const keyFeatures = [
    {
      icon: BookOpen,
      title: "Chart of Accounts (Restaurant-Ready)",
      description: "Pre-configured for F&B: COGS, labor, rent, utilities — all set up for you.",
      align: "left"
    },
    {
      icon: FileText,
      title: "Automated VAT Reports",
      description: "Generate VAT returns with one click. UAE & KSA formats included.",
      align: "right"
    },
    {
      icon: Receipt,
      title: "Expense Tracking",
      description: "Log expenses, attach receipts, categorize automatically.",
      align: "left"
    },
    {
      icon: Truck,
      title: "Supplier & Payable Management",
      description: "Track what you owe, when it's due, and pay on time.",
      align: "right"
    },
    {
      icon: Wallet,
      title: "Cash, Bank & Card Settlement",
      description: "Reconcile daily settlements across all payment methods.",
      align: "left"
    },
    {
      icon: CalendarCheck,
      title: "Month-End Closing",
      description: "Close your books in minutes, not days.",
      align: "right"
    }
  ];

  // Report types
  const reportTypes = [
    { icon: BarChart3, name: "P&L Statement", color: "from-blue-500 to-blue-600" },
    { icon: Receipt, name: "VAT Report", color: "from-emerald-500 to-emerald-600" },
    { icon: Building2, name: "Outlet Comparison", color: "from-violet-500 to-violet-600" },
    { icon: PieChart, name: "Cost Breakdown", color: "from-amber-500 to-amber-600" },
    { icon: LineChart, name: "Sales vs Expenses", color: "from-rose-500 to-rose-600" },
    { icon: DollarSign, name: "Cash Flow", color: "from-cyan-500 to-cyan-600" }
  ];

  // Trust badges
  const trustBadges = [
    { icon: MapPin, text: "Used by restaurants across UAE & KSA" },
    { icon: Building2, text: "Multi-branch ready" },
    { icon: Shield, text: "Secure & role-based access" },
    { icon: TrendingUp, text: "Scales from single outlet to enterprise" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-on-scroll">
              <Calculator className="w-4 h-4" />
              <span>Restaurant Accounting</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-on-scroll">
              Accounting, Built for{' '}
              <span className="text-primary">Restaurants</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-on-scroll">
              Automated entries, real-time P&L, VAT-ready reports, and seamless sync with POS, inventory & sales — no spreadsheets required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-conteiner scale-90"
              >
                <span className="btn-content">
                  <span className="btn-title">Book a Demo</span>
                  <span className="icon-arrow">
                    <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                        <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                        <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                      </g>
                    </svg>
                  </span>
                </span>
              </a>
              <a 
                href="#ecosystem"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                See How It Works
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DASHBOARD MOCKUP SECTION ===================== */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto animate-on-scroll">
            {/* Dashboard Container */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
              {/* Dashboard Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Live • Updated just now</span>
                </div>
                <div className="text-sm font-medium text-foreground">
                  December 2024
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8">
                {/* Top Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Today's Revenue</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{amounts.todayRevenue}</p>
                    <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +8.2% vs yesterday
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-rose-50 to-rose-100/50 rounded-xl p-4 border border-rose-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Today's Expenses</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{amounts.todayExpenses}</p>
                    <p className="text-xs text-muted-foreground mt-1">Operating costs</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-4 border border-emerald-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Net Profit</p>
                    <p className="text-2xl md:text-3xl font-bold text-emerald-600">{amounts.netProfit}</p>
                    <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> 65.6% margin
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-4 border border-slate-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Cash Balance</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{amounts.cashBalance}</p>
                    <p className="text-xs text-muted-foreground mt-1">Across all accounts</p>
                  </div>
                </div>

                {/* Main Dashboard Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* P&L Overview */}
                  <div className="md:col-span-2 bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">P&L Overview - December</h3>
                      <span className="text-xs text-muted-foreground">MTD</span>
                    </div>
                    {/* Revenue Bars */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Revenue</span>
                          <span className="font-medium">{amounts.monthlyRevenue}</span>
                        </div>
                        <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full" style={{ width: '100%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">COGS</span>
                          <span className="font-medium">{amounts.cogs}</span>
                        </div>
                        <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" style={{ width: '30%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Labor</span>
                          <span className="font-medium">{amounts.labor}</span>
                        </div>
                        <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-violet-400 to-violet-500 rounded-full" style={{ width: '20%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Operating Expenses</span>
                          <span className="font-medium">{amounts.operatingExpenses}</span>
                        </div>
                        <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-full" style={{ width: '12%' }} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between">
                      <span className="font-semibold text-foreground">Net Profit</span>
                      <span className="font-bold text-emerald-600">{amounts.monthlyNetProfit}</span>
                    </div>
                  </div>

                  {/* VAT & Outlet Summary */}
                  <div className="space-y-4">
                    {/* VAT Summary */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <h3 className="font-semibold text-foreground mb-3">VAT Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">VAT Collected</span>
                          <span className="font-medium text-emerald-600">{amounts.vatCollected}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">VAT Paid</span>
                          <span className="font-medium text-rose-600">{amounts.vatPaid}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-200 flex justify-between text-sm">
                          <span className="font-medium">Net Payable</span>
                          <span className="font-bold text-primary">{amounts.vatPayable}</span>
                        </div>
                      </div>
                    </div>

                    {/* Outlet Performance */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <h3 className="font-semibold text-foreground mb-3">By Outlet</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Downtown</span>
                          <span className="text-sm font-medium">{amounts.outlet1}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Marina</span>
                          <span className="text-sm font-medium">{amounts.outlet2}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">JBR</span>
                          <span className="text-sm font-medium">{amounts.outlet3}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY SWIRL ACCOUNTING ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Restaurants Choose{' '}
              <span className="text-primary">Swirl Accounting</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {valueCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONNECTED ECOSYSTEM ===================== */}
      <section id="ecosystem" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything Talks to Each Other
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No duplicate data. No mismatches. No chaos.
            </p>
          </div>

          {/* Ecosystem Visual */}
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="relative">
              {/* Center Hub */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                    <div className="text-center text-white">
                      <Calculator className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2" />
                      <span className="text-sm md:text-base font-semibold">Accounting</span>
                    </div>
                  </div>
                  {/* Pulse rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: '2s' }} />
                </div>
              </div>

              {/* Connected Modules Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {ecosystemModules.map((module, index) => (
                  <div 
                    key={index}
                    className="relative bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group animate-on-scroll"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Connection line indicator */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-px h-3 bg-gradient-to-t from-primary/50 to-transparent hidden md:block" />
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <module.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{module.name}</h4>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== KEY FEATURES DEEP DIVE ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Simple Language. Powerful Features.
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {keyFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col ${feature.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-10 animate-on-scroll`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Box */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${feature.align === 'right' ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== REPORTS SECTION ===================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Reports You Actually Understand
            </h2>
            <p className="text-lg text-muted-foreground">
              Download. Share. Decide — in minutes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {reportTypes.map((report, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${report.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <report.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{report.name}</h4>
                <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download className="w-4 h-4" />
                  <span>View Report</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TRUST & SCALE SECTION ===================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Built for Growing Restaurant Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA SECTION ===================== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-blue-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-on-scroll">
              Stop Managing Accounting.{' '}
              <span className="block mt-2">Start Understanding Your Business.</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 hover:scale-105 transition-all shadow-xl"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accounting;