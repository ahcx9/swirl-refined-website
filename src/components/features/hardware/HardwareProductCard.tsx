import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HardwareProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  features: string[];
  popular?: boolean;
}

const HardwareProductCard = ({ icon: Icon, title, description, features }: HardwareProductCardProps) => {
  return (
    <div className="group animate-on-scroll h-full">
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Icon container */}
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="h-8 w-8 text-primary" />
        </div>

        {/* Title and description */}
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HardwareProductCard;
