import React, { useState } from 'react';
import { Maximize2, Volume2, Smartphone, MonitorSmartphone } from 'lucide-react';
import { useAutoplayInView, useStepLoop } from '@/hooks/useAutoplayInView';

const basePreparing = ['B-212', 'B-213', 'B-214', 'B-215'];
const baseReady = ['B-208', 'B-209', 'B-210'];

const TokenDisplayBoard: React.FC = () => {
  const { ref, playing } = useAutoplayInView<HTMLDivElement>();
  const [step] = useStepLoop(2, 3200, playing);
  const [portrait, setPortrait] = useState(false);

  const preparing = step === 0 ? ['B-211', ...basePreparing] : basePreparing;
  const ready = step === 0 ? baseReady : ['B-211', ...baseReady];

  return (
    <div ref={ref}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setPortrait(false)}
          aria-pressed={!portrait}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
            !portrait ? 'border-primary/30 bg-primary/[0.07] text-primary' : 'border-gray-200 text-muted-foreground hover:text-foreground'
          }`}
        >
          <MonitorSmartphone className="h-3.5 w-3.5" aria-hidden="true" /> Landscape TV
        </button>
        <button
          type="button"
          onClick={() => setPortrait(true)}
          aria-pressed={portrait}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
            portrait ? 'border-primary/30 bg-primary/[0.07] text-primary' : 'border-gray-200 text-muted-foreground hover:text-foreground'
          }`}
        >
          <Smartphone className="h-3.5 w-3.5" aria-hidden="true" /> Portrait screen
        </button>
      </div>

      <div
        className={`mx-auto overflow-hidden rounded-[22px] bg-[#0a1628] text-white shadow-[0_40px_90px_-45px_rgba(10,22,40,0.8)] transition-all duration-500 ${
          portrait ? 'max-w-md' : 'max-w-5xl'
        }`}
      >
        {/* Board header with restaurant branding */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[13px] font-bold">
              UC
            </span>
            <div className="leading-tight">
              <p className="text-[14px] font-bold sm:text-[16px]">Uccelli Café · Order Pickup</p>
              <p className="text-[11px] text-white/45">Powered by swirl</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <Volume2 className="h-4 w-4" aria-hidden="true" />
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        <div className={`grid gap-5 p-5 sm:p-8 ${portrait ? 'grid-cols-1' : 'grid-cols-2'}`}>
          <section aria-label="Now preparing">
            <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">Now Preparing</h3>
            <ul className="grid grid-cols-2 gap-3">
              {preparing.map((tok) => (
                <li
                  key={tok}
                  className="rounded-2xl bg-white/[0.07] px-3 py-4 text-center text-[26px] font-bold tabular-nums text-white/85 sm:text-[34px]"
                >
                  {tok}
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="Ready for pickup" className={portrait ? 'border-t border-white/10 pt-5' : 'border-l border-white/10 pl-5'}>
            <h3 className="mb-4 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-emerald-300/85">
              Ready for Pickup
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {ready.map((tok, i) => (
                <li
                  key={tok}
                  className={`rounded-2xl px-3 py-4 text-center text-[26px] font-bold tabular-nums transition-all duration-500 sm:text-[34px] ${
                    i === 0 && step === 1
                      ? 'bg-emerald-500/25 text-emerald-100 ring-2 ring-emerald-400/50'
                      : 'bg-emerald-500/10 text-emerald-200/85'
                  }`}
                >
                  {tok}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="border-t border-white/10 px-5 py-3 text-[11.5px] text-white/40 sm:px-8">
          Product preview with sample data · Full-screen display mode for TVs and customer-facing screens
        </p>
      </div>
    </div>
  );
};

export default TokenDisplayBoard;
