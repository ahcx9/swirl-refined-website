import React from 'react';
import { motion } from 'framer-motion';
import { Target, PieChart, Clock } from 'lucide-react';

const blocks = [
  {
    icon: Target,
    title: 'Budget vs actual',
    desc: 'See variance by branch, category, or cost center — updated daily, not monthly.',
    metric: '−4.2%',
    metricLabel: 'vs plan this month',
  },
  {
    icon: PieChart,
    title: 'Expense analysis',
    desc: 'Drill into where money is leaking — by vendor, GL code, or location.',
    metric: 'Top 3',
    metricLabel: 'cost drivers identified',
  },
  {
    icon: Clock,
    title: 'Credit aging',
    desc: 'Live AR aging buckets so you chase the right customers at the right time.',
    metric: '12 days',
    metricLabel: 'avg DSO',
  },
];

const AccountingIntelligence = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Finance without
            <br />
            <span className="text-primary">waiting for month-end.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{b.desc}</p>
              <div className="pt-5 border-t border-gray-100">
                <div className="text-3xl font-bold text-primary tabular-nums">{b.metric}</div>
                <div className="text-xs text-gray-500 mt-1">{b.metricLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountingIntelligence;
