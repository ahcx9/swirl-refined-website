import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, FileText, Banknote, Building2, ArrowRight } from 'lucide-react';

const caps = [
  {
    icon: Cpu,
    tag: 'Native Engine',
    title: 'Built-in GL, AP, AR.',
    problem: 'Your POS and accounting don\'t talk.',
    solution: 'swirl ships with a full general ledger, accounts payable, and accounts receivable inside the platform.',
    outcome: 'No integrations. No gaps.',
  },
  {
    icon: FileText,
    tag: 'Auto Journals',
    title: 'Books update themselves.',
    problem: 'Manual entries waste time and cause errors.',
    solution: 'Sales, purchases, payroll, and inventory movements auto-post to the right accounts in real time.',
    outcome: 'Zero manual entries.',
  },
  {
    icon: Banknote,
    tag: 'Bank Recon',
    title: 'Reconciliation in minutes.',
    problem: 'Matching bank statements is painful.',
    solution: 'Auto-import statements, intelligent rule-based matching, and one-click approvals.',
    outcome: 'Hours, not days.',
  },
  {
    icon: Building2,
    tag: 'Multi-Entity',
    title: 'One view across all entities.',
    problem: 'Multiple branches mean messy books.',
    solution: 'Per-entity ledgers, intercompany elimination, and consolidated statements.',
    outcome: 'Group-level clarity.',
  },
];

const AccountingCapabilities = () => {
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
            <span className="text-primary">One finance system.</span>
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

export default AccountingCapabilities;
