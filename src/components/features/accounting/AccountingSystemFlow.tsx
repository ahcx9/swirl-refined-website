import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Package, Receipt, BookOpen } from 'lucide-react';

const stages = [
  { icon: ShoppingCart, title: 'Order placed', sub: 'POS captures sale' },
  { icon: TrendingUp, title: 'Revenue posted', sub: 'GL updated live' },
  { icon: Package, title: 'Inventory cost booked', sub: 'COGS recorded' },
  { icon: Receipt, title: 'Expense recorded', sub: 'AP entry created' },
  { icon: BookOpen, title: 'Statements updated', sub: 'P&L + balance sheet' },
];

const AccountingSystemFlow = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
          >
            <span className="text-sm font-bold text-primary">How swirl fixes this</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            One transaction.
            <br />
            <span className="text-primary">Five things happen.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:hidden" />
            <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />

            <div className="grid lg:grid-cols-5 gap-6">
              {stages.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg mb-4 mx-auto lg:mx-0">
                    <s.icon className="w-7 h-7 text-primary" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-center lg:text-left">{s.title}</h3>
                  <p className="text-sm text-gray-500 text-center lg:text-left">{s.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-12 italic">
            Every step is journaled. Nothing waits for month-end.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccountingSystemFlow;
