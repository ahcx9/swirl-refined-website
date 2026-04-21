import React from 'react';
import { ShoppingBag, BarChart3, CreditCard, Users, Boxes, FileBarChart, ArrowRight } from 'lucide-react';

const steps = [
  { icon: ShoppingBag, label: 'Orders' },
  { icon: BarChart3, label: 'Sales' },
  { icon: CreditCard, label: 'Payments' },
  { icon: Users, label: 'Staff' },
  { icon: Boxes, label: 'Inventory' },
  { icon: FileBarChart, label: 'Reports' },
];

const ReportsSystemFlow = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <span className="text-base md:text-sm font-bold md:font-semibold text-primary">Connected by Design</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One system. <span className="text-primary">Every report connected.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
            Every action across your restaurant flows automatically into a single source of truth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="group flex flex-col items-center">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${i === steps.length - 1 ? 'bg-primary' : 'bg-white border border-gray-200'} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <s.icon className={`w-7 h-7 md:w-8 md:h-8 ${i === steps.length - 1 ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <p className={`mt-3 text-sm font-semibold ${i === steps.length - 1 ? 'text-primary' : 'text-gray-700'}`}>{s.label}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsSystemFlow;
