import React from 'react';
import { FileWarning, Layers, EyeOff, Clock4 } from 'lucide-react';

const problems = [
  { icon: Layers, title: 'Too many reports', desc: 'Dozens of spreadsheets, exports and dashboards — none agree.' },
  { icon: FileWarning, title: 'Data spread across systems', desc: 'POS here, accounting there, delivery elsewhere. Nothing connects.' },
  { icon: EyeOff, title: 'No clear picture', desc: 'You spend hours building reports instead of running the business.' },
  { icon: Clock4, title: 'Always one day behind', desc: 'By the time you understand yesterday, today is already over.' },
];

const ReportsRealityToday = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
              <span className="text-base md:text-sm font-bold md:font-semibold text-red-600">Reality Today</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The reporting mess most operators live in.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((p, i) => (
              <div key={i} className="bg-gradient-to-br from-red-50/40 to-white rounded-2xl p-6 border border-red-100/60">
                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsRealityToday;
