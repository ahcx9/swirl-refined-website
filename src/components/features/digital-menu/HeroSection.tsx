
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      <div className="md:w-1/2 order-2 md:order-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">
            <FileText className="text-blue-600 h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold text-blue-900">Digital Menu</h1>
        </div>
        
        <p className="text-lg text-blue-700/80 mb-8 leading-relaxed">
          Create beautiful, interactive digital menus that are easy to update in real-time. Perfect for restaurants looking to modernize their ordering experience with multiple languages, currencies, nutritional information, and AI-powered menu descriptions.
        </p>

        <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-2.5 px-6 text-white shadow-lg">
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
      
      <div className="md:w-1/2 order-1 md:order-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-2xl blur-3xl opacity-50"></div>
          <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/90 rounded-2xl overflow-hidden p-4 shadow-xl relative">
            <img 
              src="/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png"
              alt="Digital Menu on Mobile Devices"
              className="w-full h-auto object-contain rounded-lg transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
