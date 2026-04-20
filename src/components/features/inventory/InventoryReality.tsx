import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, AlertTriangle, PackageX, HelpCircle, TrendingDown, Trash2, ShieldOff, ArrowRight } from 'lucide-react';

const messItems = [
  { icon: FileSpreadsheet, text: 'Excel sheets everywhere', detail: 'Out of date by lunch' },
  { icon: AlertTriangle, text: 'Over-ordering supplies', detail: 'Cash sitting on shelves' },
  { icon: PackageX, text: 'Missing stock', detail: 'No one knows where' },
  { icon: HelpCircle, text: 'No real food cost', detail: 'Margins are guesswork' },
];

const impactItems = [
  { icon: TrendingDown, text: 'Shrinking margins', stat: '−18%' },
  { icon: Trash2, text: 'Daily wastage', stat: '12%' },
  { icon: ShieldOff, text: 'Zero accountability', stat: '∞' },
];

const InventoryReality = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-red-600">Reality Today</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Most restaurants are flying blind.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Stock, cost, and margin are managed in disconnected tools — until the P&L tells the story too late.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          {/* LEFT: The Mess */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-3xl p-8 border border-gray-200 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">The Mess</h3>
            </div>

            <div className="space-y-3">
              {messItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.text}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: The Impact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white">The Impact</h3>
            </div>

            <div className="space-y-4 relative">
              {impactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="font-semibold text-white">{item.text}</span>
                  </div>
                  <span className="text-2xl font-bold text-red-400 tabular-nums">{item.stat}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 relative">
              <p className="text-gray-400 text-sm leading-relaxed">
                When inventory is invisible, profit becomes invisible too.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InventoryReality;
