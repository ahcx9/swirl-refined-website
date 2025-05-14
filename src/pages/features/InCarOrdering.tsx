import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Car, MapPin, Clock, CreditCard, Bell, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
const InCarOrdering = () => {
  const features = [{
    title: "GPS Location Tracking",
    description: "Pinpoint customer location in your parking lot for efficient delivery to their vehicle.",
    icon: MapPin
  }, {
    title: "Digital Car Hop",
    description: "Streamline curbside pickup with digital notifications and status updates.",
    icon: Bell
  }, {
    title: "Real-time Order Status",
    description: "Keep customers informed with automatic updates on their order preparation.",
    icon: Clock
  }, {
    title: "Secure In-Car Payments",
    description: "Process payments directly through customers' devices with full security.",
    icon: CreditCard
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-purple-light/30">
                  <Car className="text-purple h-6 w-6" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">In-Car Ordering System</h1>
              </div>
              
              <p className="text-xl text-swirl-gray mb-8">
                Skip the lines and order effortlessly from your car with swirl.cx's In-Car Ordering solution. Our platform makes it simple for customers to browse menus, place orders, and pay without leaving their vehicles.
              </p>
              
              <div className="flex gap-4">
                <Button asChild className="btn-primary text-base">
                  <Link to="/contact">Schedule a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="text-base">
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-br from-purple-light/10 to-blue-100/10 rounded-xl p-4 overflow-hidden">
                <img alt="In-Car Ordering Service" className="w-full h-auto object-cover rounded-lg mix-blend-multiply transform hover:scale-105 transition-transform duration-500" src="/lovable-uploads/535c3886-674a-48f2-a7e7-99cbc2c15dbc.png" />
              </div>
            </div>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">How In-Car Ordering Works</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Scan & Check In</h3>
                <p className="text-gray-600">Customer parks and scans a unique QR code for that parking space.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Browse & Order</h3>
                <p className="text-gray-600">Customer browses your full menu on their device and submits their order.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
                <p className="text-gray-600">Customer receives real-time updates on their order status while waiting.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Pay & Receive</h3>
                <p className="text-gray-600">Customer pays securely and staff delivers the order directly to their vehicle.</p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="space-y-6">
                  {features.map(feature => <div key={feature.title} className="flex gap-4 items-start">
                      <div className="p-3 rounded-full bg-purple-light/30">
                        <feature.icon className="text-purple h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-swirl-gray">{feature.description}</p>
                      </div>
                    </div>)}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-light/20 to-purple/10 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Benefits for Your Business</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      <h3 className="font-semibold mb-1">Enhanced Experience</h3>
                      <p className="text-sm text-swirl-gray">Offer convenience for customers who prefer to stay in their vehicles.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Optimized Workflow</h3>
                      <p className="text-sm text-swirl-gray">Digital ordering reduces errors and streamlines the delivery process.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Competitive Edge</h3>
                      <p className="text-sm text-swirl-gray">Stand out from competitors by offering modern ordering options.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-10 rounded-xl shadow-md mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Swirl for In-Car Ordering?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-light/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-10 w-10 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile-Optimized</h3>
                <p className="text-gray-600">Designed for perfect performance on any mobile device, with no app download required.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-light/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-10 w-10 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Notifications</h3>
                <p className="text-gray-600">Automated alerts keep customers and staff informed throughout the ordering process.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-light/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-10 w-10 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                <p className="text-gray-600">PCI-compliant payment processing with multiple payment options.</p>
              </div>
            </div>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Ready to revolutionize your curbside service?</h2>
            <p className="text-lg text-swirl-gray mb-8 max-w-3xl mx-auto">
              Join forward-thinking restaurants that are enhancing customer convenience and increasing revenue with our innovative In-Car Ordering solution.
            </p>
            <Button asChild className="btn-primary text-base">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
};
export default InCarOrdering;