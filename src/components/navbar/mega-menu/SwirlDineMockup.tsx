import React, { useState, useEffect } from 'react';
import dineImage from '@/assets/mega-menu-dine.jpg';

export const SwirlDineMockup: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex gap-3 items-center">
      {/* Main dine image */}
      <div className="flex-1 h-full flex items-center justify-center">
        <img
          src={dineImage}
          alt="swirl Dine - Digital menu and QR ordering experience"
          className="w-full h-full object-contain rounded-2xl"
          loading="eager"
        />
      </div>

      {/* Reservations mini mockup */}
      <div className="w-[140px] flex-shrink-0 flex flex-col gap-2">
        {/* Reservation card */}
        <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 0 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <p className="text-[8px] font-semibold text-foreground mb-1.5">Reservations</p>
          <div className="space-y-1.5">
            {[
              { name: 'Sarah M.', time: '7:00 PM', guests: 4, status: 'Confirmed' },
              { name: 'James K.', time: '7:30 PM', guests: 2, status: 'Pending' },
              { name: 'Mia L.', time: '8:00 PM', guests: 6, status: 'Confirmed' },
            ].map((r, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-1.5 rounded-lg bg-gray-50/80 transition-all duration-500 ${
                  step === 0 && i === 0 ? 'bg-primary/5 border border-primary/10' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div>
                  <p className="text-[7px] font-semibold text-foreground">{r.name}</p>
                  <p className="text-[6px] text-muted-foreground">{r.time} · {r.guests} guests</p>
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

        {/* Table layout mini */}
        <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 1 ? 'ring-1 ring-primary/20' : ''
        }`}>
          <p className="text-[8px] font-semibold text-foreground mb-1.5">Floor Plan</p>
          <div className="grid grid-cols-3 gap-1.5">
            {['T1', 'T2', 'T3', 'T4', 'T5', 'T6'].map((t, i) => (
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

        {/* Tonight summary */}
        <div className={`bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm transition-all duration-500 ${
          step === 2 ? 'ring-1 ring-primary/20' : ''
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
