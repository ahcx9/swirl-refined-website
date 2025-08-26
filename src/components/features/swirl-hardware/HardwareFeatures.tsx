import React from 'react';
import { Zap, Smartphone, Cloud, Shield, Wifi, Gauge } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-soft border border-gray-50 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const HardwareFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50/30 to-indigo-50/20 p-8 md:p-10 rounded-xl mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-zinc-950">Why Choose Swirl Hardware?</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<Zap className="text-yellow-500 h-6 w-6 shrink-0" />}
          title="Lightning Fast"
          description="Experience unmatched speed with our optimized hardware that processes orders in milliseconds, not seconds."
        />
        
        <FeatureCard 
          icon={<Smartphone className="text-blue-500 h-6 w-6 shrink-0" />}
          title="Modern Design"
          description="Sleek, minimalist hardware that complements any restaurant aesthetic while maximizing counter space."
        />
        
        <FeatureCard 
          icon={<Cloud className="text-green-500 h-6 w-6 shrink-0" />}
          title="Cloud Integration"
          description="Seamlessly integrated with cloud services for real-time data sync and remote management capabilities."
        />
        
        <FeatureCard 
          icon={<Shield className="text-purple-500 h-6 w-6 shrink-0" />}
          title="Enterprise Security"
          description="Bank-level security with encrypted transactions and PCI DSS compliance for complete peace of mind."
        />
        
        <FeatureCard 
          icon={<Wifi className="text-cyan-500 h-6 w-6 shrink-0" />}
          title="Always Connected"
          description="Dual connectivity options with built-in backup systems ensure your POS never goes offline."
        />
        
        <FeatureCard 
          icon={<Gauge className="text-orange-500 h-6 w-6 shrink-0" />}
          title="High Performance"
          description="Powerful processors and optimized software deliver consistent performance during peak hours."
        />
      </div>
    </div>
  );
};

export default HardwareFeatures;