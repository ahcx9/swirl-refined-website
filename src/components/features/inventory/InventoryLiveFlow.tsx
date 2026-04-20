import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Beef, Sandwich, Droplet, TrendingDown, BookOpen, Calculator } from 'lucide-react';

const InventoryLiveFlow = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-30%' });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, [inView]);

  const burgers = 100;
  const sold = Math.min(100, ((tick % 6) + 1) * 20);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
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

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Sell 100 burgers.
            <br />
            <span className="text-primary">Watch the system react.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Every order triggers a cascade. No human in the loop.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Trigger card */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Trigger</div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <Sandwich className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tabular-nums">{sold}/100</div>
                    <div className="text-sm text-gray-400">burgers sold</div>
                  </div>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-red-500"
                    animate={{ width: `${sold}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                  As each order rings up, the system propagates the impact across stock, recipe, cost, and the ledger — automatically.
                </p>
              </motion.div>
            </div>

            {/* Reactions */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Beef, label: 'Beef patty stock', value: `−${sold * 0.18}kg`, color: 'text-rose-300', bg: 'from-rose-500/20 to-rose-500/5' },
                { icon: Sandwich, label: 'Brioche buns', value: `−${sold} units`, color: 'text-amber-300', bg: 'from-amber-500/20 to-amber-500/5' },
                { icon: Droplet, label: 'Sauce inventory', value: `−${(sold * 30).toFixed(0)}ml`, color: 'text-yellow-300', bg: 'from-yellow-500/20 to-yellow-500/5' },
                { icon: Calculator, label: 'Food cost updated', value: `AED ${(sold * 18.4).toFixed(0)}`, color: 'text-violet-300', bg: 'from-violet-500/20 to-violet-500/5' },
                { icon: BookOpen, label: 'Inventory ledger', value: `${sold} entries`, color: 'text-blue-300', bg: 'from-blue-500/20 to-blue-500/5' },
                { icon: TrendingDown, label: 'COGS posted', value: `Live`, color: 'text-emerald-300', bg: 'from-emerald-500/20 to-emerald-500/5' },
              ].map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className={`relative bg-gradient-to-br ${r.bg} backdrop-blur-xl border border-white/10 rounded-2xl p-5 overflow-hidden group`}
                >
                  <motion.div
                    key={`${r.label}-${tick}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
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
      </div>
    </section>
  );
};

export default InventoryLiveFlow;
