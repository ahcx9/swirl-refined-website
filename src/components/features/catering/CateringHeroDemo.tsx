import React from 'react';
import { CalendarDays, Users, Wallet, UtensilsCrossed, Check } from 'lucide-react';
import { useAutoplayInView, useStepLoop } from '@/hooks/useAutoplayInView';
import { useCurrency } from '@/hooks/useCurrency';

const existingEvents: Record<number, { name: string; tone: string }> = {
  4: { name: 'Al Noor Wedding', tone: 'bg-primary/10 text-primary' },
  9: { name: 'Corporate Lunch', tone: 'bg-emerald-50 text-emerald-700' },
  12: { name: 'Bakery Launch', tone: 'bg-amber-50 text-amber-800' },
  22: { name: 'Family Majlis', tone: 'bg-primary/10 text-primary' },
  27: { name: 'School Event', tone: 'bg-emerald-50 text-emerald-700' },
};

const pricingModes = ['Per Person', 'Per Plate', 'Lump Sum'] as const;

const CateringHeroDemo: React.FC = () => {
  const { ref, playing } = useAutoplayInView<HTMLDivElement>();
  const { formatAmount } = useCurrency();
  const [step] = useStepLoop(4, 2400, playing);

  const mode = pricingModes[Math.min(step, 2)];
  const adults = step >= 1 ? 120 : 0;
  const children = step >= 1 ? 30 : 0;
  const total = step >= 2 ? 21_600 : step >= 1 ? 18_000 : 0;
  const advance = step >= 3 ? 6_480 : 0;

  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-12">
      {/* Calendar */}
      <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_18px_50px_-30px_rgba(16,24,40,0.45)]">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-foreground">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" /> September 2026 · Catering calendar
          </span>
          <span className="text-[11.5px] text-muted-foreground">Month · Week · Agenda</span>
        </div>
        <div className="p-4">
          <div className="mb-2 grid grid-cols-7 gap-1.5 text-center text-[10.5px] font-semibold uppercase tracking-wide text-muted-foreground">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i}>{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
              const ev = existingEvents[day];
              const isNew = day === 18;
              return (
                <div
                  key={day}
                  className={`min-h-[52px] rounded-lg border p-1.5 text-left transition-all duration-500 ${
                    isNew && step >= 3
                      ? 'border-primary/40 bg-primary/[0.08] scale-[1.03]'
                      : 'border-gray-100 bg-white'
                  }`}
                >
                  <span className="text-[10.5px] font-semibold text-muted-foreground tabular-nums">{day}</span>
                  {ev && (
                    <span className={`mt-1 block truncate rounded px-1 py-0.5 text-[9.5px] font-semibold ${ev.tone}`}>
                      {ev.name}
                    </span>
                  )}
                  {isNew && step >= 3 && (
                    <span className="mt-1 block truncate rounded bg-primary px-1 py-0.5 text-[9.5px] font-semibold text-primary-foreground">
                      Hamdan Reception
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Builder + pricing + payment */}
      <div className="lg:col-span-5 space-y-4">
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-[0_18px_50px_-30px_rgba(16,24,40,0.45)]">
          <p className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-foreground">
            <Users className="h-4 w-4 text-primary" aria-hidden="true" /> Guests · 18 September
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <div className="rounded-xl bg-gray-50 px-3 py-2.5">
              <p className="text-[11px] text-muted-foreground">Adults</p>
              <p className="text-[19px] font-bold text-foreground tabular-nums">{adults}</p>
            </div>
            <div className="rounded-xl bg-gray-50 px-3 py-2.5">
              <p className="text-[11px] text-muted-foreground">Children</p>
              <p className="text-[19px] font-bold text-foreground tabular-nums">{children}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-[0_18px_50px_-30px_rgba(16,24,40,0.45)]">
          <p className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-foreground">
            <UtensilsCrossed className="h-4 w-4 text-primary" aria-hidden="true" /> Package · Gold Buffet
          </p>
          <div className="mt-3 flex gap-1.5">
            {pricingModes.map((m) => (
              <span
                key={m}
                className={`rounded-lg px-2.5 py-1.5 text-[11.5px] font-semibold transition-colors duration-300 ${
                  m === mode ? 'bg-primary text-primary-foreground' : 'bg-gray-100 text-muted-foreground'
                }`}
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-3 space-y-1.5 text-[12.5px]">
            <div className="flex justify-between"><span className="text-muted-foreground">Adults × {adults}</span><span className="font-semibold tabular-nums">{formatAmount(147)} ea.</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Children × {children}</span><span className="font-semibold tabular-nums">{formatAmount(88)} ea.</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Setup &amp; service</span><span className="font-semibold tabular-nums">{formatAmount(880)}</span></div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-[0_18px_50px_-30px_rgba(16,24,40,0.45)]">
          <p className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-foreground">
            <Wallet className="h-4 w-4 text-primary" aria-hidden="true" /> Payment summary
          </p>
          <div className="mt-3 space-y-2 text-[13px]">
            <div className="flex justify-between"><span className="text-muted-foreground">Total</span><span className="font-bold tabular-nums">{formatAmount(total)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Advance collected</span><span className="font-bold tabular-nums text-emerald-600">{formatAmount(advance)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Balance due</span><span className="font-bold tabular-nums">{formatAmount(total - advance)}</span></div>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-emerald-500 transition-[width] duration-700"
              style={{ width: total ? `${(advance / total) * 100}%` : '0%' }}
            />
          </div>
          {step === 3 && (
            <p className="mt-2.5 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-emerald-700">
              <Check className="h-3.5 w-3.5" aria-hidden="true" /> Booking confirmed and added to the calendar
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CateringHeroDemo;
