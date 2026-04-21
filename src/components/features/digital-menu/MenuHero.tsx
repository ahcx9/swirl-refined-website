import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
import MenuDeviceShowcase from '@/components/features/digital-menu/MenuDeviceShowcase';

const MenuHero = () => {

  const prices = [
    { icon: Utensils, label: 'Dine-in', value: 25, color: 'from-blue-500 to-blue-600' },
    { icon: Truck, label: 'Delivery', value: 30, color: 'from-orange-500 to-red-500' },
    { icon: Star, label: 'Loyalty', value: 22, color: 'from-violet-500 to-violet-600' },
    { icon: Clock, label: 'Happy hour', value: 20, color: 'from-emerald-500 to-emerald-600' },
  ];

  return (
    <section className="relative pt-32 md:pt-36 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Dynamic Menu Engine</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]"
          >
            Your menu
            <br />
            <span className="text-primary">should think.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Control pricing, availability, and customer experience in real time — across every channel,
            every branch, every moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 flex-wrap mb-20"
          >
            <SwirlCTA />
            <BookDemoCTA />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200/80 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white border border-gray-200 rounded-full">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">One item • four prices</span>
            </div>

            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-2">Signature Burger</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">Same dish. Smart pricing.</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {prices.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="relative bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-3 shadow-md`}>
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{p.label}</div>
                  <div className="text-2xl font-bold text-gray-900 tabular-nums">
                    {currency.symbol} {p.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                Auto-switched by channel, time, customer tier, and location — no spreadsheets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHero;
