import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Cloud, Smartphone, Truck, QrCode } from 'lucide-react';

const channels = [
  { icon: Smartphone, label: 'POS' },
  { icon: QrCode, label: 'QR menu' },
  { icon: Truck, label: 'Delivery apps' },
  { icon: Cloud, label: 'Kiosk' },
];

const MenuSystemFlow = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
          >
            <span className="text-sm font-bold text-primary">How swirl fixes this</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Edit once.
            <br />
            <span className="text-primary">Update everywhere.</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl mb-4">
                  <Edit3 className="w-9 h-9" />
                </div>
                <div className="font-bold text-gray-900">One menu</div>
                <div className="text-sm text-gray-500">Single source of truth</div>
              </motion.div>

              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full h-px bg-gray-200">
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {channels.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-3 text-center shadow-sm"
                  >
                    <c.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-700">{c.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-10 italic">
              Change a price in one place. Every channel, every branch updates instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSystemFlow;
