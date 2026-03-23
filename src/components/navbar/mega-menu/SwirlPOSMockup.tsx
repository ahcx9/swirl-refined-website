import React, { useState, useEffect } from 'react';
import { Monitor, Receipt, ChefHat, CreditCard, Check, Package } from 'lucide-react';

const orderItems = [
  { name: 'Truffle Burger', qty: 2, price: 116 },
  { name: 'Caesar Salad', qty: 1, price: 42 },
  { name: 'Sparkling Water', qty: 3, price: 36 },
];

const posSteps = ['order', 'kitchen', 'payment', 'done'] as const;

export const SwirlPOSMockup: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s + 1) % posSteps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const current = posSteps[step];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* POS Terminal Frame */}
      <div className="relative w-[280px] h-[360px] bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] border border-gray-200/60 overflow-hidden">
        {/* Top bar */}
        <div className="h-8 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-between px-3">
          <div className="flex items-center gap-1.5">
            <Monitor size={10} className="text-blue-400" />
            <span className="text-[8px] text-white/90 font-semibold">Swirl POS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[7px] text-white/60">Table 7</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
        </div>

        <div className="relative h-[calc(100%-32px)] overflow-hidden">
          {/* Order Entry */}
          <div className={`absolute inset-0 p-3 transition-all duration-500 ${current === 'order' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
            {/* Item grid */}
            <div className="grid grid-cols-4 gap-1.5 mb-3">
              {['🍔', '🍕', '🥗', '🍝', '🐟', '🍗', '🥤', '🍰'].map((item, i) => (
                <div key={i} className={`aspect-square rounded-lg flex items-center justify-center text-sm transition-all ${i === 0 ? 'bg-primary/10 ring-1 ring-primary/30 scale-105' : 'bg-gray-50 hover:bg-gray-100'}`}>
                  {item}
                </div>
              ))}
            </div>
            {/* Order summary */}
            <div className="bg-gray-50 rounded-xl p-2.5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-bold">Current Order</span>
                <span className="text-[8px] text-primary font-semibold">3 items</span>
              </div>
              {orderItems.map((item, i) => (
                <div key={i} className="flex justify-between text-[8px] py-0.5">
                  <span className="text-gray-700">{item.qty}x {item.name}</span>
                  <span className="font-medium">{item.price}</span>
                </div>
              ))}
              <div className="border-t border-dashed border-gray-200 mt-2 pt-1.5 flex justify-between text-[10px] font-bold">
                <span>Total</span>
                <span>AED 194</span>
              </div>
            </div>
          </div>

          {/* Kitchen Display */}
          <div className={`absolute inset-0 p-3 transition-all duration-500 ${current === 'kitchen' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
            <div className="flex items-center gap-1.5 mb-2.5">
              <ChefHat size={12} className="text-primary" />
              <span className="text-[9px] font-bold">Kitchen Display</span>
            </div>
            <div className="space-y-2">
              {[
                { id: '#2847', time: '2m', items: ['Truffle Burger x2', 'Caesar Salad'], status: 'prep', color: 'amber' },
                { id: '#2846', time: '5m', items: ['Grilled Salmon', 'Pasta'], status: 'ready', color: 'green' },
                { id: '#2845', time: '8m', items: ['Pizza Margherita'], status: 'done', color: 'blue' },
              ].map((ticket, i) => (
                <div key={i} className={`p-2.5 rounded-xl border transition-all ${ticket.color === 'amber' ? 'border-amber-200 bg-amber-50/50' : ticket.color === 'green' ? 'border-green-200 bg-green-50/50' : 'border-blue-200 bg-blue-50/50'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[8px] font-bold">{ticket.id}</span>
                    <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-semibold ${ticket.color === 'amber' ? 'bg-amber-100 text-amber-700' : ticket.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {ticket.status}
                    </span>
                  </div>
                  {ticket.items.map((it, j) => (
                    <p key={j} className="text-[7.5px] text-gray-600">{it}</p>
                  ))}
                  <p className="text-[7px] text-gray-400 mt-1">{ticket.time} ago</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className={`absolute inset-0 p-3 transition-all duration-500 ${current === 'payment' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
            <p className="text-[10px] font-bold mb-3 text-center">Payment</p>
            <div className="text-center mb-4">
              <p className="text-[24px] font-bold text-foreground">AED 194</p>
              <p className="text-[8px] text-muted-foreground">Table 7 · 3 items</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { label: 'Card', icon: CreditCard },
                { label: 'Cash', icon: Receipt },
                { label: 'Split', icon: Package },
                { label: 'Tab', icon: Monitor },
              ].map(({ label, icon: Icon }, i) => (
                <div key={i} className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all cursor-pointer ${i === 0 ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/30'}`}>
                  <Icon size={16} className={i === 0 ? 'text-primary' : 'text-gray-500'} />
                  <span className="text-[8px] font-semibold">{label}</span>
                </div>
              ))}
            </div>
            <div className="bg-primary text-white text-center py-2.5 rounded-xl text-[10px] font-semibold shadow-lg shadow-primary/20">
              Process Payment
            </div>
          </div>

          {/* Done */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 ${current === 'done' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <Check size={24} className="text-green-600" />
            </div>
            <p className="text-[12px] font-bold">Payment Complete</p>
            <p className="text-[8px] text-muted-foreground mt-1">Receipt sent to printer</p>
            <div className="mt-4 bg-gray-50 rounded-xl p-3 w-full max-w-[180px]">
              <div className="text-center border-b border-dashed border-gray-200 pb-2 mb-2">
                <p className="text-[7px] text-gray-500">RECEIPT</p>
                <p className="text-[8px] font-bold">#2847</p>
              </div>
              <div className="flex justify-between text-[7px]">
                <span>Total</span><span className="font-bold">AED 194</span>
              </div>
              <div className="flex justify-between text-[7px]">
                <span>Paid</span><span className="font-bold text-green-600">Card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
