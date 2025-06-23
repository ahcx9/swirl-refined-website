import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Package, TrendingUp, Clipboard, Users, BarChart, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';

const InventoryManagement = () => {
  const { t } = useLanguage();
  
  const features = [{
    title: "Real-time Tracking",
    description: "Monitor inventory levels in real-time across all locations. Get immediate visibility into stock levels, usage patterns, and inventory valuation.",
    icon: TrendingUp
  }, {
    title: "Record Inventory Count",
    description: "Record the current stock level for items in your inventory. Keep accurate, real-time inventory counts to streamline operations and avoid stockouts.",
    icon: AlertTriangle
  }, {
    title: "Automated Ordering",
    description: "Set up automatic reordering based on inventory thresholds. Define minimum stock levels and let the system generate purchase orders when items run low.",
    icon: Clipboard
  }, {
    title: "Vendor Management",
    description: "Manage vendor relationships and track supplier performance. Compare pricing, monitor delivery times, and maintain a complete database of suppliers.",
    icon: Users
  }, {
    title: "Advanced Reporting",
    description: "Generate detailed reports on inventory turnover, costs, and usage patterns. Make data-driven decisions to optimize your inventory investment.",
    icon: BarChart
  }];
  
  const benefits = [
    "Reduce food waste by up to 40%", 
    "Lower inventory carrying costs by 20-30%", 
    "Minimize emergency orders and associated premium costs", 
    "Improve cash flow by preventing overstock situations", 
    "Ensure optimal stock levels for each ingredient", 
    "Prevent stockouts that could impact menu availability"
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20 rounded-3xl -z-10"></div>
              
              <div className="text-center mb-10 pt-8">
                <div className="inline-flex items-center gap-4 mb-6 bg-blue-50/80 px-6 py-3 rounded-full">
                  <div className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200">
                    <Package className="text-blue-600 h-6 w-6" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-black">{t('inventory.title')}</h1>
                </div>
                
                <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto text-slate-950 text-left">
                  {t('inventory.subtitle')}
                </p>

                <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-85">
                  {t('cta.getStarted')}
                </CustomCTAButton>
              </div>

              <div className="overflow-hidden rounded-xl shadow-2xl max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="/lovable-uploads/e0608b68-c4cd-45f8-a941-befaefe9e4e4.png" 
                  alt="Inventory Management System Interface" 
                  className="w-full h-auto" 
                  loading="eager" 
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-black">{t('inventory.features')}</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(feature => (
                  <div key={feature.title} className="bg-white rounded-xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-3 rounded-full bg-purple-light/30">
                        <feature.icon className="text-purple h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                    </div>
                    <p className="text-swirl-gray leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20 bg-gradient-to-r from-purple-light/20 to-blue-100/20 p-10 md:p-14 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-8 text-black">{t('inventory.why')}</h2>
                  <p className="text-swirl-gray mb-6 leading-relaxed">
                    For restaurants, inventory typically represents 25-35% of operational costs. Our inventory management system helps you optimize this significant investment, preventing waste and improving profitability.
                  </p>
                  <p className="text-swirl-gray mb-10 leading-relaxed">
                    With real-time tracking, automated alerts, and powerful analytics, you'll always know exactly what you have on hand, what you need to order, and how your inventory costs are impacting your bottom line.
                  </p>
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    {t('cta.getStarted')}
                  </CustomCTAButton>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-semibold mb-6 text-black">{t('inventory.benefits')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-green-500 rounded-full p-1.5 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <div className="bg-white rounded-xl p-12 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-8 text-center text-black">{t('inventory.integration')}</h2>
                <p className="text-swirl-gray mb-10 text-center max-w-3xl mx-auto">
                  Our inventory management system seamlessly integrates with your existing restaurant technology ecosystem, providing a unified platform for all your operational needs.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-blue-50/50 rounded-lg">
                    <h3 className="font-semibold mb-4 text-black">POS Integration</h3>
                    <p className="text-gray-600 leading-relaxed">Automatically update inventory levels when items are sold through your POS system.</p>
                  </div>
                  <div className="text-center p-8 bg-blue-50/50 rounded-lg">
                    <h3 className="font-semibold mb-4 text-black">Supplier Connections</h3>
                    <p className="text-gray-600 leading-relaxed">Connect directly with suppliers for streamlined ordering and receiving processes.</p>
                  </div>
                  <div className="text-center p-8 bg-blue-50/50 rounded-lg">
                    <h3 className="font-semibold mb-4 text-black">Financial Software</h3>
                    <p className="text-gray-600 leading-relaxed">Sync with accounting systems to track inventory costs and financial performance.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8 text-black">{t('inventory.ready')}</h2>
              <p className="text-lg text-swirl-gray mb-10 max-w-3xl mx-auto">
                {t('inventory.join')}
              </p>
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                {t('cta.getStarted')}
              </CustomCTAButton>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InventoryManagement;
