
import React from 'react';
import { Smartphone, BarChart, Globe } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-light/20 to-purple/10 p-8 rounded-xl mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Why Restaurants Love Our Digital Menu</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="text-purple h-6 w-6" />
            <h3 className="text-xl font-semibold">Mobile Optimized</h3>
          </div>
          <p className="text-swirl-gray">Beautiful display on any device with responsive design that adjusts automatically.</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="text-purple h-6 w-6" />
            <h3 className="text-xl font-semibold">Data Insights</h3>
          </div>
          <p className="text-swirl-gray">Learn which menu items customers view most and optimize your offerings based on data.</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-purple h-6 w-6" />
            <h3 className="text-xl font-semibold">Global Reach</h3>
          </div>
          <p className="text-swirl-gray">Serve international customers with automatic language detection and currency conversion.</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
