import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine, Plus, Settings2, CreditCard, ChefHat, Package, Receipt, UserCircle, ArrowDown, CheckCircle2 } from 'lucide-react';
import burgerImg from '@/assets/menu-burger.jpg';

const QRLiveFlow = () => {
  const customerSteps = [
    { icon: ScanLine, label: 'Scans table QR' },
    { icon: Plus, label: 'Selects Signature Burger' },
    { icon: Settings2, label: 'Adds extra cheese · no onion' },
    { icon: CreditCard, label: 'Pays with Apple Pay' },
  ];

  const systemSteps = [
    { icon: ChefHat, label: 'Order fires to kitchen', tag: 'KDS' },
    { icon: Package, label: 'Inventory deducts ingredients', tag: 'Stock' },
    { icon: Receipt, label: 'Invoice + ZATCA receipt issued', tag: 'POS' },
    { icon: UserCircle, label: 'Customer profile updated', tag: 'CRM' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-emerald-700">Live order, real time</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Watch one order ripple through.</h2>
          <p className="text-lg text-gray-600">From scan to settled receipt — what your customer does, what your system does.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Customer column */}
          <div className="bg-gradient-to-br from-blue-50/60 to-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <img src={burgerImg} alt="" className="w-10 h-10 rounded-xl object-cover" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary">Customer</div>
                <div className="text-base font-bold text-gray-900">Table 12 · Bistro Nord</div>
              </div>
            </div>
            <div className="space-y-3">
              {customerSteps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 flex-1">{s.label}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {i < customerSteps.length - 1 && (
                    <div className="absolute -bottom-3 left-7 w-px h-3 bg-gray-200" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* System column */}
          <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/30 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">System reaction</div>
                  <div className="text-base font-bold text-white">All in real time · 240ms</div>
                </div>
              </div>
              <div className="space-y-3">
                {systemSteps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="relative flex items-center gap-3 p-3 bg-white/[0.06] backdrop-blur rounded-xl border border-white/10"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <s.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm font-bold text-white flex-1">{s.label}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 bg-emerald-400/10 rounded-full">{s.tag}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRLiveFlow;
