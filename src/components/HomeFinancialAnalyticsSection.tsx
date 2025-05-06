
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">FINANCIAL INTELLIGENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
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
                <Card key={index} className="border border-amber-100 hover:border-amber-200 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-none">
                <Link to="/products/financial-reports" className="flex items-center gap-2">
                  Explore Financial Analytics <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              {/* Abstract visualization of financial data */}
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-amber-100 to-orange-50 rounded-2xl overflow-hidden relative">
                {/* Visual elements that suggest data and charts */}
                <div className="absolute bottom-6 left-8 w-20 h-40 bg-amber-200 rounded-t-lg"></div>
                <div className="absolute bottom-6 left-32 w-20 h-60 bg-amber-300 rounded-t-lg"></div>
                <div className="absolute bottom-6 left-56 w-20 h-28 bg-amber-400 rounded-t-lg"></div>
                <div className="absolute bottom-6 left-80 w-20 h-48 bg-amber-500 rounded-t-lg"></div>
                
                {/* Line chart suggestion */}
                <div className="absolute top-12 right-8 left-8 h-24">
                  <svg viewBox="0 0 300 100" className="w-full h-full">
                    <path 
                      d="M0,80 Q75,30 150,60 T300,40" 
                      fill="none" 
                      stroke="rgb(217 119 6)" 
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute top-12 left-12 w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="absolute top-24 left-32 w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute top-16 right-28 w-4 h-4 bg-amber-300 rounded-full"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-100 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinancialAnalyticsSection;
