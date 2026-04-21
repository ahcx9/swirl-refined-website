import React from 'react';
import { TrendingUp, TrendingDown, ShoppingBag, Receipt, Percent, DollarSign, CreditCard, Wallet, Globe, Store } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const ReportsHeroMockup = () => {
  const { amounts } = useCurrency();

  const stats = [
    { label: 'Total Sales', value: amounts.frTotalRevenue, change: '+12.5%', icon: DollarSign, positive: true },
    { label: 'Orders', value: amounts.frTotalOrders, change: '+8.2%', icon: ShoppingBag, positive: true },
    { label: 'Tax', value: amounts.frTotalDiscounts, change: '+4.1%', icon: Receipt, positive: true },
    { label: 'Discounts', value: amounts.frAverageBill, change: '-3.5%', icon: Percent, positive: true },
  ];

  const chartBars = [60, 75, 45, 90, 70, 85, 55, 95, 80, 65, 88, 72];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main dashboard */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Business Summary</h3>
            <p className="text-sm text-gray-500">Real-time overview · Today</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-green-600">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  <TrendingUp className="w-2.5 h-2.5" />{s.change}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wide">{s.label}</p>
              <p className="text-lg font-bold text-gray-900 mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-900">Hourly Sales Trend</p>
            <span className="text-xs text-gray-500">Last 12 hours</span>
          </div>
          <div className="flex items-end justify-between h-28 gap-1.5">
            {chartBars.map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-md" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Right overlay - Payment breakdown */}
      <div className="hidden lg:block absolute -right-8 top-16 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-20 rotate-2">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold text-gray-900">Payments</p>
          <span className="text-[10px] text-gray-500">Today</span>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Card', val: 45, color: 'bg-primary', icon: CreditCard },
            { label: 'Cash', val: 28, color: 'bg-green-500', icon: DollarSign },
            { label: 'Aggregator', val: 18, color: 'bg-purple-500', icon: Globe },
            { label: 'Wallet', val: 9, color: 'bg-orange-500', icon: Wallet },
          ].map((p, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <p.icon className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-700">{p.label}</span>
                </div>
                <span className="text-xs font-bold text-gray-900">{p.val}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.val}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom overlay - Brand breakdown */}
      <div className="hidden md:block absolute -bottom-10 left-8 right-8 lg:left-16 lg:right-32 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-20 -rotate-1">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-gray-900">Brand Performance</p>
          <span className="text-[10px] text-gray-500">3 brands</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: 'Burger Co.', sales: amounts.frInStoreRevenue, pct: '52%', color: 'bg-primary' },
            { name: 'Pizza House', sales: amounts.frOnlineRevenue, pct: '31%', color: 'bg-purple-500' },
            { name: 'Cafe Lane', sales: amounts.shiftDineIn, pct: '17%', color: 'bg-green-500' },
          ].map((b, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-3">
              <div className={`w-2 h-2 ${b.color} rounded-full mb-1.5`} />
              <p className="text-[11px] text-gray-500 truncate">{b.name}</p>
              <p className="text-sm font-bold text-gray-900">{b.sales}</p>
              <p className="text-[10px] text-primary font-semibold">{b.pct}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />
    </div>
  );
};

export default ReportsHeroMockup;
