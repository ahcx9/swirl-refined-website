import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Mail, AlertTriangle, Clock, X, TrendingDown } from 'lucide-react';

const mess = [
  { icon: FileSpreadsheet, text: 'POS exports to Excel' },
  { icon: Mail, text: 'Excel emailed to accountant' },
  { icon: Clock, text: 'Books closed 30 days late' },
  { icon: AlertTriangle, text: 'Reconciliation breaks every month' },
];

const impact = [
  { value: '30+', label: 'days to close books' },
  { value: '12%', label: 'numbers off vs reality' },
  { value: '0', label: 'real-time visibility' },
];

const AccountingReality = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-100 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-rose-500 rounded-full" />
            <span className="text-sm font-bold text-rose-700">Reality Today</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            You don't trust
            <br />
            <span className="text-rose-500">your numbers.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-gray-200"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-6">The Mess</div>
            <div className="space-y-3">
              {mess.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-rose-50/50 border border-rose-100 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-rose-500">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 flex-1">{m.text}</span>
                  <X className="w-4 h-4 text-rose-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-6 flex items-center gap-2">
              <TrendingDown className="w-4 h-4" /> Impact
            </div>
            <div className="space-y-4">
              {impact.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="flex items-baseline justify-between border-b border-white/10 pb-4 last:border-0"
                >
                  <span className="text-sm text-gray-400">{s.label}</span>
                  <span className="text-4xl font-bold text-rose-300 tabular-nums">{s.value}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-6 leading-relaxed">
              Month-end becomes a fire drill. Decisions get delayed. Cash gets stuck.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccountingReality;
