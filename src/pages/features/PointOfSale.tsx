import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import POSHero from '@/components/features/pos/POSHero';
import POSTabs from '@/components/features/pos/POSTabs';
import POSBenefits from '@/components/features/pos/POSBenefits';
import POSCallToAction from '@/components/features/pos/POSCallToAction';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Smartphone, Zap, Percent, ArrowLeftRight, LayoutGrid, TrendingUp, FileText, Users, Layers, CheckCircle, Sparkles, Clock, Shield, Receipt, Truck, QrCode, UtensilsCrossed, Tablet, Map, Building, FileCheck, Languages, BadgeCheck, Globe } from 'lucide-react';

const PointOfSale = () => {
  useScrollAnimation();

  const captainFeatures = [
    { icon: Tablet, text: "Punch orders via Android tablet or phone" },
    { icon: Zap, text: "Real-time sync with kitchen" },
    { icon: ArrowLeftRight, text: "Split bills & customize orders" },
    { icon: Clock, text: "Offline mode support" }
  ];

  const quickBillingFeatures = [
    "One-tap item selection",
    "Instant bill generation",
    "Multiple payment modes",
    "Auto-calculated taxes",
    "Receipt printing in <2 seconds"
  ];

  const discountFeatures = [
    "Happy hour auto-discounts",
    "Combo & bundle deals",
    "Staff-level discount limits",
    "Coupon code support",
    "Loyalty point redemption"
  ];

  const tableFeatures = [
    "Drag-and-drop table transfer",
    "Split & merge tables",
    "Transfer partial items",
    "Complete order history maintained"
  ];

  const floorFeatures = [
    "Custom floor plans",
    "Real-time table status",
    "Color-coded occupancy",
    "Multiple floor support",
    "Section-based staff assignment"
  ];

  const aggregatorFeatures = [
    "Zomato, Swiggy, Talabat integration",
    "Platform-specific pricing",
    "Auto-markup management",
    "Commission tracking",
    "Consolidated reporting"
  ];

  const pastOrderFeatures = [
    "Search by date, bill number, or customer",
    "Instant bill reprint",
    "Order modification history",
    "Export for accounting",
    "Void/refund tracking"
  ];

  const userAccessFeatures = [
    "Admin/Manager/Cashier/Waiter roles",
    "Custom permission sets",
    "Activity logging",
    "Sales per staff tracking",
    "Login audit trail"
  ];

  const billingTabs = [
    { icon: UtensilsCrossed, title: "Dine In", description: "In-house orders" },
    { icon: Receipt, title: "Takeaway", description: "Counter pickups" },
    { icon: Truck, title: "Delivery", description: "Own delivery" },
    { icon: Layers, title: "Aggregators", description: "Zomato/Swiggy/etc" },
    { icon: QrCode, title: "QR Orders", description: "Digital ordering" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <POSHero />
            <POSTabs />

            {/* Captain Ordering App Section - HUGE & AMAZING */}
            <section className="py-20 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl -z-10" />
              <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />

              <div className="text-center mb-12">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-primary/20 shadow-lg">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Captain Ordering App</span>
                  <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full">Android Only</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Tableside Ordering<br />
                  <span className="text-primary">Made Simple</span>
                </h2>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Empower your staff to take orders directly at the table using any Android tablet or smartphone. Orders sync instantly with the kitchen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Visual - Large Phone/Tablet Mockup */}
                <div className="animate-on-scroll animate-delay-300 relative order-2 md:order-1">
                  <div className="relative max-w-md mx-auto">
                    {/* Phone Frame */}
                    <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                      <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/16] flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl">
                            <Smartphone className="w-10 h-10 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Captain App</h4>
                          <p className="text-gray-500 text-sm mb-4">Take orders instantly</p>
                          <div className="space-y-2">
                            <div className="h-10 bg-gray-100 rounded-lg flex items-center px-4 text-sm text-gray-600">
                              Table 5 - 4 guests
                            </div>
                            <div className="h-10 bg-primary/10 rounded-lg flex items-center px-4 text-sm text-primary font-medium">
                              + Add Item
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Order Cards */}
                    <div className="absolute -top-4 -right-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-bounce">
                      <p className="text-sm font-bold text-gray-900">Order #142</p>
                      <p className="text-xs text-green-500">Sent to Kitchen ✓</p>
                    </div>
                    <div className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                      <p className="text-sm font-bold text-gray-900">Table 8</p>
                      <p className="text-xs text-primary">Bill Ready</p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="animate-on-scroll order-1 md:order-2 space-y-4">
                  {captainFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="pt-2">
                        <span className="text-gray-900 font-medium">{feature.text}</span>
                      </div>
                    </div>
                  ))}

                  {/* Android Badge */}
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-6">
                    <p className="text-orange-700 text-sm">
                      <strong>Note:</strong> Captain App works on Android tablets and smartphones only. iOS is not supported.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Billing & Discount Management */}
            <section className="py-16 bg-gray-50 -mx-4 px-4 md:-mx-8 md:px-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Quick Billing */}
                <div className="animate-on-scroll bg-white rounded-2xl p-8 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Lightning Fast Billing</h3>
                  <p className="text-gray-600 mb-6">The fastest billing in the industry. Process transactions in seconds.</p>
                  <ul className="space-y-2">
                    {quickBillingFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discount Management */}
                <div className="animate-on-scroll animate-delay-100 bg-white rounded-2xl p-8 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Percent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Flexible Discount Control</h3>
                  <p className="text-gray-600 mb-6">Complete control over discounts, offers, and promotional pricing.</p>
                  <ul className="space-y-2">
                    {discountFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Billing Tabs Showcase */}
            <section className="py-16 mb-8">
              <div className="text-center mb-12">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                  <Layers className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Organized Order Flow</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Separate Tabs for Every Order Type
                </h2>
                <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
                  Keep your operations organized with dedicated billing tabs for each order channel
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {billingTabs.map((tab, index) => (
                  <div 
                    key={index}
                    className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center`}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tab.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">{tab.title}</h4>
                    <p className="text-xs text-gray-500">{tab.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* HUGE Visual Floor Management Section */}
            <section className="py-20 mb-8 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 rounded-3xl -z-10" />
              <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute bottom-20 left-20 w-56 h-56 bg-primary/5 rounded-full blur-3xl -z-10" />

              {/* Header */}
              <div className="text-center mb-12">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-primary/20 shadow-lg">
                  <Map className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Visual Floor Management</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  See Your Entire Restaurant<br />
                  <span className="text-primary">At a Glance</span>
                </h2>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Real-time table status, custom floor plans, and instant staff assignments — all in one beautiful view.
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Interactive Floor Plan */}
                <div className="lg:col-span-2 animate-on-scroll animate-delay-300">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    {/* Floor Tabs */}
                    <div className="flex border-b border-gray-100">
                      <button className="flex-1 px-6 py-4 bg-primary text-white font-semibold text-sm">
                        <Building className="w-4 h-4 inline mr-2" />
                        Main Floor
                      </button>
                      <button className="flex-1 px-6 py-4 bg-gray-50 text-gray-600 font-medium text-sm hover:bg-gray-100 transition-colors">
                        <Building className="w-4 h-4 inline mr-2" />
                        Patio
                      </button>
                      <button className="flex-1 px-6 py-4 bg-gray-50 text-gray-600 font-medium text-sm hover:bg-gray-100 transition-colors">
                        <Building className="w-4 h-4 inline mr-2" />
                        Rooftop
                      </button>
                    </div>

                    {/* Floor Grid */}
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white min-h-[400px] relative">
                      {/* Grid Pattern Background */}
                      <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
                      
                      {/* Tables Grid */}
                      <div className="relative grid grid-cols-4 md:grid-cols-6 gap-4">
                        {/* Row 1 */}
                        <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer group relative">
                          <span>1</span>
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Available • 4 seats</div>
                        </div>
                        <div className="aspect-square bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer group relative animate-pulse">
                          <span>2</span>
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Occupied • 2 guests</div>
                        </div>
                        <div className="aspect-square bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">3</div>
                        <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">4</div>
                        <div className="aspect-square bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer group relative">
                          <span>5</span>
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Reserved • 7:00 PM</div>
                        </div>
                        <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">6</div>

                        {/* Row 2 */}
                        <div className="aspect-square bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">7</div>
                        <div className="col-span-2 aspect-[2/1] bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer group relative">
                          <span>8</span>
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Large Table • 8 guests</div>
                        </div>
                        <div className="aspect-square bg-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer group relative">
                          <span>9</span>
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Bill Ready • ₹2,450</div>
                        </div>
                        <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">10</div>
                        <div className="aspect-square bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">11</div>

                        {/* Row 3 */}
                        <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">12</div>
                        <div className="aspect-square bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer animate-pulse">13</div>
                        <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">14</div>
                        <div className="aspect-square bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">15</div>
                        <div className="aspect-square bg-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">16</div>
                        <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">17</div>
                      </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="px-8 py-4 bg-gray-900 flex items-center justify-between text-white">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold">17</p>
                          <p className="text-xs text-gray-400">Total Tables</p>
                        </div>
                        <div className="h-8 w-px bg-gray-700" />
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-400">78%</p>
                          <p className="text-xs text-gray-400">Occupancy</p>
                        </div>
                        <div className="h-8 w-px bg-gray-700" />
                        <div className="text-center">
                          <p className="text-2xl font-bold">4</p>
                          <p className="text-xs text-gray-400">Staff Active</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-gray-400">Live</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar - Legend & Features */}
                <div className="space-y-6 animate-on-scroll animate-delay-400">
                  {/* Legend Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <LayoutGrid className="w-5 h-5 text-primary" />
                      Table Status
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-lg" />
                        <div>
                          <p className="font-medium text-gray-900">Available</p>
                          <p className="text-xs text-gray-500">8 tables</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-500 rounded-lg" />
                        <div>
                          <p className="font-medium text-gray-900">Occupied</p>
                          <p className="text-xs text-gray-500">6 tables</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-lg" />
                        <div>
                          <p className="font-medium text-gray-900">Reserved</p>
                          <p className="text-xs text-gray-500">2 tables</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-lg" />
                        <div>
                          <p className="font-medium text-gray-900">Bill Ready</p>
                          <p className="text-xs text-gray-500">1 table</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {[
                        "Custom floor plan design",
                        "Drag-drop table transfer",
                        "Multi-floor support",
                        "Section staff assignment",
                        "Real-time sync across devices",
                        "Table merge & split"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Delivery Aggregator Pricing */}
            <section className="py-16 mb-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll animate-delay-200 order-2 md:order-1 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {['Zomato', 'Swiggy', 'Talabat'].map((platform, index) => (
                      <div key={index} className="bg-white rounded-xl p-4">
                        <p className="font-semibold text-gray-900">{platform}</p>
                        <p className="text-xs text-gray-500">Integrated</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="animate-on-scroll order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Aggregator Management</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Smart Aggregator Pricing
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Manage different pricing for delivery platforms while tracking commissions and profitability.
                  </p>
                  <ul className="space-y-3">
                    {aggregatorFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Past Orders & User Access */}
            <section className="py-16 bg-gray-50 -mx-4 px-4 md:-mx-8 md:px-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Past Orders */}
                <div className="animate-on-scroll bg-white rounded-2xl p-8 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Any Bill, Anytime</h3>
                  <p className="text-gray-600 mb-6">Complete order history at your fingertips with powerful search.</p>
                  <ul className="space-y-2">
                    {pastOrderFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* User Access */}
                <div className="animate-on-scroll animate-delay-100 bg-white rounded-2xl p-8 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Role-Based Access Control</h3>
                  <p className="text-gray-600 mb-6">Know which staff is performing how with detailed tracking.</p>
                  <ul className="space-y-2">
                    {userAccessFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ZATCA Integration Section */}
            <section className="py-20 mb-8 relative overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-primary/5 rounded-3xl -z-10" />
              <div className="absolute top-10 left-10 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />

              {/* Header */}
              <div className="text-center mb-12">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-green-200 shadow-lg">
                  <Globe className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Saudi Arabia Compliant</span>
                  <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded-full">ZATCA</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  ZATCA Phase 2<br />
                  <span className="text-green-600">Ready</span>
                </h2>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Full e-invoicing compliance for Saudi restaurants. Generate ZATCA-compliant invoices with QR codes automatically.
                </p>
              </div>

              {/* Compliance Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll animate-delay-300">
                <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-green-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phase 1</p>
                    <p className="text-xs text-gray-500">Generation</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-green-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phase 2</p>
                    <p className="text-xs text-gray-500">Integration</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-green-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Fatoora</p>
                    <p className="text-xs text-gray-500">QR Ready</p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Invoice Mockup */}
                <div className="animate-on-scroll animate-delay-400 order-2 lg:order-1">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md mx-auto overflow-hidden">
                    {/* Invoice Header */}
                    <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs opacity-80">Tax Invoice</p>
                          <p className="font-bold text-lg">فاتورة ضريبية</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs opacity-80">Invoice #</p>
                          <p className="font-bold">INV-2024-0142</p>
                        </div>
                      </div>
                    </div>

                    {/* Invoice Body */}
                    <div className="p-6">
                      {/* Restaurant Info */}
                      <div className="text-center mb-6 pb-4 border-b border-dashed">
                        <p className="font-bold text-gray-900">مطعم السعادة</p>
                        <p className="text-sm text-gray-500">Happiness Restaurant</p>
                        <p className="text-xs text-gray-400 mt-1">VAT: 300000000000003</p>
                      </div>

                      {/* Items */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Chicken Shawarma x2</span>
                          <span className="text-gray-900">SAR 40.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Hummus</span>
                          <span className="text-gray-900">SAR 15.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fresh Juice x2</span>
                          <span className="text-gray-900">SAR 24.00</span>
                        </div>
                      </div>

                      {/* Totals */}
                      <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Subtotal</span>
                          <span className="text-gray-700">SAR 79.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">VAT (15%)</span>
                          <span className="text-gray-700">SAR 11.85</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span className="text-gray-900">Total / المجموع</span>
                          <span className="text-green-600">SAR 90.85</span>
                        </div>
                      </div>

                      {/* QR Code Section */}
                      <div className="mt-6 pt-4 border-t border-dashed flex items-center gap-4">
                        <div className="w-24 h-24 bg-gray-100 rounded-lg p-2 flex items-center justify-center">
                          <div className="w-full h-full bg-gray-900 rounded" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23fff' width='100' height='100'/%3E%3Crect fill='%23000' x='10' y='10' width='20' height='20'/%3E%3Crect fill='%23000' x='40' y='10' width='10' height='10'/%3E%3Crect fill='%23000' x='70' y='10' width='20' height='20'/%3E%3Crect fill='%23000' x='10' y='40' width='10' height='10'/%3E%3Crect fill='%23000' x='30' y='40' width='10' height='10'/%3E%3Crect fill='%23000' x='50' y='40' width='20' height='10'/%3E%3Crect fill='%23000' x='80' y='40' width='10' height='10'/%3E%3Crect fill='%23000' x='10' y='70' width='20' height='20'/%3E%3Crect fill='%23000' x='40' y='60' width='10' height='10'/%3E%3Crect fill='%23000' x='60' y='70' width='10' height='10'/%3E%3Crect fill='%23000' x='80' y='70' width='10' height='20'/%3E%3C/svg%3E")`, backgroundSize: 'cover'}} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 mb-1">ZATCA Compliant QR</p>
                          <p className="text-xs text-gray-400">Scan to verify invoice authenticity</p>
                          <div className="flex items-center gap-1 mt-2">
                            <BadgeCheck className="w-4 h-4 text-green-600" />
                            <span className="text-xs font-medium text-green-600">Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="animate-on-scroll order-1 lg:order-2 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: QrCode, title: "Auto QR Generation", desc: "QR codes generated on every invoice" },
                      { icon: Languages, title: "Arabic + English", desc: "Bilingual invoice support" },
                      { icon: Percent, title: "VAT Calculation", desc: "Automatic 15% VAT computation" },
                      { icon: FileCheck, title: "Real-time Reporting", desc: "Instant ZATCA submission" },
                      { icon: BadgeCheck, title: "Digital Stamp", desc: "Cryptographic validation" },
                      { icon: Shield, title: "Audit Ready", desc: "Complete compliance logs" }
                    ].map((feature, index) => (
                      <div 
                        key={index}
                        className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-green-200">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-500">{feature.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Trust Badge */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <BadgeCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-green-800">100% ZATCA Compliant</p>
                      <p className="text-sm text-green-700">Phase 1 & Phase 2 certified for Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <POSBenefits />
            <POSCallToAction />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PointOfSale;
