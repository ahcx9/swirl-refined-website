
import React from 'react';
import { QrCode, Menu, ShoppingCart } from 'lucide-react';

const StepProcess = () => {
  return (
    <section className="py-10 md:py-12 bg-white animate-on-scroll">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-3">How It Works</h2>
          <p className="text-xs md:text-sm text-swirl-gray max-w-2xl mx-auto">
            Simple 3-step process for your guests to enjoy a seamless dining experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-light/30 flex items-center justify-center mb-4">
              <QrCode className="text-purple" size={28} />
            </div>
            <div className="relative mb-4">
              <span className="text-2xl font-bold text-purple">01</span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple to-purple-dark/70 rounded-full"></div>
            </div>
            <h3 className="text-lg font-medium mb-2">Scan</h3>
            <p className="text-sm text-swirl-gray">
              Guests scan the QR code at their table to access the digital menu
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-light/30 flex items-center justify-center mb-4">
              <Menu className="text-purple" size={28} />
            </div>
            <div className="relative mb-4">
              <span className="text-2xl font-bold text-purple">02</span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple to-purple-dark/70 rounded-full"></div>
            </div>
            <h3 className="text-lg font-medium mb-2">View Menu</h3>
            <p className="text-sm text-swirl-gray">
              Browse through the interactive digital menu with photos and descriptions
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-light/30 flex items-center justify-center mb-4">
              <ShoppingCart className="text-purple" size={28} />
            </div>
            <div className="relative mb-4">
              <span className="text-2xl font-bold text-purple">03</span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple to-purple-dark/70 rounded-full"></div>
            </div>
            <h3 className="text-lg font-medium mb-2">Place Order</h3>
            <p className="text-sm text-swirl-gray">
              Select items, customize as needed, and place the order directly from their device
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepProcess;
