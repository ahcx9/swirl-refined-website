
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CreditCard, Laptop, Printer, Smartphone, 
  TabletSmartphone, QrCode, CheckCircle, Clock, Database
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PointOfSale = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <CreditCard className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">Point of Sale System</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              A modern, intuitive point-of-sale system designed specifically for restaurants. Streamline your operations with fast checkout, easy table management, and seamless payment processing. Our complete solution includes both powerful software and reliable hardware options to fit your specific needs.
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

            <Tabs defaultValue="software" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="software" className="text-lg py-3">POS Software</TabsTrigger>
                <TabsTrigger value="hardware" className="text-lg py-3">POS Hardware</TabsTrigger>
              </TabsList>
              
              <TabsContent value="software" className="space-y-8">
                <div className="bg-purple-light/10 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Laptop className="mr-2" /> Powerful Software Features
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <h3 className="text-xl font-semibold">Intuitive Interface</h3>
                      </div>
                      <p className="text-swirl-gray">User-friendly design that's easy to learn and requires minimal training.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <h3 className="text-xl font-semibold">Table Management</h3>
                      </div>
                      <p className="text-swirl-gray">Drag-and-drop interface for easy table assignments and status monitoring.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <h3 className="text-xl font-semibold">Payment Processing</h3>
                      </div>
                      <p className="text-swirl-gray">Support for all major payment methods including contactless and mobile payments.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <h3 className="text-xl font-semibold">Inventory Tracking</h3>
                      </div>
                      <p className="text-swirl-gray">Real-time inventory management integrated with your menu items.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <h3 className="text-xl font-semibold">Staff Management</h3>
                      </div>
                      <p className="text-swirl-gray">Time tracking, role-based permissions, and performance analytics.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <h3 className="text-xl font-semibold">Cloud Synchronization</h3>
                      </div>
                      <p className="text-swirl-gray">Access your data from anywhere with secure cloud storage and backups.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <h3 className="text-xl font-semibold">Reporting & Analytics</h3>
                      </div>
                      <p className="text-swirl-gray">Comprehensive reporting tools for sales, inventory, and staff performance.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <h3 className="text-xl font-semibold">Menu Management</h3>
                      </div>
                      <p className="text-swirl-gray">Easily create and update menu items, modifiers, and pricing.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hardware" className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <TabletSmartphone className="mr-2" /> Hardware Solutions
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Tablets & Terminals</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>iPad and Android compatible POS terminals</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Durable commercial-grade tablets with stands</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Touch-screen terminals with customer displays</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Receipt Printers</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>High-speed thermal receipt printers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Kitchen ticket printers with loud buzzers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Wireless and Ethernet connection options</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Payment Terminals</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>EMV-compliant card readers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>NFC readers for contactless payments</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>PIN pads with customer-facing displays</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Cash Drawers</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Heavy-duty metal cash drawers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Automatic opening triggered by POS system</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Multiple size options to fit your space</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Kitchen Display Screens</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Water-resistant touchscreen displays</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Order routing to specific kitchen stations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Visual alerts for order timing</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Networking Equipment</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Secure, restaurant-grade routers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Backup 4G/5G connection options</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                          <span>Network configuration and support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-gradient-to-r from-purple-light/30 to-purple/20 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Choose Our POS System?</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-purple h-6 w-6" />
                    <h3 className="text-xl font-semibold">Save Time</h3>
                  </div>
                  <p className="text-swirl-gray">Streamline operations and reduce manual tasks with automation features.</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="text-purple h-6 w-6" />
                    <h3 className="text-xl font-semibold">Reduce Errors</h3>
                  </div>
                  <p className="text-swirl-gray">Minimize order and inventory mistakes with our intelligent validation system.</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <QrCode className="text-purple h-6 w-6" />
                    <h3 className="text-xl font-semibold">Enhance Experience</h3>
                  </div>
                  <p className="text-swirl-gray">Create seamless dining experiences with faster service and accurate orders.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to modernize your restaurant's point of sale?</h3>
              <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto">
                Contact us today for a personalized demonstration and pricing tailored to your restaurant's needs.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Get Your Custom POS Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PointOfSale;
