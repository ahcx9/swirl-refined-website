
import React from 'react';
import SwirlCTA from '@/components/SwirlCTA';

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-white py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-medium inline-block mb-8 font-inter">ENHANCING GUEST EXPERIENCE</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight font-inter">Complete Restaurant Management Solutions</h1>
          <p className="text-lg text-blue-700/80 mb-10 leading-relaxed font-inter">
            Discover our suite of integrated tools designed to revolutionize how you run your restaurant business.
          </p>
          
          <div className="flex justify-center">
            <SwirlCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
