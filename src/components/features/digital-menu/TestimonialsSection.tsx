
import React from 'react';
import { Smartphone, BarChart, Globe } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl mb-12 border border-slate-700/50">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Why Restaurants Love Our Digital Menu</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-700/50 backdrop-blur rounded-xl p-6 border border-slate-600/50">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="text-blue-400 h-6 w-6" />
            <h3 className="text-xl font-semibold text-white">Mobile Optimized</h3>
          </div>
          <p className="text-slate-300">Beautiful display on any device with responsive design that adjusts automatically.</p>
        </div>
        
        <div className="bg-slate-700/50 backdrop-blur rounded-xl p-6 border border-slate-600/50">
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="text-blue-400 h-6 w-6" />
            <h3 className="text-xl font-semibold text-white">Data Insights</h3>
          </div>
          <p className="text-slate-300">Learn which menu items customers view most and optimize your offerings based on data.</p>
        </div>
        
        <div className="bg-slate-700/50 backdrop-blur rounded-xl p-6 border border-slate-600/50">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-blue-400 h-6 w-6" />
            <h3 className="text-xl font-semibold text-white">Global Reach</h3>
          </div>
          <p className="text-slate-300">Serve international customers with automatic language detection and currency conversion.</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
