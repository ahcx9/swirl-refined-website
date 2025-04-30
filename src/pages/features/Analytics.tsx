import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { BarChart, PieChart, LineChart, TrendingUp, Database, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Analytics = () => {
  const features = [
    {
      title: "Real-time Dashboards",
      description: "Monitor your restaurant's performance with live updates and key metrics at a glance.",
      icon: BarChart
    },
    {
      title: "Sales Tracking",
      description: "Analyze sales by time periods, menu categories, payment methods, and more.",
      icon: LineChart
    },
    {
      title: "Customer Insights",
      description: "Understand customer behavior patterns, preferences, and spending habits.",
      icon: PieChart
    },
    {
      title: "Performance Trends",
      description: "Identify growth opportunities and areas for improvement with trend analysis.",
      icon: TrendingUp
    },
    {
      title: "Data Export & Integration",
      description: "Easily export data in multiple formats or integrate with your existing systems.",
      icon: Database
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
                <span className="bg-purple/10 text-purple px-4 py-2 rounded-full text-sm font-semibold">DATA-DRIVEN DECISIONS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Restaurant Analytics Dashboard</h1>
              <p className="text-xl text-swirl-gray mb-8">
                Transform raw data into actionable insights. Our analytics platform helps you understand your business performance, optimize operations, and make informed strategic decisions.
              </p>
              <div className="flex gap-4">
                <Button asChild className="btn-primary text-base">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" className="text-base">
                  <Link to="/products">View All Solutions</Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex items-center">
              <div className="w-full bg-gradient-to-br from-purple-light/30 to-white rounded-xl overflow-hidden p-0">
                <img 
                  src="/lovable-uploads/35e9fd73-7370-41cc-89e5-6259df112af0.png" 
                  alt="Menu & Visitor Analytics Dashboard"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>

          <section className="mb-20">
            <div className="bg-gradient-to-r from-purple-light/20 to-blue-100/20 p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-10 text-center">Key Analytics Features</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex mb-4">
                      <div className="p-2 bg-purple-light/30 rounded-lg">
                        <feature.icon className="text-purple h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Make Data-Driven Decisions</h2>
              <p className="text-lg text-swirl-gray mb-8 text-center">
                Stop guessing and start knowing what drives your business. Swirl's analytics platform provides the insights you need to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded-full">
                        <ArrowDown className="text-green-600 h-4 w-4 rotate-45" />
                      </div>
                      <span className="text-lg">Optimize your menu based on profitability and popularity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded-full">
                        <ArrowDown className="text-green-600 h-4 w-4 rotate-45" />
                      </div>
                      <span className="text-lg">Schedule staff efficiently based on busy periods</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded-full">
                        <ArrowDown className="text-green-600 h-4 w-4 rotate-45" />
                      </div>
                      <span className="text-lg">Identify your most valuable customers and offerings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded-full">
                        <ArrowDown className="text-green-600 h-4 w-4 rotate-45" />
                      </div>
                      <span className="text-lg">Forecast sales and plan inventory purchases more accurately</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Analytics That Matter for Restaurants</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-purple">Sales Analytics</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Daily, weekly, monthly revenue tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Sales by category, item, and time period</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Average check value analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Peak hours and slow periods identification</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-purple">Menu Performance</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Item profitability analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Menu engineering metrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Promotion effectiveness tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Seasonal item performance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-purple">Customer Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Customer frequency and retention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Segmentation by spending patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Ordering channel preferences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>Loyalty program performance metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="text-center mb-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to unlock the power of your restaurant data?</h2>
              <p className="text-lg text-swirl-gray mb-8">
                Join smart restaurant operators who use Swirl's analytics to increase profits, reduce costs, and deliver exceptional dining experiences.
              </p>
              <Button asChild className="btn-primary text-base">
                <Link to="/contact">Schedule a Personalized Demo</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
