import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PackageCheck, Receipt, Database, ChefHat, Calculator } from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Purchase Order', desc: 'Created & approved', color: 'from-blue-500 to-blue-600' },
  { icon: PackageCheck, title: 'Goods Received', desc: 'GRN logged', color: 'from-indigo-500 to-indigo-600' },
  { icon: Receipt, title: 'Invoice Matched', desc: '3-way match', color: 'from-violet-500 to-violet-600' },
  { icon: Database, title: 'Inventory Updated', desc: 'Stock posted', color: 'from-purple-500 to-purple-600' },
  { icon: ChefHat, title: 'Recipe Consumed', desc: 'On every order', color: 'from-fuchsia-500 to-fuchsia-600' },
  { icon: Calculator, title: 'Food Cost Live', desc: 'Real-time COGS', color: 'from-pink-500 to-pink-600' },
];

const InventorySystemFlow = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
          >
            <span className="text-sm font-bold text-primary">How swirl Fixes This</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            One system. Six checkpoints.
            <br />
            <span className="text-primary">Zero leaks.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Every step is tracked. Nothing is lost.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical line for mobile / horizontal for desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-md opacity-50`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 z-20">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySystemFlow;
