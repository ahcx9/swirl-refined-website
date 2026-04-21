import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, Copy, MousePointer2, SlidersHorizontal, Building2, QrCode,
  Palette, Languages, FileText, Tag, History, Download, TrendingUp,
} from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Menu AI', desc: 'Upload PDF/JPG → auto-create menu', accent: 'from-violet-500 to-primary', tag: 'AI' },
  { icon: Copy, title: 'Import from Branch', desc: 'Clone any menu instantly across locations', accent: 'from-blue-500 to-blue-600' },
  { icon: MousePointer2, title: 'Drag & Drop Editor', desc: 'Visual menu builder, no training needed', accent: 'from-emerald-500 to-emerald-600' },
  { icon: SlidersHorizontal, title: 'Modifier Management', desc: 'Groups, rules, conditional pricing', accent: 'from-amber-500 to-orange-500' },
  { icon: Building2, title: 'Brand Management', desc: 'Run multiple brands from one console', accent: 'from-rose-500 to-pink-500' },
  { icon: QrCode, title: 'QR Code Generator', desc: 'Per-table QR codes, branded designs', accent: 'from-gray-700 to-gray-900' },
  { icon: Palette, title: 'UI Customization', desc: 'Match your brand colors, fonts, layout', accent: 'from-fuchsia-500 to-purple-600' },
  { icon: Languages, title: 'Language Settings', desc: 'Per-customer auto-detected language', accent: 'from-cyan-500 to-blue-500' },
  { icon: FileText, title: 'Translations', desc: 'Manage every translation in one place', accent: 'from-teal-500 to-emerald-500' },
  { icon: Tag, title: 'Pricing Engine', desc: 'Contextual pricing — channel, time, tier', accent: 'from-primary to-blue-600', tag: 'Smart' },
  { icon: History, title: 'Menu Versions', desc: 'Track every change, rollback in 1 click', accent: 'from-indigo-500 to-violet-500' },
  { icon: Download, title: 'Export Menu', desc: 'PDF, CSV, print-ready formats', accent: 'from-slate-600 to-slate-800' },
  { icon: TrendingUp, title: 'Trending Settings', desc: 'Highlight bestsellers automatically', accent: 'from-orange-500 to-red-500' },
];

const MenuFeaturesGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/40 to-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Everything In One Console</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight leading-[1.05]"
          >
            One menu engine.
            <br />
            <span className="text-primary">Every capability you need.</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            From AI setup to multi-brand control — built natively into the swirl operating system.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              {f.tag && (
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-gradient-to-r from-violet-500 to-primary text-white text-[9px] font-bold rounded-full uppercase tracking-wider">
                  {f.tag}
                </div>
              )}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuFeaturesGrid;
