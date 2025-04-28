
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">Contact Us</h1>
              <p className="text-lg text-swirl-gray mb-8 font-inter">
                Get in touch with our team to learn more about how we can help transform your restaurant operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom max-w-4xl">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-soft">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-purple flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 font-inter">Office Address</h3>
                      <p className="text-swirl-gray font-inter">Al Jaber Jewelley Building, Khalidya, Abu Dhabi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-purple flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 font-inter">Email</h3>
                      <a href="mailto:hello@swirl.cx" className="text-swirl-gray hover:text-purple transition-colors font-inter">
                        hello@swirl.cx
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-purple flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 font-inter">Phone</h3>
                      <a href="tel:+971543853877" className="text-swirl-gray hover:text-purple transition-colors font-inter">
                        +971 54 385 3877
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
