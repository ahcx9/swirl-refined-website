import React from 'react';
import { Monitor, Zap } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';

const SwirlHardwareHero = () => {
  return (
    <div className="mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20 rounded-3xl -z-10"></div>
      
      <div className="text-center mb-10 pt-8">
        <div className="inline-flex items-center gap-4 mb-6 bg-blue-50/80 px-6 py-3 rounded-full">
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200">
            <Monitor className="text-blue-600 h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-black">Swirl Hardware</h1>
        </div>
        
        <p className="text-lg mb-4 leading-relaxed max-w-3xl mx-auto text-slate-950">
          Experience the most modern, sleek-designed Point of Sale systems with lightning-fast performance. 
          Built for the future of restaurant operations.
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <Zap className="text-yellow-500 h-5 w-5" />
          <span className="text-blue-600 font-semibold">Fastest Speed Guaranteed</span>
        </div>

        <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-85">
          Experience Swirl Hardware
        </CustomCTAButton>
      </div>
    </div>
  );
};

export default SwirlHardwareHero;