import React from 'react';
import { Clock, Check } from 'lucide-react';

const KDSMockup = () => {
  const orders = [
    {
      id: "#100736",
      table: "Table 009",
      status: "In prep",
      isLate: true,
      time: "16:54",
      waitTime: "18m 19s",
      items: [
        { qty: 1, name: "Red Velvet Latte" },
        { qty: 1, name: "Spanish Latte" },
        { qty: 1, name: "Pistachio Latte" },
        { qty: 1, name: "Texas BBQ'ed" }
      ]
    },
    {
      id: "#100742",
      table: "Table 1",
      floor: "1st Floor",
      status: "In prep",
      isLate: true,
      time: "13:57",
      waitTime: "7m 15s",
      items: [
        { qty: 1, name: "Pistachio Latte" },
        { qty: 2, name: "Red Velvet Latte" },
        { qty: 1, name: "Spanish Latte" }
      ]
    },
    {
      id: "#100743",
      table: "Table 2",
      floor: "1st Floor",
      status: "In prep",
      isLate: true,
      time: "17:23",
      waitTime: "20m 50s",
      items: [
        { qty: 2, name: "Red Velvet Latte" },
        { qty: 3, name: "Arabic Breakfast" },
        { qty: 2, name: "Cappuccino" }
      ]
    },
    {
      id: "#0",
      table: "Table 10",
      floor: "2nd Floor",
      status: "served",
      isLate: true,
      time: "14:27",
      waitTime: "89m 46s",
      items: [
        { qty: 1, name: "Red Velvet" }
      ],
      hasUpdate: true
    },
    {
      id: "#100744",
      table: "Takeaway",
      status: "In prep",
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
      isLate: false,
      time: "14:10",
      waitTime: "02m 44s",
      items: [
        { qty: 1, name: "Brownie with Ice cream" },
        { qty: 1, name: "Red Velvet" },
        { qty: 1, name: "Tiramisu" },
        { qty: 1, name: "Pistachio Cake" }
      ]
    },
    {
      id: "#100746",
      table: "Table 10",
      floor: "2nd Floor",
      status: "In prep",
      isLate: false,
      time: "14:10",
      waitTime: "02m 28s",
      items: [
        { qty: 1, name: "Hawaiian" },
        { qty: 1, name: "Healthy Breakfast" },
        { qty: 1, name: "Frozen Freesco" }
      ]
    },
    {
      id: "#100747",
      table: "Table 12",
      floor: "2nd Floor",
      status: "In prep",
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
      <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-gray-900">Kitchen Display</h3>
          <span className="text-xs text-gray-500">Live orders dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs font-medium text-green-700">0 prep</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-xs font-medium text-blue-700">7 active</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-red-50 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-xs font-medium text-red-700">5 late</span>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="p-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {orders.map((order, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Order Header */}
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm">{order.id}</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-full font-medium">
                    {order.table}
                  </span>
                  {order.floor && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded-full">
                      {order.floor}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <span className="px-2 py-0.5 bg-gray-900 text-white text-[10px] rounded font-medium">
                    {order.status}
                  </span>
                  {order.isLate && (
                    <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] rounded font-medium">
                      LATE
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-gray-500">{order.time}</span>
                <span className={`font-medium ${order.isLate ? 'text-red-500' : 'text-green-500'}`}>
                  {order.waitTime}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-2 space-y-1.5">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-gray-300" />
                  </div>
                  <span className="font-bold text-gray-800 text-xs">{item.qty}×</span>
                  <span className="text-gray-700 text-xs truncate">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="p-2 pt-1 flex gap-2">
              <button className="flex-1 py-1.5 text-[10px] font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Bump
              </button>
              <button className={`flex-1 py-1.5 text-[10px] font-medium rounded-lg transition-colors ${
                order.hasUpdate 
                  ? 'text-white bg-primary hover:bg-primary/90' 
                  : 'text-white bg-gray-900 hover:bg-gray-800'
              }`}>
                {order.hasUpdate ? 'Update' : 'Mark ready'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KDSMockup;
