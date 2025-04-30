
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: "Digital Menu Management",
    description: "Create beautiful digital menus that are easy to update. Add images, descriptions, and prices with just a few clicks.",
    image: "/lovable-uploads/82584175-2d38-4de3-8a1e-b70b0efd41cb.png",
    link: "/benefits/menus"
  },
  {
    title: "QR Code Ordering System",
    description: "Enable contactless ordering with custom QR codes for each table. Customers can order and pay directly from their phones.",
    image: "/lovable-uploads/85df272f-78b0-4180-bd9e-a069e750623a.png",
    link: "/benefits/qr-ordering"
  },
  {
    title: "Analytics Dashboard",
    description: "Track sales, popular items, customer behavior, and more with our comprehensive analytics dashboard.",
    image: "/lovable-uploads/b782c244-bfdc-479d-929c-fbb28e8a4040.png",
    link: "/benefits/analytics"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features for Restaurants</h2>
          <p className="text-swirl-gray max-w-2xl mx-auto">
            Everything you need to digitize your menu and streamline the ordering process.
          </p>
        </div>
        
        <div className="space-y-20">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
            >
              <div className="md:w-1/2">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
                />
              </div>
              <div className="md:w-1/2 max-w-lg">
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-swirl-gray mb-6">{benefit.description}</p>
                <Link to={benefit.link} className="text-purple hover:text-purple-dark font-medium inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
