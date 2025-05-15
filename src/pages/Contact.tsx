
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, TikTok, WhatsApp } from '@/components/SocialIcons';

const Contact = () => {
  const uaeContact = {
    country: "UAE",
    flag: "🇦🇪",
    phone: "+971 54 385 3877",
    phoneLink: "tel:+971543853877",
    email: "hello@swirl.cx",
    whatsappNumber: "971543853877"
  };
  
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-[41px] my-[15px]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter text-blue-700">Have Questions or Need Help? We're Here for You.</h1>
              <p className="text-lg text-swirl-gray mb-6 font-inter">
                Chat with us about how swirl can save time and reduce workflow friction.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-950">Contact Us</h2>
              <div className="max-w-lg mx-auto">
                <Card className="bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6 gap-3">
                      <span className="text-4xl">{uaeContact.flag}</span>
                      <h3 className="text-2xl font-bold text-blue-700">{uaeContact.country}</h3>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-purple flex-shrink-0" />
                        <a href={uaeContact.phoneLink} className="text-gray-800 hover:text-purple transition-colors text-lg">
                          {uaeContact.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-purple flex-shrink-0" />
                        <a href={`mailto:${uaeContact.email}`} className="text-gray-800 hover:text-purple transition-colors text-lg">
                          {uaeContact.email}
                        </a>
                      </div>
                      <div className="mt-6">
                        <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center gap-2 rounded-full py-6 h-auto">
                          <a href={`https://wa.me/${uaeContact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="">
                            <WhatsApp size={20} className="flex-shrink-0" />
                            <span className="text-lg">Chat on WhatsApp</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="rounded-lg p-10 shadow-soft max-w-3xl mx-auto bg-zinc-100">
              <h2 className="text-3xl font-bold mb-10 text-center text-zinc-950">Get In Touch</h2>
              <div className="space-y-8 max-w-2xl mx-auto">
                <div className="flex items-start gap-6">
                  <MapPin className="h-8 w-8 text-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-inter">Office Address</h3>
                    <p className="text-swirl-gray text-lg font-inter">Al Jaber Jewelley Building, Khalidya, Abu Dhabi, UAE 🇦🇪 </p>
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
                  <Globe className="h-8 w-8 text-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-inter">Social Media</h3>
                    <div className="flex space-x-6">
                      <a href="https://www.linkedin.com/company/swirl-cx" className="text-purple hover:text-purple-dark transition-colors text-lg">
                        LinkedIn
                      </a>
                      <a href="https://www.instagram.com/swirl.cx?igsh=MTk4dDZlOTZqNHFjcg%3D%3D&utm_source=qr" className="text-purple hover:text-purple-dark transition-colors text-lg">
                        Instagram
                      </a>
                      <a href="https://www.tiktok.com/@swirlcx?_t=ZS-8w7vcghzhWT&_r=1" className="text-purple hover:text-purple-dark transition-colors text-lg">
                        TikTok
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
    </div>;
};

export default Contact;
