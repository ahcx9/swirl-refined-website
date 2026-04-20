import React from 'react';
import { motion } from 'framer-motion';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';

const MenuFinalCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto bg-gradient-to-br from-primary via-primary to-primary/90 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stop updating.
              <br />
              Start earning.
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Replace static menus and manual updates with a thinking menu engine — built into your operating system.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <SwirlCTA />
              <BookDemoCTA />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuFinalCTA;
