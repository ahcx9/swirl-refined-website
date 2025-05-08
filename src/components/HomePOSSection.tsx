
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePOSSection = () => {
  return (
    <section className="py-24 overflow-hidden relative bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-on-scroll">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.9 18.15L15.13 19.38L18.48 16.03" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.9 18.15L15.13 19.38L18.48 16.03" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99994 10.53V13.4699" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99994 10.53V13.4699" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 10.53V13.4699" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 10.53V13.4699" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10.53V13.4699" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10.53V13.4699" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-blue-600 font-medium">Transform Your Restaurant Experience</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Point of Sale</h2>
              
              <p className="text-blue-600/80 mb-6">
                Our easy-to-use POS is designed specifically for restaurants, with table management, split bills, modifiers, 
                and tip management. The system works online and offline, ensuring uninterrupted service at all times.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Real-time table management', 'Customizable modifiers & combos', 'Check splitting & table transfers', 'Offline functionality', 'Integrated payment processing'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-blue-600/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="default" size="lg">
                <Link to="/products/pos" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-100/30 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-3 rounded-xl shadow-xl">
                <img 
                  src="/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png"
                  alt="Swirl POS Interface"
                  className="w-full h-auto object-cover rounded-lg shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePOSSection;
