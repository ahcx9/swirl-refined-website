import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import POSHero from '@/components/features/pos/POSHero';
import POSTabs from '@/components/features/pos/POSTabs';
import POSBenefits from '@/components/features/pos/POSBenefits';
import POSCallToAction from '@/components/features/pos/POSCallToAction';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Smartphone, Zap, Percent, ArrowLeftRight, LayoutGrid, TrendingUp, FileText, Users, Layers, CheckCircle, Sparkles, Clock, Shield, Receipt, Truck, QrCode, UtensilsCrossed } from 'lucide-react';

const PointOfSale = () => {
  useScrollAnimation();

  const captainFeatures = [
    "Instant order punching from any table",
    "Real-time sync with kitchen",
    "Split bills & customize orders",
    "Works on Android/iOS",
    "Offline mode support"
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

            {/* Captain Ordering App Section */}
            <section className="py-16 mb-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Captain Ordering App</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Tableside Ordering Made Simple
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Empower your staff to take orders directly at the table with our mobile captain app. Orders sync instantly with the kitchen.
                  </p>
                  <ul className="space-y-3">
                    {captainFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="animate-on-scroll animate-delay-200 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-24 h-24 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-900">Mobile Captain App</p>
                    <p className="text-gray-600">Works on any smartphone</p>
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