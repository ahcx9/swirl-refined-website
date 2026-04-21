import React from 'react';
import { motion } from 'framer-motion';
import { Car, ScanLine, ShoppingBag, ChefHat, BellRing, ArrowRight, Plus, Star, Flame } from 'lucide-react';
import truckImg from '@/assets/qr-foodtruck-cars.jpg';
import burgerImg from '@/assets/menu-burger.jpg';
import friesImg from '@/assets/menu-fries.jpg';
import latteImg from '@/assets/menu-latte.jpg';

const QRCarOrdering = () => {
  const flow = [
    { icon: ScanLine, label: 'Scan' },
    { icon: ShoppingBag, label: 'Order' },
    { icon: ChefHat, label: 'Kitchen' },
    { icon: BellRing, label: 'Ready' },
    { icon: Car, label: 'Pickup' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full mb-6">
            <Car className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Drive-up & food trucks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-[1.1]">
            Even when customers don't<br />
            <span className="text-primary">step out of their car.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Scan from the seat. Order from the steering wheel. Pick up when it's ready.
          </p>
        </div>

        {/* Split visual */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left: truck + queue scene */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
          >
            <img src={truckImg} alt="Customer scanning QR code from car at food truck" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-transparent to-gray-900/60" />

            {/* QR sticker callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 right-6 bg-white rounded-2xl p-3 shadow-2xl flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gray-900 rounded-lg p-1.5 flex items-center justify-center">
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-px">
                  {[1,1,0,1,0,1,0,1,1].map((v,i) => (
                    <div key={i} className={v ? 'bg-white' : 'bg-gray-900'} />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-gray-500">Scan from car</div>
                <div className="text-xs font-bold text-gray-900">swirl.menu/truck</div>
              </div>
            </motion.div>

            {/* Bottom impact line */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-2xl font-bold text-white leading-tight">
                No lines.<br />No shouting orders.<br />No confusion.
              </div>
            </div>
          </motion.div>

          {/* Right: phone in car mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-gradient-to-br from-gray-50 to-blue-50/60 rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-[500px] ring-1 ring-black/5"
          >
            {/* Subtle car steering wheel hint */}
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm">
              <Car className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">From the driver's seat</span>
            </div>

            {/* Phone */}
            <div className="relative w-[260px] h-[530px] bg-gray-900 rounded-[2.8rem] p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-30" />
              <div className="w-full h-full bg-[#FAFAFA] rounded-[2.3rem] overflow-hidden flex flex-col">
                {/* Status */}
                <div className="px-5 pt-2.5 pb-1 flex items-center justify-between text-[10px] font-semibold text-gray-900">
                  <span>9:41</span>
                  <span>📍 At Pier 9</span>
                </div>
                {/* Header */}
                <div className="px-4 pt-2 pb-3 bg-white">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-primary">Black Truck Co.</div>
                  <div className="text-[14px] font-bold text-gray-900 leading-tight">Order without leaving your car</div>
                </div>
                {/* Featured */}
                <div className="px-4 pt-3">
                  <div className="relative h-24 rounded-2xl overflow-hidden shadow-lg">
                    <img src={burgerImg} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/20 to-transparent" />
                    <div className="absolute inset-0 p-3 flex flex-col justify-between">
                      <div className="self-start flex items-center gap-1 px-1.5 py-0.5 bg-amber-400 rounded-full">
                        <Flame className="w-2.5 h-2.5 text-white" />
                        <span className="text-[7px] font-bold text-white uppercase tracking-wider">Truck favorite</span>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white">Smash Burger Combo</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                          <span className="text-[8px] font-bold text-white">4.9 · 8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Items */}
                <div className="flex-1 px-4 pt-2.5 space-y-1.5 overflow-hidden">
                  {[
                    { name: 'Truffle Fries', img: friesImg, price: 18 },
                    { name: 'Iced Latte', img: latteImg, price: 16 },
                  ].map((it, i) => (
                    <div key={i} className="flex items-center gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <img src={it.img} alt="" className="w-10 h-10 rounded-xl object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-gray-900 truncate">{it.name}</div>
                        <div className="text-[10px] font-bold text-primary tabular-nums">{it.price}</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* CTA */}
                <div className="px-3 pb-3 pt-1">
                  <div className="bg-gray-900 rounded-2xl px-3 py-2.5 flex items-center justify-between shadow-xl">
                    <div>
                      <div className="text-[8px] font-bold uppercase tracking-wider text-white/60">Pickup at car</div>
                      <div className="text-[12px] font-bold text-white">8 min · spot A4</div>
                    </div>
                    <div className="px-3 py-1.5 bg-emerald-500 rounded-full text-[10px] font-bold text-white">
                      Pay & order
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Flow strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-5xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center justify-between flex-wrap gap-y-4">
            {flow.map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-gray-900">{s.label}</span>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRCarOrdering;
