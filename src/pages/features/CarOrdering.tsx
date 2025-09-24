
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Car, MapPin, Clock, CreditCard, Bell, 
  Smartphone, ArrowRight, CheckCircle
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InCarOrdering = () => {
  const features = [
    {
      title: "GPS Location Tracking",
      description: "Pinpoint customer location in your parking lot for efficient delivery to their vehicle.",
      icon: MapPin
    },
    {
      title: "Digital Car Hop",
      description: "Streamline curbside pickup with digital notifications and status updates.",
      icon: Bell
    },
    {
      title: "Real-time Order Status",
      description: "Keep customers informed with automatic updates on their order preparation.",
      icon: Clock
    },
    {
      title: "Secure In-Car Payments",
      description: "Process payments directly through customers' devices with full security.",
      icon: CreditCard
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-36 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <Car className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">In-Car Ordering System</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              Skip the lines and order effortlessly from your car with swirl.cx's In-Car Ordering solution. Whether you're picking up on the go or enjoying a contactless experience, our platform makes it simple for customers to browse menus, place orders, and pay without leaving their vehicles.
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

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <feature.icon className="text-purple h-6 w-6" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-swirl-gray">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-light/20 to-purple/10 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-6">How In-Car Ordering Works</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-purple text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer Arrives & Scans</h3>
                    <p className="text-swirl-gray">Customer parks in your designated spots and scans a unique QR code for that parking space, or enters a location code.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-purple text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Browse Menu & Order</h3>
                    <p className="text-swirl-gray">Customer browses your full menu on their device, customizes their order, and submits it directly to your kitchen.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-purple text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
                    <p className="text-swirl-gray">Customer receives real-time updates on their order status, from preparation to ready for delivery.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-purple text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Payment & Delivery</h3>
                    <p className="text-swirl-gray">Customer pays securely through their device, and staff delivers the order directly to their vehicle.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl mb-12 shadow-soft">
              <h2 className="text-2xl font-bold mb-6 text-center">Benefits for Your Restaurant</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Increased Sales Volume</h3>
                    <p className="text-sm text-swirl-gray">Serve more customers without adding tables or expanding your dining room.</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Enhanced Customer Experience</h3>
                    <p className="text-sm text-swirl-gray">Offer convenience for customers who prefer to stay in their vehicles.</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Optimized Staff Workflow</h3>
                    <p className="text-sm text-swirl-gray">Digital ordering reduces errors and streamlines the delivery process.</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Competitive Advantage</h3>
                    <p className="text-sm text-swirl-gray">Stand out from competitors by offering modern ordering options.</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Contactless Service</h3>
                    <p className="text-sm text-swirl-gray">Perfect for health-conscious customers preferring minimal contact.</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Valuable Customer Data</h3>
                    <p className="text-sm text-swirl-gray">Collect insights on ordering patterns and preferences to improve service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to offer In-Car Ordering to your customers?</h3>
              <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto">
                Join forward-thinking restaurants that are enhancing customer convenience with innovative ordering solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-primary">
                  <Link to="/contact">Schedule a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="flex items-center gap-2">
                  <Link to="/products">
                    Explore Other Solutions <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InCarOrdering;
