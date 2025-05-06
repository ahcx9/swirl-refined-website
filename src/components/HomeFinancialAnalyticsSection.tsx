
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeFinancialAnalyticsSection = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Revenue Insights",
      description: "Track sales trends, identify peak hours, and spot growth opportunities with interactive dashboards."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Expense Monitoring",
      description: "Keep costs under control with detailed expense tracking and automated budget alerts."
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Profit Margins",
      description: "Analyze profitability by menu item, time period, or location to optimize your offerings."
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Financial Forecasting",
      description: "Plan for the future with AI-powered forecasting based on historical data and market trends."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">FINANCIAL INTELLIGENCE</span>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            Data-Driven Decisions for Restaurant Success
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transform raw data into actionable insights that help you maximize profitability, reduce costs, and grow your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className={`border-none overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-amber-50 to-orange-100' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-orange-50 to-amber-100' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-yellow-50 to-amber-100' :
                  'bg-gradient-to-br from-amber-50 to-yellow-100'
                } shadow-lg hover:shadow-xl rounded-xl`}>
                  <div className="p-6 relative z-10">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                      index % 4 === 0 ? 'bg-gradient-to-br from-amber-200 to-orange-300' :
                      index % 4 === 1 ? 'bg-gradient-to-br from-orange-200 to-amber-300' :
                      index % 4 === 2 ? 'bg-gradient-to-br from-yellow-200 to-amber-300' :
                      'bg-gradient-to-br from-amber-200 to-yellow-300'
                    } text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white opacity-20"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white"></div>
                    <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-10">
              <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-none rounded-full px-8 py-6 h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link to="/products/financial-reports" className="flex items-center gap-2">
                  Explore Financial Analytics <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              {/* Creative visualization of financial data */}
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-amber-100 to-orange-50 rounded-2xl overflow-hidden relative shadow-xl transform transition-all duration-700 hover:rotate-1 hover:scale-105">
                {/* Interactive bar chart with hover animations */}
                <div className="absolute bottom-6 left-8 w-20 h-40 bg-amber-200 rounded-t-lg transform transition-all duration-300 hover:h-48 hover:bg-amber-300"></div>
                <div className="absolute bottom-6 left-32 w-20 h-60 bg-amber-300 rounded-t-lg transform transition-all duration-300 hover:h-64 hover:bg-amber-400"></div>
                <div className="absolute bottom-6 left-56 w-20 h-28 bg-amber-400 rounded-t-lg transform transition-all duration-300 hover:h-36 hover:bg-amber-500"></div>
                <div className="absolute bottom-6 left-80 w-20 h-48 bg-amber-500 rounded-t-lg transform transition-all duration-300 hover:h-56 hover:bg-amber-600"></div>
                
                {/* Animated line chart */}
                <div className="absolute top-12 right-8 left-8 h-24">
                  <svg viewBox="0 0 300 100" className="w-full h-full">
                    <path 
                      d="M0,80 Q75,30 150,60 T300,40" 
                      fill="none" 
                      stroke="rgb(217 119 6)" 
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="300"
                      strokeDashoffset="300"
                      className="animate-dash"
                    />
                  </svg>
                </div>
                
                {/* Animated decorative dots */}
                <div className="absolute top-12 left-12 w-4 h-4 bg-amber-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-24 left-32 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-16 right-28 w-5 h-5 bg-amber-300 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>

                {/* Dollar sign with animation */}
                <div className="absolute top-1/3 right-1/4 text-4xl text-amber-500 font-bold animate-bounce">
                  $
                </div>
                <div className="absolute bottom-1/3 left-1/4 text-5xl text-orange-400 font-bold animate-bounce" style={{ animationDelay: '1.5s' }}>
                  $
                </div>
              </div>
              
              {/* Animated decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-100 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinancialAnalyticsSection;
