
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const POSCallToAction = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to modernize your restaurant's point of sale?</h3>
      <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto">
        Contact us today for a personalized demonstration and pricing tailored to your restaurant's needs.
      </p>
      <Button asChild className="btn-primary">
        <Link to="/contact">Get Your Custom POS Quote</Link>
      </Button>
    </div>
  );
};

export default POSCallToAction;
