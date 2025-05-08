
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from '@/components/features/digital-menu/HeroSection';
import FeaturesSection from '@/components/features/digital-menu/FeaturesSection';
import BenefitsSection from '@/components/features/digital-menu/BenefitsSection';
import TestimonialsSection from '@/components/features/digital-menu/TestimonialsSection';

const DigitalMenu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-b from-white to-blue-50/20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <HeroSection />

            <div className="mb-16">
              <Tabs defaultValue="features" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-2 w-full max-w-md p-1 bg-blue-50 rounded-xl">
                    <TabsTrigger 
                      value="features" 
                      className="text-lg py-3 font-medium rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=inactive]:text-blue-700 transition-all duration-300"
                    >
                      Key Features
                    </TabsTrigger>
                    <TabsTrigger 
                      value="benefits" 
                      className="text-lg py-3 font-medium rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=inactive]:text-blue-700 transition-all duration-300"
                    >
                      Benefits
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="features" className="mt-6">
                  <FeaturesSection />
                </TabsContent>
                
                <TabsContent value="benefits" className="mt-6">
                  <BenefitsSection />
                </TabsContent>
              </Tabs>
            </div>

            <TestimonialsSection />

            <div className="text-center p-10 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100/30 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Ready to revolutionize your menu experience?</h3>
              <p className="text-lg text-blue-700/80 mb-8 max-w-2xl mx-auto">
                Join thousands of restaurants already using our digital menu system to enhance customer experience and streamline operations.
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                <Link to="/contact">Get Started with Digital Menus</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMenu;
