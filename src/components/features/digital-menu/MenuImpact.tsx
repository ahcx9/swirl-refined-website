import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 22, suffix: '%', label: 'Higher margins', desc: 'Through contextual pricing' },
  { value: 0, suffix: '', label: 'Manual updates', desc: 'Edit once, sync everywhere' },
  { value: 14, suffix: '%', label: 'Upsell uplift', desc: 'Smart modifier suggestions' },
  { value: 30, suffix: '+', label: 'Languages', desc: 'AI-translated menus' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
};

const MenuImpact = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            What operators
            <br />
            <span className="text-primary">actually feel.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-bold text-gray-900 mb-1">{s.label}</div>
              <div className="text-xs text-gray-500">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuImpact;
