import React from 'react';
import { TrendingUp, GitCompare, Activity, Sparkles } from 'lucide-react';

const layers = [
  { icon: TrendingUp, title: 'Trends', desc: 'Spot what is rising or falling across your business.' },
  { icon: GitCompare, title: 'Comparisons', desc: 'Day vs day, branch vs branch, brand vs brand.' },
  { icon: Activity, title: 'Performance Tracking', desc: 'Continuous monitoring of every metric that matters.' },
];

const ReportsIntelligence = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-base md:text-sm font-bold md:font-semibold text-primary">Intelligence Layer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Not just reports. <span className="text-primary">Real insights.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
            Reports tell you what happened. Intelligence tells you what to do next.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {layers.map((l, i) => (
              <div key={i} className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 mx-auto shadow-lg shadow-primary/30">
                  <l.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{l.title}</h3>
                <p className="text-gray-600">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsIntelligence;
