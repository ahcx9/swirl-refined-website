import React from 'react';
import { Printer, Monitor, CheckCircle } from 'lucide-react';

const PrinterKitchenSection = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">Complete Hardware Ecosystem</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Beyond the POS terminal, we provide a complete suite of integrated hardware solutions 
          for seamless restaurant operations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Thermal Printer Section */}
        <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-soft border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-blue-100">
              <Printer className="text-blue-600 h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">High-Speed Thermal Printers</h3>
              <p className="text-blue-600 font-medium">Professional Grade Performance</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 h-5 w-5 shrink-0" />
              <span className="text-gray-700">Ultra-fast receipt printing (250mm/sec)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 h-5 w-5 shrink-0" />
              <span className="text-gray-700">Auto-cutter with jam detection</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 h-5 w-5 shrink-0" />
              <span className="text-gray-700">Multiple connectivity options (USB, Ethernet, WiFi)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 h-5 w-5 shrink-0" />
              <span className="text-gray-700">Energy efficient with sleep mode</span>
            </div>
          </div>
          
          <p className="text-gray-600">
            Our thermal printers are built for high-volume operations with reliable performance 
            that keeps your kitchen and front-of-house running smoothly.
          </p>
        </div>

        {/* Kitchen Display Section */}
        <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-soft border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-orange-100">
              <Monitor className="text-orange-600 h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Smart Kitchen Display System</h3>
              <p className="text-orange-600 font-medium">Streamlined Order Management</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 h-5 w-5 shrink-0" />
              <span className="text-gray-700">Large, bright displays for clear order visibility</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 h-5 w-5 shrink-0" />
              <span className="text-gray-700">Color-coded order priorities and timing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 h-5 w-5 shrink-0" />
              <span className="text-gray-700">Touch-screen order management controls</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 h-5 w-5 shrink-0" />
              <span className="text-gray-700">Real-time order tracking and analytics</span>
            </div>
          </div>
          
          <p className="text-gray-600">
            Eliminate paper tickets and reduce errors with our intelligent kitchen display 
            system that synchronizes perfectly with your POS operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrinterKitchenSection;