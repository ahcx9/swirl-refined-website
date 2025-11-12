
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { BarChart, PieChart, LineChart, TrendingUp, Database, ArrowDown } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { Link } from 'react-router-dom';

const Analytics = () => {
  const features = [{
    title: "Real-time Dashboards",
    description: "Monitor your restaurant's performance with live updates and key metrics at a glance.",
    icon: BarChart
  }, {
    title: "Sales Tracking",
    description: "Analyze sales by time periods, menu categories, payment methods, and more.",
    icon: LineChart
  }, {
    title: "Customer Insights",
    description: "Understand customer behavior patterns, preferences, and spending habits.",
    icon: PieChart
  }, {
    title: "Performance Trends",
    description: "Identify growth opportunities and areas for improvement with trend analysis.",
    icon: TrendingUp
  }, {
    title: "Data Export & Integration",
    description: "Easily export data in multiple formats or integrate with your existing systems.",
    icon: Database
  }];
  
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-16 mb-20">
              <div className="w-full text-center">
                <div className="flex items-center justify-center gap-4 mb-8 py-[30px]">
                  <div className="p-3 rounded-full bg-purple-light/30">
                    <BarChart className="text-purple h-6 w-6" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-black">Restaurant Analytics Dashboard</h1>
                </div>
                
                <p className="text-lg text-swirl-gray mb-10 leading-relaxed max-w-3xl mx-auto">
                  Transform raw data into actionable insights. Our analytics platform helps you understand your business performance, optimize operations, and make informed strategic decisions.
                </p>

                <div className="flex gap-4 justify-center">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    get started for free
                  </CustomCTAButton>
                </div>
              </div>

              <div className="w-full py-0 my-0 mx-0 px-0">
                <div className="bg-gradient-to-br from-purple-light/30 to-white rounded-xl p-4 max-w-4xl mx-auto">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/visitor-analytics.png" 
                      alt="Menu & Visitor Analytics Dashboard"
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
              <h2 className="text-3xl font-bold mb-12 text-center text-black">Key Analytics Features</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {features.map(feature => <div key={feature.title} className="bg-white rounded-xl p-8 shadow-md flex gap-6 items-start hover:shadow-lg transition-shadow">
                    <div className="p-3 rounded-full bg-purple-light/30">
                      <feature.icon className="text-purple h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-swirl-gray">{feature.description}</p>
                    </div>
                  </div>)}
              </div>
            </section>

            <section className="mb-20 bg-gradient-to-r from-purple-light/20 to-blue-100/20 p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Make Data-Driven Decisions</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-purple">Optimize Your Menu</h3>
                  <p className="text-gray-700 mb-4">
                    Use sales and profitability data to make informed decisions about your menu offerings.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple rounded-full"></div>
                      <span>Identify top-performing dishes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple rounded-full"></div>
                      <span>Optimize pricing strategies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple rounded-full"></div>
                      <span>Analyze seasonal trends</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/80 backdrop-blur p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-purple">Staff Efficiently</h3>
                  <p className="text-gray-700 mb-4">
                    Schedule your team based on actual business needs and historical patterns.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple rounded-full"></div>
                      <span>Identify peak service hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple rounded-full"></div>
                      <span>Optimize labor costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple rounded-full"></div>
                      <span>Track employee performance</span>
                    </li>
                  </ul>
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
              <h2 className="text-3xl font-bold mb-6">Ready to unlock the power of your restaurant data?</h2>
              <p className="text-lg text-swirl-gray mb-8 max-w-3xl mx-auto">
                Join smart restaurant operators who use Swirl's analytics to increase profits, reduce costs, and deliver exceptional dining experiences.
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
export default Analytics;
