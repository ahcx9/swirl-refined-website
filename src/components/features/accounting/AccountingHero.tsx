import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, FileText, BookOpen, Banknote, BarChart3, CheckCircle2 } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';

const flow = [
  { icon: ShoppingCart, label: 'Order' },
  { icon: FileText, label: 'Invoice' },
  { icon: BookOpen, label: 'Journal' },
  { icon: Banknote, label: 'Bank' },
  { icon: BarChart3, label: 'Reports' },
  { icon: CheckCircle2, label: 'Closed' },
];

const AccountingHero = () => {
  return (
    <section className="relative pt-32 md:pt-36 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-bold text-primary">Native Accounting Engine</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]"
          >
            Your books,
            <br />
            <span className="text-primary">already done.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Every sale, every expense, every inventory movement automatically flows into your
            accounts — with zero manual work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 flex-wrap mb-20"
          >
            <SwirlCTA />
            <BookDemoCTA />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200/80 rounded-3xl p-6 md:p-12 shadow-2xl shadow-primary/5">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white border border-gray-200 rounded-full">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Auto Finance Pipeline</span>
            </div>

            <div className="flex items-center justify-between gap-2 md:gap-4 overflow-x-auto pb-2">
              {flow.map((step, i) => (
                <React.Fragment key={step.label}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                    className="flex flex-col items-center gap-2 flex-shrink-0"
                  >
                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-md">
                      <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-primary"
                        animate={{ opacity: [0, 1, 0], scale: [1, 1.15, 1.2] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: flow.length * 0.3 }}
                      />
                    </div>
                    <span className="text-[11px] md:text-xs font-semibold text-gray-700">{step.label}</span>
                  </motion.div>

                  {i < flow.length - 1 && (
                    <div className="flex-1 min-w-[20px] relative h-px bg-gray-200">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-primary"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                      />
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                        animate={{ left: ['0%', '100%'] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: flow.length * 0.3, ease: 'easeInOut' }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">0</div>
                <div className="text-xs text-gray-500 mt-1">Manual journal entries</div>
              </div>
              <div className="border-x border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">Real-time</div>
                <div className="text-xs text-gray-500 mt-1">GL updates</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">Audit-ready</div>
                <div className="text-xs text-gray-500 mt-1">Always</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccountingHero;
