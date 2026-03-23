import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Package, DollarSign, BarChart3, ArrowUpRight } from 'lucide-react';

const kpis = [
  { label: 'Revenue', value: 47250, prefix: 'AED ', change: '+12.4%', icon: DollarSign, color: 'blue' },
  { label: 'Visitors', value: 1284, prefix: '', change: '+8.2%', icon: Users, color: 'green' },
  { label: 'Orders', value: 342, prefix: '', change: '+15.1%', icon: BarChart3, color: 'purple' },
  { label: 'Avg Ticket', value: 138, prefix: 'AED ', change: '+3.7%', icon: TrendingUp, color: 'amber' },
];

export const SwirlWorksMockup: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState(kpis.map(() => 0));
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChart(true), 400);
    const interval = setInterval(() => {
      setAnimatedValues(prev =>
        prev.map((val, i) => {
          const target = kpis[i].value;
          if (val >= target) return target;
          const increment = Math.ceil(target / 25);
          return Math.min(val + increment, target);
        })
      );
    }, 60);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  const chartBars = [35, 42, 38, 55, 48, 62, 58, 72, 65, 78, 70, 85];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[300px] h-[370px] bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] border border-gray-200/60 overflow-hidden">
        {/* Header */}
        <div className="h-9 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-between px-3">
          <div className="flex items-center gap-1.5">
            <BarChart3 size={10} className="text-blue-400" />
            <span className="text-[8px] text-white/90 font-semibold">Swirl Works</span>
          </div>
          <span className="text-[7px] text-white/50">Dashboard</span>
        </div>

        <div className="p-3 space-y-3">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-2">
            {kpis.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <div key={i} className="p-2 rounded-xl bg-gray-50/80 border border-gray-100 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <Icon size={12} className="text-primary" />
                    <span className="text-[7px] text-green-600 font-semibold flex items-center gap-0.5">
                      <ArrowUpRight size={8} />
                      {kpi.change}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-foreground">
                    {kpi.prefix}{animatedValues[i].toLocaleString()}
                  </p>
                  <p className="text-[7px] text-muted-foreground">{kpi.label}</p>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="bg-gray-50/80 rounded-xl p-2.5 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[8px] font-bold">Revenue Trend</span>
              <span className="text-[7px] text-muted-foreground">Last 12 months</span>
            </div>
            <div className="flex items-end gap-[3px] h-[60px]">
              {chartBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all duration-700 ease-out"
                  style={{
                    height: showChart ? `${h}%` : '0%',
                    background: i === chartBars.length - 1
                      ? 'linear-gradient(to top, hsl(217 100% 40%), hsl(217 100% 55%))'
                      : 'hsl(214 32% 91%)',
                    transitionDelay: `${i * 50}ms`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="space-y-1.5">
            {[
              { text: 'Tomatoes running low — 12 units left', type: 'warning' },
              { text: 'Monthly report ready for download', type: 'info' },
            ].map((alert, i) => (
              <div key={i} className={`flex items-center gap-2 p-2 rounded-lg text-[7.5px] ${alert.type === 'warning' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                <Package size={10} className="flex-shrink-0" />
                <span>{alert.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
