
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { LayoutDashboard, PieChart, LineChart, FilePlus2, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinancialReports = () => {
  const benefits = [
    {
      title: "Comprehensive P&L Statements",
      description: "Generate detailed profit and loss statements with customizable date ranges and categories.",
      icon: FilePlus2
    },
    {
      title: "Advanced Cost Analysis",
      description: "Track and analyze all your costs including food costs, labor, and overhead expenses.",
      icon: Calculator
    },
    {
      title: "Revenue Trends",
      description: "Visualize your sales data over time to identify patterns, seasonality, and growth opportunities.",
      icon: LineChart
    },
    {
      title: "Financial Forecasting",
      description: "Use AI-powered predictions to forecast future revenue and plan accordingly.",
      icon: PieChart
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="mb-6">
                <span className="bg-purple/10 text-purple px-4 py-2 rounded-full text-sm font-semibold">FINANCIAL MANAGEMENT</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-purple-light/30">
                  <LayoutDashboard className="text-purple h-6 w-6" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">Financial Reports</h1>
              </div>
              
              <p className="text-xl text-swirl-gray mb-8">
                Gain complete visibility into your restaurant's financial health. Our comprehensive reporting tools help you track performance, control costs, and make data-driven decisions to increase profitability.
              </p>
              
              <div className="flex gap-4">
                <Button asChild className="btn-primary text-base">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" className="text-base">
                  <Link to="/products">Explore All Features</Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <img 
                src="/lovable-uploads/a7a29f9c-6293-46ad-bb73-77648ef03c6a.png" 
                alt="Financial reporting dashboard"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Financial Reporting Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-xl p-8 shadow-md flex gap-6 items-start hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-purple-light/30">
                    <benefit.icon className="text-purple h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-swirl-gray">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20 bg-gradient-to-r from-purple-light/20 to-blue-100/20 p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Specialized Financial Reports</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple">Daily Sales Reports</h3>
                <p className="text-gray-700 mb-4">
                  Track daily revenue with detailed breakdowns by category, payment method, and time period.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Hourly sales tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Payment method analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Server performance metrics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple">Food & Labor Cost Reports</h3>
                <p className="text-gray-700 mb-4">
                  Monitor your two biggest expenses with detailed cost tracking and percentage calculations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>COGS percentage tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Labor cost ratios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Item profitability analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple">Tax & Compliance Reports</h3>
                <p className="text-gray-700 mb-4">
                  Simplify tax preparation with reports designed to meet accounting and regulatory requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Sales tax reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Payroll tax calculations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
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
            <Button asChild className="btn-primary text-base">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialReports;
