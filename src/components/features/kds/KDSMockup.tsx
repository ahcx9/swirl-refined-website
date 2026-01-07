import React from 'react';
import { Clock, Check } from 'lucide-react';

const KDSMockup = () => {
  const orders = [
    {
      id: "#100736",
      table: "Table 009",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: true,
      borderColor: "border-l-red-500",
      time: "16:54",
      waitTime: "18m 19s",
      items: [
        { qty: 1, name: "Red Velvet Latte" },
        { qty: 1, name: "Spanish Latte" },
        { qty: 1, name: "Pistachio Latte" }
      ]
    },
    {
      id: "#100742",
      table: "Table 1",
      floor: "1st Floor",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: true,
      borderColor: "border-l-red-500",
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
      borderColor: "border-l-red-500",
      time: "17:23",
      waitTime: "20m 50s",
      items: [
        { qty: 2, name: "Red Velvet Latte" },
        { qty: 3, name: "Arabic Breakfast" }
      ]
    },
    {
      id: "#100744",
      table: "Takeaway",
      status: "Takeaway",
      statusColor: "bg-amber-500",
      isLate: false,
      borderColor: "border-l-amber-500",
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
      borderColor: "border-l-primary",
      time: "14:10",
      waitTime: "02m 44s",
      items: [
        { qty: 1, name: "Brownie Ice cream" },
        { qty: 1, name: "Red Velvet" },
        { qty: 1, name: "Tiramisu" }
      ]
    },
    {
      id: "#100746",
      table: "Table 10",
      floor: "2nd Floor",
      status: "In prep",
      statusColor: "bg-gray-900",
      isLate: false,
      borderColor: "border-l-primary",
      time: "14:10",
      waitTime: "02m 28s",
      items: [
        { qty: 1, name: "Hawaiian Pizza" },
        { qty: 1, name: "Healthy Breakfast" }
      ]
    },
    {
      id: "#0",
      table: "Table 10",
      floor: "2nd Floor",
      status: "Served",
      statusColor: "bg-green-500",
      isLate: false,
      borderColor: "border-l-green-500",
      time: "14:27",
      waitTime: "Complete",
      items: [
        { qty: 1, name: "Red Velvet" }
      ],
      hasUpdate: true
    },
    {
      id: "#100747",
      table: "Delivery",
      status: "Delivery",
      statusColor: "bg-purple-500",
      isLate: false,
      borderColor: "border-l-purple-500",
      time: "14:11",
      waitTime: "01m 46s",
      items: [
        { qty: 1, name: "Cortado" },
        { qty: 1, name: "Spanish Latte" }
      ]
    }
  ];

  return (
    <div className="bg-gray-100 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h3 className="font-bold text-gray-900 text-lg">Kitchen Display</h3>
          <span className="text-sm text-gray-500">Live orders dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-green-700">2 ready</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-xs font-semibold text-blue-700">8 active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-full border border-red-100">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-xs font-semibold text-red-700">3 late</span>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {orders.map((order, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 ${order.borderColor}`}
          >
            {/* Order Header */}
            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-900">{order.id}</span>
                  <span className="px-2 py-1 bg-white text-gray-700 text-xs rounded-lg font-medium border border-gray-200">
                    {order.table}
                  </span>
                  {order.floor && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
                      {order.floor}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 text-white text-xs rounded-lg font-semibold ${order.statusColor}`}>
                    {order.status}
                  </span>
                  {order.isLate && (
                    <span className="px-2.5 py-1 bg-red-500 text-white text-xs rounded-lg font-semibold animate-pulse">
                      LATE
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-gray-500">{order.time}</span>
                  <span className={`font-bold ${order.isLate ? 'text-red-500' : order.hasUpdate ? 'text-green-500' : 'text-primary'}`}>
                    {order.waitTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-3 space-y-2">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center ${order.hasUpdate ? 'border-green-400 bg-green-50' : 'border-gray-300'}`}>
                    <Check className={`w-3.5 h-3.5 ${order.hasUpdate ? 'text-green-500' : 'text-gray-300'}`} />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">{item.qty}×</span>
                  <span className="text-gray-700 text-sm truncate">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="p-3 pt-1 flex gap-3">
              <button className="flex-1 py-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Bump
              </button>
              <button className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                order.hasUpdate 
                  ? 'text-white bg-green-500 hover:bg-green-600' 
                  : 'text-white bg-primary hover:bg-primary/90'
              }`}>
                {order.hasUpdate ? 'Complete' : 'Mark ready'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KDSMockup;
