import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Truck, Utensils, Coffee, Store, ChefHat, Hotel } from 'lucide-react';

type UseCaseType = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
};

const useCases: UseCaseType[] = [{
  id: 'food-trucks',
  title: 'Food Trucks',
  description: 'Mobile ordering & compact POS solutions perfect for food trucks and mobile vendors.',
  icon: Truck,
  image: '/lovable-uploads/food-truck.jpg'
}, {
  id: 'fine-dining',
  title: 'Fine Dining',
  description: 'Elegant reservation systems & tableside ordering for upscale restaurants.',
  icon: Utensils,
  image: '/lovable-uploads/fine-dining-interior.jpg'
}, {
  id: 'cafes',
  title: 'Cafes & Bakeries',
  description: 'Quick-service solutions for cafes, bakeries, and patisseries.',
  icon: Coffee,
  image: '/lovable-uploads/cafe-interior.jpg'
}, {
  id: 'quick-service',
  title: 'Quick Service',
  description: 'Fast, efficient systems for quick service restaurants and food courts.',
  icon: Store,
  image: '/lovable-uploads/quick-service.jpg'
}, {
  id: 'cloud-kitchens',
  title: 'Cloud Kitchens',
  description: 'Optimized delivery management for virtual restaurants and ghost kitchens.',
  icon: ChefHat,
  image: '/lovable-uploads/cloud-kitchen.jpg'
}, {
  id: 'hotels',
  title: 'Hotels & Resorts',
  description: 'Integrated F&B solutions for hotels, resorts and hospitality venues.',
  icon: Hotel,
  image: '/lovable-uploads/hotel-resort.jpg'
}];

const UseCasesSection = () => {
  const navigate = useNavigate();
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => {
    setHoveredCase(id);
  };

  const handleCardMouseLeave = () => {
    setHoveredCase(null);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Simple blue background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-50 to-transparent"></div>
        
        {/* Blue floating orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300/20 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-400/20 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          {/* Blue badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-swirl-blue text-white font-semibold text-sm mb-6 shadow-lg animate-fade-in">
            <span className="animate-pulse">✨</span>
            <span>Solutions for Every Hospitality Business</span>
            <span className="animate-pulse">✨</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Serving Every Corner of Hospitality
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our solutions adapt to the unique needs of different food service businesses, 
            helping each type thrive in their own way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map(useCase => (
            <div 
              key={useCase.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-blue-100 transition-all duration-500 hover:shadow-2xl hover:border-swirl-blue"
              style={{
                transform: hoveredCase === useCase.id ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
              }}
              onMouseEnter={() => handleCardMouseEnter(useCase.id)} 
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col bg-white">
                {/* Icon with blue ring */}
                <div className="relative w-16 h-16 rounded-full text-swirl-blue bg-blue-50 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:bg-swirl-blue group-hover:text-white transition-all duration-300">
                  <useCase.icon size={30} className="relative z-10" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {useCase.description}
                </p>
                
                {/* CTA Button - appears on hover */}
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    variant="outline" 
                    className="border-2 border-swirl-blue text-swirl-blue bg-white hover:bg-swirl-blue hover:text-white font-semibold shadow-md hover:shadow-lg transition-all"
                    onClick={() => navigate('/use-cases')}
                  >
                    Explore Solutions →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            asChild 
            size="xl" 
            className="bg-swirl-blue hover:bg-blue-700 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <a href="/use-cases">Explore All Use Cases →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
