import React, { useState, useEffect } from 'react';
import { QrCode, ShoppingCart, CreditCard, Gift, Check, Star, Clock, ChevronRight } from 'lucide-react';

const steps = [
  { label: 'Scan QR', icon: QrCode },
  { label: 'Browse Menu', icon: ShoppingCart },
  { label: 'Add to Cart', icon: ShoppingCart },
  { label: 'Checkout', icon: CreditCard },
  { label: 'Confirmed', icon: Check },
  { label: 'Rewards', icon: Gift },
];

const menuItems = [
  { name: 'Truffle Burger', price: '58', cat: 'Burgers', img: '🍔' },
  { name: 'Caesar Salad', price: '42', cat: 'Salads', img: '🥗' },
  { name: 'Grilled Salmon', price: '78', cat: 'Mains', img: '🐟' },
  { name: 'Tiramisu', price: '36', cat: 'Desserts', img: '🍰' },
];

export const SwirlDineMockup: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s + 1) % steps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Phone frame */}
      <div className="relative w-[200px] h-[380px] bg-white rounded-[28px] shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] border border-gray-200/60 overflow-hidden">
        {/* Status bar */}
        <div className="h-6 bg-gradient-to-r from-primary to-blue-500 flex items-center justify-between px-4">
          <span className="text-[8px] text-white/90 font-medium">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 bg-white/80 rounded-sm" />
          </div>
        </div>

        {/* Content based on step */}
        <div className="relative h-[calc(100%-24px)] overflow-hidden">
          {/* Step 0: QR Scan */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${step === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <div className={`w-24 h-24 border-2 border-primary/40 rounded-2xl flex items-center justify-center mb-3 ${step === 0 ? 'animate-pulse' : ''}`}>
              <QrCode size={40} className="text-primary" />
            </div>
            <p className="text-[10px] text-muted-foreground font-medium">Scan to order</p>
            <div className="mt-3 flex gap-1">
              {[0,1,2].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
              ))}
            </div>
          </div>

          {/* Step 1: Browse Menu */}
          <div className={`absolute inset-0 p-3 transition-all duration-500 ${step === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <div className="flex gap-1.5 mb-3 overflow-hidden">
              {['All', 'Burgers', 'Salads', 'Mains'].map((cat, i) => (
                <div key={cat} className={`px-2.5 py-1 rounded-full text-[8px] font-semibold whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {cat}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {menuItems.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2 p-2 rounded-xl bg-gray-50/80 transition-all" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="text-lg">{item.img}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-semibold text-foreground truncate">{item.name}</p>
                    <p className="text-[8px] text-muted-foreground">AED {item.price}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <ChevronRight size={10} className="text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Add to cart */}
          <div className={`absolute inset-0 p-3 transition-all duration-500 ${step === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <div className="text-center mb-3">
              <span className="text-3xl">🍔</span>
              <p className="text-[11px] font-bold mt-1">Truffle Burger</p>
              <p className="text-[9px] text-muted-foreground">AED 58</p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">-</div>
              <span className="text-[12px] font-bold">1</span>
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">+</div>
            </div>
            <div className="space-y-1.5 mb-3">
              {['Extra Cheese', 'No Onion', 'Add Bacon'].map((mod, i) => (
                <div key={mod} className="flex items-center gap-2 text-[8px]">
                  <div className={`w-3.5 h-3.5 rounded border ${i === 0 ? 'bg-primary border-primary' : 'border-gray-300'} flex items-center justify-center`}>
                    {i === 0 && <Check size={8} className="text-white" />}
                  </div>
                  <span className="text-foreground">{mod}</span>
                </div>
              ))}
            </div>
            <div className="bg-primary text-white text-center py-2 rounded-xl text-[9px] font-semibold shadow-sm">
              Add to Cart — AED 62
            </div>
          </div>

          {/* Step 3: Checkout */}
          <div className={`absolute inset-0 p-3 transition-all duration-500 ${step === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <p className="text-[10px] font-bold mb-2">Your Order</p>
            <div className="space-y-1.5 mb-3">
              <div className="flex justify-between text-[8px]">
                <span>Truffle Burger x1</span><span className="font-semibold">62</span>
              </div>
              <div className="flex justify-between text-[8px]">
                <span>Caesar Salad x1</span><span className="font-semibold">42</span>
              </div>
              <div className="border-t border-dashed border-gray-200 pt-1.5 flex justify-between text-[9px] font-bold">
                <span>Total</span><span>AED 104</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 text-[8px]">
                <CreditCard size={12} className="text-primary" />
                <span>Visa •••• 4242</span>
              </div>
              <div className="bg-primary text-white text-center py-2.5 rounded-xl text-[9px] font-semibold shadow-lg shadow-primary/20">
                Pay AED 104
              </div>
            </div>
          </div>

          {/* Step 4: Confirmed */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 ${step === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <Check size={24} className="text-green-600" />
            </div>
            <p className="text-[11px] font-bold text-foreground">Order Confirmed!</p>
            <p className="text-[8px] text-muted-foreground mt-1">Order #2847</p>
            <div className="mt-3 flex items-center gap-1.5 text-[8px] text-muted-foreground">
              <Clock size={10} />
              <span>Ready in ~12 min</span>
            </div>
          </div>

          {/* Step 5: Rewards */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 ${step === 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-3">
              <Star size={24} className="text-amber-500" />
            </div>
            <p className="text-[11px] font-bold text-foreground">+52 Points Earned!</p>
            <p className="text-[8px] text-muted-foreground mt-1">You're 48 points from Gold tier</p>
            <div className="mt-3 w-full max-w-[140px] h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[72%] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000" />
            </div>
            <p className="text-[7px] text-amber-600 font-medium mt-1.5">352 / 500 points</p>
          </div>
        </div>
      </div>

      {/* Step indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {steps.map((s, i) => (
          <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === step ? 'w-5 bg-primary' : 'w-1.5 bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};
