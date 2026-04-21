import React from 'react';
import { AlertCircle, Search, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

const flow = [
  { icon: AlertCircle, title: 'Sales drop detected', desc: 'System flags a 14% dip vs last Tuesday.', color: 'text-red-600', bg: 'bg-red-100' },
  { icon: Search, title: 'Check hourly sales', desc: 'Drill into hourly trends in one click.', color: 'text-primary', bg: 'bg-primary/10' },
  { icon: Lightbulb, title: 'Identify slow period', desc: '7–9 PM slowed down — staff understaffed.', color: 'text-orange-600', bg: 'bg-orange-100' },
  { icon: CheckCircle2, title: 'Take action', desc: 'Add a server, push happy hour offer.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
];

const ReportsLiveInsight = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
              <span className="text-base md:text-sm font-bold md:font-semibold text-primary">Live Insight Flow</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From signal to action <span className="text-primary">in minutes.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {flow.map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Step {i + 1}</p>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-gray-300 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsLiveInsight;
