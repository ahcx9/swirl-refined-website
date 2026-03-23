import React from 'react';
import { Clock, AlertTriangle, CheckCircle, ChefHat } from 'lucide-react';

const orders = [
  {
    id: '#1042', table: 'T-05', floor: 'Ground', status: 'preparing',
    time: '3:42', waitTime: '12 min',
    items: [
      { name: 'Margherita Pizza', qty: 1, notes: 'Extra cheese' },
      { name: 'Caesar Salad', qty: 2, notes: '' },
    ],
    isLate: false,
  },
  {
    id: '#1043', table: 'T-08', floor: 'Ground', status: 'ready',
    time: '1:15', waitTime: '8 min',
    items: [
      { name: 'Pasta Carbonara', qty: 1, notes: 'No bacon' },
      { name: 'Garlic Bread', qty: 1, notes: '' },
    ],
    isLate: false,
  },
  {
    id: '#1044', table: 'T-02', floor: 'Terrace', status: 'new',
    time: '0:30', waitTime: '2 min',
    items: [
      { name: 'Burger Deluxe', qty: 2, notes: 'Medium rare' },
      { name: 'Fries', qty: 2, notes: 'Extra crispy' },
      { name: 'Coke', qty: 2, notes: '' },
    ],
    isLate: false,
  },
  {
    id: '#1045', table: 'Takeaway', floor: '', status: 'preparing',
    time: '5:20', waitTime: '18 min',
    items: [
      { name: 'Fish & Chips', qty: 1, notes: '' },
      { name: 'Coleslaw', qty: 1, notes: '' },
    ],
    isLate: true,
  },
  {
    id: '#1046', table: 'T-12', floor: 'Terrace', status: 'served',
    time: '0:00', waitTime: '25 min',
    items: [
      { name: 'Steak Medium', qty: 1, notes: '' },
    ],
    isLate: false,
  },
];

const KDSMockup: React.FC = () => {
  const newOrders = orders.filter(o => o.status === 'new').length;
  const preparingOrders = orders.filter(o => o.status === 'preparing').length;
  const readyOrders = orders.filter(o => o.status === 'ready').length;

  return (
    <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl">
      {/* Header */}
      <div className="bg-gray-800 px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-700">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg">
              <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xs sm:text-lg font-bold text-white">Kitchen Display</h2>
              <p className="text-[9px] sm:text-xs text-gray-400">Real-time order management</p>
            </div>
          </div>

          {/* Status Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[9px] sm:text-xs bg-blue-500/20 text-blue-400 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium flex items-center gap-1">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
              {newOrders}
            </span>
            <span className="text-[9px] sm:text-xs bg-yellow-500/20 text-yellow-400 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
              {preparingOrders} Prep
            </span>
            <span className="text-[9px] sm:text-xs bg-green-500/20 text-green-400 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
              {readyOrders} Ready
            </span>
          </div>
        </div>
      </div>

      {/* Orders Grid — 2-col on mobile, 3 on tablet, up to 5 on desktop */}
      <div className="p-2 sm:p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className={`rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all ${
                order.isLate
                  ? 'bg-red-500/10 border-2 border-red-500/30'
                  : order.status === 'new'
                  ? 'bg-blue-500/10 border border-blue-500/30'
                  : order.status === 'preparing'
                  ? 'bg-yellow-500/10 border border-yellow-500/30'
                  : order.status === 'ready'
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-gray-800 border border-gray-700'
              }`}
            >
              {/* Order Header */}
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-[11px] sm:text-base font-bold text-white">{order.id}</span>
                  {order.isLate && (
                    <AlertTriangle className="w-3 h-3 text-red-400" />
                  )}
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1 text-gray-400">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="text-[9px] sm:text-xs">{order.time}</span>
                </div>
              </div>

              {/* Table Info */}
              <div className="flex items-center gap-1 sm:gap-2 mb-1.5 sm:mb-3">
                <span className={`text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded ${
                  order.table === 'Takeaway' ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-700 text-gray-300'
                }`}>
                  {order.table}
                </span>
                {order.floor && (
                  <span className="text-[8px] sm:text-[10px] text-gray-500 hidden sm:inline">{order.floor}</span>
                )}
              </div>

              {/* Items — show max 2 on mobile, 3 on desktop */}
              <div className="space-y-0.5 sm:space-y-1.5 mb-1.5 sm:mb-3">
                {order.items.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1 sm:gap-2">
                    <span className="text-[9px] sm:text-xs font-medium text-gray-400">{item.qty}x</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-sm text-white truncate">{item.name}</p>
                      {item.notes && (
                        <p className="text-[8px] sm:text-[10px] text-yellow-400 truncate hidden sm:block">• {item.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
                {order.items.length > 2 && (
                  <p className="text-[8px] sm:text-[10px] text-gray-500">+{order.items.length - 2} more</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-1 sm:gap-2">
                {order.status === 'new' && (
                  <button className="flex-1 text-[9px] sm:text-xs bg-blue-500 text-white py-1 sm:py-1.5 rounded-md sm:rounded-lg font-medium">
                    Start
                  </button>
                )}
                {order.status === 'preparing' && (
                  <button className="flex-1 text-[9px] sm:text-xs bg-green-500 text-white py-1 sm:py-1.5 rounded-md sm:rounded-lg font-medium">
                    Ready
                  </button>
                )}
                {order.status === 'ready' && (
                  <button className="flex-1 text-[9px] sm:text-xs bg-gray-600 text-white py-1 sm:py-1.5 rounded-md sm:rounded-lg font-medium flex items-center justify-center gap-0.5">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    Bump
                  </button>
                )}
                {order.status === 'served' && (
                  <span className="flex-1 text-[9px] sm:text-xs text-center text-gray-500 py-1 sm:py-1.5">
                    Done
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KDSMockup;
