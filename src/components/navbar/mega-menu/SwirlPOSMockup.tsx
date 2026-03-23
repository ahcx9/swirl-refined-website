import React, { useState, useEffect, useRef } from 'react';

const useCountUp = (target: number, duration: number, start: boolean) => {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [target, duration, start]);

  return value;
};

export const SwirlPOSMockup: React.FC = () => {
  const [step, setStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setStep((s) => (s + 1) % 5), 2800);
    return () => clearInterval(interval);
  }, []);

  const todaySales = useCountUp(12840, 1600, mounted);
  const ordersCount = useCountUp(187, 1200, mounted);
  const avgOrder = useCountUp(69, 1000, mounted);
  const tablesTurned = useCountUp(42, 800, mounted);

  const tables = [
    { id: 'T1', seats: 2, status: 'occupied', x: 8, y: 8, w: 28, h: 22 },
    { id: 'T2', seats: 4, status: 'occupied', x: 42, y: 8, w: 28, h: 22 },
    { id: 'T3', seats: 2, status: 'available', x: 76, y: 8, w: 22, h: 22 },
    { id: 'T4', seats: 6, status: 'occupied', x: 8, y: 38, w: 35, h: 24 },
    { id: 'T5', seats: 4, status: 'reserved', x: 50, y: 38, w: 28, h: 24 },
    { id: 'T6', seats: 2, status: 'available', x: 83, y: 38, w: 15, h: 24 },
    { id: 'T7', seats: 8, status: 'occupied', x: 8, y: 70, w: 42, h: 26 },
    { id: 'T8', seats: 4, status: 'available', x: 56, y: 70, w: 22, h: 26 },
    { id: 'T9', seats: 2, status: 'reserved', x: 82, y: 70, w: 16, h: 26 },
  ];

  const statusColor: Record<string, string> = {
    occupied: 'bg-primary',
    available: 'bg-emerald-400',
    reserved: 'bg-amber-400',
  };

  const statusBg: Record<string, string> = {
    occupied: 'bg-primary/10 border-primary/20',
    available: 'bg-emerald-50 border-emerald-200',
    reserved: 'bg-amber-50 border-amber-200',
  };

  return (
    <div className="relative w-full h-full flex flex-col gap-2 py-1">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center">
            <span className="text-[8px] font-bold text-primary">⚡</span>
          </div>
          <span className="text-[10px] font-bold text-foreground">swirl POS</span>
        </div>
        <span className="text-[7px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold">Live</span>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-4 gap-1.5">
        {[
          { label: "Today's Sales", value: `AED ${todaySales.toLocaleString()}`, change: '+18%', icon: '💰' },
          { label: 'Orders', value: ordersCount.toLocaleString(), change: '+12%', icon: '📦' },
          { label: 'Avg Order', value: `AED ${avgOrder}`, change: '+5%', icon: '📊' },
          { label: 'Tables Turned', value: tablesTurned.toLocaleString(), change: '+9%', icon: '🔄' },
        ].map((kpi, i) => (
          <div
            key={kpi.label}
            className={`bg-white rounded-xl p-2 border border-gray-100 shadow-sm transition-all duration-500 ${
              step === 0 ? 'opacity-100' : 'opacity-95'
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[7px]">{kpi.icon}</span>
              <span className="text-[6px] font-semibold text-emerald-600">{kpi.change}</span>
            </div>
            <p className="text-[11px] font-bold text-foreground leading-tight">{kpi.value}</p>
            <p className="text-[6px] text-muted-foreground mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Main area: Floor Plan + Order Ticket */}
      <div className="flex gap-2 flex-1 min-h-0">
        {/* Floor Plan */}
        <div className={`flex-1 bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 1 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[8px] font-bold text-foreground">Floor Plan</p>
            <div className="flex items-center gap-2">
              {[
                { label: 'Occupied', color: 'bg-primary' },
                { label: 'Available', color: 'bg-emerald-400' },
                { label: 'Reserved', color: 'bg-amber-400' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-0.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${l.color}`} />
                  <span className="text-[5px] text-muted-foreground">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full" style={{ height: '140px' }}>
            {/* Grid background */}
            <div className="absolute inset-0 rounded-lg bg-muted/30" 
              style={{ 
                backgroundImage: 'radial-gradient(circle, hsl(var(--muted-foreground) / 0.08) 1px, transparent 1px)',
                backgroundSize: '12px 12px' 
              }} 
            />
            {tables.map((table, i) => (
              <div
                key={table.id}
                className={`absolute rounded-lg border flex flex-col items-center justify-center transition-all duration-500 cursor-default ${statusBg[table.status]} ${
                  step === 1 && table.status === 'occupied' ? 'scale-105 shadow-sm' : ''
                }`}
                style={{
                  left: `${table.x}%`,
                  top: `${table.y}%`,
                  width: `${table.w}%`,
                  height: `${table.h}%`,
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                <span className="text-[7px] font-bold text-foreground">{table.id}</span>
                <span className="text-[5px] text-muted-foreground">{table.seats} seats</span>
                <span className={`w-1.5 h-1.5 rounded-full mt-0.5 ${statusColor[table.status]}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Active Order + KDS */}
        <div className="w-[130px] flex-shrink-0 flex flex-col gap-2">
          {/* Active Order */}
          <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm flex-1 transition-all duration-500 ${
            step === 2 ? 'ring-1 ring-primary/20' : ''
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[8px] font-bold text-foreground">Order #247</p>
              <span className={`text-[5px] font-semibold px-1.5 py-0.5 rounded-full transition-all duration-300 ${
                step >= 3 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {step >= 3 ? 'Paid' : 'Open'}
              </span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: 'Wagyu Burger', qty: 1, price: 'AED 85' },
                { name: 'Truffle Fries', qty: 2, price: 'AED 60' },
                { name: 'Iced Latte', qty: 1, price: 'AED 22' },
              ].map((item, i) => (
                <div key={item.name} className={`p-1.5 rounded-lg transition-all duration-300 ${
                  step === 2 && i === 0 ? 'bg-primary/5 border border-primary/10' : 'bg-muted/40'
                }`}>
                  <div className="flex items-center justify-between">
                    <p className="text-[6px] font-semibold text-foreground">{item.name}</p>
                    <p className="text-[6px] font-bold text-foreground">{item.price}</p>
                  </div>
                  <p className="text-[5px] text-muted-foreground">x{item.qty}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-1.5 border-t border-gray-100">
              <div className="flex justify-between">
                <span className="text-[7px] font-bold text-foreground">Total</span>
                <span className="text-[7px] font-bold text-primary">AED 167</span>
              </div>
            </div>
            {/* Payment buttons */}
            <div className="flex gap-1 mt-2">
              {['Cash', 'Card', 'Split'].map((m, i) => (
                <span key={m} className={`flex-1 text-center text-[5px] py-1 rounded-md font-semibold transition-all duration-300 ${
                  step === 3 && i === 1 ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground'
                }`}>{m}</span>
              ))}
            </div>
            {step === 3 && (
              <div className="mt-1.5 flex items-center gap-1 animate-fade-in">
                <div className="w-3 h-3 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-[6px] text-emerald-600">✓</span>
                </div>
                <span className="text-[6px] font-semibold text-emerald-600">Payment approved</span>
              </div>
            )}
          </div>

          {/* KDS Mini */}
          <div className={`bg-white rounded-xl p-2 border border-gray-100 shadow-sm transition-all duration-500 ${
            step === 4 ? 'ring-1 ring-primary/20' : ''
          }`}>
            <p className="text-[7px] font-bold text-foreground mb-1">Kitchen Display</p>
            {[
              { name: 'Wagyu Burger', status: 'Cooking', color: 'bg-amber-400' },
              { name: 'Truffle Fries', status: 'Ready', color: 'bg-emerald-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 mb-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span className="text-[6px] text-muted-foreground">{item.name} — {item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
