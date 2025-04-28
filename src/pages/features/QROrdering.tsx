import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const QROrdering = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <ShoppingCart className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">QR Ordering</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              Enable contactless ordering through QR codes, improving service speed and reducing wait times while maintaining a safe dining environment.
            </p>

            <div className="mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                      alt="QR code ordering in action"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                      alt="Mobile ordering interface"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                      alt="Order management dashboard"
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
                <h3 className="text-xl font-semibold mb-4">Instant Access</h3>
                <p className="text-swirl-gray">Customers can instantly view menus and place orders from their phones.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Real-time Orders</h3>
                <p className="text-swirl-gray">Orders go directly to the kitchen for faster processing.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
                <p className="text-swirl-gray">Allow customers to customize their orders with special requests.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Payment Integration</h3>
                <p className="text-swirl-gray">Secure payment processing directly through the customer's device.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QROrdering;
