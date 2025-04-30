
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">Contact Us</h1>
              <p className="text-lg text-swirl-gray mb-8 font-inter">
                Get in touch with our team to learn more about how we can help transform your restaurant operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-lg p-12 shadow-soft">
              <h2 className="text-3xl font-bold mb-12 text-purple-dark text-center">Get In Touch</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <MapPin className="h-8 w-8 text-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-inter">Office Address</h3>
                    <p className="text-swirl-gray text-lg font-inter">Al Jaber Jewelley Building, Khalidya, Abu Dhabi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <Mail className="h-8 w-8 text-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-inter">Email</h3>
                    <a href="mailto:hello@swirl.cx" className="text-swirl-gray hover:text-purple transition-colors text-lg font-inter">
                      hello@swirl.cx
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <Phone className="h-8 w-8 text-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-inter">Phone</h3>
                    <a href="tel:+971543853877" className="text-swirl-gray hover:text-purple transition-colors text-lg font-inter">
                      +971 54 385 3877
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <Clock className="h-8 w-8 text-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-inter">Working Hours</h3>
                    <p className="text-swirl-gray text-lg font-inter">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-swirl-gray text-lg font-inter">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <Globe className="h-8 w-8 text-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-inter">Social Media</h3>
                    <div className="flex space-x-6">
                      <a href="https://www.linkedin.com/company/swirl-cx" className="text-purple hover:text-purple-dark transition-colors text-lg">
                        LinkedIn
                      </a>
                      <a href="#" className="text-purple hover:text-purple-dark transition-colors text-lg">
                        Twitter
                      </a>
                      <a href="#" className="text-purple hover:text-purple-dark transition-colors text-lg">
                        Instagram
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
