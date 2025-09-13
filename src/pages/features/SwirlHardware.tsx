import React from 'react';
import Footer from '@/components/Footer';
import SwirlHardwareHero from '@/components/features/swirl-hardware/SwirlHardwareHero';
import HardwareShowcase from '@/components/features/swirl-hardware/HardwareShowcase';
import HardwareFeatures from '@/components/features/swirl-hardware/HardwareFeatures';
import PrinterKitchenSection from '@/components/features/swirl-hardware/PrinterKitchenSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SwirlHardware = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-28 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-b from-transparent via-blue-50/20 to-indigo-50/30 rounded-3xl mb-8">
              <SwirlHardwareHero />
            </div>
            <div className="bg-gradient-to-b from-indigo-50/30 via-slate-50/20 to-blue-50/40 rounded-3xl mb-8 p-8">
              <HardwareShowcase />
            </div>
            <div className="bg-gradient-to-b from-blue-50/40 via-indigo-50/20 to-slate-50/30 rounded-3xl mb-8 p-8">
              <HardwareFeatures />
            </div>
            <div className="bg-gradient-to-b from-slate-50/30 via-blue-50/30 to-indigo-50/20 rounded-3xl mb-8 p-8">
              <PrinterKitchenSection />
            </div>
            
            {/* Call to Action Section */}
            <div className="text-center p-10 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100/30 shadow-md mt-16">
              <h3 className="text-2xl font-bold mb-4 text-zinc-950">Ready to upgrade to the most modern Point-of-sale hardware?</h3>
              <p className="text-lg text-blue-700/80 mb-8 max-w-2xl mx-auto">Experience the fastest, sleekest Point-of-sale system designed for modern restaurants.</p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                <a href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">Get Started for Free</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SwirlHardware;