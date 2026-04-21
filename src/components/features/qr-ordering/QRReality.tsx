import React from 'react';
import { motion } from 'framer-motion';
import { Users, AlertTriangle, Clock } from 'lucide-react';
import truckImg from '@/assets/qr-foodtruck-cars.jpg';

const QRReality = () => {
  const pains = [
    { icon: Clock, title: 'Long queues', desc: 'Customers leave before they even reach the counter.', stat: '37% walk away' },
    { icon: Users, title: 'Staff overwhelmed', desc: 'One person juggling orders, payments, and the kitchen.', stat: '2× more errors' },
    { icon: AlertTriangle, title: 'Wrong & missed orders', desc: 'Verbal orders get lost between counter and kitchen.', stat: '1 in 6 wrong' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-red-200 rounded-full mb-6 shadow-sm">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-bold text-red-600">Reality today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Queues. Chaos. Lost orders.
          </h2>
          <p className="text-lg text-gray-600">
            Most restaurants and food trucks still rely on counters, paper tickets, and shouting.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto items-stretch">
          {/* Truck reality image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative aspect-[4/3] lg:aspect-auto rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5"
          >
            <img src={truckImg} alt="Cars queuing at a busy food truck" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-500/90 rounded-full mb-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Peak hour</span>
              </div>
              <div className="text-xl font-bold text-white leading-tight">5 cars waiting · 14 min average</div>
              <div className="text-sm text-white/80 mt-1">Staff rushing, customers losing patience.</div>
            </div>
          </motion.div>

          {/* Pain cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-1 gap-4">
            {pains.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <p.icon className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 px-2 py-0.5 bg-red-50 rounded-full whitespace-nowrap">{p.stat}</span>
                  </div>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRReality;
