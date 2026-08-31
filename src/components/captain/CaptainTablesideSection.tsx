import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Smartphone, Apple, Tablet, Search, Plus, Minus, Users, Split, ArrowLeftRight,
  Printer, ChefHat, Send, RotateCcw, Wifi, CheckCircle2, Clock, Receipt,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Demo data (illustrative only)                                       */
/* ------------------------------------------------------------------ */

type TableStatus = 'available' | 'occupied' | 'ordered' | 'ready' | 'bill';

interface FloorTable {
  id: number;
  seats: 2 | 4 | 6;
  shape: 'circle' | 'square';
  x: number; // % of floor width
  y: number; // % of floor height
  status: TableStatus;
}

const FLOOR_TABLES: FloorTable[] = [
  { id: 1, seats: 2, shape: 'circle', x: 14, y: 18, status: 'occupied' },
  { id: 2, seats: 4, shape: 'square', x: 42, y: 15, status: 'available' },
  { id: 3, seats: 2, shape: 'circle', x: 71, y: 19, status: 'ready' },
  { id: 4, seats: 4, shape: 'square', x: 15, y: 50, status: 'bill' },
  { id: 5, seats: 4, shape: 'square', x: 44, y: 49, status: 'occupied' },
  { id: 6, seats: 2, shape: 'circle', x: 72, y: 51, status: 'available' },
  { id: 7, seats: 6, shape: 'square', x: 26, y: 81, status: 'ordered' },
  { id: 8, seats: 2, shape: 'circle', x: 61, y: 82, status: 'available' },
  { id: 9, seats: 2, shape: 'circle', x: 85, y: 80, status: 'occupied' },
];

const STATUS_STYLES: Record<TableStatus, { fill: string; ring: string; label: string; dot: string }> = {
  available: { fill: 'bg-white', ring: 'ring-1 ring-[#E2EAF5]', label: 'Available', dot: 'bg-white ring-1 ring-[#CBD7E8]' },
  occupied: { fill: 'bg-[#E7F0FF]', ring: 'ring-1 ring-[#BBD3FA]', label: 'Occupied', dot: 'bg-[#E7F0FF] ring-1 ring-[#BBD3FA]' },
  ordered: { fill: 'bg-[#146EF5]', ring: 'ring-1 ring-[#146EF5]', label: 'Order placed', dot: 'bg-[#146EF5]' },
  ready: { fill: 'bg-[#DCF5E7]', ring: 'ring-1 ring-[#A6E3C4]', label: 'Food ready', dot: 'bg-[#A6E3C4]' },
  bill: { fill: 'bg-[#FDF0D8]', ring: 'ring-1 ring-[#F2CE8F]', label: 'Bill requested', dot: 'bg-[#F2CE8F]' },
};

const MENU_CATEGORIES = ['All', 'Hot Drinks', 'Mains', 'Pizza', 'Salads'];

interface MenuItem { name: string; price: number; category: string; }

const MENU_ITEMS: MenuItem[] = [
  { name: 'Pistachio Latte', price: 24, category: 'Hot Drinks' },
  { name: 'Grilled Chicken', price: 58, category: 'Mains' },
  { name: 'Margherita Pizza', price: 46, category: 'Pizza' },
  { name: 'Lebanese Zaatar', price: 18, category: 'Mains' },
  { name: 'Caesar Salad', price: 32, category: 'Salads' },
];

const BENEFITS = [
  { icon: Smartphone, text: 'Take orders from any tablet or smartphone' },
  { icon: Users, text: 'Manage tables and guest count' },
  { icon: Receipt, text: 'Customize items and add special instructions' },
  { icon: Send, text: 'Send orders instantly to the kitchen' },
  { icon: Split, text: 'Split, merge or transfer bills' },
  { icon: Wifi, text: 'Continue working with offline support' },
];

const AED = (n: number) => `AED ${n.toFixed(2)}`;

/* ------------------------------------------------------------------ */
/* Floor plan                                                          */
/* ------------------------------------------------------------------ */

