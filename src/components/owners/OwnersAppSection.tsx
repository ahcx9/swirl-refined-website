import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Activity, TrendingUp, TrendingDown, ChevronDown, Trophy, Clock3, Flame, Truck,
  FileClock, PackageX, MapPin, ShoppingBag,
} from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import {
  OUTLETS, TIME_FILTERS, FILTER_MULTIPLIER, COMPARISON_METRICS, HOUR_LABELS,
  formatAED, type TimeFilter, type ComparisonMetricKey, type OutletMetrics,
} from '@/data/ownersAppDemo';

const scaled = (o: OutletMetrics, f: TimeFilter) => {
  const m = FILTER_MULTIPLIER[f];
  return {
    ...o,
    netSales: Math.round(o.netSales * m),
    orders: Math.round(o.orders * m),
    dineIn: Math.round(o.dineIn * m),
    takeaway: Math.round(o.takeaway * m),
    delivery: Math.round(o.delivery * m),
    discounts: Math.round(o.discounts * m),
    voids: Math.round(o.voids * m),
    expenses: Math.round(o.expenses * m),
    hourly: o.hourly.map((h) => Math.round(h * m)),
  };
};

const Sparkline: React.FC<{ values: number[]; color: string }> = ({ values, color }) => {
  const max = Math.max(...values, 1);
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * 100},${28 - (v / max) * 24}`).join(' ');
  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="h-7 w-20" aria-hidden="true">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

/* --------------------------- Phone mockup --------------------------- */

const OwnersPhone: React.FC<{
  outlet: ReturnType<typeof scaled>;
  filter: TimeFilter;
  onFilter: (f: TimeFilter) => void;
  onOutlet: (id: string) => void;
}> = ({ outlet, filter, onFilter, onOutlet }) => {
  const maxHour = Math.max(...outlet.hourly);
  const split = [
    { label: 'Dine-in', value: outlet.dineIn, color: '#146EF5' },
    { label: 'Takeaway', value: outlet.takeaway, color: '#7FB0FA' },
    { label: 'Delivery', value: outlet.delivery, color: '#0B1F3A' },
  ];
  const splitTotal = split.reduce((a, b) => a + b.value, 0) || 1;

  return (
    <div className="relative mx-auto w-[240px] rounded-[38px] bg-[#0B1F3A] p-[9px] shadow-[0_24px_60px_rgba(11,31,58,0.25)] ring-1 ring-black/10" style={{ height: '492px' }}>
      {/* side buttons */}
      <span className="absolute -left-[3px] top-[96px] h-8 w-[3px] rounded-l bg-[#0B1F3A]" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[140px] h-8 w-[3px] rounded-l bg-[#0B1F3A]" aria-hidden="true" />
      <span className="absolute -right-[3px] top-[118px] h-12 w-[3px] rounded-r bg-[#0B1F3A]" aria-hidden="true" />
      <div className="relative h-full overflow-hidden rounded-[30px] bg-white">
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2 z-20 h-[19px] w-[76px] -translate-x-1/2 rounded-full bg-[#0B1F3A]" aria-hidden="true" />
        {/* status bar */}
        <div className="flex items-center justify-between bg-[#F7FAFF] px-3.5 pb-2 pt-[32px]">
          <span className="text-[10px] font-semibold text-[#5B7392]">9:41</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold text-[#2FA96B] ring-1 ring-[#DCF5E7]">
            <span className="owners-pulse h-1.5 w-1.5 rounded-full bg-[#2FA96B]" /> LIVE
          </span>
        </div>


        <div className="h-full space-y-2.5 overflow-y-auto p-3.5 pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* outlet selector */}
          <div className="relative">
            <select
              aria-label="Select outlet"
              value={outlet.id}
              onChange={(e) => onOutlet(e.target.value)}
              className="w-full appearance-none rounded-[10px] border border-[#E2EAF5] bg-white px-3 py-1.5 text-[11px] font-bold text-[#0B1F3A] outline-none"
            >
              {OUTLETS.map((o) => (
                <option key={o.id} value={o.id}>{o.name}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8FA3BF]" />
          </div>

          {/* time filters */}
          <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5">
            {TIME_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => onFilter(f)}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors duration-250 ${
                  filter === f ? 'bg-[#146EF5] text-white' : 'bg-[#F2F6FD] text-[#5B7392]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* net sales */}
          <div className="rounded-[14px] border border-[#E2EAF5] bg-[#F7FAFF] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8FA3BF]">Net sales</p>
            <p key={outlet.netSales} className="animate-fade-in text-[26px] font-bold leading-tight text-[#0B1F3A]">
              {formatAED(outlet.netSales)}
            </p>
            <p className={`mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold ${outlet.vsYesterday >= 0 ? 'text-[#2FA96B]' : 'text-[#D9534F]'}`}>
              {outlet.vsYesterday >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(outlet.vsYesterday)}% vs yesterday
            </p>
          </div>

          {/* metric grid */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { l: 'Orders', v: outlet.orders.toLocaleString() },
              { l: 'Avg order', v: formatAED(outlet.avgOrderValue) },
              { l: 'Open now', v: String(outlet.openOrders) },
            ].map((m) => (
              <div key={m.l} className="rounded-[10px] border border-[#E2EAF5] p-2">
                <p className="text-[9px] font-semibold uppercase text-[#8FA3BF]">{m.l}</p>
                <p key={m.v} className="animate-fade-in text-[13px] font-bold text-[#0B1F3A]">{m.v}</p>
              </div>
            ))}
          </div>

          {/* hourly chart */}
          <div className="rounded-[14px] border border-[#E2EAF5] p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8FA3BF]">Hourly sales</p>
            <div className="flex h-16 items-end gap-1">
              {outlet.hourly.map((h, i) => (
                <div key={i} className="group relative flex-1" title={`${HOUR_LABELS[i]} · ${formatAED(h)}`}>
                  <div
                    className="w-full rounded-t-[3px] bg-[#146EF5]/85 transition-all duration-300 ease-out group-hover:bg-[#146EF5]"
                    style={{ height: `${Math.max(6, (h / maxHour) * 64)}px` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-[8px] text-[#8FA3BF]">
              <span>11a</span><span>4p</span><span>10p</span>
            </div>
          </div>

          {/* channel split */}
          <div className="rounded-[14px] border border-[#E2EAF5] p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8FA3BF]">Channel split</p>
            <div className="flex h-2 overflow-hidden rounded-full">
              {split.map((s) => (
                <div key={s.label} style={{ width: `${(s.value / splitTotal) * 100}%`, backgroundColor: s.color }} className="transition-all duration-300" />
              ))}
            </div>
            <div className="mt-2 flex justify-between">
              {split.map((s) => (
                <div key={s.label} className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-[9.5px] text-[#5B7392]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* top items */}
          <div className="rounded-[14px] border border-[#E2EAF5] p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8FA3BF]">Top-selling items</p>
            <div className="space-y-1.5">
              {outlet.topItems.map((t) => (
                <div key={t.name} className="flex items-center justify-between">
                  <span className="text-[11.5px] font-medium text-[#0B1F3A]">{t.name}</span>
                  <span className="text-[11px] font-semibold text-[#5B7392]">{t.qty}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-[9px] text-[#A9B8CC]">Illustrative demo data</p>
        </div>
      </div>
    </div>
  );
};

/* --------------------------- Section --------------------------- */

const INSIGHTS = [
  { icon: Trophy, label: 'Highest performing outlet', value: 'Downtown Boulevard' },
  { icon: Clock3, label: 'Peak sales hour', value: '8:00 – 9:00 PM' },
  { icon: Flame, label: 'Top-selling item', value: 'Margherita Pizza' },
  { icon: Truck, label: 'Delivery sales today', value: 'AED 17,700' },
  { icon: FileClock, label: 'Pending reconciliation', value: '3 payouts' },
  { icon: PackageX, label: 'Low-stock alerts', value: '7 items' },
];

const OwnersAppSection: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [filter, setFilter] = useState<TimeFilter>('Today');
  const [activeOutlet, setActiveOutlet] = useState(OUTLETS[0].id);
  const [compare, setCompare] = useState<string[]>([OUTLETS[0].id, OUTLETS[2].id]);
  const [metric, setMetric] = useState<ComparisonMetricKey>('netSales');
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const outlets = useMemo(() => OUTLETS.map((o) => scaled(o, filter)), [filter]);
  const current = outlets.find((o) => o.id === activeOutlet) ?? outlets[0];
  const previewOutlet = outlets.find((o) => o.id === preview);

  const toggleCompare = (id: string) =>
    setCompare((prev) =>
      prev.includes(id) ? (prev.length > 2 ? prev.filter((p) => p !== id) : prev) : prev.length >= 3 ? [...prev.slice(1), id] : [...prev, id],
    );

  const compared = outlets.filter((o) => compare.includes(o.id));
  const metricMax = Math.max(...compared.map((o) => Number(o[metric])), 1);
  const isMoney = metric !== 'orders';

  return (
    <section ref={ref} className="bg-[#F7FAFF] py-16 md:py-24">
      <style>{`
        @keyframes owners-pulse { 0%,100% { opacity:1; transform:scale(1);} 50% { opacity:.45; transform:scale(1.25);} }
        .owners-pulse { animation: owners-pulse 2.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .owners-pulse { animation: none !important; } }
      `}</style>

      <div className="container-custom">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">swirl Owners App</p>
          <h2 className="text-3xl font-bold text-[#0B1F3A] md:text-4xl lg:text-5xl">Every Outlet. One Live View.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5B7392] md:text-lg">
            Track sales, orders, expenses and restaurant performance in real time. Compare every branch, discover what
            is driving growth and stay connected from wherever you are.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Phone */}
          <div className={`lg:col-span-5 transition-all duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <OwnersPhone outlet={current} filter={filter} onFilter={setFilter} onOutlet={setActiveOutlet} />
          </div>

          {/* Analytics */}
          <div className={`space-y-4 lg:col-span-7 transition-all duration-500 delay-150 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* All outlets */}
            <div className="rounded-[16px] border border-[#E2EAF5] bg-white p-4 shadow-[0_2px_16px_rgba(11,31,58,0.05)] md:p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="inline-flex items-center gap-2 text-[15px] font-bold text-[#0B1F3A]">
                  <MapPin className="h-4 w-4 text-primary" /> All outlets
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2FA96B]">
                  <Activity className="h-3.5 w-3.5" /> Live · {filter}
                </span>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {outlets.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => { setActiveOutlet(o.id); setPreview(preview === o.id ? null : o.id); }}
                    className={`rounded-[14px] border p-3 text-left transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md ${
                      activeOutlet === o.id ? 'border-primary/40 bg-[#F7FAFF]' : 'border-[#E2EAF5] bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[13px] font-bold text-[#0B1F3A]">{o.name}</p>
                        <p className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-semibold text-[#8FA3BF]">
                          <span className={`h-1.5 w-1.5 rounded-full ${o.online ? 'bg-[#2FA96B]' : 'bg-[#C8D3E2]'}`} />
                          {o.online ? 'Online' : 'Offline'}
                        </p>
                      </div>
                      <Sparkline values={o.hourly} color={o.color} />
                    </div>
                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <p key={o.netSales} className="animate-fade-in text-[16px] font-bold text-[#0B1F3A]">{formatAED(o.netSales)}</p>
                        <p className="text-[10.5px] text-[#5B7392]">{o.orders} orders · {formatAED(o.avgOrderValue)} avg</p>
                      </div>
                      <span className={`text-[11px] font-bold ${o.vsYesterday >= 0 ? 'text-[#2FA96B]' : 'text-[#D9534F]'}`}>
                        {o.vsYesterday >= 0 ? '+' : ''}{o.vsYesterday}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {previewOutlet && (
                <div className="mt-3 animate-fade-in rounded-[14px] border border-[#E2EAF5] bg-[#F7FAFF] p-3">
                  <p className="text-[12px] font-bold text-[#0B1F3A]">{previewOutlet.name} · quick view</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      ['Dine-in', formatAED(previewOutlet.dineIn)],
                      ['Takeaway', formatAED(previewOutlet.takeaway)],
                      ['Delivery', formatAED(previewOutlet.delivery)],
                      ['Expenses', formatAED(previewOutlet.expenses)],
                    ].map(([l, v]) => (
                      <div key={l} className="rounded-[10px] bg-white p-2">
                        <p className="text-[9px] font-semibold uppercase text-[#8FA3BF]">{l}</p>
                        <p className="text-[12px] font-bold text-[#0B1F3A]">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Compare branches */}
            <div className="rounded-[16px] border border-[#E2EAF5] bg-white p-4 shadow-[0_2px_16px_rgba(11,31,58,0.05)] md:p-5">
              <h3 className="inline-flex items-center gap-2 text-[15px] font-bold text-[#0B1F3A]">
                <ShoppingBag className="h-4 w-4 text-primary" /> Compare branches
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {outlets.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => toggleCompare(o.id)}
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors duration-250 ${
                      compare.includes(o.id) ? 'border-transparent text-white' : 'border-[#E2EAF5] text-[#5B7392] hover:border-primary/40'
                    }`}
                    style={compare.includes(o.id) ? { backgroundColor: o.color } : undefined}
                  >
                    {o.name}
                  </button>
                ))}
              </div>

              <div className="mt-3 -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1">
                {COMPARISON_METRICS.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setMetric(m.key)}
                    className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] font-semibold transition-colors duration-250 ${
                      metric === m.key ? 'bg-[#0B1F3A] text-white' : 'bg-[#F2F6FD] text-[#5B7392]'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                {compared.map((o) => {
                  const value = Number(o[metric]);
                  return (
                    <div key={o.id} title={isMoney ? formatAED(value) : `${value} orders`}>
                      <div className="mb-1 flex items-center justify-between text-[11.5px]">
                        <span className="font-semibold text-[#0B1F3A]">{o.name}</span>
                        <span className="font-bold text-[#5B7392]">{isMoney ? formatAED(value) : value.toLocaleString()}</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#F2F6FD]">
                        <div
                          className="h-full rounded-full transition-[width] duration-500 ease-out"
                          style={{ width: inView ? `${(value / metricMax) * 100}%` : '0%', backgroundColor: o.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-[#E2EAF5] pt-3">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8FA3BF]">Top-selling items</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {compared.map((o) => (
                    <div key={o.id} className="rounded-[10px] bg-[#F7FAFF] p-2">
                      <p className="text-[10.5px] font-bold" style={{ color: o.color }}>{o.name}</p>
                      {o.topItems.slice(0, 3).map((t) => (
                        <p key={t.name} className="text-[10.5px] text-[#5B7392]">{t.name} · {t.qty}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
              {INSIGHTS.map((i) => (
                <div key={i.label} className="rounded-[14px] border border-[#E2EAF5] bg-white/70 p-3">
                  <i.icon className="mb-1.5 h-4 w-4 text-primary" />
                  <p className="text-[10px] font-medium uppercase tracking-wide text-[#8FA3BF]">{i.label}</p>
                  <p className="text-[12.5px] font-bold text-[#0B1F3A]">{i.value}</p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#A9B8CC]">All figures shown are illustrative demo data.</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <SwirlCTA />
        </div>
      </div>
    </section>
  );
};

export default OwnersAppSection;
