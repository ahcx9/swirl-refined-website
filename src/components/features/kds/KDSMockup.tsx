import React from 'react';
import { Clock, AlertTriangle, CheckCircle, Users, UtensilsCrossed, ChefHat } from 'lucide-react';

const orders = [
  {
    id: '#1042',
    table: 'T-05',
    floor: 'Ground',
    status: 'preparing',
    time: '3:42',
    waitTime: '12 min',
    items: [
      { name: 'Margherita Pizza', qty: 1, notes: 'Extra cheese' },
      { name: 'Caesar Salad', qty: 2, notes: '' },
    ],
    isLate: false,
  },
  {
    id: '#1043',
    table: 'T-08',
    floor: 'Ground',
    status: 'ready',
    time: '1:15',
    waitTime: '8 min',
    items: [
      { name: 'Pasta Carbonara', qty: 1, notes: 'No bacon' },
      { name: 'Garlic Bread', qty: 1, notes: '' },
    ],
    isLate: false,
  },
  {
    id: '#1044',
    table: 'T-02',
    floor: 'Terrace',
    status: 'new',
    time: '0:30',
    waitTime: '2 min',
    items: [
      { name: 'Burger Deluxe', qty: 2, notes: 'Medium rare' },
      { name: 'Fries', qty: 2, notes: 'Extra crispy' },
      { name: 'Coke', qty: 2, notes: '' },
    ],
    isLate: false,
  },
  {
    id: '#1045',
    table: 'Takeaway',
    floor: '',
    status: 'preparing',
    time: '5:20',
    waitTime: '18 min',
    items: [
      { name: 'Fish & Chips', qty: 1, notes: '' },
      { name: 'Coleslaw', qty: 1, notes: '' },
    ],
    isLate: true,
  },
  {
    id: '#1046',
    table: 'T-12',
    floor: 'Terrace',
    status: 'served',
    time: '0:00',
    waitTime: '25 min',
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm sm:text-lg font-bold text-white">Kitchen Display</h2>
              <p className="text-[10px] sm:text-xs text-gray-400">Real-time order management</p>
            </div>
          </div>

          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded-full font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
              {newOrders} New
            </span>
            <span className="text-[10px] sm:text-xs bg-yellow-500/20 text-yellow-400 px-2 sm:px-3 py-1 rounded-full font-medium">
              {preparingOrders} Preparing
            </span>
            <span className="text-[10px] sm:text-xs bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-full font-medium">
              {readyOrders} Ready
            </span>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className={`rounded-xl p-3 transition-all ${
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
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold text-white">{order.id}</span>
                  {order.isLate && (
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span className="text-[10px] sm:text-xs">{order.time}</span>
                </div>
              </div>

              {/* Table Info */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                  order.table === 'Takeaway' ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-700 text-gray-300'
                }`}>
                  {order.table}
                </span>
                {order.floor && (
                  <span className="text-[10px] text-gray-500">{order.floor}</span>
                )}
              </div>

              {/* Items */}
              <div className="space-y-1.5 mb-3">
                {order.items.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-xs font-medium text-gray-400 min-w-[16px]">{item.qty}x</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-white truncate">{item.name}</p>
                      {item.notes && (
                        <p className="text-[10px] text-yellow-400 truncate">• {item.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
                {order.items.length > 3 && (
                  <p className="text-[10px] text-gray-500">+{order.items.length - 3} more items</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {order.status === 'new' && (
                  <button className="flex-1 text-[10px] sm:text-xs bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg font-medium transition-colors">
                    Start
                  </button>
                )}
                {order.status === 'preparing' && (
                  <button className="flex-1 text-[10px] sm:text-xs bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-lg font-medium transition-colors">
                    Mark Ready
                  </button>
                )}
                {order.status === 'ready' && (
                  <button className="flex-1 text-[10px] sm:text-xs bg-gray-600 hover:bg-gray-500 text-white py-1.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Bump
                  </button>
                )}
                {order.status === 'served' && (
                  <span className="flex-1 text-[10px] sm:text-xs text-center text-gray-500 py-1.5">
                    Completed
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
