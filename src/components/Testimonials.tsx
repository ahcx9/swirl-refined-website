
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    role: 'Owner, Taste of Mexico',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Swirl.cx transformed our entire operation. The digital menu and QR ordering system has reduced our wait times by 30% and our customers love the seamless experience.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Manager, Urban Bites Café',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: "The analytics platform has given us insights we never had before. We've optimized our menu and staffing based on the data, resulting in a 15% increase in profit margin.",
    rating: 5
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Director, Fusion Restaurant Group',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Managing multiple locations used to be a nightmare. With Swirl.cx, we now have real-time visibility across all our restaurants. The inventory and financial reporting tools are game-changers.',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="section-padding bg-purple-light/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-swirl-gray max-w-3xl mx-auto">
            Hear from restaurant owners and managers who have transformed their businesses with Swirl.cx
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-8 md:p-12 relative">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-purple-light">
              <img 
                src={activeTestimonial.image} 
                alt={activeTestimonial.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(activeTestimonial.rating)].map((_, index) => (
                  <Star key={index} size={20} className="fill-purple text-purple" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl italic mb-6">
                "{activeTestimonial.quote}"
              </blockquote>
              
              <div>
                <h4 className="font-semibold text-lg">{activeTestimonial.name}</h4>
                <p className="text-swirl-gray">{activeTestimonial.role}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 md:left-0 md:right-0 md:-mx-12">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-purple-dark hover:bg-purple-light/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-purple-dark hover:bg-purple-light/20"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-purple' : 'bg-gray-200'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
