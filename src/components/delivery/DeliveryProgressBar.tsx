
import React from 'react';

const DeliveryProgressBar = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-gray-400 text-lg">Expected Launch: Q3 2025</p>
      <div className="mt-4 w-64 mx-auto bg-white/10 rounded-full h-3">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full w-3/4 relative">
          <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
      <p className="text-white/60 text-sm mt-2">75% Complete</p>
    </div>
  );
};

export default DeliveryProgressBar;
