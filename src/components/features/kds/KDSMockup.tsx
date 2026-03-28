import React from 'react';
import { Clock, AlertTriangle, CheckCircle, ChefHat, Flame, Coffee, Salad, UtensilsCrossed } from 'lucide-react';

/* ─── Order data ─── */
const orders = [
  {
    id: '#1042', table: 'T-05', station: 'Grill', status: 'preparing' as const,
    elapsed: '3:42', items: [
      { name: 'Margherita Pizza', qty: 1, mods: ['Extra cheese', 'Thin crust'] },
      { name: 'Caesar Salad', qty: 2, mods: [] },
    ],
    isLate: false,
  },
  {
    id: '#1043', table: 'T-08', station: 'Salad', status: 'ready' as const,
    elapsed: '1:15', items: [
      { name: 'Pasta Carbonara', qty: 1, mods: ['No bacon'] },
      { name: 'Garlic Bread', qty: 1, mods: [] },
    ],
    isLate: false,
  },
  {
    id: '#1044', table: 'T-02', station: 'Grill', status: 'new' as const,
    elapsed: '0:30', items: [
      { name: 'Burger Deluxe', qty: 2, mods: ['Medium rare'] },
      { name: 'Truffle Fries', qty: 2, mods: ['Extra crispy'] },
      { name: 'Coke Zero', qty: 2, mods: [] },
    ],
    isLate: false,
  },
  {
    id: '#1045', table: 'TKW', station: 'Grill', status: 'preparing' as const,
    elapsed: '5:20', items: [
      { name: 'Fish & Chips', qty: 1, mods: ['Tartar on side'] },
      { name: 'Coleslaw', qty: 1, mods: [] },
    ],
    isLate: true,
  },
  {
    id: '#1046', table: 'T-12', station: 'Drinks', status: 'new' as const,
    elapsed: '0:12', items: [
      { name: 'Espresso Martini', qty: 2, mods: [] },
      { name: 'Flat White', qty: 1, mods: ['Oat milk'] },
    ],
    isLate: false,
  },
  {
    id: '#1047', table: 'T-09', station: 'Salad', status: 'served' as const,
    elapsed: '0:00', items: [
      { name: 'Grilled Salmon', qty: 1, mods: ['No sauce'] },
      { name: 'Steamed Veggies', qty: 1, mods: [] },
    ],
    isLate: false,
  },
];

const stationIcon: Record<string, React.ElementType> = {
  Grill: Flame,
  Salad: Salad,
  Drinks: Coffee,
};

const statusConfig = {
  new:       { bg: 'bg-blue-500/12', border: 'border-blue-500/25', badge: 'bg-blue-500', label: 'NEW', textColor: 'text-blue-400' },
  preparing: { bg: 'bg-amber-500/10', border: 'border-amber-500/25', badge: 'bg-amber-500', label: 'PREP', textColor: 'text-amber-400' },
  ready:     { bg: 'bg-emerald-500/12', border: 'border-emerald-500/25', badge: 'bg-emerald-500', label: 'READY', textColor: 'text-emerald-400' },
  served:    { bg: 'bg-gray-800/60', border: 'border-gray-700/40', badge: 'bg-gray-600', label: 'DONE', textColor: 'text-gray-500' },
};

