import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Globe, Send, Star, CheckCircle, Users, MessageSquare } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WhatsApp } from '@/components/SocialIcons';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const businessTypes = ['Restaurant', 'Cafe', 'Food Truck', 'Fine Dining', 'Cloud Kitchen', 'Bakery', 'Hotel'];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${formData.businessType}
Message: ${formData.message}
    `;
    const mailtoLink = `mailto:abid@swirl.cx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-5"></div>
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full mb-6 font-medium">
                <MessageSquare size={20} />
                <span>Let's Connect</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of restaurants already using Swirl to streamline operations and boost profits. 
                Let's discuss how we can help your business grow.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Quick Setup</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <Send size={24} />
                        </div>
                        <h2 className="text-2xl font-bold">Get Started Today</h2>
                      </div>
                      <p className="text-blue-100">
                        Tell us about your business and we'll show you how Swirl can help you succeed.
                      </p>
                    </div>
                    
                    <div className="p-8">
                      {submitted ? <div className="text-center py-12">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="text-green-600" size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                          <p className="text-gray-600">Your message has been sent. We'll get back to you soon!</p>
                        </div> : <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                              <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your full name" />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                              <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email" />
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                              <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your phone number" />
                            </div>
                            <div>
                              <Label htmlFor="businessType" className="text-gray-700 font-medium">Business Type *</Label>
                              <select id="businessType" name="businessType" required value={formData.businessType} onChange={handleChange} className="mt-2 w-full h-10 px-3 py-2 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none">
                                <option value="">Select your business type</option>
                                {businessTypes.map(type => <option key={type} value={type}>{type}</option>)}
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="message" className="text-gray-700 font-medium">Tell us about your needs</Label>
                            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none resize-none" placeholder="What challenges are you facing? How can we help?" />
                          </div>
                          
                          <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            {isSubmitting ? <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Sending...
                              </div> : <div className="flex items-center gap-2">
                                <Send size={20} />
                                Send Message
                              </div>}
                          </Button>
                        </form>}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Ready to revolutionize your restaurant operations? Our team is here to help you 
                    streamline your business and boost your profits with Swirl's comprehensive platform.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Phone className="text-blue-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                          <a href="tel:+971543853877" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                            +971 54 385 3877
                          </a>
                          <p className="text-gray-500 text-sm mt-1">Available 24/7 for support</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <Mail className="text-green-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                          <a href="mailto:hello@swirl.cx" className="text-green-600 hover:text-green-700 font-medium text-lg">
                            hello@swirl.cx
                          </a>
                          <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <MapPin className="text-purple-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                          <p className="text-gray-700 font-medium">Hanging Garden Tower, 2nd Floor, Office 13</p>
                          <p className="text-gray-600">Hamdan Street, Abu Dhabi, UAE 🇦🇪</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* WhatsApp CTA */}
                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-xl mb-2">Need Instant Help?</h3>
                        <p className="text-green-100">Chat with us on WhatsApp for immediate assistance</p>
                      </div>
                      <Button asChild className="bg-white text-green-600 hover:bg-green-50 font-semibold">
                        <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <WhatsApp size={20} />
                          Chat Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/swirl-cx" className="text-blue-600 hover:text-blue-700 font-medium">
                      LinkedIn
                    </a>
                    <a href="https://www.instagram.com/swirl.cx?igsh=MTk4dDZlOTZqNHFjcg%3D%3D&utm_source=qr" className="text-pink-600 hover:text-pink-700 font-medium">
                      Instagram
                    </a>
                    <a href="https://www.tiktok.com/@swirlcx?_t=ZS-8w7vcghzhWT&_r=1" className="text-gray-900 hover:text-gray-700 font-medium">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Contact;