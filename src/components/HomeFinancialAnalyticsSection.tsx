
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, TrendingUp, LineChart, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeFinancialAnalyticsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Financial Analytics</span> that Drive Growth
          </h2>
          <p className="text-swirl-gray text-lg max-w-2xl mx-auto">
            Transform raw data into actionable insights with our powerful analytics platform designed specifically for restaurants and cafes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="h-2 bg-blue-500 w-full"></div>
            <CardContent className="p-6 pt-8">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-5">
                <TrendingUp size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Revenue Insights</h3>
              <p className="text-swirl-gray mb-4">
                Track revenue streams across locations, menu categories, and time periods to identify growth opportunities.
              </p>
              <ul className="space-y-2 text-sm text-swirl-gray mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Daily, weekly, and monthly comparisons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Location-based performance metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Customizable dashboards and reports</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="h-2 bg-purple w-full"></div>
            <CardContent className="p-6 pt-8">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-5">
                <DollarSign size={24} className="text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Management</h3>
              <p className="text-swirl-gray mb-4">
                Gain visibility into your costs and identify opportunities to improve margins and profitability.
              </p>
              <ul className="space-y-2 text-sm text-swirl-gray mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple font-bold">✓</span>
                  <span>Food cost percentage analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple font-bold">✓</span>
                  <span>Labor cost optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple font-bold">✓</span>
                  <span>Overhead expense tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="h-2 bg-green-500 w-full"></div>
            <CardContent className="p-6 pt-8">
              <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-5">
                <BarChart size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Metrics</h3>
              <p className="text-swirl-gray mb-4">
                Track KPIs and performance metrics to make data-driven decisions for your business.
              </p>
              <ul className="space-y-2 text-sm text-swirl-gray mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Average order value analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Customer retention rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Menu item profitability</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-gradient-to-r from-purple to-blue-500 hover:opacity-90 text-white">
            <Link to="/products/financial-reports" className="flex items-center gap-2">
              Explore Financial Analytics <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeFinancialAnalyticsSection;
