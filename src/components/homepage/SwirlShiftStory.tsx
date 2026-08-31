import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Sunrise,
  UtensilsCrossed,
  Package,
  Bike,
  MoonStar,
  CreditCard,
  ChefHat,
  Boxes,
  BarChart3,
  Smartphone,
  Check,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Zone = 'pos' | 'kitchen' | 'inventory' | 'delivery' | 'owner';

interface Moment {
  time: string;
  title: string;
  icon: LucideIcon;
  description: string;
  active: Zone[];
  panel: { label: string; value: string }[];
  sky: string;
  glow: string;
}

const moments: Moment[] = [
  {
    time: '7:00 AM',
    title: 'Ready Before Opening',
    icon: Sunrise,
    description: 'Menus, prices, staff permissions and inventory are already synced.',
    active: ['pos', 'inventory'],
    panel: [
      { label: 'Menu sync', value: '128 items live' },
      { label: 'Price updates', value: 'Applied to 4 outlets' },
      { label: 'Staff permissions', value: '18 roles active' },
      { label: 'Opening stock', value: 'Counted & locked' },
    ],
    sky: 'from-[#FFF7E8] via-[#F7FAFF] to-white',
    glow: 'rgba(255,196,110,0.35)',
  },
  {
    time: '12:30 PM',
    title: 'The Lunch Rush',
    icon: UtensilsCrossed,
    description:
      'Orders from the POS, Captain App, QR and delivery platforms enter one system and move automatically to the kitchen.',
    active: ['pos', 'kitchen', 'delivery'],
    panel: [
      { label: 'Open tables', value: '22 of 26' },
      { label: 'QR orders', value: '37 in queue' },
      { label: 'KOTs fired', value: 'Auto-routed' },
      { label: 'Avg ticket time', value: '6m 12s' },
    ],
    sky: 'from-[#F2F8FF] via-[#F7FAFF] to-white',
    glow: 'rgba(0,82,204,0.22)',
  },
  {
    time: '3:00 PM',
    title: 'Inventory in Motion',
    icon: Package,
    description:
      'Ingredients are deducted from stock, low-stock items are detected and purchasing information stays updated.',
    active: ['kitchen', 'inventory', 'owner'],
    panel: [
      { label: 'Recipe deductions', value: '412 units today' },
      { label: 'Low stock alerts', value: '3 items flagged' },
      { label: 'Purchase draft', value: 'Ready to approve' },
      { label: 'Wastage logged', value: '1.4% of usage' },
    ],
    sky: 'from-[#F7FAFF] via-[#F4F8FF] to-white',
    glow: 'rgba(0,82,204,0.18)',
  },
  {
    time: '7:30 PM',
    title: 'Delivery Rush',
    icon: Bike,
    description: 'Talabat, Keeta and direct delivery orders flow into the same POS without manual punching.',
    active: ['pos', 'kitchen', 'delivery'],
    panel: [
      { label: 'Talabat', value: '46 orders synced' },
      { label: 'Keeta', value: '31 orders synced' },
      { label: 'Direct delivery', value: '19 riders assigned' },
      { label: 'Manual punching', value: 'Zero' },
    ],
    sky: 'from-[#EEF3FF] via-[#F5F8FF] to-white',
    glow: 'rgba(0,82,204,0.28)',
  },
  {
    time: '11:00 PM',
    title: 'Close With Confidence',
    icon: MoonStar,
    description: 'Sales, payments, expenses, reconciliation and outlet performance are ready for the owner.',
    active: ['pos', 'kitchen', 'inventory', 'delivery', 'owner'],
    panel: [
      { label: 'Day sales', value: 'Reconciled' },
      { label: 'Payments', value: 'Card, cash & wallet matched' },
      { label: 'Expenses', value: 'Posted to accounting' },
      { label: 'Outlet report', value: 'Sent to owner app' },
    ],
    sky: 'from-[#E9EEFA] via-[#F2F6FF] to-white',
    glow: 'rgba(20,32,74,0.25)',
  },
];

const zones: {
  id: Zone;
  label: string;
  icon: LucideIcon;
  pos: { top: string; left: string };
}[] = [
  { id: 'pos', label: 'POS & Counter', icon: CreditCard, pos: { top: '20%', left: '16%' } },
  { id: 'kitchen', label: 'Kitchen / KDS', icon: ChefHat, pos: { top: '18%', left: '78%' } },
  { id: 'inventory', label: 'Store Room', icon: Boxes, pos: { top: '74%', left: '20%' } },
  { id: 'delivery', label: 'Delivery Riders', icon: Bike, pos: { top: '76%', left: '76%' } },
  { id: 'owner', label: 'Owner App', icon: Smartphone, pos: { top: '92%', left: '50%' } },
];

