import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, Zap, Heart, Star, Plus } from 'lucide-react';

const MenuCustomerExperience = () => {
  const items = [
    { name: 'Signature Burger', desc: 'Beef, cheddar, brioche', price: 25, badge: 'Bestseller', img: 'from-amber-200 to-orange-300' },
    { name: 'Truffle Fries', desc: 'Hand-cut, parmesan', price: 18, badge: 'New', img: 'from-yellow-200 to-amber-300' },
    { name: 'Iced Latte', desc: 'Single origin espresso', price: 16, img: 'from-stone-200 to-stone-300' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
            >
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">Customer Experience</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]"
            >
              Your menu, in your
              <br />
              <span className="text-primary">customer's hand.</span>
            </motion.h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Scan a QR. The menu opens instantly — no app, no friction. Beautiful UI like the best delivery apps,
              with item images, modifiers, and upsells built in.
            </p>

            <div className="space-y-4">
              {[
                { icon: QrCode, title: 'Scan QR → menu in 1 second', desc: 'Works on any phone, any browser' },
                { icon: Zap, title: 'No app download required', desc: 'Pure web experience, instant load' },
                { icon: Heart, title: 'Designed to convert', desc: 'Item images, modifiers, smart upsells' },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-50/60 border border-gray-100 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{b.title}</div>
                    <div className="text-sm text-gray-600">{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: iPhone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            {/* Floating QR badge */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -left-4 top-12 z-20 bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center">
                  <QrCode className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Table 12</div>
                  <div className="text-sm font-bold text-gray-900">Scan to order</div>
                </div>
              </div>
            </motion.div>

            {/* Phone frame */}
            <div className="relative w-[300px] h-[620px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-primary/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-30" />
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Header */}
                <div className="px-5 pt-10 pb-4 bg-gradient-to-b from-primary/5 to-transparent">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Bistro Nord</div>
                  <div className="text-xl font-bold text-gray-900">Lunch menu</div>
                  <div className="flex gap-2 mt-3">
                    {['All', 'Burgers', 'Sides', 'Drinks'].map((t, i) => (
                      <div
                        key={t}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Items */}
                <div className="px-4 space-y-3 overflow-hidden">
                  {items.map((it, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex gap-3 p-2.5 bg-white border border-gray-100 rounded-2xl shadow-sm"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${it.img} shrink-0 relative overflow-hidden`}>
                        {it.badge && (
                          <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-white/90 rounded text-[8px] font-bold text-gray-900">
                            {it.badge}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-gray-900 truncate">{it.name}</div>
                        <div className="text-[10px] text-gray-500 truncate">{it.desc}</div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="text-sm font-bold text-gray-900">{it.price}</div>
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-sm">
                            <Plus className="w-3.5 h-3.5 text-white" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating cart */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900 rounded-2xl px-4 py-3 flex items-center justify-between shadow-xl">
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-white/60">3 items</div>
                    <div className="text-sm font-bold text-white">View cart</div>
                  </div>
                  <div className="text-base font-bold text-white tabular-nums">59</div>
                </div>
              </div>
            </div>

            {/* Floating rating */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-2 bottom-20 z-20 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <div>
                  <div className="text-sm font-bold text-gray-900">4.9 · loved</div>
                  <div className="text-[10px] text-gray-500">by 1.2k diners</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuCustomerExperience;
