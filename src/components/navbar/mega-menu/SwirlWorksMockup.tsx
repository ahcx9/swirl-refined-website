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

export const SwirlWorksMockup: React.FC = () => {
  const [step, setStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setStep((s) => (s + 1) % 4), 3000);
    return () => clearInterval(interval);
  }, []);

  const revenue = useCountUp(47250, 1800, mounted);
  const visitors = useCountUp(1284, 1400, mounted);
  const orders = useCountUp(342, 1200, mounted);
  const avgTicket = useCountUp(138, 1000, mounted);

  const chartBars = [40, 35, 50, 42, 55, 48, 60, 45, 52, 58, 50, 78];
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  return (
    <div className="relative w-full h-full flex flex-col gap-2 py-1">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center">
            <span className="text-[8px] font-bold text-primary">📊</span>
          </div>
          <span className="text-[10px] font-bold text-foreground">swirl Works</span>
        </div>
        <span className="text-[7px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">Dashboard</span>
      </div>

      {/* KPI Grid 2x2 */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: '$', label: 'Revenue', value: `AED ${revenue.toLocaleString()}`, change: '+12.4%', color: 'text-emerald-600', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { icon: '👥', label: 'Visitors', value: visitors.toLocaleString(), change: '+8.2%', color: 'text-emerald-600', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
          { icon: '📈', label: 'Orders', value: orders.toLocaleString(), change: '+15.1%', color: 'text-emerald-600', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
          { icon: '〰', label: 'Avg Ticket', value: `AED ${avgTicket}`, change: '+3.7%', color: 'text-emerald-600', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
        ].map((kpi, i) => (
          <div
            key={kpi.label}
            className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
              step === 0 ? 'opacity-100 translate-y-0' : 'opacity-95'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className={`w-5 h-5 rounded-md ${kpi.iconBg} flex items-center justify-center`}>
                <span className={`text-[8px] ${kpi.iconColor}`}>{kpi.icon}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-[7px]">↗</span>
                <span className={`text-[7px] font-semibold ${kpi.color}`}>{kpi.change}</span>
              </div>
            </div>
            <p className="text-[13px] font-bold text-foreground leading-tight">{kpi.value}</p>
            <p className="text-[8px] text-muted-foreground mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Revenue Trend Chart */}
      <div className={`bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex-1 transition-all duration-500 ${
        step === 1 ? 'ring-1 ring-primary/20' : ''
      }`}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-bold text-foreground">Revenue Trend</p>
          <span className="text-[7px] text-muted-foreground">Last 12 months</span>
        </div>
        <div className="flex items-end gap-1" style={{ height: '60px' }}>
          {chartBars.map((h, i) => {
            const barHeight = mounted ? Math.max(4, (h / 100) * 60) : 3;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                <div
                  className={`w-full rounded-sm transition-all duration-1000 ${
                    i === chartBars.length - 1 ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  style={{
                    height: `${barHeight}px`,
                    transitionDelay: `${i * 60}ms`,
                  }}
                />
                <span className="text-[5px] text-muted-foreground flex-shrink-0">{months[i]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alert Cards */}
      <div className="flex flex-col gap-1.5">
        <div className={`bg-red-50 rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-500 ${
          step === 2 ? 'ring-1 ring-red-200' : ''
        }`}>
          <span className="text-[9px]">🔴</span>
          <span className="text-[8px] font-medium text-red-700">Tomatoes running low — 12 units left</span>
        </div>
        <div className={`bg-amber-50 rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-500 ${
          step === 3 ? 'ring-1 ring-amber-200' : ''
        }`}>
          <span className="text-[9px]">📋</span>
          <span className="text-[8px] font-medium text-amber-700">Monthly report ready for download</span>
        </div>
      </div>
    </div>
  );
};