const SwirlShiftStory = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-20%' });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % moments.length), 5200);
    return () => clearInterval(id);
  }, [inView, paused]);

  const moment = moments[index];
  const isActive = (z: Zone) => moment.active.includes(z);
  const finale = index === moments.length - 1;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#F7FAFF] py-20 md:py-28"
      aria-label="One shift, every operation in sync"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">The swirl shift</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0B1B3F] md:text-5xl">
            One shift. Every operation in sync.
          </h2>
          <p className="mt-5 text-base text-[#4A5878] md:text-lg">
            From opening stock to the final close, watch swirl keep your front of house, kitchen, inventory,
            delivery and reporting moving together.
          </p>
        </div>

        {/* Timeline */}
        <div
          className="mx-auto mb-10 flex max-w-5xl flex-wrap items-center justify-center gap-2 md:gap-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {moments.map((m, i) => {
            const active = i === index;
            return (
              <button
                key={m.time}
                onClick={() => setIndex(i)}
                aria-pressed={active}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-500 md:text-sm ${
                  active
                    ? 'scale-[1.04] border-primary bg-primary text-white shadow-lg shadow-primary/25'
                    : 'border-[#DCE5F5] bg-white text-[#4A5878] hover:border-primary/40 hover:text-primary'
                }`}
              >
                <m.icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>{m.time}</span>
                <span className={`overflow-hidden whitespace-nowrap transition-all duration-500 ${active ? 'max-w-[220px] opacity-100' : 'max-w-0 opacity-0'}`}>
                  — {m.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* Restaurant scene */}
          <div
            className={`relative min-h-[420px] overflow-hidden rounded-3xl border border-[#E3EAF7] bg-gradient-to-b ${moment.sky} p-6 shadow-[0_20px_60px_-30px_rgba(11,27,63,0.35)] transition-[background] duration-1000 md:min-h-[520px]`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* lighting */}
            <div
              className="pointer-events-none absolute inset-0 transition-all duration-1000"
              style={{ background: `radial-gradient(120% 80% at 50% 0%, ${moment.glow} 0%, transparent 60%)` }}
            />

            {/* isometric floor */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                className="h-[78%] w-[86%] rounded-[28px] border border-[#DCE5F5] bg-white/70"
                style={{ transform: 'perspective(1100px) rotateX(52deg) rotateZ(-45deg) scale(0.86)' }}
              >
                <div className="grid h-full w-full grid-cols-6 grid-rows-6 opacity-[0.5]">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-[#EAF0FB]" />
                  ))}
                </div>
              </div>
            </div>

            {/* connection lines */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              {zones.map((z) => (
                <line
                  key={z.id}
                  x1="50%"
                  y1="50%"
                  x2={z.pos.left}
                  y2={z.pos.top}
                  stroke={isActive(z.id) ? 'hsl(var(--primary))' : '#D8E2F4'}
                  strokeWidth={isActive(z.id) ? 2 : 1}
                  strokeDasharray="5 6"
                  className="transition-all duration-700"
                  opacity={isActive(z.id) ? 0.75 : 0.5}
                />
              ))}
            </svg>

            {/* centre swirl core */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={finale ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                transition={{ duration: 2, repeat: finale ? Infinity : 0 }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(0,82,204,0.5)] ring-1 ring-primary/20 md:h-24 md:w-24"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/10" />
                <span className="text-sm font-bold lowercase tracking-tight text-primary md:text-base">swirl</span>
              </motion.div>
            </div>

            {/* zones */}
            {zones.map((z) => {
              const active = isActive(z.id);
              return (
                <div
                  key={z.id}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
                  style={{ top: z.pos.top, left: z.pos.left }}
                >
                  <div
                    className={`flex flex-col items-center gap-2 rounded-2xl border px-3 py-2.5 backdrop-blur-sm transition-all duration-700 ${
                      active
                        ? 'border-primary/30 bg-white shadow-lg shadow-primary/15'
                        : 'border-[#E3EAF7] bg-white/70'
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-700 ${
                        active ? 'bg-primary text-white' : 'bg-[#EEF3FC] text-[#8A98B5]'
                      }`}
                    >
                      <z.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span
                      className={`whitespace-nowrap text-[10px] font-semibold transition-colors duration-700 md:text-[11px] ${
                        active ? 'text-[#0B1B3F]' : 'text-[#8A98B5]'
                      }`}
                    >
                      {z.label}
                    </span>
                  </div>
                  {active && (
                    <motion.span
                      className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-primary"
                      animate={{ opacity: [1, 0.2, 1], scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                  )}
                </div>
              );
            })}

            {/* time badge */}
            <div className="absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-[#E3EAF7] bg-white px-3.5 py-2 shadow-sm">
              <moment.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-xs font-bold text-[#0B1B3F]">{moment.time}</span>
            </div>
          </div>

          {/* Live panel */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E3EAF7] bg-white p-7 shadow-[0_20px_60px_-40px_rgba(11,27,63,0.4)] md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={moment.time}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">{moment.time}</p>
                <h3 className="text-2xl font-bold text-[#0B1B3F] md:text-3xl">{moment.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4A5878]">{moment.description}</p>

                <div className="mt-7 space-y-2.5">
                  {moment.panel.map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.09 }}
                      className="flex items-center justify-between rounded-xl border border-[#EDF2FA] bg-[#F9FBFF] px-4 py-3"
                    >
                      <span className="flex items-center gap-2 text-[13px] font-medium text-[#4A5878]">
                        <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        {row.label}
                      </span>
                      <span className="text-[13px] font-semibold text-[#0B1B3F]">{row.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-2 border-t border-[#EDF2FA] pt-5">
              {moments.map((m, i) => (
                <span
                  key={m.time}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 bg-primary' : 'w-3 bg-[#DCE5F5]'
                  }`}
                />
              ))}
              <span className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#8A98B5]">
                <BarChart3 className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> One database
              </span>
            </div>
          </div>
        </div>

        {/* Finale */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-xl font-bold text-[#0B1B3F] md:text-2xl">One restaurant. One connected operation.</p>
          <p className="mt-2 text-base text-[#4A5878] md:text-lg">
            This is what a restaurant operating system should feel like.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwirlShiftStory;
