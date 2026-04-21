import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine, Smartphone, Wifi, Zap, ChefHat, Receipt, ShoppingBag, Plus, Star, Flame } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';
import heroScan from '@/assets/qr-hero-scan.jpg';
import burgerImg from '@/assets/menu-burger.jpg';
import friesImg from '@/assets/menu-fries.jpg';

const QRHero = () => {
  const badges = [
    { icon: Smartphone, label: 'No app required' },
    { icon: Wifi, label: 'Works on any phone' },
    { icon: Zap, label: 'Instant ordering' },
    { icon: ScanLine, label: 'Fully connected system' },
  ];

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary/20 rounded-full mb-6 shadow-sm"
          >
            <ScanLine className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">QR Ordering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]"
          >
            Skip the queue.
            <br />
            <span className="text-primary">Order instantly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Customers scan, browse, and order directly from their phone — no app, no waiting, no confusion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap mb-8"
          >
            <SwirlCTA />
            <BookDemoCTA />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {badges.map((b, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
                <b.icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-gray-700">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero visual: real photo + connected system overlays */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5"
          >
            <img
              src={heroScan}
              alt="Customer scanning a QR code at restaurant table"
              width={1280}
              height={896}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 via-transparent to-transparent" />
          </motion.div>

          {/* Floating: Order placed card (top-left) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex absolute -left-4 lg:-left-10 top-12 z-20 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-2xl items-center gap-3 max-w-[280px]"
          >
            <img src={burgerImg} alt="" className="w-12 h-12 rounded-xl object-cover" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Order placed</div>
              <div className="text-sm font-bold text-gray-900 truncate">Signature Burger × 1</div>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                <span className="text-[10px] text-gray-500">Table 12 · 0.4s</span>
              </div>
            </div>
          </motion.div>

          {/* Floating: Kitchen ticket (right) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="hidden md:block absolute -right-4 lg:-right-10 top-20 z-20 bg-gray-900 rounded-2xl px-4 py-3 shadow-2xl w-[240px]"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <ChefHat className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Kitchen · KDS</span>
              </div>
              <span className="text-[10px] font-bold text-white/60">#0142</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white">1× Signature Burger</span>
                <span className="text-emerald-400 font-bold">NEW</span>
              </div>
              <div className="text-[10px] text-white/60">+ Extra cheese · No onion</div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-white">2× Truffle Fries</span>
              </div>
            </div>
          </motion.div>

          {/* Floating: POS receipt (bottom-right) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="hidden lg:flex absolute -right-6 -bottom-6 z-20 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-2xl items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">POS auto-billed</div>
              <div className="text-sm font-bold text-gray-900 tabular-nums">Total · 77</div>
            </div>
          </motion.div>

          {/* Floating: Live mini cart (bottom-left) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="hidden lg:flex absolute -left-6 -bottom-6 z-20 bg-white border border-gray-100 rounded-2xl px-3 py-2.5 shadow-2xl items-center gap-2.5"
          >
            <div className="flex -space-x-2">
              <img src={burgerImg} alt="" className="w-7 h-7 rounded-full ring-2 ring-white object-cover" />
              <img src={friesImg} alt="" className="w-7 h-7 rounded-full ring-2 ring-white object-cover" />
              <div className="w-7 h-7 rounded-full bg-primary ring-2 ring-white flex items-center justify-center text-[9px] font-bold text-white">+1</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Cart</div>
              <div className="text-xs font-bold text-gray-900">3 items · live</div>
            </div>
          </motion.div>

          {/* Connection pulse */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRHero;
