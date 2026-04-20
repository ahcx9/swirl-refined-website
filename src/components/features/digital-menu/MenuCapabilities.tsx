import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Layers, RefreshCw, Languages, ArrowRight } from 'lucide-react';

const caps = [
  {
    icon: Tag,
    tag: 'Contextual Pricing',
    title: 'One price doesn\'t fit all.',
    problem: 'Same price across dine-in, delivery, and happy hour kills your margins.',
    solution: 'Prices flex by time, order type, customer tier, and location — automatically.',
    outcome: 'Maximize margin without thinking about it.',
  },
  {
    icon: Layers,
    tag: 'Modifier Intelligence',
    title: 'Every add-on is controlled.',
    problem: 'Add-ons are messy and inconsistent across channels.',
    solution: 'Modifier groups with pricing logic and direct inventory linkage.',
    outcome: 'No undercharging. No untracked costs.',
  },
  {
    icon: RefreshCw,
    tag: 'Live Menu Sync',
    title: 'No outdated menus. Anywhere.',
    problem: 'Menu changes don\'t reflect everywhere — guests order things you can\'t make.',
    solution: '86 items instantly. Update price once → reflects on POS, QR, delivery, kiosk.',
    outcome: 'One change. All channels.',
  },
  {
    icon: Languages,
    tag: 'Multi-Language',
    title: 'Total flexibility.',
    problem: 'Managing menus across languages and versions is chaotic.',
    solution: 'Arabic + English (and more), full version history, scheduled rollouts.',
    outcome: 'Localized menus without copy-paste.',
  },
];

const MenuCapabilities = () => {
  const [active, setActive] = useState(0);
  const cap = caps[active];

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Four capabilities.
            <br />
            <span className="text-primary">One menu engine.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-2">
            {caps.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                    isActive
                      ? 'border-primary bg-white shadow-lg'
                      : 'border-transparent bg-white/50 hover:bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{c.tag}</div>
                      <div className="font-bold text-gray-900 text-sm">{c.title}</div>
                    </div>
                    {isActive && <ArrowRight className="w-4 h-4 text-primary" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <cap.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{cap.title}</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl">
                    <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Problem</div>
                    <div className="text-gray-800">{cap.problem}</div>
                  </div>
                  <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Solution</div>
                    <div className="text-gray-800">{cap.solution}</div>
                  </div>
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Outcome</div>
                    <div className="text-gray-900 font-semibold">{cap.outcome}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCapabilities;
