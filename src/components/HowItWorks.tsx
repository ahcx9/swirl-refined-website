
import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Set up your Digital Menu",
    description: "Create and customize your digital menu by adding your branding, menu items, and pricing.",
    image: "/lovable-uploads/cb050b33-51a3-4f11-bd02-f9fe6ffdde44.png"
  },
  {
    id: 2,
    title: "Share your QR Code",
    description: "Generate QR codes for each table and display them for customers to scan.",
    image: "/lovable-uploads/6be88733-ef9e-44fd-a6b7-a1f5851419e9.png"
  },
  {
    id: 3,
    title: "Accept Orders & Payments",
    description: "Receive orders in real-time, manage inventory, and accept contactless payments.",
    image: "/lovable-uploads/b03f39e1-1bbe-4212-88bc-f7f70b2ba690.png"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Swirl Works</h2>
          <p className="text-swirl-gray max-w-2xl mx-auto">
            Our platform simplifies restaurant management with a streamlined digital solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center absolute -top-2 -left-2">
                  <span className="text-purple font-bold">{step.id}</span>
                </div>
                <div className="h-48 w-48 rounded-full bg-purple-light/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-swirl-gray">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Why Restaurants Choose Swirl</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Easy to set up in minutes", "No app downloads required", "24/7 Customer support"].map((benefit) => (
              <div key={benefit} className="flex items-center justify-center">
                <CheckCircle size={20} className="text-purple mr-2" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
