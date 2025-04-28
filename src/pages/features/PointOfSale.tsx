
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { CreditCard } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PointOfSale = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <CreditCard className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">Point of Sale System</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              A modern, intuitive point-of-sale system designed specifically for restaurants. Streamline your operations with fast checkout, easy table management, and seamless payment processing.
            </p>

            <div className="mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                      alt="Modern POS system interface"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                      alt="Staff using POS system"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                      alt="Payment processing interface"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Table Management</h3>
                <p className="text-swirl-gray">Efficiently manage tables, orders, and guest seating in real-time.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Split Bills</h3>
                <p className="text-swirl-gray">Easily split checks and handle multiple payment methods.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Fast Checkout</h3>
                <p className="text-swirl-gray">Speed up service with quick, secure payment processing.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Employee Access</h3>
                <p className="text-swirl-gray">Manage staff permissions and track employee performance.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PointOfSale;
