import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ClipboardList, BellRing, TrendingUp } from 'lucide-react';

const InventoryIntelligence = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
          >
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Intelligence Layer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Know what to buy
            <br />
            <span className="text-primary">before you run out.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Demand Forecasting',
              desc: 'Predicts next week\'s usage based on history, seasonality, and events.',
              demo: <ForecastDemo />,
            },
            {
              icon: ClipboardList,
              title: 'Auto Prep Sheets',
              desc: 'Daily prep generated from upcoming orders and reservation pace.',
              demo: <PrepDemo />,
            },
            {
              icon: BellRing,
              title: 'Low Stock Alerts',
              desc: 'Smart thresholds trigger reorder suggestions before you stock out.',
              demo: <AlertDemo />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border border-gray-200 rounded-3xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{item.desc}</p>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">{item.demo}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ForecastDemo = () => (
  <div>
    <div className="flex items-end gap-1 h-20">
      {[40, 55, 48, 62, 70, 65, 82].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className={`flex-1 rounded-t-md ${i >= 5 ? 'bg-primary' : 'bg-gray-300'}`}
        />
      ))}
    </div>
    <div className="flex justify-between text-[10px] text-gray-500 mt-2">
      <span>Mon</span><span>Sun</span>
    </div>
  </div>
);

const PrepDemo = () => (
  <div className="space-y-1.5 text-xs">
    {[
      { item: 'Patties', qty: '12kg' },
      { item: 'Salad mix', qty: '4kg' },
      { item: 'Sauce batch', qty: '8L' },
    ].map((p, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100"
      >
        <span className="text-gray-700">{p.item}</span>
        <span className="font-bold text-gray-900 tabular-nums">{p.qty}</span>
      </motion.div>
    ))}
  </div>
);

const AlertDemo = () => (
  <div className="space-y-2">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50 border border-red-100"
    >
      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      <span className="text-xs font-semibold text-red-700">Mozzarella low — 3 days</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-100"
    >
      <div className="w-2 h-2 bg-amber-500 rounded-full" />
      <span className="text-xs font-semibold text-amber-700">Olive oil — reorder soon</span>
    </motion.div>
  </div>
);

export default InventoryIntelligence;
