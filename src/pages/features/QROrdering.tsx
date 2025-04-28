
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCart } from 'lucide-react';

const QROrdering = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
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