const KDSMockup: React.FC = () => {
  const counts = {
    new: orders.filter(o => o.status === 'new').length,
    preparing: orders.filter(o => o.status === 'preparing').length,
    ready: orders.filter(o => o.status === 'ready').length,
  };

  return (
    <div className="relative group">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-primary/[0.03] rounded-[2rem] blur-2xl pointer-events-none" />

      {/* Device frame */}
      <div className="relative bg-[#0f1117] rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden border border-white/[0.06]">

        {/* ─── Top bar (system chrome) ─── */}
        <div className="bg-[#161922] px-3 sm:px-5 py-2 sm:py-3 flex items-center gap-2 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-4 sm:mx-8">
            <div className="max-w-[220px] sm:max-w-xs mx-auto h-5 sm:h-6 bg-white/[0.04] rounded-full flex items-center justify-center">
              <span className="text-[8px] sm:text-[10px] text-white/30 font-medium tracking-wide">kds.swirl.cx — Kitchen Station</span>
            </div>
          </div>
          <div className="w-12" />
        </div>

        {/* ─── App header ─── */}
        <div className="bg-[#12141c] px-3 sm:px-5 py-2.5 sm:py-3.5 border-b border-white/[0.05]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-primary/15 rounded-lg sm:rounded-xl">
                <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-[11px] sm:text-sm font-bold text-white tracking-tight">Kitchen Display</h2>
                <p className="text-[8px] sm:text-[10px] text-white/30">All stations · Live</p>
              </div>
            </div>

            {/* Live status pills */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-[8px] sm:text-[10px] bg-blue-500/15 text-blue-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                {counts.new} New
              </span>
              <span className="text-[8px] sm:text-[10px] bg-amber-500/15 text-amber-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-semibold">
                {counts.preparing} Prep
              </span>
              <span className="text-[8px] sm:text-[10px] bg-emerald-500/15 text-emerald-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-semibold">
                {counts.ready} Ready
              </span>
            </div>
          </div>
        </div>

        {/* ─── Orders grid ─── */}
        <div className="p-2 sm:p-4 bg-[#0d0f14]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3">
            {orders.map((order) => {
              const cfg = statusConfig[order.status];
              const StationIcon = stationIcon[order.station] || UtensilsCrossed;

              return (
                <div
                  key={order.id}
                  className={`rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border transition-all duration-300 ${
                    order.isLate
                      ? 'bg-red-500/8 border-red-500/30 shadow-[0_0_20px_-5px_rgba(239,68,68,0.15)]'
                      : `${cfg.bg} ${cfg.border}`
                  }`}
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] sm:text-sm font-bold text-white">{order.id}</span>
                      {order.isLate && (
                        <div className="flex items-center gap-0.5 text-red-400">
                          <AlertTriangle className="w-3 h-3 animate-pulse" />
                          <span className="text-[7px] sm:text-[9px] font-bold uppercase">Late</span>
                        </div>
                      )}
                    </div>
                    <span className={`text-[7px] sm:text-[9px] font-bold uppercase px-1.5 sm:px-2 py-0.5 rounded-md ${cfg.badge} text-white`}>
                      {cfg.label}
                    </span>
                  </div>

                  {/* Table + Station + Timer */}
                  <div className="flex items-center gap-1.5 mb-2 sm:mb-3 flex-wrap">
                    <span className={`text-[9px] sm:text-[11px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-md ${
                      order.table === 'TKW' ? 'bg-purple-500/20 text-purple-300' : 'bg-white/[0.06] text-white/70'
                    }`}>
                      {order.table === 'TKW' ? '🥡 Takeaway' : order.table}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-white/30 flex items-center gap-0.5">
                      <StationIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {order.station}
                    </span>
                    <span className={`text-[8px] sm:text-[10px] ml-auto flex items-center gap-0.5 font-mono ${
                      order.isLate ? 'text-red-400 font-bold' : 'text-white/40'
                    }`}>
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {order.elapsed}
                    </span>
                  </div>

                  {/* Items */}
                  <div className="space-y-1 sm:space-y-1.5 mb-2.5 sm:mb-3">
                    {order.items.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-[9px] sm:text-[11px] font-bold text-white/40 mt-px">{item.qty}×</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] sm:text-[12px] text-white/90 font-medium truncate">{item.name}</p>
                          {item.mods.length > 0 && (
                            <div className="flex flex-wrap gap-0.5 mt-0.5">
                              {item.mods.map((mod, mi) => (
                                <span key={mi} className="text-[7px] sm:text-[8px] text-amber-400/80 bg-amber-500/10 px-1 sm:px-1.5 py-px rounded">
                                  {mod}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <p className="text-[8px] sm:text-[9px] text-white/30 pl-5">+{order.items.length - 3} more items</p>
                    )}
                  </div>

                  {/* Action button */}
                  {order.status === 'new' && (
                    <button className="w-full text-[9px] sm:text-[11px] bg-blue-500 hover:bg-blue-600 text-white py-1.5 sm:py-2 rounded-lg font-semibold transition-colors">
                      Start Preparing
                    </button>
                  )}
                  {order.status === 'preparing' && (
                    <button className="w-full text-[9px] sm:text-[11px] bg-emerald-500 hover:bg-emerald-600 text-white py-1.5 sm:py-2 rounded-lg font-semibold transition-colors">
                      Mark Ready
                    </button>
                  )}
                  {order.status === 'ready' && (
                    <button className="w-full text-[9px] sm:text-[11px] bg-white/10 hover:bg-white/15 text-white/80 py-1.5 sm:py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Bump
                    </button>
                  )}
                  {order.status === 'served' && (
                    <div className="w-full text-[9px] sm:text-[11px] text-center text-white/20 py-1.5 sm:py-2 font-medium">
                      ✓ Completed
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KDSMockup;
