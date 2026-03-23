import React, { useState, useEffect } from 'react';

export const SwirlWorksMockup: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const kpis = [
    { label: 'Revenue', value: '$48,290', change: '+12.4%', positive: true },
    { label: 'Orders', value: '1,847', change: '+8.2%', positive: true },
    { label: 'Avg Ticket', value: '$26.14', change: '+3.1%', positive: true },
  ];

  const chartBars = [65, 45, 80, 55, 90, 70, 85];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="relative w-full h-full flex flex-col gap-2.5 py-1">
      {/* KPI Row */}
      <div className="flex gap-2">
        {kpis.map((kpi, i) => (
          <div
            key={kpi.label}
            className={`flex-1 bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
              step === 0 ? 'opacity-100 translate-y-0' : 'opacity-90'
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <p className="text-[8px] text-muted-foreground font-medium">{kpi.label}</p>
            <p className="text-[13px] font-bold text-foreground mt-0.5">{kpi.value}</p>
            <p className={`text-[8px] font-semibold mt-0.5 ${kpi.positive ? 'text-emerald-600' : 'text-red-500'}`}>
              {kpi.change}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className={`bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex-1 transition-all duration-500 ${
        step === 1 ? 'ring-1 ring-primary/20' : ''
      }`}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-semibold text-foreground">Weekly Revenue</p>
          <div className="flex gap-1">
            {['This week', 'Last week'].map((l, i) => (
              <span key={l} className={`text-[7px] px-1.5 py-0.5 rounded-full ${i === 0 ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground'}`}>{l}</span>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-[80px]">
          {chartBars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`w-full rounded-md transition-all duration-700 ${
                  step >= 1 ? 'opacity-100' : 'opacity-30'
                } ${i === 4 ? 'bg-primary' : 'bg-primary/20'}`}
                style={{
                  height: step >= 1 ? `${h}%` : '10%',
                  transitionDelay: `${i * 60}ms`,
                }}
              />
              <span className="text-[6px] text-muted-foreground">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom cards row */}
      <div className="flex gap-2">
        {/* Inventory Alert */}
        <div className={`flex-1 bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 2 ? 'ring-1 ring-amber-200' : ''
        }`}>
          <p className="text-[8px] font-semibold text-foreground mb-1.5">Inventory Alerts</p>
          {['Tomatoes — Low', 'Olive Oil — Reorder'].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 mb-1">
              <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-amber-400' : 'bg-red-400'}`} />
              <span className="text-[7px] text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        {/* CRM Card */}
        <div className={`flex-1 bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 3 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <p className="text-[8px] font-semibold text-foreground mb-1.5">Top Guests</p>
          {['Sarah M. — 24 visits', 'James K. — 18 visits'].map((g, i) => (
            <div key={i} className="flex items-center gap-1.5 mb-1">
              <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-[6px] font-bold text-primary">{g[0]}</span>
              </div>
              <span className="text-[7px] text-muted-foreground">{g}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
