import React from 'react';
import { Mail, Phone, Cake, Gift, DollarSign, ShoppingBag, Activity, Clock, Eye, Calendar, Star } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const CRMMockup = () => {
  const { formatAmount, amounts } = useCurrency();

  const orders = [
    { id: '#100736', date: 'Dec 30, 2025, 04:54 PM', status: 'In Progress', statusColor: 'bg-amber-100 text-amber-700', table: 'Table 009', items: 4, total: 104.00 },
    { id: '#100684', date: 'Dec 17, 2025, 06:29 PM', status: 'Completed', statusColor: 'bg-emerald-100 text-emerald-700', table: 'Table 23', items: 2, total: 78.00 },
    { id: '#100682', date: 'Dec 17, 2025, 06:14 PM', status: 'Completed', statusColor: 'bg-emerald-100 text-emerald-700', table: 'Table 200', items: 6, total: 167.40 },
    { id: '#100660', date: 'Dec 13, 2025, 02:24 PM', status: 'Cancelled', statusColor: 'bg-red-100 text-red-700', table: 'Takeaway', items: 3, total: 126.00 },
  ];

  const recentActivity = [
    { action: 'Ordered 4 item(s) at Table 009', amount: 104.00, date: 'Dec 30, 2025 • 04:54 PM' },
    { action: 'Ordered 2 item(s) at Table 23', amount: 78.00, date: 'Dec 17, 2025 • 06:29 PM' },
    { action: 'Ordered 6 item(s) at Table 200', amount: 167.40, date: 'Dec 17, 2025 • 06:14 PM' },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Live Badge */}
      <div className="absolute -top-3 -right-3 z-20 bg-white rounded-full px-3 py-1 shadow-lg border border-gray-100 flex items-center gap-2">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-gray-600">Live</span>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Customer Header */}
        <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              A
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-gray-900">Abid</h3>
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">VIP</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>Customer since Dec 23, 2024</span>
                <div className="flex items-center gap-0.5">
                  <span className="text-gray-400">Loyalty:</span>
                  {[1, 2, 3].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-4 gap-3 p-4 border-b border-gray-100">
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500 uppercase">Email</span>
            </div>
            <p className="text-sm font-medium text-gray-900 truncate">abid@swirl.cx</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500 uppercase">Phone</span>
            </div>
            <p className="text-sm font-medium text-gray-900 truncate">+971543853877</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Cake className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500 uppercase">Birthday</span>
            </div>
            <p className="text-sm font-medium text-gray-900">Oct 23, 2000</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Gift className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500 uppercase">Anniversary</span>
            </div>
            <p className="text-sm font-medium text-gray-500">Not provided</p>
          </div>
        </div>

        {/* Customer Metrics */}
        <div className="grid grid-cols-4 gap-3 p-4 border-b border-gray-100">
          <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-primary" />
              </div>
            </div>
            <p className="text-xs text-gray-500 uppercase mb-1">Lifetime Value</p>
            <p className="text-lg font-bold text-gray-900">{amounts.crmLifetimeValue}</p>
            <p className="text-xs text-gray-500">Avg. {formatAmount(9221.98 / 32)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 uppercase mb-1">Total Orders</p>
            <p className="text-lg font-bold text-gray-900">32</p>
            <p className="text-xs text-gray-500">0.1 orders/day</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                <Activity className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 uppercase mb-1">Activity Level</p>
            <p className="text-lg font-bold text-gray-900">Occasional</p>
            <p className="text-xs text-gray-500">Based on frequency</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                <Clock className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 uppercase mb-1">Last Order</p>
            <p className="text-lg font-bold text-gray-900">6 days ago</p>
            <p className="text-xs text-gray-500">30/12/2025</p>
          </div>
        </div>

        {/* Order History & Activity */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {/* Order History Table */}
          <div className="col-span-2">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-semibold text-gray-900">Order History</h4>
                <p className="text-xs text-gray-500">Complete order history and details</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{formatAmount(7708.65)}</p>
                <p className="text-xs text-gray-500">20 orders • 254 items</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left py-2 px-3 font-medium text-gray-600">Order #</th>
                    <th className="text-left py-2 px-3 font-medium text-gray-600">Date</th>
                    <th className="text-left py-2 px-3 font-medium text-gray-600">Status</th>
                    <th className="text-right py-2 px-3 font-medium text-gray-600">Total</th>
                    <th className="py-2 px-2"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order, index) => (
                    <tr key={index} className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-3 font-medium text-gray-900">{order.id}</td>
                      <td className="py-2 px-3 text-gray-600">{order.date.split(',')[0]}</td>
                      <td className="py-2 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-right font-medium text-gray-900">{formatAmount(order.total)}</td>
                      <td className="py-2 px-2">
                        <Eye className="w-3.5 h-3.5 text-gray-400" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Upcoming Events */}
            <div className="bg-gray-50 rounded-xl p-3">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Upcoming Events</h4>
              <p className="text-xs text-gray-500 mb-3">Special occasions to remember</p>
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Cake className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-900">Abid's birthday</p>
                  <p className="text-xs text-gray-500">Oct 23, 2026 • 290 days</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-50 rounded-xl p-3">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Recent Activity</h4>
              <p className="text-xs text-gray-500 mb-3">Customer engagement</p>
              <div className="space-y-2">
                {recentActivity.slice(0, 2).map((activity, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-3 h-3 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-gray-900 truncate">
                        {activity.action.split(' at ')[0]}
                      </p>
                      <p className="text-xs text-primary font-semibold">{formatAmount(activity.amount)}</p>
                      <p className="text-xs text-gray-400">{activity.date.split(' • ')[0]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10" />
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
    </div>
  );
};

export default CRMMockup;
