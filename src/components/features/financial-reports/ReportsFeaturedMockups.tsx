import React from 'react';
import { TrendingUp, ShoppingBag, Receipt, Percent, DollarSign, CreditCard, Wallet, Globe, Users, Utensils, Edit3, Clock } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const ReportsFeaturedMockups = () => {
  const { amounts } = useCurrency();

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-28">

          {/* 1. Business Summary */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full mb-5">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">Business Summary</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See your entire day in seconds.
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Total Sales. Orders. Tax. Discounts. Expenses. One screen, real-time, no exports.
              </p>
              <ul className="space-y-3">
                {['Total Sales & Net Revenue', 'Orders & Average Bill', 'Tax & Discount summary', 'Expenses tracking'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-gray-900">Today's Summary</p>
                <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full font-semibold">+12.5%</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: DollarSign, l: 'Total Sales', v: amounts.frTotalRevenue },
                  { icon: ShoppingBag, l: 'Orders', v: amounts.frTotalOrders },
                  { icon: Receipt, l: 'Tax', v: amounts.shiftCashCollected },
                  { icon: Percent, l: 'Discounts', v: amounts.frAverageBill },
                ].map((s, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <s.icon className="w-4 h-4 text-primary mb-2" />
                    <p className="text-[11px] text-gray-500 uppercase">{s.l}</p>
                    <p className="text-lg font-bold text-gray-900">{s.v}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 bg-primary/5 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">Net Revenue</span>
                  <span className="text-xl font-bold text-primary">{amounts.totalRevenue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Sales & Brand Performance */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-full mb-5">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Brand Performance</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compare brands. Find your winners.
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Brand-level sales, contribution percentage, and orders — instantly.
              </p>
              <ul className="space-y-3">
                {['Brand-level sales totals', 'Contribution % of revenue', 'Orders per brand', 'Side-by-side comparison'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:order-1 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-gray-900">Brand Breakdown</p>
                <span className="text-xs text-gray-500">3 brands</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Burger Co.', sales: amounts.frInStoreRevenue, orders: '184', pct: 52, color: 'bg-primary' },
                  { name: 'Pizza House', sales: amounts.frOnlineRevenue, orders: '112', pct: 31, color: 'bg-purple-500' },
                  { name: 'Cafe Lane', sales: amounts.shiftDineIn, orders: '64', pct: 17, color: 'bg-green-500' },
                ].map((b, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${b.color}`} />
                        <span className="font-semibold text-gray-900">{b.name}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{b.sales}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
                      <span>{b.orders} orders</span>
                      <span className="font-semibold text-gray-700">{b.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden">
                      <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Payment Insights */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full mb-5">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Payment Insights</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cash, card, aggregator — fully reconciled.
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Know exactly how money moves through your business across every channel.
              </p>
              <ul className="space-y-3">
                {['Cash vs Card split', 'Aggregator payouts', 'Wallet & UPI trends', 'Daily reconciliation'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
              <p className="font-bold text-gray-900 mb-5">Payment Summary</p>
              <div className="space-y-3">
                {[
                  { icon: CreditCard, label: 'Card', val: 45, color: 'bg-primary', amount: amounts.frInStoreRevenue },
                  { icon: DollarSign, label: 'Cash', val: 28, color: 'bg-green-500', amount: amounts.shiftCashCollected },
                  { icon: Globe, label: 'Aggregator', val: 18, color: 'bg-purple-500', amount: amounts.frOnlineRevenue },
                  { icon: Wallet, label: 'Wallet / UPI', val: 9, color: 'bg-orange-500', amount: amounts.shiftTakeaway },
                ].map((p, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg ${p.color} flex items-center justify-center`}>
                          <p.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{p.label}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{p.amount}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden">
                        <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.val}%` }} />
                      </div>
                      <span className="text-xs font-bold text-gray-700 w-8 text-right">{p.val}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Operations Insights */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full mb-5">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Operations Insights</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The pulse of every shift.
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Staff performance, table turnover and order edits — see where time and money go.
              </p>
              <ul className="space-y-3">
                {['Top servers & sales per shift', 'Table turnover rates', 'Order edits & voids audit', 'Average prep time'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:order-1 grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Top Server', main: 'Aisha M.', sub: '$4,280 sales', color: 'text-primary', bg: 'bg-primary/10' },
                { icon: Utensils, label: 'Turnover', main: '3.2x', sub: 'per table', color: 'text-purple-600', bg: 'bg-purple-100' },
                { icon: Edit3, label: 'Order Edits', main: '12', sub: 'today', color: 'text-orange-600', bg: 'bg-orange-100' },
                { icon: Clock, label: 'Avg Prep', main: '08:42', sub: 'minutes', color: 'text-emerald-600', bg: 'bg-emerald-100' },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-3`}>
                    <c.icon className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wide">{c.label}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{c.main}</p>
                  <p className="text-xs text-gray-500">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReportsFeaturedMockups;
