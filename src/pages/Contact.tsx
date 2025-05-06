
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ContactCardProps {
  country: string;
  flag: string;
  phone: string;
  phoneLink: string;
}

const ContactCard = ({ country, flag, phone, phoneLink }: ContactCardProps) => {
  return (
    <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{country}</h3>
          <span className="text-2xl">{flag}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-purple flex-shrink-0" />
          <a href={phoneLink} className="text-swirl-gray hover:text-purple transition-colors">
            {phone}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  const contactCards = [
    {
      country: "United Arab Emirates",
      flag: "🇦🇪",
      phone: "+971 54 385 3877",
      phoneLink: "tel:+971543853877"
    },
    {
      country: "Saudi Arabia",
      flag: "🇸🇦",
      phone: "+966 55 395 5115",
      phoneLink: "tel:+966553955115"
    },
    {
      country: "India",
      flag: "🇮🇳",
      phone: "+91 87959 97070",
      phoneLink: "tel:+918795997070"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">Contact Us</h1>
              <p className="text-lg text-swirl-gray mb-6 font-inter">
                Get in touch with our team to learn more about how we can help transform your restaurant operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-8 text-purple-dark text-center">Our Global Offices</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactCards.map((card, index) => (
                  <ContactCard
                    key={index}
                    country={card.country}
                    flag={card.flag}
                    phone={card.phone}
                    phoneLink={card.phoneLink}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-10 shadow-soft">
              <h2 className="text-3xl font-bold mb-10 text-purple-dark text-center">Get In Touch</h2>
              <div className="space-y-8">
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
