
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductHero = () => {
  return (
    <section className="bg-purple-light/10 py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-blue-50 text-swirl-blue px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6">ENHANCING GUEST EXPERIENCE</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Restaurant Management Solutions</h1>
          <p className="text-lg text-swirl-gray mb-8">
            Discover our suite of integrated tools designed to revolutionize how you run your restaurant business.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule a Quick-Demo 🍿</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
