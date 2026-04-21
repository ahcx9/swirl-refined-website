import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine, Smartphone, ChefHat, Package, Receipt, UserCircle, BarChart3, ArrowRight, Zap } from 'lucide-react';
import kitchenImg from '@/assets/qr-kitchen-receive.jpg';

const QRSystemFlow = () => {
  const nodes = [
    { icon: ScanLine, label: 'Scan QR', sub: 'Customer phone' },
    { icon: Smartphone, label: 'Menu loads', sub: 'Browser, no app' },
    { icon: ChefHat, label: 'KDS fires', sub: 'Kitchen prints' },
    { icon: Package, label: 'Inventory deducts', sub: 'Real-time stock' },
    { icon: Receipt, label: 'Bill created', sub: 'POS auto-billed' },
    { icon: UserCircle, label: 'CRM updated', sub: 'Profile + history' },
    { icon: BarChart3, label: 'Analytics live', sub: 'Dashboard refreshed' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary/20 rounded-full mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">One scan · entire system</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-[1.1]">
            One scan triggers your<br />
            <span className="text-primary">entire system.</span>
          </h2>
          <p className="text-lg text-gray-600">
            All in real time. No integrations required. No middleware. No waiting.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-2 items-stretch">
            {nodes.map((n, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                    <n.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-xs font-bold text-gray-900 leading-tight mb-0.5">{n.label}</div>
                  <div className="text-[10px] text-gray-500 leading-tight">{n.sub}</div>
                  {/* Step number */}
                  <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center">{i + 1}</div>
                </motion.div>
                {i < nodes.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center -mx-2">
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Real-time bar */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="relative block w-2.5 h-2.5 bg-emerald-500 rounded-full" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">Live · synced everywhere</div>
                <div className="text-[10px] text-gray-500">avg propagation 240ms</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-700">No integrations needed</span>
            </div>
          </div>
        </div>

        {/* Kitchen photo proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-6xl mx-auto relative aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
        >
          <img src={kitchenImg} alt="Kitchen receiving QR order on display" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/30 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 sm:p-12">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 rounded-full mb-3">
                <ChefHat className="w-3.5 h-3.5 text-white" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">Kitchen</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                Order hits the pass before<br />the customer sets down their phone.
              </div>
              <div className="text-white/80 text-sm">From scan to ticket: under 2 seconds.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRSystemFlow;
