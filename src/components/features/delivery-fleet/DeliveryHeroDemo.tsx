import React from 'react';
import { Bike, MapPin, Navigation, Camera, Phone, Wallet, CheckCircle2 } from 'lucide-react';
import { useAutoplayInView, useStepLoop } from '@/hooks/useAutoplayInView';
import { useCurrency } from '@/hooks/useCurrency';

const STAGES = ['Unassigned', 'Assigned', 'Picked Up', 'On the Way', 'Delivered'] as const;

const riders = [
  { name: 'Ahmed R.', vehicle: 'Scooter · 4821 RJA', load: 1 },
  { name: 'Faisal K.', vehicle: 'Bike · 7364 KLM', load: 2 },
  { name: 'Omar S.', vehicle: 'Car · 1190 TSD', load: 0 },
];

const DeliveryHeroDemo: React.FC = () => {
  const { ref, playing } = useAutoplayInView<HTMLDivElement>();
  const { formatAmount } = useCurrency();
  const [step] = useStepLoop(5, 2200, playing);
  const stage = STAGES[step];
  const progress = (step / (STAGES.length - 1)) * 100;

  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-12">
      {/* Dispatcher dashboard */}
      <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_18px_50px_-30px_rgba(16,24,40,0.45)]">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
          <span className="text-[13px] font-semibold text-foreground">Delivery command centre · Riyadh — Al Malaz</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" /> 3 riders online
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2">
          {/* Map */}
          <div className="relative h-[210px] overflow-hidden rounded-xl border border-gray-100 bg-[#eef2f7]">
            <svg viewBox="0 0 320 210" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <g stroke="#cfd8e3" strokeWidth="6" fill="none">
                <path d="M-10 60 H330" /><path d="M-10 150 H330" />
                <path d="M70 -10 V220" /><path d="M215 -10 V220" />
              </g>
              <path d="M70 150 L70 60 L215 60" stroke="#0052CC" strokeWidth="3" fill="none" strokeDasharray="6 6" />
              <circle cx="70" cy="150" r="6" fill="#0a1628" />
              <circle cx="215" cy="60" r="6" fill="#10b981" />
            </svg>
            <div
              className="absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-[2000ms] ease-linear"
              style={{
                left: step < 2 ? '22%' : step === 2 ? '22%' : step === 3 ? '46%' : '67%',
                top: step < 3 ? '71%' : step === 3 ? '29%' : '29%',
              }}
            >
              <Bike className="m-1.5 h-4 w-4" aria-hidden="true" />
            </div>
            <span className="absolute bottom-2 left-2 rounded-md bg-white/85 px-2 py-1 text-[10.5px] font-medium text-muted-foreground">
              Live rider positions · sample data
            </span>
          </div>

          {/* Order card */}
          <div className="rounded-xl border border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12.5px] font-bold text-foreground">Order #4821</p>
                <p className="text-[11.5px] text-muted-foreground">Layla A. · 3 items · {formatAmount(125)}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  step === 0
                    ? 'bg-gray-100 text-muted-foreground'
                    : step === 4
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-primary/10 text-primary'
                }`}
              >
                {stage}
              </span>
            </div>

            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full rounded-full bg-primary transition-[width] duration-700" style={{ width: `${progress}%` }} />
            </div>

            <div className="mt-4 space-y-2">
              {riders.map((r, i) => (
                <div
                  key={r.name}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 transition-all duration-500 ${
                    i === 0 && step >= 1 ? 'border-primary/30 bg-primary/[0.05]' : 'border-gray-100 bg-white'
                  }`}
                >
                  <span className="text-[12px] font-semibold text-foreground">{r.name}</span>
                  <span className="text-[11px] text-muted-foreground">{r.vehicle}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              {step === 0 ? 'Awaiting assignment' : 'Assigned to Ahmed R.'}
            </p>
          </div>
        </div>
      </div>

      {/* Rider portal */}
      <div className="lg:col-span-4">
        <div className="mx-auto max-w-[300px] overflow-hidden rounded-[26px] border-[6px] border-[#0a1628] bg-white shadow-[0_28px_60px_-30px_rgba(10,22,40,0.6)]">
          <div className="bg-[#0a1628] px-4 py-3 text-white">
            <p className="text-[11px] text-white/50">Rider portal</p>
            <p className="text-[14px] font-bold">Ahmed R. · Scooter 4821 RJA</p>
          </div>

          <div className="space-y-3 p-4">
            <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Current order</p>
              <p className="mt-1 text-[14px] font-bold text-foreground">#4821 · Layla A.</p>
              <p className="mt-0.5 flex items-start gap-1.5 text-[12px] text-muted-foreground">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Al Malaz, King Abdulaziz Rd, Bldg 12 — Apt 4
              </p>
              <div className="mt-2 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-primary ring-1 ring-primary/15">
                  <Navigation className="h-3 w-3" aria-hidden="true" /> Navigate
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-foreground ring-1 ring-gray-200">
                  <Phone className="h-3 w-3" aria-hidden="true" /> Call
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-amber-50 px-3 py-2.5 ring-1 ring-amber-200/70">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-amber-900">
                <Wallet className="h-3.5 w-3.5" aria-hidden="true" /> Cash on delivery
              </span>
              <span className="text-[12.5px] font-bold text-amber-900 tabular-nums">{formatAmount(125)}</span>
            </div>

            <ol className="space-y-1.5">
              {STAGES.slice(1).map((s, i) => {
                const done = step >= i + 1;
                return (
                  <li
                    key={s}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-[12px] font-semibold transition-all duration-400 ${
                      done ? 'bg-primary/[0.07] text-primary' : 'bg-gray-50 text-muted-foreground'
                    }`}
                  >
                    {s}
                    {done && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
                  </li>
                );
              })}
            </ol>

            <div
              className={`flex items-center gap-2 rounded-xl border border-dashed px-3 py-2.5 text-[11.5px] transition-all duration-500 ${
                step === 4 ? 'border-emerald-300 bg-emerald-50 text-emerald-800' : 'border-gray-200 text-muted-foreground'
              }`}
            >
              <Camera className="h-4 w-4 shrink-0" aria-hidden="true" />
              {step === 4 ? 'Proof of delivery photo uploaded' : 'Capture proof of delivery on completion'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryHeroDemo;
