import React from 'react';
import { Database, Cpu, Activity, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Database,
    title: 'Unified Data',
    description: 'Every order, every item, every customer — connected in one real-time database.',
  },
  {
    icon: Cpu,
    title: 'Intelligent Automation',
    description: 'From inventory alerts to smart reordering, the system works so you don\'t have to.',
  },
  {
    icon: Activity,
    title: 'Real-time Control',
    description: 'See everything happening across all locations, all devices, right now.',
  },
];

const WhatSwirlIsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6 animate-on-scroll">
            <span className="text-sm font-medium text-primary">The Swirl Difference</span>
          </div>

          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            One Platform. One Database.
            <br />
            <span className="text-primary">One Source of Truth.</span>
          </h2>

          <p className="animate-on-scroll animate-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Swirl isn't just another tool to add to your stack. It replaces the stack entirely.
          </p>

          {/* Statement Card */}
          <div className="animate-on-scroll animate-delay-300 inline-block bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-2xl px-8 py-6">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              <span className="text-primary">swirl</span> is not a POS.
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              It's a <span className="underline decoration-primary decoration-2 underline-offset-4">restaurant operating system</span>.
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`animate-on-scroll animate-delay-${(index + 4) * 100} group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Flow Diagram */}
        <div className="mt-20 animate-on-scroll">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Source systems */}
              <div className="flex flex-wrap justify-center gap-2">
                {['POS', 'QR', 'KDS', 'Inventory'].map((item) => (
                  <div key={item} className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Central Hub */}
              <div className="px-6 py-4 bg-primary text-white rounded-2xl shadow-lg shadow-primary/25">
                <div className="text-center">
                  <p className="text-sm font-medium opacity-80">Unified</p>
                  <p className="text-lg font-bold">swirl OS</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Outputs */}
              <div className="flex flex-wrap justify-center gap-2">
                {['Analytics', 'CRM', 'Reports', 'AI'].map((item) => (
                  <div key={item} className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Every module feeds the same intelligence layer. No data silos. No duplicate entry. No reconciliation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSwirlIsSection;
