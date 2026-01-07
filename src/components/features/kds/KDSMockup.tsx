import React from 'react';
import { Clock, Check, ChevronDown } from 'lucide-react';

const KDSMockup = () => {
  const orders = [
    {
      id: "#100736",
      table: "Table 009",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: true,
      time: "16:54",
      waitTime: "189h 19m",
      items: [
        { qty: 1, name: "Red Velvet Latte" },
        { qty: 1, name: "Spanish Latte" },
        { qty: 1, name: "Pistachio Latte" },
        { qty: 2, name: "Arabic Breakfast" }
      ]
    },
    {
      id: "#100742",
      table: "Table 1",
      floor: "1st Floor",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: true,
      time: "13:57",
      waitTime: "7m 15s",
      items: [
        { qty: 1, name: "Pistachio Latte" },
        { qty: 2, name: "Red Velvet Latte" }
      ]
    },
    {
      id: "#100743",
      table: "Table 2",
      floor: "1st Floor",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: true,
      time: "17:23",
      waitTime: "20m 50s",
      items: [
        { qty: 2, name: "Red Velvet Latte" },
        { qty: 3, name: "Arabic Breakfast" },
        { qty: 1, name: "Pistachio Latte" }
      ]
    },
    {
      id: "#0",
      table: "Table 10",
      floor: "2nd Floor",
      status: "served",
      statusColor: "text-gray-500",
      isLate: true,
      isServed: true,
      time: "14:27",
      waitTime: "Complete",
      items: [
        { qty: 1, name: "Red Velvet" }
      ]
    },
    {
      id: "#0",
      table: "Table 10",
      floor: "2nd Floor",
      status: "served",
      statusColor: "text-gray-500",
      isLate: true,
      isServed: true,
      time: "14:27",
      waitTime: "Complete",
      items: [
        { qty: 1, name: "Brownie Ice cream" },
        { qty: 1, name: "Red Velvet" },
        { qty: 1, name: "Tiramisu" }
      ]
    },
    {
      id: "#100744",
      table: "Takeaway",
      status: "Takeaway",
      statusColor: "bg-amber-500",
      isTakeaway: true,
      isLate: false,
      time: "14:10",
      waitTime: "02m 58s",
      items: [
        { qty: 1, name: "Vanilla Affogato" },
        { qty: 1, name: "Pistachio Latte" }
      ]
    },
    {
      id: "#100745",
      table: "Table 200",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: false,
      time: "14:10",
      waitTime: "02m 44s",
      items: [
        { qty: 1, name: "Brownie Ice cream" },
        { qty: 1, name: "Red Velvet" },
        { qty: 1, name: "Tiramisu" },
        { qty: 1, name: "Spanish Latte" }
      ]
    },
    {
      id: "#100746",
      table: "Table 10",
      floor: "2nd Floor",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: false,
      time: "14:10",
      waitTime: "02m 28s",
      items: [
        { qty: 1, name: "Hawaiian Pizza" },
        { qty: 1, name: "Healthy Breakfast" },
        { qty: 2, name: "Cortado" }
      ]
    },
    {
      id: "#100747",
      table: "Table 12",
      floor: "2nd Floor",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: false,
      time: "14:11",
      waitTime: "01m 46s",
      items: [
        { qty: 1, name: "Cortado" },
        { qty: 1, name: "Spanish Latte" }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h3 className="font-bold text-gray-900 text-xl">Kitchen Display</h3>
          <span className="text-sm text-gray-400">Live orders dashboard</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm font-medium text-emerald-700">0 prep</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-blue-700">7 active</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-sm font-medium text-red-600">5 late</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
              All Orders
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
              Priority
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-start">
        {orders.map((order, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Order Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-900">{order.id}</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium">
                    {order.table}
                  </span>
                  {order.floor && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-400 text-xs rounded-lg">
                      {order.floor}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  {order.isServed ? (
                    <span className="text-xs font-medium text-gray-400">served</span>
                  ) : order.isTakeaway ? (
                    <span className="px-2.5 py-1 bg-amber-500 text-white text-xs rounded-lg font-semibold">
                      Takeaway
                    </span>
                  ) : (
                    <span className={`px-2.5 py-1 text-white text-xs rounded-lg font-semibold ${order.statusColor}`}>
                      {order.status}
                    </span>
                  )}
                  {order.isLate && !order.isServed && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-lg font-semibold">
                      LATE
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-gray-400">{order.time}</span>
                <span className={`font-bold ${order.isLate && !order.isServed ? 'text-red-500' : order.isServed ? 'text-gray-400' : 'text-blue-500'}`}>
                  {order.waitTime}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-4 space-y-2.5">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center flex-shrink-0 ${order.isServed ? 'border-emerald-400 bg-emerald-50' : 'border-gray-300'}`}>
                    {order.isServed && <Check className="w-3 h-3 text-emerald-500" />}
                  </div>
                  <span className="font-bold text-gray-800 text-sm">{item.qty}×</span>
                  <span className="text-gray-600 text-sm">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="p-4 pt-2 flex gap-3">
              <button className="flex-1 py-2.5 text-xs font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Bump
              </button>
              <button className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                order.isServed 
                  ? 'text-white bg-gray-900 hover:bg-gray-800' 
                  : 'text-white bg-gray-900 hover:bg-gray-800'
              }`}>
                {order.isServed ? 'Update' : 'Mark ready'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KDSMockup;
