import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Heart, RotateCcw, Settings2, Search, ShoppingBag, Plus, Star, Flame, Sparkles } from 'lucide-react';
import burgerImg from '@/assets/menu-burger.jpg';
import friesImg from '@/assets/menu-fries.jpg';
import latteImg from '@/assets/menu-latte.jpg';
import pizzaImg from '@/assets/menu-pizza.jpg';
import dessertImg from '@/assets/menu-dessert.jpg';

const QRCustomerExperience = () => {
  const features = [
    { icon: Smartphone, title: 'No app download', desc: 'Opens in any browser, in under a second.' },
    { icon: Plus, title: 'Add to cart', desc: 'Tap, customize, done. No friction.' },
    { icon: Settings2, title: 'Modifiers & notes', desc: 'Allergies, sides, extras — all clear.' },
    { icon: Heart, title: 'Favorites', desc: 'Save loved dishes for next visit.' },
    { icon: RotateCcw, title: 'One-tap reorder', desc: 'Returning guests skip browsing entirely.' },
  ];

  const categories = [
    { label: 'Bestsellers', icon: '🔥', active: true },
    { label: 'Burgers', icon: '🍔' },
    { label: 'Pizza', icon: '🍕' },
    { label: 'Drinks', icon: '🥤' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Customer experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-[1.1]">
            Designed for how people<br />
            <span className="text-primary">actually order.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Fast loading. Clean UI. Built for the way customers think — not how systems work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-violet-400/5 to-amber-300/5 rounded-[3rem] blur-3xl" />
            <div className="relative w-[280px] h-[570px] bg-gray-900 rounded-[2.8rem] p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-30" />
              <div className="w-full h-full bg-[#FAFAFA] rounded-[2.3rem] overflow-hidden flex flex-col">
                {/* Status */}
                <div className="px-5 pt-2.5 pb-1 flex items-center justify-between text-[10px] font-semibold text-gray-900">
                  <span>9:41</span>
                  <div className="w-3.5 h-2 border border-gray-900 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-gray-900 rounded-[1px]" />
                  </div>
                </div>
                {/* Header */}
                <div className="px-4 pt-2 pb-3 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-primary">Bistro Nord</div>
                      <div className="text-[14px] font-bold text-gray-900">Table 12</div>
                    </div>
                    <div className="relative w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md">
                      <ShoppingBag className="w-4 h-4 text-white" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-[9px] font-bold text-white rounded-full flex items-center justify-center ring-2 ring-white">2</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full">
                    <Search className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-[10px] text-gray-500">Search dishes…</span>
                  </div>
                  <div className="flex gap-1.5 mt-3 overflow-hidden">
                    {categories.map((c, i) => (
                      <div key={i} className={`flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold whitespace-nowrap ${c.active ? 'bg-primary text-white shadow-sm shadow-primary/30' : 'bg-gray-100 text-gray-700'}`}>
                        <span>{c.icon}</span>
                        <span>{c.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero */}
                <div className="px-4 pt-3">
                  <div className="relative h-24 rounded-2xl overflow-hidden shadow-lg">
                    <img src={pizzaImg} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/20 to-transparent" />
                    <div className="absolute inset-0 p-3 flex flex-col justify-between">
                      <div className="self-start flex items-center gap-1 px-1.5 py-0.5 bg-amber-400 rounded-full">
                        <Flame className="w-2.5 h-2.5 text-white" />
                        <span className="text-[7px] font-bold text-white uppercase tracking-wider">Trending</span>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white">Margherita Pizza</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                          <span className="text-[8px] font-bold text-white">4.9 · ordered 32 today</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* List */}
                <div className="flex-1 px-4 pt-2 space-y-1.5 overflow-hidden">
                  {[
                    { name: 'Signature Burger', img: burgerImg, price: 25, desc: 'Wagyu · cheddar', fav: true },
                    { name: 'Truffle Fries', img: friesImg, price: 18, desc: 'Hand-cut · parmesan' },
                    { name: 'Iced Latte', img: latteImg, price: 16, desc: 'Single origin · oat' },
                  ].map((it, i) => (
                    <div key={i} className="flex items-center gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <img src={it.img} alt="" className="w-10 h-10 rounded-xl object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <div className="text-[10px] font-bold text-gray-900 truncate">{it.name}</div>
                          {it.fav && <Heart className="w-2.5 h-2.5 text-red-500 fill-red-500 shrink-0" />}
                        </div>
                        <div className="text-[9px] text-gray-500 truncate">{it.desc}</div>
                        <div className="text-[10px] font-bold text-primary tabular-nums">{it.price}</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart bar */}
                <div className="px-3 pb-2 pt-1.5">
                  <div className="bg-gray-900 rounded-2xl px-3 py-2 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <img src={burgerImg} alt="" className="w-5 h-5 rounded-full object-cover ring-2 ring-gray-900" />
                        <img src={friesImg} alt="" className="w-5 h-5 rounded-full object-cover ring-2 ring-gray-900" />
                      </div>
                      <div>
                        <div className="text-[7px] font-bold uppercase tracking-wider text-white/60">2 items</div>
                        <div className="text-[11px] font-bold text-white tabular-nums">43</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-primary rounded-full text-[10px] font-bold text-white">Checkout</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features list */}
          <div className="space-y-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCustomerExperience;
