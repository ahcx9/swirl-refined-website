
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DigitalMenu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <FileText className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">Digital Menu</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              Create beautiful, interactive digital menus that are easy to update in real-time. Perfect for restaurants looking to modernize their ordering experience.
            </p>

            <div className="mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/f627dfca-6a17-4a0f-b8a8-2f9c88ed4603.png"
                      alt="Experience our QR Menu"
                      className="w-full h-[400px] object-contain rounded-lg bg-white"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Menu management system"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/06ecc874-0362-496d-967b-0a2b44670639.png" 
                      alt="Scan for experiencing dynamic menu"
                      className="w-full h-[400px] object-contain rounded-lg bg-white"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Easy Menu Updates</h3>
                <p className="text-swirl-gray">Update prices, items, and descriptions instantly without reprinting menus.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Rich Media Support</h3>
                <p className="text-swirl-gray">Add high-quality images and detailed descriptions to showcase your dishes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Multiple Languages</h3>
                <p className="text-swirl-gray">Offer your menu in multiple languages to cater to diverse customers.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Dietary Information</h3>
                <p className="text-swirl-gray">Clearly display allergens and dietary information for each dish.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMenu;
