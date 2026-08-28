import React from 'react';
import { Check, ChefHat, Receipt, Monitor, Bell } from 'lucide-react';
import { useAutoplayInView, useStepLoop } from '@/hooks/useAutoplayInView';

/**
 * Three synchronized swirl views: POS bill → kitchen queue → customer token board.
 * Step 0: order completed, token generated
 * Step 1: kitchen moves A-104 to Now Preparing
 * Step 2: staff marks ready, board moves A-104 to Ready for Pickup
 */
const items = [
  { name: 'Chicken Shawarma Meal', qty: 2, price: '48.00' },
  { name: 'Loaded Fries', qty: 1, price: '19.00' },
  { name: 'Iced Latte', qty: 2, price: '32.00' },
];

const preparing = ['A-105', 'A-106', 'A-107'];
const ready = ['A-101', 'A-102'];

const TokenHeroDemo: React.FC = () => {
  const { ref, playing } = useAutoplayInView<HTMLDivElement>();
  const [step] = useStepLoop(3, 2600, playing);

  const status = step === 0 ? 'Order placed' : step === 1 ? 'Now Preparing' : 'Ready for Pickup';

  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-12">
      {/* POS */}
      <div className="lg:col-span-4 rounded-2xl border border-gray-200/80 bg-white shadow-[0_18px_50px_-30px_rgba(16,24,40,0.45)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
          <Receipt className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-[12.5px] font-semibold text-foreground">swirl POS · Counter 2</span>
        </div>
        <div className="p-4">
          <ul className="space-y-2.5">
            {items.map((it) => (
              <li key={it.name} className="flex items-center justify-between gap-3">
                <span className="text-[12.5px] text-foreground">
                  <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-gray-100 text-[11px] font-semibold text-muted-foreground">
                    {it.qty}
                  </span>
                  {it.name}
                </span>
                <span className="text-[12.5px] font-semibold tabular-nums text-muted-foreground">{it.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-200 pt-3">
            <span className="text-[12.5px] font-medium text-muted-foreground">Total</span>
            <span className="text-[15px] font-bold text-foreground tabular-nums">SAR 99.00</span>
          </div>

          <div
            className={`mt-4 flex items-center justify-between rounded-xl border px-3.5 py-3 transition-all duration-500 ${
              step === 0
                ? 'border-primary/30 bg-primary/[0.06] scale-[1.01]'
                : 'border-gray-200 bg-gray-50/70'
            }`}
          >
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Token generated
              </p>
              <p className="text-[22px] font-bold leading-tight text-primary tabular-nums">A-104</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
              <Check className="h-3 w-3" aria-hidden="true" /> Paid
            </span>
          </div>
        </div>
      </div>

      {/* Kitchen queue */}
      <div className="lg:col-span-4 rounded-2xl border border-gray-200/80 bg-white shadow-[0_18px_50px_-30px_rgba(16,24,40,0.45)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
          <ChefHat className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-[12.5px] font-semibold text-foreground">Preparation queue</span>
        </div>
        <div className="space-y-2.5 p-4">
          <div
            className={`rounded-xl border p-3.5 transition-all duration-500 ${
              step >= 1 ? 'border-amber-300/70 bg-amber-50/70' : 'border-gray-200 bg-white'
            } ${step === 2 ? 'opacity-60' : ''}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[19px] font-bold text-foreground tabular-nums">A-104</span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  step === 0
                    ? 'bg-gray-100 text-muted-foreground'
                    : step === 1
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {step >= 1 && (
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${step === 1 ? 'bg-amber-500 animate-pulse' : 'bg-emerald-600'}`}
                    aria-hidden="true"
                  />
                )}
                {status}
              </span>
            </div>
            <p className="mt-1.5 text-[12px] text-muted-foreground">3 items · Takeaway · Counter 2</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-[2400ms] ease-linear"
                style={{ width: step === 0 ? '6%' : step === 1 ? '62%' : '100%' }}
              />
            </div>
          </div>

          {preparing.map((tok) => (
            <div key={tok} className="rounded-xl border border-gray-200 bg-white p-3.5 opacity-70">
              <div className="flex items-center justify-between">
                <span className="text-[17px] font-bold text-foreground tabular-nums">{tok}</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                  In queue
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer display */}
      <div className="lg:col-span-4 rounded-2xl border border-[#0a1628]/10 bg-[#0a1628] text-white shadow-[0_18px_50px_-24px_rgba(10,22,40,0.6)] overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold">
            <Monitor className="h-4 w-4" aria-hidden="true" /> Pickup display
          </span>
          {step === 2 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
              <Bell className="h-3 w-3" aria-hidden="true" /> A-104 ready
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 p-4">
          <div>
            <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Now Preparing
            </p>
            <div className="space-y-2">
              {step >= 1 && step < 2 && (
                <div className="rounded-xl bg-white/10 px-3 py-2.5 text-[20px] font-bold tabular-nums transition-all duration-500">
                  A-104
                </div>
              )}
              {preparing.map((tok) => (
                <div key={tok} className="rounded-xl bg-white/[0.06] px-3 py-2.5 text-[20px] font-bold tabular-nums text-white/70">
                  {tok}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-emerald-300/80">
              Ready for Pickup
            </p>
            <div className="space-y-2">
              {step === 2 && (
                <div className="rounded-xl bg-emerald-500/20 px-3 py-2.5 text-[20px] font-bold tabular-nums text-emerald-200 ring-1 ring-emerald-400/40 transition-all duration-500">
                  A-104
                </div>
              )}
              {ready.map((tok) => (
                <div key={tok} className="rounded-xl bg-white/[0.06] px-3 py-2.5 text-[20px] font-bold tabular-nums text-white/70">
                  {tok}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="border-t border-white/10 px-4 py-2.5 text-[11px] text-white/45">
          Product preview with sample data
        </p>
      </div>
    </div>
  );
};

export default TokenHeroDemo;