const seatDots = (seats: number, shape: 'circle' | 'square') => {
  const positions =
    seats === 2
      ? [[50, -18], [50, 118]]
      : seats === 4
      ? [[50, -16], [50, 116], [-16, 50], [116, 50]]
      : [[28, -14], [72, -14], [28, 114], [72, 114], [-12, 50], [112, 50]];
  return positions.map(([left, top], i) => (
    <span
      key={i}
      className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#CBD7E8]"
      style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%,-50%)' }}
    />
  ));
};

interface FloorPlanProps {
  statuses: Record<number, TableStatus>;
  highlightTable: number | null;
  revealCount: number;
  showKdsTicket: boolean;
  pulseToKitchen: boolean;
}

const FloorPlan: React.FC<FloorPlanProps> = ({ statuses, highlightTable, revealCount, showKdsTicket, pulseToKitchen }) => (
  <div className="relative w-full rounded-[18px] border border-[#E2EAF5] bg-[#F7FAFF] p-4 md:p-5 shadow-[0_2px_18px_rgba(11,31,58,0.05)]">
    {/* floor */}
    <div className="relative w-full rounded-[14px] border border-dashed border-[#DCE6F5] bg-white" style={{ aspectRatio: '4 / 3' }}>
      {/* kitchen + cashier markers */}
      <div className="absolute top-2 left-2 flex items-center gap-1 rounded-md bg-[#F2F6FD] px-2 py-1 text-[10px] font-semibold text-[#5B7392]">
        <ChefHat className="w-3 h-3" /> Kitchen
      </div>
      <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-[#F2F6FD] px-2 py-1 text-[10px] font-semibold text-[#5B7392]">
        <Receipt className="w-3 h-3" /> Cashier
      </div>

      {/* order pulse line towards kitchen */}
      {pulseToKitchen && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M44 49 C 30 40, 22 24, 8 8"
            fill="none"
            stroke="#146EF5"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeDasharray="4 3"
            className="captain-dash"
          />
        </svg>
      )}

      {/* KDS ticket */}
      {showKdsTicket && (
        <div className="absolute top-8 left-3 w-[104px] rounded-lg border border-[#E2EAF5] bg-white p-2 shadow-lg animate-scale-in">
          <p className="text-[10px] font-bold text-[#0B1F3A]">KDS · #142</p>
          <p className="text-[9px] text-[#5B7392] leading-tight">1× Pistachio Latte</p>
          <p className="text-[9px] text-[#5B7392] leading-tight">1× Grilled Chicken</p>
          <p className="mt-1 text-[9px] font-semibold text-[#146EF5]">Table 5 · New</p>
        </div>
      )}

      {FLOOR_TABLES.map((t, i) => {
        const status = statuses[t.id] ?? t.status;
        const s = STATUS_STYLES[status];
        const revealed = i < revealCount;
        const isHighlight = highlightTable === t.id;
        return (
          <div
            key={t.id}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `${t.x}%`,
              top: `${t.y}%`,
              transform: 'translate(-50%,-50%)',
              opacity: revealed ? 1 : 0,
            }}
          >
            <div className="relative">
              {seatDots(t.seats, t.shape)}
              <div
                className={[
                  'flex items-center justify-center transition-all duration-300',
                  s.fill,
                  s.ring,
                  t.shape === 'circle' ? 'rounded-full w-9 h-9 md:w-11 md:h-11' : 'rounded-[8px] w-11 h-9 md:w-14 md:h-11',
                  t.seats === 6 ? 'w-16 h-9 md:w-20 md:h-11' : '',
                  isHighlight ? 'ring-2 ring-[#146EF5] ring-offset-2 ring-offset-white scale-105' : '',
                ].join(' ')}
              >
                <span className={`text-[10px] md:text-xs font-bold ${status === 'ordered' ? 'text-white' : 'text-[#0B1F3A]'}`}>
                  {t.id}
                </span>
                {status === 'ordered' && (
                  <Send className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-white p-[2px] text-[#146EF5] shadow" />
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Captain beside table 5 */}
      <div
        className="absolute transition-opacity duration-500"
        style={{ left: '58%', top: '46%', transform: 'translate(-50%,-50%)', opacity: revealCount >= FLOOR_TABLES.length ? 1 : 0 }}
        aria-hidden="true"
      >
        <svg width="34" height="52" viewBox="0 0 34 52" fill="none">
          <circle cx="17" cy="8" r="6" fill="#0B1F3A" />
          <path d="M7 22c0-5.5 4.5-9 10-9s10 3.5 10 9v14a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V22Z" fill="#146EF5" />
          <rect x="4" y="24" width="11" height="8" rx="1.5" fill="#0B1F3A" />
          <rect x="5" y="25" width="9" height="6" rx="1" fill="#E7F0FF" />
          <rect x="11" y="39" width="5" height="12" rx="2" fill="#0B1F3A" />
          <rect x="18" y="39" width="5" height="12" rx="2" fill="#0B1F3A" />
        </svg>
      </div>
    </div>

    {/* legend */}
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
      {(Object.keys(STATUS_STYLES) as TableStatus[]).map((k) => (
        <div key={k} className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${STATUS_STYLES[k].dot}`} />
          <span className="text-[11px] font-medium text-[#5B7392]">{STATUS_STYLES[k].label}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Tablet: Captain App                                                 */
/* ------------------------------------------------------------------ */

interface TabletProps {
  qty: number;
  modifierOn: boolean;
  activeCategory: string;
  sent: boolean;
  pressSend: boolean;
  onAdd: () => void;
  onRemove: () => void;
  onToggleModifier: () => void;
  onCategory: (c: string) => void;
  onSend: () => void;
}

const CaptainTablet: React.FC<TabletProps> = ({
  qty, modifierOn, activeCategory, sent, pressSend, onAdd, onRemove, onToggleModifier, onCategory, onSend,
}) => {
  const base = 24 * qty + 58; // latte × qty + grilled chicken
  const total = base + (modifierOn ? 6 : 0);
  const items = activeCategory === 'All' ? MENU_ITEMS : MENU_ITEMS.filter((m) => m.category === activeCategory);

  return (
    <div className="w-full rounded-[18px] bg-[#0B1F3A] p-2 shadow-[0_18px_50px_rgba(11,31,58,0.22)]">
      <div className="rounded-[14px] bg-white overflow-hidden">
        {/* app header */}
        <div className="flex items-center justify-between border-b border-[#E2EAF5] px-3 py-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#146EF5] text-[11px] font-bold text-white">s</span>
            <div>
              <p className="text-[12px] font-bold leading-none text-[#0B1F3A]">Table 5 · 4 guests</p>
              <p className="text-[10px] text-[#5B7392]">Captain · Rami H.</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button type="button" className="rounded-md border border-[#E2EAF5] px-2 py-1 text-[10px] font-semibold text-[#5B7392]">
              <ArrowLeftRight className="inline w-3 h-3 mr-1" />Move
            </button>
            <button type="button" className="rounded-md border border-[#E2EAF5] px-2 py-1 text-[10px] font-semibold text-[#5B7392]">
              <Split className="inline w-3 h-3 mr-1" />Split
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5">
          {/* menu side */}
          <div className="col-span-3 border-r border-[#E2EAF5] p-3">
            <div className="mb-2 flex items-center gap-2 rounded-lg border border-[#E2EAF5] bg-[#F7FAFF] px-2 py-1.5">
              <Search className="w-3.5 h-3.5 text-[#8FA3BF]" />
              <span className="text-[11px] text-[#8FA3BF]">Search menu…</span>
            </div>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {MENU_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => onCategory(c)}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors duration-250 ${
                    activeCategory === c ? 'bg-[#146EF5] text-white' : 'bg-[#F2F6FD] text-[#5B7392] hover:bg-[#E7F0FF]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="space-y-1.5">
              {items.map((m) => (
                <div key={m.name} className="flex items-center justify-between rounded-lg border border-[#E2EAF5] px-2.5 py-2">
                  <div>
                    <p className="text-[11.5px] font-semibold text-[#0B1F3A]">{m.name}</p>
                    <p className="text-[10px] text-[#5B7392]">{AED(m.price)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={onAdd}
                    aria-label={`Add ${m.name}`}
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E7F0FF] text-[#146EF5] transition-colors hover:bg-[#146EF5] hover:text-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* order side */}
          <div className="col-span-2 flex flex-col p-3">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#8FA3BF]">Current order</p>

            <div className="space-y-2">
              <div className="rounded-lg border border-[#E2EAF5] p-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11.5px] font-semibold text-[#0B1F3A]">Pistachio Latte</p>
                  <p className="text-[11px] font-semibold text-[#0B1F3A]">{AED(24 * qty)}</p>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <button type="button" onClick={onRemove} aria-label="Decrease quantity" className="flex h-5 w-5 items-center justify-center rounded border border-[#E2EAF5] text-[#5B7392]">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-[11px] font-bold text-[#0B1F3A]">{qty}</span>
                  <button type="button" onClick={onAdd} aria-label="Increase quantity" className="flex h-5 w-5 items-center justify-center rounded border border-[#E2EAF5] text-[#5B7392]">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={onToggleModifier}
                  className={`mt-2 w-full rounded-md px-2 py-1 text-[10px] font-semibold transition-colors duration-250 ${
                    modifierOn ? 'bg-[#E7F0FF] text-[#146EF5]' : 'bg-[#F2F6FD] text-[#5B7392]'
                  }`}
                >
                  {modifierOn ? '✓ Extra shot · +AED 6.00' : 'Add modifier · Extra shot'}
                </button>
              </div>

              <div className="rounded-lg border border-[#E2EAF5] p-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11.5px] font-semibold text-[#0B1F3A]">Grilled Chicken</p>
                  <p className="text-[11px] font-semibold text-[#0B1F3A]">{AED(58)}</p>
                </div>
                <p className="mt-1 text-[10px] italic text-[#5B7392]">Note: no garlic sauce</p>
              </div>
            </div>

            <div className="mt-3 border-t border-[#E2EAF5] pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#5B7392]">Total</span>
                <span key={total} className="text-[15px] font-bold text-[#0B1F3A] animate-fade-in">{AED(total)}</span>
              </div>
              <button
                type="button"
                onClick={onSend}
                className={`mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-[11.5px] font-bold text-white transition-all duration-250 ${
                  sent ? 'bg-[#2FA96B]' : 'bg-[#146EF5] hover:brightness-110'
                } ${pressSend ? 'scale-[0.97]' : ''}`}
              >
                {sent ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                {sent ? 'Sent to Kitchen' : 'Send to Kitchen'}
              </button>
              <button type="button" className="mt-1.5 flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#E2EAF5] py-1.5 text-[10.5px] font-semibold text-[#5B7392]">
                <Printer className="w-3 h-3" /> Print / request bill
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const CaptainTablesideSection: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const timers = useRef<number[]>([]);
  const [inView, setInView] = useState(false);
  const reduced = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    [],
  );

  const [revealCount, setRevealCount] = useState(reduced ? FLOOR_TABLES.length : 0);
  const [statuses, setStatuses] = useState<Record<number, TableStatus>>({});
  const [highlight, setHighlight] = useState<number | null>(null);
  const [qty, setQty] = useState(1);
  const [modifierOn, setModifierOn] = useState(false);
  const [category, setCategory] = useState('All');
  const [sent, setSent] = useState(false);
  const [pressSend, setPressSend] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [toast, setToast] = useState(false);
  const [kds, setKds] = useState(false);

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const after = (ms: number, fn: () => void) => { timers.current.push(window.setTimeout(fn, ms)); };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const runSequence = useCallback(() => {
    clearTimers();
    setStatuses({});
    setHighlight(null);
    setQty(1);
    setModifierOn(false);
    setSent(false);
    setPulse(false);
    setToast(false);
    setKds(false);
    setRevealCount(0);

    FLOOR_TABLES.forEach((_, i) => after(180 + i * 110, () => setRevealCount(i + 1)));
    const base = 180 + FLOOR_TABLES.length * 110;
    after(base + 200, () => setHighlight(5));
    after(base + 900, () => setQty(2));
    after(base + 1500, () => setModifierOn(true));
    after(base + 2200, () => setPressSend(true));
    after(base + 2400, () => { setPressSend(false); setSent(true); setPulse(true); });
    after(base + 2800, () => { setToast(true); setStatuses({ 5: 'ordered' }); });
    after(base + 3100, () => setKds(true));
    after(base + 5200, () => { setKds(false); setPulse(false); setHighlight(null); });
    after(base + 6000, () => setToast(false));
  }, []);

  useEffect(() => {
    if (inView && !reduced) runSequence();
    if (inView && reduced) { setRevealCount(FLOOR_TABLES.length); setStatuses({ 5: 'ordered' }); setSent(true); }
    return clearTimers;
  }, [inView, reduced, runSequence]);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-white py-16 md:py-24">
      <style>{`
        @keyframes captain-dash-move { to { stroke-dashoffset: -28; } }
        .captain-dash { animation: captain-dash-move 1.1s linear infinite; }
        @keyframes captain-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .captain-float { animation: captain-float 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .captain-dash, .captain-float { animation: none !important; }
        }
      `}</style>

      <div className="container-custom">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E2EAF5] bg-white px-3.5 py-1.5 shadow-sm">
            <Smartphone className="h-4 w-4 text-primary" />
            <span className="text-[13px] font-bold text-primary">Captain Ordering App</span>
          </div>
          <h2 className="text-3xl font-bold text-[#0B1F3A] md:text-4xl lg:text-5xl">
            Tableside Ordering<br />
            <span className="text-primary">Made Simple</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5B7392] md:text-lg">
            Empower your captains to manage tables and take orders directly from any iOS or Android tablet or
            smartphone. Every order reaches the kitchen instantly.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-12">
          {/* Floor plan */}
          <div className={`lg:col-span-6 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <FloorPlan
              statuses={statuses}
              highlightTable={highlight}
              revealCount={revealCount}
              showKdsTicket={kds}
              pulseToKitchen={pulse}
            />
          </div>

          {/* Tablet */}
          <div className={`relative lg:col-span-6 lg:-ml-12 transition-all duration-500 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="captain-float">
              <CaptainTablet
                qty={qty}
                modifierOn={modifierOn}
                activeCategory={category}
                sent={sent}
                pressSend={pressSend}
                onAdd={() => setQty((q) => Math.min(q + 1, 9))}
                onRemove={() => setQty((q) => Math.max(1, q - 1))}
                onToggleModifier={() => setModifierOn((m) => !m)}
                onCategory={setCategory}
                onSend={() => { setSent(true); setStatuses({ 5: 'ordered' }); setToast(true); setPulse(true); setKds(true); }}
              />
            </div>

            {toast && (
              <div className="absolute -top-4 right-2 z-10 flex items-center gap-2 rounded-xl border border-[#E2EAF5] bg-white px-3 py-2 shadow-lg animate-scale-in">
                <CheckCircle2 className="h-4 w-4 text-[#2FA96B]" />
                <span className="text-[12px] font-semibold text-[#0B1F3A]">Order #142 sent to kitchen</span>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={runSequence}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2EAF5] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#5B7392] transition-colors hover:border-primary/40 hover:text-primary"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Replay order
              </button>
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#5B7392]">
                  <Apple className="h-3.5 w-3.5" /> iOS
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#5B7392]">
                  <Tablet className="h-3.5 w-3.5" /> Android
                </span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-[#8FA3BF]">Illustrative demo data.</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.text}
              className="flex items-start gap-3 rounded-[14px] border border-[#E2EAF5] bg-white p-4 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#E7F0FF]">
                <b.icon className="h-4.5 w-4.5 text-primary" />
              </span>
              <span className="pt-1.5 text-[14px] font-medium text-[#0B1F3A]">{b.text}</span>
            </div>
          ))}
        </div>

        {/* Transition to Owners App */}
        <div className="mt-14 flex flex-col items-center">
          <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#146EF5]/50 to-[#146EF5]/80" />
          <span className="mt-1 flex items-center gap-2 rounded-full border border-[#E2EAF5] bg-[#F7FAFF] px-4 py-2">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span className="text-[13px] font-semibold text-[#0B1F3A]">
              From every table to every outlet — swirl keeps you updated in real time.
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CaptainTablesideSection;
