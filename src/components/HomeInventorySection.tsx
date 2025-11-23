import React from 'react';
import { Package, Tag, BarChart, HardDrive, List, TrendingUp, AlertCircle, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CustomCTAButton from '@/components/CustomCTAButton';

const HomeInventorySection = () => {
  return (
    <section className="py-20 md:py-24 overflow-hidden relative bg-white">
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 mb-6">
            <Package className="h-4 w-4" />
            <span className="font-semibold text-sm">Smart Stock Control</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Inventory Management
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Take control of your restaurant's inventory with real-time tracking, automated ordering, and waste management tools.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid mb-12">
          {/* Large Card - Main Dashboard Image */}
          <Card className="bento-large group relative overflow-hidden border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-0 h-full">
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/inventory-overview.png" 
                  alt="Inventory Management Dashboard showing real-time stock levels" 
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={800}
                  loading="lazy"
                  style={{ transform: 'translateZ(0)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-xl border border-blue-200">
                  <div className="text-sm font-semibold text-blue-600">Live Dashboard</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Stock Tracker */}
          <Card className="bento-wide group bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-600 text-white">
                  <BarChart className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600">Current Stock Level</div>
                  <div className="text-3xl font-bold text-blue-600">94%</div>
                </div>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse-slow" style={{ width: '94%' }}></div>
              </div>
            </CardContent>
          </Card>

          {/* Low Stock Alert */}
          <Card className="group bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 hover:border-red-400 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="relative mb-3">
                <AlertCircle className="h-10 w-10 text-red-600" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  3
                </div>
              </div>
              <div className="text-lg font-bold text-red-700 mb-1">Low Stock Alert</div>
              <div className="text-sm text-red-600">Items need reorder</div>
            </CardContent>
          </Card>

          {/* Supplier Management */}
          <Card className="group bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-400 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <Users className="h-10 w-10 text-green-600 mb-3" />
              <div className="text-3xl font-bold text-green-700 mb-1">24</div>
              <div className="text-sm font-medium text-green-600">Active Suppliers</div>
            </CardContent>
          </Card>

          {/* Waste Reduction */}
          <Card className="group bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <TrendingUp className="h-10 w-10 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-purple-700 mb-1">-23%</div>
              <div className="text-sm font-medium text-purple-600">Waste Reduced</div>
            </CardContent>
          </Card>

          {/* Real-time Tracking Feature */}
          <Card className="bento-wide group bg-white border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-600 text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Package className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Real-time Stock Tracking</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Monitor inventory levels across all locations instantly with automatic updates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Automated Alerts Feature */}
          <Card className="group bg-white border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-600 text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Tag className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">Smart Alerts</h4>
                  <p className="text-sm text-gray-600">Auto-notifications for low stock</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ingredient Tracking Feature */}
          <Card className="group bg-white border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-600 text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <HardDrive className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">Ingredient Level</h4>
                  <p className="text-sm text-gray-600">Track every ingredient precisely</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
            get started for free
          </CustomCTAButton>
        </div>
      </div>

      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,82,204,0.05)_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
    </section>
  );
};

export default HomeInventorySection;
