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
                src="/lovable-uploads/cf8ec88c-d51e-4941-b048-05cdb833c48b.jpg" 
                alt="Modern POS System with Tablet and Thermal Printer in Restaurant Setting" 
                className="w-full h-auto object-cover rounded-lg shadow-inner" 
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete POS Station</h3>
            <p className="text-gray-600">Integrated tablet system with thermal printer for seamless operations</p>
          </div>
        </div>

        {/* Second Hardware Image */}
        <div className="group">
          <div className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl">
              <LazyImage 
                src="/lovable-uploads/ef1ae84d-c680-4f8e-b799-d041b9649bb8.png" 
                alt="Sleek POS Terminal on Modern Curved Counter" 
                className="w-full h-auto object-cover rounded-lg shadow-inner" 
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Terminal Design</h3>
            <p className="text-gray-600">Ultra-sleek terminal with modern aesthetics for any restaurant environment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareShowcase;