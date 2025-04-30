
import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Create Your Digital Menu",
    description: "Upload your menu items with descriptions, prices, and high-quality photos in minutes.",
    image: "/lovable-uploads/cb050b33-51a3-4f11-bd02-f9fe6ffdde44.png"
  },
  {
    id: 2,
    title: "Generate QR Codes",
    description: "Create unique QR codes for each table that customers can scan to view your menu.",
    image: "/lovable-uploads/6be88733-ef9e-44fd-a6b7-a1f5851419e9.png"
  },
  {
    id: 3,
    title: "Start Receiving Orders",
    description: "Customers can browse, order, and pay directly from their phones without downloading any apps.",
    image: "/lovable-uploads/b03f39e1-1bbe-4212-88bc-f7f70b2ba690.png"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-swirl-gray max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="relative mb-6">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center absolute -top-2 -left-2 z-10">
                  <span className="text-purple font-bold">{step.id}</span>
                </div>
                <div className="h-40 w-40 rounded-full bg-purple-light/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-swirl-gray">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Why Restaurants Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["No technical skills required", "Works on any device", "Free 14-day trial"].map((benefit) => (
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
