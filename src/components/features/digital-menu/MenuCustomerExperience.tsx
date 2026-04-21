import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, Zap, Heart, Star, Plus, Search, Flame } from 'lucide-react';
import burgerImg from '@/assets/menu-burger.jpg';
import friesImg from '@/assets/menu-fries.jpg';
import latteImg from '@/assets/menu-latte.jpg';
import pizzaImg from '@/assets/menu-pizza.jpg';
import saladImg from '@/assets/menu-salad.jpg';
import dessertImg from '@/assets/menu-dessert.jpg';

const MenuCustomerExperience = () => {
  const hero = { name: 'Signature Burger', desc: 'Wagyu beef · cheddar · brioche', price: 25, img: burgerImg, badge: 'Bestseller' };
  const featured = [
    { name: 'Margherita Pizza', price: 38, img: pizzaImg, badge: 'Chef' },
    { name: 'Truffle Fries', price: 18, img: friesImg, badge: 'New' },
  ];
  const grid = [
    { name: 'Garden Salad', price: 22, img: saladImg },
    { name: 'Iced Latte', price: 16, img: latteImg },
    { name: 'Lava Cake', price: 24, img: dessertImg },
    { name: 'Truffle Fries', price: 18, img: friesImg },
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
            <div className="relative w-[320px] h-[660px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-primary/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-30" />
              <div className="w-full h-full bg-[#FAFAFA] rounded-[2.5rem] overflow-hidden relative flex flex-col">
                {/* Header */}
                <div className="px-4 pt-9 pb-3 bg-white border-b border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-primary">Bistro Nord · Table 12</div>
                      <div className="text-lg font-bold text-gray-900 leading-tight">Lunch menu</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Search className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex gap-1.5 overflow-hidden">
                    {['All', 'Burgers', 'Pizza', 'Sides', 'Drinks'].map((t, i) => (
                      <div
                        key={t}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap ${
                          i === 0 ? 'bg-primary text-white shadow-sm shadow-primary/30' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-hidden px-3 py-3 space-y-3">
                  {/* Hero item card */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative rounded-2xl overflow-hidden shadow-md bg-white"
                  >
                    <div className="relative h-32 w-full">
                      <img src={hero.img} alt={hero.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 bg-amber-400 rounded-full">
                        <Flame className="w-2.5 h-2.5 text-white" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">{hero.badge}</span>
                      </div>
                    </div>
                    <div className="px-3 py-2.5 flex items-center justify-between">
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-gray-900 truncate">{hero.name}</div>
                        <div className="text-[10px] text-gray-500 truncate">{hero.desc}</div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <div className="text-sm font-bold text-gray-900 tabular-nums">{hero.price}</div>
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-sm shadow-primary/30">
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Featured row (2 cards) */}
                  <div className="grid grid-cols-2 gap-2">
                    {featured.map((it, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm"
                      >
                        <div className="relative h-20 w-full">
                          <img src={it.img} alt={it.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                          <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-white/95 rounded-full text-[8px] font-bold text-gray-900">
                            {it.badge}
                          </div>
                        </div>
                        <div className="px-2 py-1.5 flex items-center justify-between">
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-gray-900 truncate">{it.name}</div>
                            <div className="text-[10px] font-bold text-primary tabular-nums">{it.price}</div>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                            <Plus className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Section label */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-700">More to love</div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-[10px] font-bold text-gray-700">4.9</span>
                    </div>
                  </div>

                  {/* Compact grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {grid.map((it, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.06 }}
                        className="flex items-center gap-2 p-1.5 bg-white rounded-xl shadow-sm"
                      >
                        <img src={it.img} alt={it.name} loading="lazy" width={512} height={512} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-bold text-gray-900 truncate leading-tight">{it.name}</div>
                          <div className="text-[10px] font-bold text-primary tabular-nums">{it.price}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating cart */}
                <div className="px-3 pb-3">
                  <div className="bg-gray-900 rounded-2xl px-4 py-3 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">3</div>
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-white/60">Items</div>
                        <div className="text-xs font-bold text-white">View cart</div>
                      </div>
                    </div>
                    <div className="text-base font-bold text-white tabular-nums">59</div>
                  </div>
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
