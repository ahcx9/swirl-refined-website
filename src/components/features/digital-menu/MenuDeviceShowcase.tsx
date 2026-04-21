import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Search, Flame, ShoppingBag, Heart, Sparkles } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
import burgerImg from '@/assets/menu-burger.jpg';
import friesImg from '@/assets/menu-fries.jpg';
import latteImg from '@/assets/menu-latte.jpg';
import pizzaImg from '@/assets/menu-pizza.jpg';
import saladImg from '@/assets/menu-salad.jpg';
import dessertImg from '@/assets/menu-dessert.jpg';

const MenuDeviceShowcase = () => {
  const categories = [
    { label: 'Bestsellers', icon: '🔥', active: true },
    { label: 'Burgers', icon: '🍔' },
    { label: 'Pizza', icon: '🍕' },
    { label: 'Salads', icon: '🥗' },
    { label: 'Drinks', icon: '🥤' },
    { label: 'Desserts', icon: '🍰' },
  ];

  const ipadItems = [
    { name: 'Signature Burger', desc: 'Wagyu · cheddar · brioche', price: 25, img: burgerImg, badge: 'Bestseller', rating: 4.9 },
    { name: 'Margherita Pizza', desc: 'San Marzano · buffalo mozzarella', price: 38, img: pizzaImg, badge: 'Chef', rating: 4.8 },
    { name: 'Truffle Fries', desc: 'Hand-cut · parmesan · herbs', price: 18, img: friesImg, badge: 'New', rating: 4.7 },
    { name: 'Garden Salad', desc: 'Avocado · cherry tomato · greens', price: 22, img: saladImg, rating: 4.6 },
    { name: 'Lava Cake', desc: 'Dark chocolate · strawberry', price: 24, img: dessertImg, badge: 'Sweet', rating: 4.9 },
    { name: 'Iced Latte', desc: 'Single origin espresso · oat milk', price: 16, img: latteImg, rating: 4.8 },
  ];

  return (
    <section className="pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-24 bg-gradient-to-b from-white via-blue-50/40 to-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-violet-500/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary/20 rounded-full mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Dynamic Digital Menu</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]"
          >
            One menu.
            <br />
            <span className="text-primary">Perfect On Every Device</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            From tablet to phone, your menu works perfectly — with clear visuals and smooth interactions.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <SwirlCTA />
            <BookDemoCTA />
          </div>
        </div>

        {/* Showcase */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* === iPad === Hidden on mobile, dominant on tablet/desktop === */}
            <div className="hidden sm:block relative w-full max-w-[860px] aspect-[4/3] bg-gray-900 rounded-[2.5rem] p-3 shadow-xl shadow-gray-900/10">
              {/* Camera */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full" />
              <div className="w-full h-full bg-[#FAFAFA] rounded-[2rem] overflow-hidden flex flex-col">
                {/* iPad Header */}
                <div className="px-8 pt-6 pb-4 bg-white border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Bistro Nord · Table 12</div>
                      <div className="text-2xl font-bold text-gray-900">What would you like today?</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full w-56">
                        <Search className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-500">Search menu…</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="relative w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-sm shadow-primary/30">
                        <ShoppingBag className="w-4 h-4 text-white" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-[9px] font-bold text-white rounded-full flex items-center justify-center">3</span>
                      </div>
                    </div>
                  </div>
                  {/* Categories */}
                  <div className="flex gap-2 overflow-hidden">
                    {categories.map((c, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                          c.active
                            ? 'bg-primary text-white shadow-sm shadow-primary/30'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <span>{c.icon}</span>
                        <span>{c.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* iPad Content Grid */}
                <div className="flex-1 px-6 py-5 overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {ipadItems.map((it, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.07 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <img
                            src={it.img}
                            alt={it.name}
                            loading="lazy"
                            width={512}
                            height={384}
                            className="w-full h-full object-cover"
                          />
                          {it.badge && (
                            <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 bg-white/95 backdrop-blur rounded-full">
                              <Flame className="w-2.5 h-2.5 text-amber-500" />
                              <span className="text-[9px] font-bold text-gray-900 uppercase tracking-wider">{it.badge}</span>
                            </div>
                          )}
                          <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/95 backdrop-blur flex items-center justify-center">
                            <Heart className="w-3.5 h-3.5 text-gray-700" />
                          </div>
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <div className="text-sm font-bold text-gray-900 truncate">{it.name}</div>
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                              <span className="text-[10px] font-bold text-gray-700">{it.rating}</span>
                              <span className="text-[10px] text-gray-400 truncate">· {it.desc}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <div className="text-sm font-bold text-gray-900 tabular-nums">{it.price}</div>
                            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-sm shadow-primary/30">
                              <Plus className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* === iPhone ===
                Mobile: full-width centered, tablet hidden.
                Tablet (sm/md): floating bottom-right, ~6% overlap, no rotation.
                Desktop (lg+): floating bottom-right, ~12% overlap, +3° rotation, strong shadow + glow. */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto sm:absolute sm:mx-0 sm:right-0 sm:-bottom-6 sm:translate-x-[6%] md:translate-x-[8%] lg:translate-x-[55%] lg:-bottom-10 lg:rotate-[3deg] z-20"
            >
              <div className="relative w-[280px] h-[570px] sm:w-[230px] sm:h-[470px] md:w-[245px] md:h-[500px] lg:w-[270px] lg:h-[550px] bg-gray-900 rounded-[2.8rem] p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] mx-auto ring-1 ring-black/5">
                {/* Subtle glow behind phone on desktop */}
                <div className="hidden lg:block absolute -inset-6 -z-10 bg-primary/10 rounded-[3rem] blur-2xl" />
                {/* Mobile-only ambient glow */}
                <div className="sm:hidden absolute -inset-8 -z-10 bg-gradient-to-br from-primary/15 via-violet-400/10 to-amber-300/10 rounded-[3.5rem] blur-3xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-30" />
                <div className="w-full h-full bg-[#FAFAFA] rounded-[2.3rem] overflow-hidden flex flex-col">
                  {/* === Premium iPhone UI (all viewports) === */}
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Status bar */}
                    <div className="px-5 pt-2.5 pb-1 flex items-center justify-between text-[10px] font-semibold text-gray-900">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-3.5 h-2 border border-gray-900 rounded-sm relative">
                          <div className="absolute inset-0.5 bg-gray-900 rounded-[1px]" />
                        </div>
                      </div>
                    </div>
                    {/* Header */}
                    <div className="px-4 pt-3 pb-3 bg-white">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-wider text-primary">Bistro Nord</div>
                          <div className="text-[14px] font-bold text-gray-900 leading-tight">Hi, Table 12 👋</div>
                        </div>
                        <div className="relative w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md">
                          <ShoppingBag className="w-4 h-4 text-white" />
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-[9px] font-bold text-white rounded-full flex items-center justify-center ring-2 ring-white">3</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full">
                        <Search className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-[10px] text-gray-500">Search dishes…</span>
                      </div>
                      <div className="flex gap-1.5 mt-3 overflow-hidden">
                        {categories.slice(0, 4).map((c, i) => (
                          <div key={i} className={`flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold whitespace-nowrap ${c.active ? 'bg-primary text-white shadow-sm shadow-primary/30' : 'bg-gray-100 text-gray-700'}`}>
                            <span className="text-[9px]">{c.icon}</span>
                            <span>{c.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hero promo card */}
                    <div className="px-3 pt-3 pb-2">
                      <div className="relative h-20 rounded-2xl overflow-hidden shadow-lg">
                        <img src={burgerImg} alt="Featured" loading="lazy" width={400} height={200} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/30 to-transparent" />
                        <div className="absolute inset-0 p-2.5 flex flex-col justify-between">
                          <div className="self-start flex items-center gap-1 px-1.5 py-0.5 bg-amber-400 rounded-full">
                            <Flame className="w-2.5 h-2.5 text-white" />
                            <span className="text-[7px] font-bold text-white uppercase tracking-wider">Chef's Pick</span>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-white leading-tight">Signature Wagyu Burger</div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                              <span className="text-[8px] font-bold text-white">4.9</span>
                              <span className="text-[8px] text-white/70">· 12,400+ orders</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu list */}
                    <div className="flex-1 px-3 pb-2 space-y-1.5 overflow-hidden">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-gray-500 mt-1">Trending now</div>
                      {[
                        { name: 'Margherita Pizza', desc: 'Buffalo mozzarella · basil', price: 38, img: pizzaImg, rating: 4.8, badge: 'New' },
                        { name: 'Truffle Fries', desc: 'Hand-cut · parmesan', price: 18, img: friesImg, rating: 4.7 },
                        { name: 'Lava Cake', desc: 'Dark chocolate · berries', price: 24, img: dessertImg, rating: 4.9, badge: 'Sweet' },
                      ].map((it, i) => (
                        <div key={i} className="flex items-center gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100">
                          <div className="relative shrink-0">
                            <img src={it.img} alt={it.name} loading="lazy" width={96} height={96} className="w-11 h-11 rounded-xl object-cover" />
                            {it.badge && (
                              <span className="absolute -top-1 -right-1 px-1 py-px bg-primary text-[7px] font-bold text-white rounded-full uppercase tracking-wider">{it.badge}</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-bold text-gray-900 truncate leading-tight">{it.name}</div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                              <span className="text-[8px] font-bold text-gray-700">{it.rating}</span>
                              <span className="text-[8px] text-gray-400 truncate">· {it.desc}</span>
                            </div>
                            <div className="text-[10px] font-bold text-primary tabular-nums mt-0.5">{it.price}</div>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/30 shrink-0">
                            <Plus className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Sticky cart bar */}
                    <div className="px-3 pb-2 pt-1.5 bg-gradient-to-t from-white via-white to-white/0">
                      <div className="bg-gray-900 rounded-2xl px-2.5 py-2 flex items-center justify-between shadow-xl shadow-gray-900/30">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <img src={burgerImg} alt="" className="w-5 h-5 rounded-full object-cover ring-2 ring-gray-900" />
                            <img src={friesImg} alt="" className="w-5 h-5 rounded-full object-cover ring-2 ring-gray-900" />
                            <div className="w-5 h-5 rounded-full bg-primary ring-2 ring-gray-900 flex items-center justify-center text-[7px] font-bold text-white">+1</div>
                          </div>
                          <div>
                            <div className="text-[7px] font-bold uppercase tracking-wider text-white/60">3 items</div>
                            <div className="text-[11px] font-bold text-white tabular-nums">77</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-primary rounded-full text-[9px] font-bold text-white shadow-md shadow-primary/40">
                          <span>Checkout</span>
                          <Plus className="w-2.5 h-2.5 rotate-45" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating "Live" badge top-left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex absolute -left-4 -top-6 z-20 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-xl items-center gap-3"
            >
              <div className="relative">
                <span className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <span className="relative block w-2 h-2 bg-emerald-500 rounded-full" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Live menu</div>
                <div className="text-sm font-bold text-gray-900">Synced everywhere</div>
              </div>
            </motion.div>

            {/* Floating rating top-right (xl+ only — avoid colliding with phone) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="hidden xl:flex absolute -right-4 top-12 z-20 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-xl items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">4.9 average</div>
                <div className="text-[10px] text-gray-500">12,400+ orders</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom feature row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {[
            { label: 'Rich item imagery', value: 'HD photos' },
            { label: 'Pixel-perfect on', value: 'Any device' },
            { label: 'Smart upsells', value: '+18% AOV' },
            { label: 'Browser-native', value: 'No app needed' },
          ].map((s, i) => (
            <div key={i} className="text-center p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{s.label}</div>
              <div className="text-lg font-bold text-primary">{s.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuDeviceShowcase;
