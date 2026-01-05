import React from 'react';
import { 
  Calendar, 
  TrendingUp, 
  TrendingDown, 
  Store, 
  Globe, 
  ShoppingBag, 
  Receipt, 
  Percent, 
  DollarSign 
} from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const FinancialReportsMockup = () => {
  const { amounts } = useCurrency();

  const statsCards = [
    { 
      label: "TOTAL REVENUE", 
      value: amounts.frTotalRevenue, 
      change: "10.7%", 
      positive: false,
      icon: DollarSign,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    { 
      label: "TOTAL ORDERS", 
      value: amounts.frTotalOrders, 
      change: "7.5%", 
      positive: false,
      icon: ShoppingBag,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    { 
      label: "AVERAGE BILL", 
      value: amounts.frAverageBill, 
      change: "3.5%", 
      positive: false,
      icon: Receipt,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    { 
      label: "TOTAL DISCOUNTS", 
      value: amounts.frTotalDiscounts, 
      change: "19.7%", 
      positive: true,
      icon: Percent,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  // Bar chart data
  const chartData = [
    { date: "02 Dec", value: 4200, height: 85 },
    { date: "16 Dec", value: 2400, height: 48 },
    { date: "18 Dec", value: 2800, height: 56 },
    { date: "24 Dec", value: 2200, height: 44 }
  ];

  // Payment methods data
  const paymentMethods = [
    { name: "Card", percentage: 45, color: "#3B82F6" },
    { name: "Cash", percentage: 30, color: "#10B981" },
    { name: "UPI", percentage: 15, color: "#F59E0B" },
    { name: "Other", percentage: 10, color: "#8B5CF6" }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Financial Analytics</h2>
          <p className="text-sm text-gray-500 mt-1">
            Track your business performance with comprehensive financial insights. <span className="font-semibold text-gray-700">Past 30 days</span> displayed by default.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">December 6th, 2025</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">January 5th, 2026</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statsCards.map((stat, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
              <div className={`w-8 h-8 rounded-lg ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
              </div>
            </div>
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
              stat.positive 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {stat.positive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span>{stat.change} vs last period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Breakdown */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-primary rounded-full" />
          <h3 className="font-bold text-gray-900">Revenue Breakdown</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {/* In-Store */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 border border-blue-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase">In-Store</span>
              </div>
              <span className="text-sm text-gray-500">{amounts.frInStoreOrders} orders</span>
            </div>
            <p className="text-2xl font-bold text-primary mb-3">{amounts.frInStoreRevenue}</p>
            <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '99.1%' }} />
            </div>
            <p className="text-xs text-primary mt-2">99.1% of total revenue</p>
          </div>
          {/* Online Marketplace */}
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-5 border border-cyan-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-600 uppercase">Online Marketplace</span>
              </div>
              <span className="text-sm text-gray-500">{amounts.frOnlineOrders} orders</span>
            </div>
            <p className="text-2xl font-bold text-cyan-600 mb-3">{amounts.frOnlineRevenue}</p>
            <div className="w-full h-2 bg-cyan-100 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full" style={{ width: '0.9%' }} />
            </div>
            <p className="text-xs text-cyan-600 mt-2">0.9% of total revenue</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Daily Sales Overview - Bar Chart */}
        <div className="md:col-span-2 bg-gray-50 rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-5 bg-primary rounded-full" />
            <h3 className="font-bold text-gray-900">Daily Sales Overview</h3>
          </div>
          <div className="flex items-end justify-between h-40 gap-2">
            {chartData.map((bar, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-primary rounded-t-lg transition-all duration-500 hover:bg-primary/80"
                  style={{ height: `${bar.height}%` }}
                />
                <p className="text-xs text-gray-500 mt-2">{bar.date}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-4 border-t border-gray-200 pt-3">
            <span>0</span>
            <span>1,500</span>
            <span>3,000</span>
            <span>4,500</span>
            <span>6,000</span>
          </div>
        </div>

        {/* Payment Methods - Donut Chart */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-5 bg-primary rounded-full" />
            <h3 className="font-bold text-gray-900">Payment Methods</h3>
          </div>
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E5E7EB" strokeWidth="3" />
              <circle 
                cx="18" cy="18" r="15.915" fill="none" 
                stroke="#3B82F6" strokeWidth="3"
                strokeDasharray="45 55" strokeLinecap="round"
              />
              <circle 
                cx="18" cy="18" r="15.915" fill="none" 
                stroke="#10B981" strokeWidth="3"
                strokeDasharray="30 70" strokeDashoffset="-45" strokeLinecap="round"
              />
              <circle 
                cx="18" cy="18" r="15.915" fill="none" 
                stroke="#F59E0B" strokeWidth="3"
                strokeDasharray="15 85" strokeDashoffset="-75" strokeLinecap="round"
              />
              <circle 
                cx="18" cy="18" r="15.915" fill="none" 
                stroke="#8B5CF6" strokeWidth="3"
                strokeDasharray="10 90" strokeDashoffset="-90" strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="space-y-2">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: method.color }}
                  />
                  <span className="text-gray-600">{method.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{method.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportsMockup;
