import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sandwich, Plus, Package, TrendingUp, Receipt, BookOpen } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const MenuLiveFlow = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-30%' });
  const [tick, setTick] = useState(0);
  const { currency } = useCurrency();

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, [inView]);

  const orders = ((tick % 5) + 1) * 2;
  const burgerPrice = 25;
  const cheesePrice = 5;
  const revenue = orders * (burgerPrice + cheesePrice);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-white">Live Chain Reaction</span>
          </motion.div>

          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4">
            Burger + Extra Cheese.
            <br />
            <span className="text-primary">Watch the system react.</span>
          </motion.h2>
          <p className="text-lg text-gray-400">Every modifier triggers price, inventory, and ledger updates.</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Trigger</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Sandwich className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold tabular-nums">×{orders}</div>
                  <div className="text-sm text-gray-400">orders this minute</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Signature burger</span>
                  <span className="font-mono">{currency.symbol} {burgerPrice}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center gap-1"><Plus className="w-3 h-3" /> Extra cheese</span>
                  <span className="font-mono text-amber-300">+{currency.symbol} {cheesePrice}</span>
                </div>
                <div className="border-t border-white/10 pt-2 flex items-center justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary tabular-nums">{currency.symbol} {burgerPrice + cheesePrice}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Package, label: 'Cheese inventory', value: `−${(orders * 30).toFixed(0)}g`, bg: 'from-amber-500/20 to-amber-500/5', color: 'text-amber-300' },
              { icon: Package, label: 'Patty inventory', value: `−${(orders * 0.18).toFixed(2)}kg`, bg: 'from-rose-500/20 to-rose-500/5', color: 'text-rose-300' },
              { icon: TrendingUp, label: 'Revenue posted', value: `${currency.symbol} ${revenue}`, bg: 'from-emerald-500/20 to-emerald-500/5', color: 'text-emerald-300' },
              { icon: Receipt, label: 'Modifier revenue', value: `${currency.symbol} ${orders * cheesePrice}`, bg: 'from-violet-500/20 to-violet-500/5', color: 'text-violet-300' },
              { icon: BookOpen, label: 'Recipe deduction', value: `${orders} entries`, bg: 'from-blue-500/20 to-blue-500/5', color: 'text-blue-300' },
              { icon: TrendingUp, label: 'Margin updated', value: 'Live', bg: 'from-yellow-500/20 to-yellow-500/5', color: 'text-yellow-300' },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className={`relative bg-gradient-to-br ${r.bg} backdrop-blur-xl border border-white/10 rounded-2xl p-5 overflow-hidden`}
              >
                <motion.div
                  key={`${r.label}-${tick}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgb(52,211,153)]"
                />
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 ${r.color}`}>
                  <r.icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-gray-400 mb-1">{r.label}</div>
                <motion.div
                  key={`v-${r.label}-${tick}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-bold tabular-nums"
                >
                  {r.value}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuLiveFlow;
