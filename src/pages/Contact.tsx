import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg p-8 shadow-soft">
                <h2 className="text-2xl font-bold mb-8 text-purple-dark">Get In Touch</h2>
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
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-purple flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 font-inter">Working Hours</h3>
                      <p className="text-swirl-gray font-inter">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-swirl-gray font-inter">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Globe className="h-6 w-6 text-purple flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 font-inter">Social Media</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-purple hover:text-purple-dark transition-colors">
                          LinkedIn
                        </a>
                        <a href="#" className="text-purple hover:text-purple-dark transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-purple hover:text-purple-dark transition-colors">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-soft">
                <h2 className="text-2xl font-bold mb-8 text-purple-dark">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-soft">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.763583888741!2d54.51998050970412!3d24.48617767659344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6590f5a9454d%3A0xf10f6652a9f71b36!2sAl%20Jaber%20Jewellery%20Building%20-%20Corniche%20Road%20-%20Al%20Khalidiyah%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                className="w-full h-full" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
