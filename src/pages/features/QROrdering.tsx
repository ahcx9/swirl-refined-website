
import React, { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import { ShoppingCart, CheckCircle, CreditCard, TrendingUp, Clock, Smartphone, UserPlus, MenuSquare, Phone, Utensils } from 'lucide-react';
import { preloadImages } from '@/utils/imagePreloader';

const QROrdering = () => {
  // Preload images when the component mounts
  useEffect(() => {
    // Preload QR ordering specific images
    preloadImages([
      "/lovable-uploads/b782c244-bfdc-479d-929c-fbb28e8a4040.png",
      "/lovable-uploads/cb050b33-51a3-4f11-bd02-f9fe6ffdde44.png"
    ], 2);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-purple-light/10 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-purple-light/30">
                  <ShoppingCart className="text-purple h-8 w-8" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">QR Ordering System</h1>
              <p className="text-lg text-swirl-gray mb-8">
                Transform your dining experience with our seamless QR code ordering solution. 
                Reduce wait times, minimize errors, and increase table turnover while providing a 
                contactless ordering experience that today's diners prefer.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <a href="https://app.swirl.cx/register">get started for free</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Streamline Your Restaurant's Ordering Process</h2>
                <p className="text-swirl-gray mb-8">
                  Our QR ordering system allows customers to scan, browse, customize, and pay for their orders directly 
                  from their smartphones. This contactless solution minimizes wait times and reduces staff workload while 
                  providing a modern dining experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Instant Access</h3>
                      <p className="text-swirl-gray">Customers can access your full menu immediately without waiting for staff</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Real-time Orders</h3>
                      <p className="text-swirl-gray">Orders go directly to your kitchen display system for faster preparation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Integrated Payments</h3>
                      <p className="text-swirl-gray">Secure payment processing with multiple options including credit cards and digital wallets</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/b782c244-bfdc-479d-929c-fbb28e8a4040.png" 
                  alt="QR code scanning experience" 
                  className="w-full h-auto object-cover" 
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
                <CreditCard className="text-purple h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Increased Revenue</h3>
                <p className="text-swirl-gray">
                  Boost average order value by 15-20% through automated upselling, cross-selling, 
                  and seamless menu browsing that encourages exploration and add-ons.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
                <Clock className="text-purple h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Reduced Wait Times</h3>
                <p className="text-swirl-gray">
                  Decrease customer wait times by up to 30% with instant ordering capabilities, 
                  improving dining experience and increasing table turnover.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
                <TrendingUp className="text-purple h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Valuable Insights</h3>
                <p className="text-swirl-gray">
                  Collect detailed data on ordering patterns, popular items, peak times, and customer 
                  preferences to optimize your menu and operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/lovable-uploads/cb050b33-51a3-4f11-bd02-f9fe6ffdde44.png" 
                  alt="Order at your ease on smartphone" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                  loading="eager"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Order at Your Ease</h2>
                <p className="text-swirl-gray mb-6">
                  Our QR ordering system provides customers with a seamless and intuitive ordering experience. 
                  View detailed item descriptions, dietary information, preparation time, and customize orders 
                  directly from their smartphones.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-light/30 p-2 rounded-full">
                      <Smartphone className="text-purple h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Mobile Optimized</h3>
                      <p className="text-swirl-gray">Responsive design works perfectly on any device with no app download required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-light/30 p-2 rounded-full">
                      <MenuSquare className="text-purple h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Dietary Information</h3>
                      <p className="text-swirl-gray">Display calories, allergens, and preparation time for informed choices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-light/30 p-2 rounded-full">
                      <Utensils className="text-purple h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Customization Options</h3>
                      <p className="text-swirl-gray">Allow customers to modify dishes according to their preferences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center">Enhanced Restaurant Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Phone className="text-purple h-5 w-5" />
                  <span>For Your Customers</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Browse menu items with high-quality images and detailed descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>View nutritional information and allergen details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Customize orders with special requests and modifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Pay securely through integrated payment processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Track order status in real-time</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Utensils className="text-purple h-5 w-5" />
                  <span>For Your Restaurant</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Reduce labor costs with streamlined ordering process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Minimize order errors with customer-driven input</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Increase table turnover rates by up to 20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Gather valuable customer data and preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Update menu items and prices in real-time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TrustedRestaurants />

        <section className="py-20 bg-purple-light/10 rounded-lg my-12 mx-4">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to revolutionize your ordering process?</h2>
              <p className="text-lg mb-8">
                Join thousands of restaurants already using our QR ordering system to enhance customer 
                experience while increasing efficiency and revenue.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <a href="https://app.swirl.cx/register">get started for free</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QROrdering;
