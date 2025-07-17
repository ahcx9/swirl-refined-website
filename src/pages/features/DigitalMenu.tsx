import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/features/digital-menu/HeroSection';
import FeaturesGrid from '@/components/features/digital-menu/FeaturesGrid';
import TestimonialsSection from '@/components/features/digital-menu/TestimonialsSection';
const DigitalMenu = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <HeroSection />
          </div>
        </div>
        <FeaturesGrid />
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <TestimonialsSection />

            <div className="text-center p-10 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to revolutionize your menu experience?</h3>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">Join restaurants worldwide already using our digital menu system to enhance customer experience and streamline operations.</p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                <Link to="/contact">Get Started for Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default DigitalMenu;