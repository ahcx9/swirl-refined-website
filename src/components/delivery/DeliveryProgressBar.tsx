
import React from 'react';

const DeliveryProgressBar = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-blue-300 text-lg">Now Available</p>
      <div className="mt-4 w-64 mx-auto bg-white/10 rounded-full h-3">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full w-full relative">
          <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
      <p className="text-white/60 text-sm mt-2">100% Complete</p>
    </div>
  );
};

export default DeliveryProgressBar;
