
import React from 'react';
import { CheckCircle, Laptop } from 'lucide-react';

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center gap-2 mb-3">
      <CheckCircle size={18} className="text-green-500 shrink-0" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-swirl-gray leading-relaxed">{description}</p>
  </div>
);

const POSSoftwareFeatures = () => {
  const features = [
    {
      title: "Intuitive Interface",
      description: "User-friendly design that's easy to learn and requires minimal training."
    },
    {
      title: "Table Management",
      description: "Drag-and-drop interface for easy table assignments and status monitoring."
    },
    {
      title: "Payment Processing",
      description: "Support for all major payment methods including contactless and mobile payments."
    },
    {
      title: "Inventory Tracking",
      description: "Real-time inventory management integrated with your menu items."
    },
    {
      title: "Staff Management",
      description: "Time tracking, role-based permissions, and performance analytics."
    },
    {
      title: "Cloud Synchronization",
      description: "Access your data from anywhere with secure cloud storage and backups."
    },
    {
      title: "Reporting & Analytics",
      description: "Comprehensive reporting tools for sales, inventory, and staff performance."
    },
    {
      title: "Menu Management",
      description: "Easily create and update menu items, modifiers, and pricing."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-light/30 to-purple/5 p-8 md:p-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <Laptop className="mr-3 text-purple" /> Powerful Software Features
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default POSSoftwareFeatures;
