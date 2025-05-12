import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return <div className="flex flex-col gap-8 mb-16 bg-transparent">
      <div className="w-full text-center">
        <div className="flex items-center justify-center gap-4 mb-6 px-0 mx-0 py-[30px]">
          <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">
            <FileText className="text-blue-600 h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold text-black">Digital Menu</h1>
        </div>
        
        <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto text-slate-950 text-left">
          Create beautiful, interactive digital menus that are easy to update in real-time. Perfect for restaurants looking to modernize their ordering experience with multiple languages, currencies, nutritional information, and AI-powered menu descriptions.
        </p>

        <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-2.5 px-6 text-white shadow-lg mx-auto">
          <a href="https://app.swirl.cx/register">Get Started For Free</a>
        </Button>
      </div>
      
      <div className="w-full">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-2xl blur-3xl opacity-50"></div>
          <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/90 overflow-hidden p-4 shadow-xl relative rounded-2xl bg-transparent">
            <img src="/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png" alt="Digital Menu on Mobile Devices" className="w-1/2 h-auto mx-auto object-contain rounded-lg transform hover:scale-[1.02] transition-transform duration-500" loading="eager" />
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;