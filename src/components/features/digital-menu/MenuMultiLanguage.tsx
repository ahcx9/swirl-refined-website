import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Globe, Check } from 'lucide-react';

const MenuMultiLanguage = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const content = {
    en: {
      dir: 'ltr',
      category: 'Burgers',
      items: [
        { name: 'Signature Burger', desc: 'Beef, cheddar, brioche bun', price: 25 },
        { name: 'Double Cheese', desc: 'Two patties, melted cheddar', price: 32 },
        { name: 'Chicken Crisp', desc: 'Crispy chicken, garlic mayo', price: 28 },
      ],
    },
    ar: {
      dir: 'rtl',
      category: 'برغر',
      items: [
        { name: 'برغر سيغنتشر', desc: 'لحم بقري، شيدر، خبز بريوش', price: 25 },
        { name: 'دبل تشيز', desc: 'قطعتان، شيدر مذاب', price: 32 },
        { name: 'دجاج مقرمش', desc: 'دجاج مقرمش، مايونيز بالثوم', price: 28 },
      ],
    },
  } as const;

  const c = content[lang];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">Multi-Language</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]">
              One menu.
              <br />
              <span className="text-primary">Every language.</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Customers see your menu in their preferred language — automatically. Full RTL support for Arabic,
              with translations managed centrally and synced everywhere.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Auto-detect customer language',
                'Full Arabic + English RTL/LTR support',
                'Centralized translation manager',
                'Update once → reflected everywhere',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">{t}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex p-1 bg-gray-100 rounded-xl">
              <button
                onClick={() => setLang('en')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  lang === 'en' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  lang === 'ar' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                }`}
              >
                العربية
              </button>
            </div>
          </div>

          {/* Live preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-6 shadow-2xl shadow-primary/5"
          >
            <div className="flex items-center justify-between mb-5 px-2">
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Customer view</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Live</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                dir={c.dir}
                className="bg-white border border-gray-100 rounded-2xl p-6"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-4">{c.category}</div>
                <div className="space-y-4">
                  {c.items.map((it, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex-1 min-w-0">
                        <div className="text-base font-bold text-gray-900">{it.name}</div>
                        <div className="text-sm text-gray-500 mt-0.5">{it.desc}</div>
                      </div>
                      <div className="text-base font-bold text-gray-900 tabular-nums shrink-0">{it.price}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuMultiLanguage;
