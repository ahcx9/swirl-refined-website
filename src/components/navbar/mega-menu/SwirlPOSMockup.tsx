import React, { useState, useEffect } from 'react';

export const SwirlPOSMockup: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const orderItems = [
    { name: 'Grilled Salmon', qty: 1, price: '$24.00', mod: 'No onions' },
    { name: 'Caesar Salad', qty: 2, price: '$24.00', mod: '' },
    { name: 'Sparkling Water', qty: 3, price: '$15.00', mod: '' },
  ];

  const menuGrid = [
    'Burger', 'Pizza', 'Pasta', 'Salmon',
    'Salad', 'Steak', 'Soup', 'Fries',
    'Coffee', 'Juice', 'Dessert', 'Wine',
  ];

  return (
    <div className="relative w-full h-full flex gap-2.5 py-1">
      {/* POS Terminal - Left */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Item Grid */}
        <div className={`bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex-1 transition-all duration-500 ${
          step === 0 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] font-bold text-foreground">Quick Menu</p>
            <div className="flex gap-1">
              {['All', 'Food', 'Drinks'].map((c, i) => (
                <span key={c} className={`text-[6px] px-1.5 py-0.5 rounded-full ${
                  i === 0 ? 'bg-primary text-white font-semibold' : 'bg-gray-100 text-muted-foreground'
                }`}>{c}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {menuGrid.map((item, i) => (
              <div
                key={item}
                className={`p-1.5 rounded-lg text-center transition-all duration-300 cursor-default ${
                  step === 0 && i === 3 ? 'bg-primary/10 border border-primary/20 scale-105' :
                  step === 0 && i === 4 ? 'bg-primary/10 border border-primary/20 scale-105' :
                  'bg-gray-50 hover:bg-gray-100'
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <p className="text-[7px] font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Bar */}
        <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 2 ? 'ring-1 ring-emerald-200' : ''
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-semibold text-foreground">Payment</p>
              <p className="text-[6px] text-muted-foreground">Table 7 · 3 items</p>
            </div>
            <div className="flex gap-1.5">
              {['Cash', 'Card', 'Split'].map((m, i) => (
                <span key={m} className={`text-[6px] px-2 py-1 rounded-lg font-semibold transition-all duration-300 ${
                  step === 2 && i === 1 ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-muted-foreground'
                }`}>{m}</span>
              ))}
            </div>
          </div>
          {step === 2 && (
            <div className="mt-1.5 flex items-center gap-1.5 animate-fade-in">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-[8px]">✓</span>
              </div>
              <span className="text-[7px] font-semibold text-emerald-600">Payment approved · $63.00</span>
            </div>
          )}
        </div>
      </div>

      {/* Order Ticket - Right */}
      <div className="w-[140px] flex-shrink-0 flex flex-col gap-2">
        <div className={`bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex-1 transition-all duration-500 ${
          step === 1 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] font-bold text-foreground">Order #147</p>
            <span className={`text-[6px] font-semibold px-1.5 py-0.5 rounded-full transition-all duration-300 ${
              step >= 2 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
            }`}>
              {step >= 2 ? 'Paid' : 'Open'}
            </span>
          </div>

          <div className="space-y-2">
            {orderItems.map((item, i) => (
              <div
                key={item.name}
                className={`p-1.5 rounded-lg transition-all duration-500 ${
                  step === 1 && i === 0 ? 'bg-primary/5 border border-primary/10' : 'bg-gray-50/60'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[7px] font-semibold text-foreground">{item.name}</p>
                  <p className="text-[7px] font-bold text-foreground">{item.price}</p>
                </div>
                <div className="flex items-center justify-between mt-0.5">
                  <p className="text-[6px] text-muted-foreground">Qty: {item.qty}</p>
                  {item.mod && <p className="text-[5px] text-amber-600 font-medium">{item.mod}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-gray-100">
            <div className="flex justify-between mb-1">
              <span className="text-[7px] text-muted-foreground">Subtotal</span>
              <span className="text-[7px] text-foreground">$63.00</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-[7px] text-muted-foreground">Tax</span>
              <span className="text-[7px] text-foreground">$3.15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[8px] font-bold text-foreground">Total</span>
              <span className="text-[8px] font-bold text-primary">$66.15</span>
            </div>
          </div>
        </div>

        {/* KDS Status */}
        <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 3 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <p className="text-[8px] font-semibold text-foreground mb-1.5">Kitchen Display</p>
          {['Grilled Salmon — Cooking', 'Caesar Salad — Ready'].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 mb-1">
              <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-amber-400' : 'bg-emerald-400'}`} />
              <span className="text-[7px] text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
