import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PackageBundleCardProps {
  name: string;
  price: string;
  priceSubtext?: string;
  description: string;
  features: string[];
  hardware: string[];
  popular?: boolean;
}

const PackageBundleCard = ({ name, price, priceSubtext, description, features, hardware, popular }: PackageBundleCardProps) => {
  return (
    <div className={`relative animate-on-scroll ${popular ? 'md:scale-105 md:z-10' : ''}`}>
      {/* Glow effect for popular */}
      {popular && (
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl opacity-75 blur-xl animate-pulse-slow"></div>
      )}

      <div className={`relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 ${popular ? 'border-purple-400' : 'border-white/20'} shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full flex flex-col`}>
        {popular && (
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg">
            ⭐ RECOMMENDED
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex items-end justify-center gap-2">
            <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">{price}</span>
          </div>
          {priceSubtext && (
            <p className="text-sm text-muted-foreground mt-2">{priceSubtext}</p>
          )}
        </div>

        {/* Hardware included */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
          <h4 className="font-semibold text-sm text-foreground mb-3">Hardware Included:</h4>
          <ul className="space-y-2">
            {hardware.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button 
          asChild
          className={`w-full rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
            popular 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' 
              : 'bg-white border-2 border-purple-200 text-purple-700 hover:bg-purple-50'
          }`}
        >
          <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PackageBundleCard;
