import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Globe, UserCheck, CreditCard, Hash, Tv, RotateCcw } from 'lucide-react';

const QRFeatures = () => {
  const features = [
    { icon: QrCode, title: 'QR Table Ordering', desc: 'Scan & order instantly from the table.' },
    { icon: Globe, title: 'Online Ordering Portal', desc: 'Branded takeaway & delivery storefront.' },
    { icon: UserCheck, title: 'Self-Service Experience', desc: 'No staff needed to take orders.' },
    { icon: CreditCard, title: 'Smart Checkout', desc: 'Saved cards, wallets, split payments.' },
    { icon: Hash, title: 'Queue Management', desc: 'Order tokens and live wait estimates.' },
    { icon: Tv, title: 'Customer Display', desc: 'Live order status on screen.' },
    { icon: RotateCcw, title: 'Reorder & Favorites', desc: 'Returning guests order in one tap.' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Everything ordering needs.<br />
            <span className="text-primary">Nothing it doesn't.</span>
          </h2>
          <p className="text-lg text-gray-600">A complete ordering surface — table, takeaway, drive-up, queues, and pickup.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-primary" />
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

export default QRFeatures;
