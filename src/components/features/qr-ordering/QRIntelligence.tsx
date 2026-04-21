import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Flame, Brain } from 'lucide-react';

const QRIntelligence = () => {
  const cards = [
    { icon: TrendingUp, title: 'Smart upsell', desc: '"Add fries for 8?" — shown only when relevant.', stat: '+18% AOV' },
    { icon: Flame, title: 'Trending items', desc: 'Auto-promotes what tables nearby just ordered.', stat: '+24% CTR' },
    { icon: Brain, title: 'Order patterns', desc: 'Learns visit times, favorites, and modifiers.', stat: '92% repeat fit' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-200 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-bold text-violet-700">Intelligence layer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Smart ordering, <span className="text-primary">built in.</span>
          </h2>
          <p className="text-lg text-gray-600">No configuration. The system learns from every order.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-7 bg-white rounded-3xl border border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center shadow-lg shadow-primary/30">
                    <c.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-full">{c.stat}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QRIntelligence;
