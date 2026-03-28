import React, { useState, useEffect } from 'react';
import { useCurrency } from '@/hooks/useCurrency';

export const SwirlDineMockup: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 5);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { name: 'Truffle Burger', price: '$18.50', cat: 'Mains', img: '🍔' },
    { name: 'Caesar Salad', price: '$12.00', cat: 'Starters', img: '🥗' },
    { name: 'Margherita Pizza', price: '$16.00', cat: 'Mains', img: '🍕' },
    { name: 'Tiramisu', price: '$9.50', cat: 'Desserts', img: '🍰' },
  ];

  const reservations = [
    { name: 'Sarah M.', time: '7:00 PM', guests: 4, status: 'Confirmed' },
    { name: 'James K.', time: '7:30 PM', guests: 2, status: 'Pending' },
    { name: 'Mia L.', time: '8:00 PM', guests: 6, status: 'Confirmed' },
  ];

  return (
    <div className="relative w-full h-full flex gap-2.5 py-1">
      {/* Digital Menu Mockup */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Phone-style menu */}
        <div className={`bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex-1 transition-all duration-500 ${
          step <= 2 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] font-bold text-foreground">Digital Menu</p>
            <div className="flex gap-1">
              {['All', 'Starters', 'Mains', 'Desserts'].map((c, i) => (
                <span
                  key={c}
                  className={`text-[6px] px-1.5 py-0.5 rounded-full transition-all duration-300 ${
                    (step === 0 && i === 0) || (step === 1 && i === 2) || (step === 2 && i === 3)
                      ? 'bg-primary text-white font-semibold'
                      : 'bg-gray-100 text-muted-foreground'
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            {menuItems.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-center gap-2 p-1.5 rounded-xl transition-all duration-500 ${
                  step === 1 && i === 0 ? 'bg-primary/5 border border-primary/15 scale-[1.02]' :
                  step === 2 && i === 3 ? 'bg-primary/5 border border-primary/15 scale-[1.02]' :
                  'bg-gray-50/60'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-[12px]">
                  {item.img}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[7px] font-semibold text-foreground">{item.name}</p>
                  <p className="text-[6px] text-muted-foreground">{item.cat}</p>
                </div>
                <div className="text-right">
                  <p className="text-[7px] font-bold text-foreground">{item.price}</p>
                  <div className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 flex items-center justify-center ml-auto mt-0.5 ${
                    (step === 1 && i === 0) || (step === 2 && i === 3)
                      ? 'bg-primary border-primary'
                      : 'border-gray-200'
                  }`}>
                    {((step === 1 && i === 0) || (step === 2 && i === 3)) && (
                      <span className="text-[5px] text-white font-bold">+</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart bar */}
          <div className={`mt-2 flex items-center justify-between p-2 rounded-xl transition-all duration-500 ${
            step >= 2 ? 'bg-primary text-white' : 'bg-gray-100 text-muted-foreground'
          }`}>
            <span className="text-[7px] font-semibold">
              {step >= 2 ? '2 items · $28.00' : 'Your order'}
            </span>
            <span className={`text-[6px] font-bold px-2 py-0.5 rounded-full transition-all duration-300 ${
              step >= 2 ? 'bg-white/20' : 'bg-gray-200'
            }`}>
              {step >= 2 ? 'Checkout →' : '0 items'}
            </span>
          </div>
        </div>

        {/* QR + Loyalty toast */}
        <div className="flex gap-2">
          <div className={`flex-1 bg-white rounded-xl p-2 border border-gray-100 shadow-sm transition-all duration-500 ${
            step === 3 ? 'ring-1 ring-emerald-200' : ''
          }`}>
            <p className="text-[7px] font-semibold text-foreground mb-1">Order Confirmed</p>
            <div className="flex items-center gap-1.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ${
                step >= 3 ? 'bg-emerald-100' : 'bg-gray-100'
              }`}>
                <span className="text-[8px]">{step >= 3 ? '✓' : '·'}</span>
              </div>
              <div>
                <p className="text-[6px] text-muted-foreground">Table 4 · 2 items</p>
                <p className="text-[6px] font-semibold text-emerald-600">{step >= 3 ? 'Preparing' : 'Waiting'}</p>
              </div>
            </div>
          </div>
          <div className={`flex-1 bg-white rounded-xl p-2 border border-gray-100 shadow-sm transition-all duration-500 ${
            step === 4 ? 'ring-1 ring-amber-200' : ''
          }`}>
            <p className="text-[7px] font-semibold text-foreground mb-1">Loyalty</p>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <div key={s} className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  s <= (step >= 4 ? 4 : 3) ? 'bg-amber-400' : 'bg-gray-100'
                }`} style={{ transitionDelay: `${s * 80}ms` }} />
              ))}
            </div>
            <p className="text-[6px] text-muted-foreground mt-1">{step >= 4 ? '+50 pts earned!' : '150 pts'}</p>
          </div>
        </div>
      </div>

      {/* Reservations Panel */}
      <div className="w-[135px] flex-shrink-0 flex flex-col gap-2">
        <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 3 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <p className="text-[8px] font-semibold text-foreground mb-1.5">Reservations</p>
          <div className="space-y-1.5">
            {reservations.map((r, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-1.5 rounded-lg transition-all duration-500 ${
                  step === 3 && i === 0 ? 'bg-primary/5 border border-primary/10' : 'bg-gray-50/80'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div>
                  <p className="text-[7px] font-semibold text-foreground">{r.name}</p>
                  <p className="text-[6px] text-muted-foreground">{r.time} · {r.guests}p</p>
                </div>
                <span className={`text-[5px] font-semibold px-1.5 py-0.5 rounded-full ${
                  r.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floor Plan */}
        <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 4 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <p className="text-[8px] font-semibold text-foreground mb-1.5">Floor Plan</p>
          <div className="grid grid-cols-3 gap-1.5">
            {['T1','T2','T3','T4','T5','T6'].map((t, i) => (
              <div
                key={t}
                className={`aspect-square rounded-lg flex items-center justify-center text-[6px] font-bold transition-all duration-300 ${
                  i < 3 ? 'bg-primary/10 text-primary' : i === 3 ? 'bg-amber-50 text-amber-600' : 'bg-gray-100 text-muted-foreground'
                }`}
              >
                {t}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
              <span className="text-[5px] text-muted-foreground">Booked</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              <span className="text-[5px] text-muted-foreground">Free</span>
            </div>
          </div>
        </div>

        {/* Tonight */}
        <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 0 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <p className="text-[8px] font-semibold text-foreground">Tonight</p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-[16px] font-bold text-foreground">24</span>
            <span className="text-[7px] text-muted-foreground">reservations</span>
          </div>
          <div className="w-full h-1 bg-gray-100 rounded-full mt-1.5">
            <div className="h-full w-[72%] bg-primary rounded-full transition-all duration-700" />
          </div>
          <p className="text-[6px] text-muted-foreground mt-1">72% capacity</p>
        </div>
      </div>
    </div>
  );
};
