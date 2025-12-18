import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import POSHero from '@/components/features/pos/POSHero';
import POSTabs from '@/components/features/pos/POSTabs';
import POSBenefits from '@/components/features/pos/POSBenefits';
import POSCallToAction from '@/components/features/pos/POSCallToAction';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Smartphone, Zap, Percent, ArrowLeftRight, LayoutGrid, TrendingUp, FileText, Users, Layers, CheckCircle, Sparkles, Clock, Shield, Receipt, Truck, QrCode, UtensilsCrossed, Tablet } from 'lucide-react';

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

            {/* Table Management & Floor Layout */}
            <section className="py-16 bg-gray-50 -mx-4 px-4 md:-mx-8 md:px-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Table Transfer */}
                <div className="animate-on-scroll bg-white rounded-2xl p-8 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <ArrowLeftRight className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Seamless Table Transfers</h3>
                  <p className="text-gray-600 mb-6">Move orders between tables with drag-and-drop simplicity.</p>
                  <ul className="space-y-2">
                    {tableFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floor Layout */}
                <div className="animate-on-scroll animate-delay-100 bg-white rounded-2xl p-8 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <LayoutGrid className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Visual Floor Management</h3>
                  <p className="text-gray-600 mb-6">See your entire restaurant at a glance with custom floor plans.</p>
                  <ul className="space-y-2">
                    {floorFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
