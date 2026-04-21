import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SwirlCTA from '@/components/SwirlCTA';
import BookDemoCTA from '@/components/BookDemoCTA';

const QRFinalCTA = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-900 via-gray-900 to-primary/40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white">Ready in minutes</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
            Stop losing customers<br />to the queue.
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Print a QR. Watch your tables, trucks, and pickup line move twice as fast — starting today.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <SwirlCTA />
            <BookDemoCTA />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRFinalCTA;
