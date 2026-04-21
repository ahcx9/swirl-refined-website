import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Upload, Sparkles, FileText, Check, Wand2, Image as ImageIcon } from 'lucide-react';

const MenuAISection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-30%' });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setStep(0);
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 1800);
    return () => clearInterval(id);
  }, [inView]);

  const detected = [
    { cat: 'Burgers', items: ['Signature Burger — 25', 'Double Cheese — 32', 'Chicken Crisp — 28'] },
    { cat: 'Sides', items: ['Truffle Fries — 18', 'Onion Rings — 14'] },
    { cat: 'Drinks', items: ['Iced Latte — 16', 'Fresh Lemonade — 12'] },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Menu AI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight leading-[1.05]"
          >
            Set up your entire menu
            <br />
            <span className="text-primary">in under a minute.</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your menu as a PDF or image — Swirl AI reads, understands, and creates your full menu inside the system.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Step 1: Upload */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-primary/5"
          >
            <div className="absolute -top-3 left-8 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
              01 · Upload
            </div>

            <div className="mt-2 mb-6">
              <div className="text-sm font-semibold text-gray-500 mb-1">Drop your menu</div>
              <div className="text-2xl font-bold text-gray-900">PDF, JPG, photo</div>
            </div>

            <motion.div
              animate={step === 0 ? { scale: [1, 1.02, 1], borderColor: ['rgb(229,231,235)', 'rgb(0,82,204)', 'rgb(229,231,235)'] } : {}}
              transition={{ duration: 1.5, repeat: step === 0 ? Infinity : 0 }}
              className="border-2 border-dashed border-gray-200 rounded-2xl p-8 bg-gray-50/50 text-center"
            >
              <Upload className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-sm font-semibold text-gray-700 mb-1">Drag & drop here</div>
              <div className="text-xs text-gray-500">or click to browse</div>
            </motion.div>

            <div className="mt-5 space-y-2">
              {[
                { icon: FileText, name: 'menu-spring-2026.pdf', size: '2.4 MB' },
                { icon: ImageIcon, name: 'breakfast-board.jpg', size: '1.1 MB' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg">
                  <f.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-700 flex-1 truncate">{f.name}</span>
                  <span className="text-xs text-gray-400">{f.size}</span>
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step 2: AI Processing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-primary/5"
          >
            <div className="absolute -top-3 left-8 px-3 py-1 bg-violet-500 text-white text-xs font-bold rounded-full shadow-lg">
              02 · AI Reads
            </div>

            <div className="mt-2 mb-6">
              <div className="text-sm font-semibold text-gray-500 mb-1">Swirl AI is</div>
              <div className="text-2xl font-bold text-gray-900">Understanding your menu</div>
            </div>

            <div className="flex items-center justify-center my-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="w-28 h-28 rounded-full border-4 border-primary/15 border-t-primary flex items-center justify-center bg-primary/5"
              >
                <Wand2 className="w-10 h-10 text-primary" />
              </motion.div>
            </div>

            <div className="space-y-2">
              {['Detecting items', 'Mapping categories', 'Extracting prices', 'Linking modifiers'].map((label, i) => (
                <motion.div
                  key={i}
                  animate={step >= 1 ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -10 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-2 text-sm px-3 py-2 bg-gray-50 rounded-lg"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${step >= 1 ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                  <span className="text-gray-700 font-medium">{label}</span>
                  {step >= 1 && <Check className="w-3.5 h-3.5 text-emerald-500 ml-auto" />}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Step 3: Live Menu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-primary/5"
          >
            <div className="absolute -top-3 left-8 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
              03 · Live
            </div>

            <div className="mt-2 mb-6 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-1">Menu created</div>
                <div className="text-2xl font-bold text-gray-900">Inside Swirl</div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Live</span>
              </div>
            </div>

            <div className="space-y-3 max-h-[280px] overflow-hidden">
              {detected.map((cat, i) => (
                <motion.div
                  key={cat.cat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={step >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.15 }}
                  className="border border-gray-100 rounded-xl p-3 bg-gray-50/40"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">{cat.cat}</div>
                  <div className="space-y-1.5">
                    {cat.items.map((it) => (
                      <div key={it} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">{it.split('—')[0].trim()}</span>
                        <span className="font-mono text-gray-900 font-semibold tabular-nums">{it.split('—')[1].trim()}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/5 via-violet-500/5 to-primary/5 border border-primary/10 rounded-2xl">
            <span className="text-base md:text-lg font-bold text-gray-900">From menu file</span>
            <span className="text-primary">→</span>
            <span className="text-base md:text-lg font-bold text-primary">live system in seconds.</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            {['No manual entry', 'No Excel', 'No setup time', 'Works with real menus'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuAISection;
