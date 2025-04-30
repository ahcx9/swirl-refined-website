
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: "Increase Revenue",
    description: "Boost average order value by 20-30% with customized upselling features and digital recommendations.",
    image: "/lovable-uploads/82584175-2d38-4de3-8a1e-b70b0efd41cb.png",
    link: "/benefits/revenue"
  },
  {
    title: "Reduce Operational Costs",
    description: "Cut labor costs and minimize errors with automated ordering and payment processing.",
    image: "/lovable-uploads/85df272f-78b0-4180-bd9e-a069e750623a.png",
    link: "/benefits/costs"
  },
  {
    title: "Enhance Customer Experience",
    description: "Provide a seamless dining experience with fast, contactless ordering and intuitive interfaces.",
    image: "/lovable-uploads/b782c244-bfdc-479d-929c-fbb28e8a4040.png",
    link: "/benefits/experience"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Your Restaurant</h2>
          <p className="text-swirl-gray max-w-2xl mx-auto">
            Our platform is designed to help restaurants improve operations, increase profits, and delight customers.
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
