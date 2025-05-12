
import React from 'react';
import { Button } from '@/components/ui/button';

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-white py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-medium inline-block mb-8">ENHANCING GUEST EXPERIENCE</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight">Complete Restaurant Management Solutions</h1>
          <p className="text-lg text-blue-700/80 mb-10 leading-relaxed">
            Discover our suite of integrated tools designed to revolutionize how you run your restaurant business.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white px-8 py-6 text-lg">
            <a href="https://app.swirl.cx/register">Get Started For Free</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
