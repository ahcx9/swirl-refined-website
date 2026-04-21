import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const QRImpact = () => {
  const stats = [
    { icon: Zap, value: '3×', label: 'Faster service', sub: 'vs. counter ordering' },
    { icon: Users, value: '−40%', label: 'Staff dependency', sub: 'on order taking' },
    { icon: TrendingUp, value: '+22%', label: 'Higher order value', sub: 'with smart upsells' },
    { icon: ShieldCheck, value: '99.6%', label: 'Order accuracy', sub: 'no verbal confusion' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">The business impact.</h2>
          <p className="text-lg text-gray-600">Measured across hundreds of restaurants and food trucks running on swirl.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group text-center p-7 bg-gradient-to-b from-white to-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary tabular-nums mb-1">{s.value}</div>
              <div className="text-sm font-bold text-gray-900">{s.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QRImpact;
