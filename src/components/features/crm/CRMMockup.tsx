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
    <div className="relative w-full max-w-md lg:max-w-2xl mx-auto">
      {/* Live Badge */}
      <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-20 bg-white rounded-full px-2 md:px-3 py-0.5 md:py-1 shadow-lg border border-gray-100 flex items-center gap-1.5 md:gap-2">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-[10px] md:text-xs font-medium text-gray-600">Live</span>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Customer Header */}
        <div className="p-4 md:p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-base md:text-xl shadow-lg flex-shrink-0">
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5 md:mb-1">
                <h3 className="text-base md:text-xl font-bold text-gray-900 truncate">Abid</h3>
                <span className="px-1.5 md:px-2 py-0.5 bg-primary/10 text-primary text-[10px] md:text-xs font-semibold rounded-full flex-shrink-0">VIP</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs md:text-sm text-gray-500">
                <span className="truncate">Customer since Dec 23, 2024</span>
                <div className="flex items-center gap-0.5">
                  <span className="text-gray-400 hidden sm:inline">Loyalty:</span>
                  {[1, 2, 3].map((i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 p-3 md:p-4 border-b border-gray-100">
          <div className="bg-gray-50 rounded-xl p-2 md:p-3">
            <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
              <span className="text-[10px] md:text-xs text-gray-500 uppercase">Email</span>
            </div>
            <p className="text-xs md:text-sm font-medium text-gray-900 truncate">abid@swirl.cx</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-2 md:p-3">
            <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
              <span className="text-[10px] md:text-xs text-gray-500 uppercase">Phone</span>
            </div>
            <p className="text-xs md:text-sm font-medium text-gray-900 truncate">+971543853877</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-2 md:p-3">
            <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
              <Cake className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
              <span className="text-[10px] md:text-xs text-gray-500 uppercase">Birthday</span>
            </div>
            <p className="text-xs md:text-sm font-medium text-gray-900">Oct 23, 2000</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-2 md:p-3">
            <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
              <Gift className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
              <span className="text-[10px] md:text-xs text-gray-500 uppercase">Anniversary</span>
            </div>
            <p className="text-xs md:text-sm font-medium text-gray-500">Not provided</p>
          </div>
        </div>

        {/* Customer Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 p-3 md:p-4 border-b border-gray-100">
          <div className="bg-primary/5 rounded-xl p-2 md:p-3 border border-primary/10">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              </div>
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 uppercase mb-0.5 md:mb-1">Lifetime Value</p>
            <p className="text-sm md:text-lg font-bold text-gray-900">{amounts.crmLifetimeValue}</p>
            <p className="text-[10px] md:text-xs text-gray-500">Avg. {formatAmount(9221.98 / 32)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-2 md:p-3">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                <ShoppingBag className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
              </div>
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 uppercase mb-0.5 md:mb-1">Total Orders</p>
            <p className="text-sm md:text-lg font-bold text-gray-900">32</p>
            <p className="text-[10px] md:text-xs text-gray-500">0.1 orders/day</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-2 md:p-3">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                <Activity className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
              </div>
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 uppercase mb-0.5 md:mb-1">Activity Level</p>
            <p className="text-sm md:text-lg font-bold text-gray-900">Occasional</p>
            <p className="text-[10px] md:text-xs text-gray-500">Based on frequency</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-2 md:p-3">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
              </div>
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 uppercase mb-0.5 md:mb-1">Last Order</p>
            <p className="text-sm md:text-lg font-bold text-gray-900">6 days ago</p>
            <p className="text-[10px] md:text-xs text-gray-500">30/12/2025</p>
          </div>
        </div>

        {/* Order History & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 p-3 md:p-4">
          {/* Order History Table */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 md:mb-3">
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">Order History</h4>
                <p className="text-[10px] md:text-xs text-gray-500">Complete order history and details</p>
              </div>
              <div className="sm:text-right">
                <p className="font-bold text-gray-900 text-sm md:text-base">{formatAmount(7708.65)}</p>
                <p className="text-[10px] md:text-xs text-gray-500">20 orders • 254 items</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] md:text-xs min-w-[400px]">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left py-1.5 md:py-2 px-2 md:px-3 font-medium text-gray-600">Order #</th>
                      <th className="text-left py-1.5 md:py-2 px-2 md:px-3 font-medium text-gray-600">Date</th>
                      <th className="text-left py-1.5 md:py-2 px-2 md:px-3 font-medium text-gray-600">Status</th>
                      <th className="text-right py-1.5 md:py-2 px-2 md:px-3 font-medium text-gray-600">Total</th>
                      <th className="py-1.5 md:py-2 px-1 md:px-2"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {orders.map((order, index) => (
                      <tr key={index} className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="py-1.5 md:py-2 px-2 md:px-3 font-medium text-gray-900">{order.id}</td>
                        <td className="py-1.5 md:py-2 px-2 md:px-3 text-gray-600">{order.date.split(',')[0]}</td>
                        <td className="py-1.5 md:py-2 px-2 md:px-3">
                          <span className={`px-1.5 md:px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-1.5 md:py-2 px-2 md:px-3 text-right font-medium text-gray-900">{formatAmount(order.total)}</td>
                        <td className="py-1.5 md:py-2 px-1 md:px-2">
                          <Eye className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-400" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-3 md:space-y-4">
            {/* Upcoming Events */}
            <div className="bg-gray-50 rounded-xl p-2 md:p-3">
              <h4 className="font-semibold text-gray-900 text-xs md:text-sm mb-0.5 md:mb-1">Upcoming Events</h4>
              <p className="text-[10px] md:text-xs text-gray-500 mb-2 md:mb-3">Special occasions to remember</p>
              <div className="flex items-center gap-2 p-1.5 md:p-2 bg-white rounded-lg border border-gray-100">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Cake className="w-3 h-3 md:w-4 md:h-4 text-amber-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs font-medium text-gray-900 truncate">Abid's birthday</p>
                  <p className="text-[10px] md:text-xs text-gray-500">Oct 23, 2026 • 290 days</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-50 rounded-xl p-2 md:p-3">
              <h4 className="font-semibold text-gray-900 text-xs md:text-sm mb-0.5 md:mb-1">Recent Activity</h4>
              <p className="text-[10px] md:text-xs text-gray-500 mb-2 md:mb-3">Customer engagement</p>
              <div className="space-y-1.5 md:space-y-2">
                {recentActivity.slice(0, 2).map((activity, index) => (
                  <div key={index} className="flex items-start gap-1.5 md:gap-2 p-1.5 md:p-2 bg-white rounded-lg border border-gray-100">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] md:text-xs font-medium text-gray-900 truncate">
                        {activity.action.split(' at ')[0]}
                      </p>
                      <p className="text-[10px] md:text-xs text-primary font-semibold">{formatAmount(activity.amount)}</p>
                      <p className="text-[9px] md:text-xs text-gray-400">{activity.date.split(' • ')[0]}</p>
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
