import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/features/digital-menu/HeroSection';
import DigitalMenuTabs from '@/components/features/digital-menu/DigitalMenuTabs';
import TestimonialsSection from '@/components/features/digital-menu/TestimonialsSection';
const DigitalMenu = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-b from-white to-blue-50/20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <HeroSection />
            <DigitalMenuTabs />
            <TestimonialsSection />

            <div className="text-center p-10 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100/30 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-zinc-950">Ready to revolutionize your menu experience?</h3>
              <p className="text-lg text-blue-700/80 mb-8 max-w-2xl mx-auto">Join restaurants worldwide already using our digital menu system to enhance customer experience and streamline operations.</p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                <Link to="/contact">Get Started with Digital Menus</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default DigitalMenu;