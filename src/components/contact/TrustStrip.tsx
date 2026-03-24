import React from 'react';
import { Clock, UserCheck, BarChart3, Rocket } from 'lucide-react';

const trustItems = [
  { icon: Clock, text: 'Fast Response Within 24 Hours' },
  { icon: UserCheck, text: 'Personalized Demo For Your Business' },
  { icon: BarChart3, text: 'Consultation Based On Your Stage' },
  { icon: Rocket, text: 'Support For New & Existing Businesses' },
];

const TrustStrip = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border/30 bg-primary/[0.02]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.text} className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon size={18} className="text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
