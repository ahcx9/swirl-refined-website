import React from 'react';
import LazyImage from '@/components/LazyImage';

const HardwareShowcase = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">Modern Hardware Design</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sleek, powerful, and built for performance - our hardware solutions combine cutting-edge technology 
          with stunning aesthetics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* First Hardware Image */}
        <div className="group">
          <div className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl">
              <LazyImage 
                src="/lovable-uploads/58a9bd9a-d0f4-4ac5-9594-7fd1113c75b1.png" 
                alt="Modern POS Terminal with Menu Management System in Restaurant Setting" 
                className="w-full h-80 object-contain rounded-lg shadow-inner" 
                loading="eager"
                priority="high"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Terminal Design</h3>
            <p className="text-gray-600">Ultra-sleek POS terminal with premium aesthetics for modern restaurants</p>
          </div>
        </div>

        {/* Second Hardware Image */}
        <div className="group">
          <div className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl">
              <LazyImage 
                src="/lovable-uploads/2aa1ea9e-9fa0-4b55-9f77-5936d997a227.png" 
                alt="Sleek POS Terminal Setup on Modern Counter with Elegant Design" 
                className="w-full h-80 object-contain rounded-lg shadow-inner" 
                loading="eager"
                priority="high"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete POS Solution</h3>
            <p className="text-gray-600">Full restaurant management system with integrated hardware and software</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareShowcase;