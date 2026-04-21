import React from 'react';
import {
  LayoutDashboard, BarChart3, Tag, ShoppingBag, Clock,
  CreditCard, Percent, Receipt, FileWarning, Wallet,
  Users, Utensils, ChefHat, Edit3, Ban,
  Globe, Eye, History,
} from 'lucide-react';

const categories = [
  {
    label: 'Core Business Reports',
    accent: 'text-primary',
    bg: 'bg-primary/5',
    border: 'border-primary/10',
    reports: [
      { icon: LayoutDashboard, name: 'Business Summary', desc: 'Day overview at a glance', insight: 'See your full day in seconds' },
      { icon: BarChart3, name: 'Sales Report', desc: 'Track revenue & growth', insight: 'Spot trends instantly' },
      { icon: Tag, name: 'Brand Report', desc: 'Multi-brand breakdown', insight: 'Compare brand performance' },
      { icon: ShoppingBag, name: 'Order Type Report', desc: 'Dine-in, takeaway, delivery', insight: 'Optimize channels' },
      { icon: Clock, name: 'Hourly Sales', desc: 'Sales by time slot', insight: 'Track peak hours' },
    ],
  },
  {
    label: 'Financial Reports',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    reports: [
      { icon: CreditCard, name: 'Payment Method', desc: 'Cash, card, online split', insight: 'Know how guests pay' },
      { icon: Percent, name: 'Discount Report', desc: 'Track every discount', insight: 'Stop revenue leaks' },
      { icon: Receipt, name: 'Tax & Service Charge', desc: 'Compliance ready', insight: 'Audit-perfect numbers' },
      { icon: FileWarning, name: 'Credit Due', desc: 'Outstanding balances', insight: 'Recover dues faster' },
      { icon: Wallet, name: 'Expense Report', desc: 'All outgoing tracked', insight: 'Control spending' },
    ],
  },
  {
    label: 'Operations Reports',
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    reports: [
      { icon: Utensils, name: 'Table Turnover', desc: 'Seat utilization', insight: 'Maximize covers per shift' },
      { icon: Users, name: 'Staff Performance', desc: 'Server-level insights', insight: 'Reward top performers' },
      { icon: ChefHat, name: 'KOT Report', desc: 'Kitchen orders flow', insight: 'Spot kitchen delays' },
      { icon: Edit3, name: 'Order Edits', desc: 'Modifications log', insight: 'Audit every change' },
      { icon: Ban, name: 'Void & Cancellation', desc: 'Rejected orders', insight: 'Reduce loss' },
    ],
  },
  {
    label: 'Advanced / Intelligence',
    accent: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    reports: [
      { icon: Globe, name: 'Online Aggregator', desc: 'Talabat, Careem, Noon', insight: 'Reconcile every order' },
      { icon: Eye, name: 'Menu & Visitor', desc: 'Item & guest analytics', insight: 'Find your bestsellers' },
      { icon: History, name: 'Historical Reports', desc: 'Long-term comparisons', insight: 'Year-on-year insights' },
    ],
  },
];

const ReportsGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
              <LayoutDashboard className="w-4 h-4 text-primary" />
              <span className="text-base md:text-sm font-bold md:font-semibold text-primary">Every Report You Need</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One platform. <span className="text-primary">Every report.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From operations to finance — every insight in one organized place.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <div key={ci}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${cat.bg} ${cat.border} border rounded-full mb-5`}>
                  <span className={`text-sm font-bold ${cat.accent}`}>{cat.label}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {cat.reports.map((r, ri) => (
                    <div
                      key={ri}
                      className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-11 h-11 rounded-xl ${cat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <r.icon className={`w-5 h-5 ${cat.accent}`} />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">{r.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">{r.desc}</p>
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-xs text-primary font-semibold">→ {r.insight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsGrid;
