
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { LayoutDashboard, PieChart, LineChart, FilePlus2, Calculator } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { Link } from 'react-router-dom';

const FinancialReports = () => {
  const benefits = [{
    title: "Comprehensive P&L Statements",
    description: "Generate detailed profit and loss statements with customizable date ranges and categories.",
    icon: FilePlus2
  }, {
    title: "Advanced Cost Analysis",
    description: "Track and analyze all your costs including food costs, labor, and overhead expenses.",
    icon: Calculator
  }, {
    title: "Revenue Trends",
    description: "Visualize your sales data over time to identify patterns, seasonality, and growth opportunities.",
    icon: LineChart
  }, {
    title: "Financial Forecasting",
    description: "Use AI-powered predictions to forecast future revenue and plan accordingly.",
    icon: PieChart
  }];
  
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-16 mb-20">
              <div className="w-full text-center">
                <div className="flex items-center justify-center gap-4 mb-8 py-[30px]">
                  <div className="p-3 rounded-full bg-white border border-gray-200">
                    <LayoutDashboard className="text-gray-700 h-6 w-6" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-black">Financial Reports</h1>
                </div>
                
                <p className="text-lg text-swirl-gray mb-10 leading-relaxed max-w-3xl mx-auto">
                  Gain complete visibility into your restaurant's financial health. Our comprehensive reporting tools help you track performance, control costs, and make data-driven decisions to increase profitability.
                </p>

                <div className="flex gap-4 justify-center">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-100">
                    get started for free
                  </CustomCTAButton>
                </div>
              </div>

              <div className="w-full py-0 my-0 mx-0 px-0">
                <div className="bg-white rounded-xl p-4 max-w-4xl mx-auto">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      alt="Financial Analytics Dashboard with comprehensive reporting" 
                      src="/lovable-uploads/financial-analytics-dashboard.jpg"
                      className="w-full h-auto rounded-lg shadow-md transform scale-100 transition-transform duration-700 hover:scale-105"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-black">Key Financial Reporting Features</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map(benefit => <div key={benefit.title} className="bg-white rounded-xl p-8 shadow-md flex gap-6 items-start hover:shadow-lg transition-shadow">
                    <div className="p-3 rounded-full bg-white border border-gray-200">
                      <benefit.icon className="text-gray-700 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-swirl-gray">{benefit.description}</p>
                    </div>
                  </div>)}
              </div>
            </section>

            <section className="mb-20 bg-white p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Specialized Financial Reports</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Daily Sales Reports</h3>
                  <p className="text-gray-700 mb-4">
                    Track daily revenue with detailed breakdowns by category, payment method, and time period.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Hourly sales tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Payment method analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Server performance metrics</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Food & Labor Cost Reports</h3>
                  <p className="text-gray-700 mb-4">
                    Monitor your two biggest expenses with detailed cost tracking and percentage calculations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>COGS percentage tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Labor cost ratios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Item profitability analysis</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Tax & Compliance Reports</h3>
                  <p className="text-gray-700 mb-4">
                    Simplify tax preparation with reports designed to meet accounting and regulatory requirements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Sales tax reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Payroll tax calculations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Year-end reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Transform Your Financial Management</h2>
              <p className="text-lg text-swirl-gray mb-8 max-w-3xl mx-auto">
                Join successful restaurant owners who have improved their profit margins by gaining full visibility into their financial performance with Swirl's comprehensive reporting tools.
              </p>
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                get started for free
              </CustomCTAButton>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default FinancialReports;
