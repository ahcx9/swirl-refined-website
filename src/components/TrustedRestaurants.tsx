
import React from 'react';

const TrustedRestaurants = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container-custom">
        <h3 className="text-xl font-medium text-center mb-8 text-swirl-gray">Trusted by Restaurants Worldwide</h3>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <img 
              src="/lovable-uploads/06ecc874-0362-496d-967b-0a2b44670639.png" 
              alt="Restaurant Logo 1"
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <img 
              src="/lovable-uploads/06ecc874-0362-496d-967b-0a2b44670639.png" 
              alt="Restaurant Logo 2"
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <img 
              src="/lovable-uploads/06ecc874-0362-496d-967b-0a2b44670639.png" 
              alt="Restaurant Logo 3"
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <img 
              src="/lovable-uploads/06ecc874-0362-496d-967b-0a2b44670639.png" 
              alt="Restaurant Logo 4"
              className="h-16 md:h-20 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedRestaurants;
