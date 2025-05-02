
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
      <div className="md:w-1/2 order-2 md:order-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-purple-light/30">
            <FileText className="text-purple h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold">Digital Menu</h1>
        </div>
        
        <p className="text-lg text-swirl-gray mb-8">
          Create beautiful, interactive digital menus that are easy to update in real-time. Perfect for restaurants looking to modernize their ordering experience with multiple languages, currencies, nutritional information, and AI-powered menu descriptions.
        </p>

        <Button asChild className="btn-primary">
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
      
      <div className="md:w-1/2 order-1 md:order-2 bg-gradient-to-br from-purple-light/30 to-white rounded-xl overflow-hidden p-4">
        <img 
          src="/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png"
          alt="Digital Menu on Mobile Devices"
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default HeroSection;
