
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Car } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarOrdering = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <Car className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">Car Ordering System</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              Streamline your drive-through and curbside pickup operations with our car ordering system. Enable customers to order from their vehicles with ease and efficiency.
              Skip the lines and order effortlessly from your car with <i>swirl.cx</i> Whether you're picking up on the go or enjoying a contactless experience, our platform makes it simple.
            </p>

            <div className="mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Mobile car ordering interface"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" 
                      alt="Drive-through ordering system"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c" 
                      alt="Curbside pickup management"
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
                <h3 className="text-xl font-semibold mb-4">GPS Location Tracking</h3>
                <p className="text-swirl-gray">Track customer arrival and optimize service timing.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Digital Car Hop</h3>
                <p className="text-swirl-gray">Manage curbside deliveries with digital car hop system.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Order Notifications</h3>
                <p className="text-swirl-gray">Real-time notifications for order status and delivery.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Payment Processing</h3>
                <p className="text-swirl-gray">Secure in-car payment processing options.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarOrdering;
