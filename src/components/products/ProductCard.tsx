
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  image: string;
  features: string[];
  bgClass?: string;
}

interface ProductCardProps {
  product: ProductFeature;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <div 
      key={product.id}
      className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr] lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
    >
      <div className={`overflow-hidden rounded-2xl ${product.bgClass || (index % 2 === 0 ? 'bg-purple-light/10' : 'bg-swirl-blue/10')} relative h-[300px]`}>
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      <div className={index % 2 !== 0 ? 'lg:order-first' : ''}>
        <div className="flex items-center gap-3 mb-4">
          <product.icon size={28} className="text-purple" />
          <h2 className="text-3xl font-bold">{product.title}</h2>
        </div>
        <p className="text-lg text-swirl-gray mb-6">{product.description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple mr-2"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Button asChild variant="link" className="text-purple hover:text-purple-dark p-0">
          <Link to={product.path} className="flex items-center gap-2">
            Learn more about {product.title} <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
