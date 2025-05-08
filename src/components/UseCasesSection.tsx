
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  Utensils, 
  Coffee, 
  Store, 
  Building, 
  ChefHat, 
  Hotel
} from 'lucide-react';

type UseCaseType = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  pattern: string;
};

const useCases: UseCaseType[] = [
  {
    id: 'food-trucks',
    title: 'Food Trucks',
    description: 'Mobile ordering & compact POS solutions perfect for food trucks and mobile vendors.',
    icon: Truck,
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    pattern: 'radial'
  },
  {
    id: 'fine-dining',
    title: 'Fine Dining',
    description: 'Elegant reservation systems & tableside ordering for upscale restaurants.',
    icon: Utensils,
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    pattern: 'radial'
  },
  {
    id: 'cafes',
    title: 'Cafes & Bakeries',
    description: 'Quick-service solutions for cafes, bakeries, and patisseries.',
    icon: Coffee,
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    pattern: 'dots'
  },
  {
    id: 'quick-service',
    title: 'Quick Service',
    description: 'Fast, efficient systems for quick service restaurants and food courts.',
    icon: Store,
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    pattern: 'radial'
  },
  {
    id: 'cloud-kitchens',
    title: 'Cloud Kitchens',
    description: 'Optimized delivery management for virtual restaurants and ghost kitchens.',
    icon: ChefHat,
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    pattern: 'wave'
  },
  {
    id: 'hotels',
    title: 'Hotels & Resorts',
    description: 'Integrated F&B solutions for hotels, resorts and hospitality venues.',
    icon: Hotel,
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    pattern: 'circles'
  }
];

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
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Serving Every Corner of Hospitality
          </h2>
          <p className="text-lg text-swirl-gray mb-8">
            Our solutions adapt to the unique needs of different food service businesses, 
            helping each type thrive in their own way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div 
              key={useCase.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-200 transition-all duration-500"
              style={{
                transform: hoveredCase === useCase.id ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredCase === useCase.id ? '0 20px 30px -10px rgba(59, 130, 246, 0.2)' : '0 4px 6px -1px rgba(59, 130, 246, 0.1)'
              }}
              onMouseEnter={() => handleCardMouseEnter(useCase.id)}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgGradient} opacity-60`}></div>
              
              {/* Pattern overlay - unique for each card */}
              <div className="absolute inset-0 opacity-10">
                {useCase.pattern === 'dots' && (
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '12px 12px'
                  }}></div>
                )}
                {useCase.pattern === 'radial' && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_currentColor_70%)] opacity-5"></div>
                )}
                {useCase.pattern === 'linear' && (
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(135deg, currentColor 25%, transparent 25%, transparent 50%, currentColor 50%, currentColor 75%, transparent 75%, transparent)',
                    backgroundSize: '20px 20px'
                  }}></div>
                )}
                {useCase.pattern === 'zigzag' && (
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(135deg, currentColor 25%, transparent 25%), linear-gradient(225deg, currentColor 25%, transparent 25%)',
                    backgroundSize: '20px 40px'
                  }}></div>
                )}
                {useCase.pattern === 'wave' && (
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264.888-.14 1.24.19 1.64.4 1.85.94.53 1.55.74 4.2.147 5.86-2.1 5.87-8.03 4.08-10.32 1.13-1.15-1.5-1.04-3.57-.203-4.95.09-.15.398-.33.775-.45.37-.12.935-.23 1.33-.23.39 0 .705.11.923.313.218.2.29.53.203.95-.1.5-.29 1.21-.46 1.83-.36 1.34-.75 2.66-.89 3.34-.13.7-.05 1.25.42 1.67.474.43 1.25.6 1.86.6.48 0 .903-.08 1.274-.23.368-.15.74-.36 1.108-.61.368-.25.74-.53 1.107-.84.37-.32.72-.64 1.025-.97.305-.33.57-.67.786-1.01.22-.34.36-.69.43-1.05.07-.35.04-.72-.08-1.09-.122-.38-.34-.73-.644-1.07s-.678-.66-1.107-.94c-.428-.28-.914-.53-1.456-.73-.55-.19-1.13-.32-1.74-.36-.61-.04-1.27.02-1.95.21-.66.19-1.33.46-2.03.84-1.98 1.09-4.26 3.32-5.63 5.47-1.36 2.16-1.81 4.21-1.56 5.8.25 1.58 1.19 2.66 2.57 3.15 1.38.49 3.17.39 4.8-.42 1.16-.58 2.08-1.1 2.66-1.52.57-.42.83-.72.88-.88.06-.16.07-.26.05-.33-.02-.07-.08-.13-.14-.17 0 0-.32-.2-.86-.57-.53-.37-1.12-.84-1.56-1.31-.43-.48-.7-.94-.7-1.31 0-.38.3-.89.87-1.33.57-.44 1.36-.92 2.1-1.33.75-.4 1.45-.74 1.96-.98.5-.25.75-.36.75-.36.5-.23.97-.39 1.44-.48.46-.1.93-.13 1.42-.09.48.04.99.14 1.58.35l3.67 1.28c.44.17.95.26 1.53.28.58.02 1.17-.08 1.76-.26.6-.19 1.17-.49 1.74-.88.56-.4 1.05-.91 1.46-1.53.41-.63.7-1.36.86-2.2.16-.84.16-1.75-.01-2.65-.17-.9-.52-1.77-1.02-2.55-.5-.77-1.14-1.44-1.86-1.97-.72-.52-1.52-.89-2.35-1.07-.83-.17-1.66-.12-2.46.13-.8.25-1.55.72-2.16 1.39-.61.67-1.07 1.53-1.32 2.48-.25.94-.22 1.98.01 2.97.24.99.65 1.93 1.22 2.68.57.75 1.32 1.32 2.13 1.64.81.32 1.7.4 2.62.29.92-.11 1.86-.45 2.75-.92.89-.47 1.75-1.08 2.5-1.79.75-.7 1.39-1.51 1.87-2.36.48-.85.8-1.73.94-2.57.11-.69.03-1.36-.21-2.07-.24-.71-.63-1.42-1.12-2.09-.5-.66-1.12-1.27-1.82-1.77-.71-.49-1.49-.86-2.29-1.05-.8-.2-1.61-.2-2.36-.02-.76.18-1.46.53-2.05 1.03-.6.49-1.08 1.14-1.43 1.9-.35.77-.53 1.66-.51 2.58.02.92.25 1.87.66 2.76.41.9 1 1.73 1.72 2.42.71.69 1.57 1.25 2.46 1.59.9.35 1.83.48 2.71.41.88-.07 1.69-.35 2.36-.83.66-.48 1.19-1.13 1.47-1.92.28-.79.3-1.73.03-2.71-.26-.98-.8-1.99-1.53-2.92-.73-.93-1.65-1.76-2.64-2.35-.99-.6-2.06-.94-3.08-.95-1.02 0-1.99.35-2.71 1.01-.72.66-1.21 1.61-1.37 2.66-.17 1.05.01 2.19.5 3.19.49 1.01 1.29 1.87 2.21 2.49.92.62 1.96.99 2.94 1.06.98.07 1.89-.15 2.58-.59.69-.44 1.16-1.09 1.33-1.85.17-.77.04-1.65-.32-2.51-.36-.85-.93-1.68-1.62-2.31-.69-.64-1.5-1.1-2.28-1.28-.79-.18-1.55-.07-2.13.28-.58.35-.98.93-1.13 1.64-.15.7-.06 1.54.29 2.27.35.73.9 1.37 1.57 1.78.65.4 1.44.56 2.15.41.71-.15 1.35-.61 1.74-1.27.38-.66.5-1.52.29-2.3-.21-.78-.72-1.5-1.4-1.94-.68-.44-1.56-.6-2.3-.41-.76.19-1.37.73-1.57 1.46-.2.74.01 1.67.6 2.32.6.65 1.56 1.03 2.42.75.86-.28 1.61-1.21 1.6-2.19 0-.98-.76-2.01-1.8-2.08-1.03-.07-2.33.9-2.3 2.15.03 1.25 1.36 2.8 2.93 1.88 1.57-.92 1.58-4.08-1.02-4.23-2.59-.16-3.82 3.72-1.96 5.32 1.85 1.61 5.77.09 5.73-3.35-.05-3.44-5.09-4.96-7.61-2.7-2.53 2.26-1.95 7.37 1.86 8.87 3.82 1.5 9.07-2.13 8.79-6.99-.28-4.87-6.5-7.59-10.68-5.3-4.18 2.3-6.37 8.88-3.09 13.03 3.28 4.15 10.7 5.13 15.29 1.3 4.59-3.82 5.43-12.41-.52-16.81-5.95-4.4-17.4-1.69-21.79 7.05-4.38 8.75 2.22 21.81 13.17 23.34 10.95 1.53 23.96-11.73 20.7-24.26C82.25 9 68.68 4.58 59.25 9.15c-9.42 4.57-14.21 18.12-9.25 27.64 4.97 9.53 19.34 13.74 28.91 8.31 9.58-5.43 13.33-20.19 7.4-30C80.38 5.3 64.85 1.3 54.66 7.36 44.47 13.41 40.13 29.08 46.56 39.5c6.44 10.43 22.49 14.17 33.06 7.43s13.87-22.54 6.92-33.32C79.58 3.83 62.73-.17 51.73 6.85c-11 7.02-15.33 24-7.9 35.19 7.43 11.2 24.65 15.03 35.9 7.27 11.25-7.77 14.86-25.31 6.63-36.75-8.24-11.45-26.05-15.07-37.56-6.38-11.52 8.69-14.65 26.8-5.55 38.4 9.1 11.6 27.27 14.42 38.87 4.93 11.6-9.49 14.21-28.31 4.33-40.05C75.75-2.13 57.12-5.25 45.21 4.64c-11.9 9.9-14.55 28.96-4.33 41.02 10.22 12.06 29.34 14.88 41.51 4.26 12.17-10.63 14.9-29.95 3.94-42.19C75.38-5.1 55.87-8.32 43.46 2.67c-12.41 11-15.26 30.78-3.94 43.38 11.32 12.61 31.09 15.34 43.67 3.77 12.58-11.57 15.62-31.62 3.77-44.41C75.11-7.37 54.62-10.72 41.71.69c-12.91 11.41-15.99 32.48-4.3 45.58s32.86 15.96 45.84 4.1c12.99-11.86 16.36-33.35 4.15-46.53C75.22-9.05 54.12-12.5 40.83-1.28c-13.29 11.21-16.73 33.21-5.2 46.72 11.53 13.51 33.86 16.5 47.45 5.1 13.6-11.4 17.1-34.08 5.41-47.88C76.8-10.55 54-14.27 39.96-3.24 25.92 7.79 22.01 30.95 33.68 45.21c11.67 14.27 35.36 17.61 49.8 5.39 14.43-12.22 17.84-36.4 5.25-51.08C76.14-11.16 52.65-14.89 38-3.05 23.34 8.8 19.36 33.09 31.7 47.99c12.34 14.9 37.11 18.38 52.13 5.54 15.03-12.85 18.57-38.15 5.33-53.43C76.92-11.16 51.53-15.25 36.13-2.85 20.72 9.54 16.29 35.5 29.23 51.14c12.94 15.65 39.34 19.51 55.2 6.04 15.86-13.47 19.84-40.67 5.9-56.77C77.4-11.7 50.42-15.89 34.17-2.93c-16.25 12.97-20.2 41.12-6.77 57.62 13.44 16.51 41.82 20.62 58.44 6.98 16.62-13.64 20.91-42.67 6.8-59.55C78.53-11.76 49.57-16.24 32.56-3.2c-17 13.05-21.27 42.86-7.77 60.13 13.5 17.27 43.07 21.46 60.35 7.85 17.28-13.62 21.98-44.02 7.9-61.59C79.94-12.38 49.99-16.88 32.31-3.94 14.63 9 10.2 40.32 23.9 58.29c13.7 17.97 44.5 22.58 62.56 8.34 18.07-14.24 23.14-45.99 8.44-64.36C80.2-12.1 48.82-17.17 30.34-3.57 11.85 10.02 6.44 42.54 20.7 61.34c14.26 18.8 46.42 23.71 65.22 9.14 18.8-14.57 24.31-47.75 9.33-66.86C80.28-11.5 47.53-17.1 28.31-3.19 9.08 10.73 2.93 44.38 17.77 63.92c14.84 19.53 48.17 24.55 67.69 9.89 19.52-14.66 25.48-49.03 10.43-68.86C81.83-11.87 47.96-17.6 27.99-3.61 8.01 10.37.56 45.6 15.31 65.9c14.75 20.3 49.74 25.67 69.94 10.66 20.2-15.01 26.65-50.59 11.24-71.1C81.09-11.95 47.48-17.98 26.77-3.73 6.07 10.51-1.37 46.58 13.1 67.61c14.47 21.02 51 26.5 71.73 11.38 20.73-15.12 27.38-51.37 11.87-72.42C82.2-12.1 48.57-18.45 27.31-4.13 6.05 10.2-2.8 47.03 11.36 68.62"'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundSize: '80px auto'
                  }}></div>
                )}
                {useCase.pattern === 'circles' && (
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 8%, transparent 8%), radial-gradient(circle, currentColor 8%, transparent 8%)',
                    backgroundPosition: '0 0, 25px 25px',
                    backgroundSize: '50px 50px'
                  }}></div>
                )}
              </div>
              
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-full ${useCase.color} bg-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon size={28} />
                </div>
                
                {/* Content */}
                <h3 className={`text-xl md:text-2xl font-bold mb-3 text-black`}>
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {useCase.description}
                </p>
                
                {/* Interactive element - reveals on hover */}
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    variant="outline" 
                    className={`border ${useCase.color} text-gray-700 hover:bg-white`}
                    onClick={() => navigate('/use-cases')}
                  >
                    Learn more
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
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
          >
            <a href="/use-cases">Explore All Use Cases</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
