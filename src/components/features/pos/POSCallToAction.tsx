
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const POSCallToAction = () => {
  return (
    <div className="bg-white rounded-xl p-8 md:p-10 shadow-soft border border-gray-100 text-center mb-8">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to modernize your restaurant's point of sale?</h3>
      <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto leading-relaxed">
        Contact us today for a personalized demonstration and pricing tailored to your restaurant's unique needs and budget.
      </p>
      <Button asChild className="btn-primary text-lg px-8 py-6 h-auto">
        <Link to="/contact">Get Your Custom POS Quote</Link>
      </Button>
    </div>
  );
};

export default POSCallToAction;
