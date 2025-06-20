
import React from 'react';
import { Zap, Truck, CheckCircle } from 'lucide-react';

interface DeliveryFeatureGridProps {
  isVisible: boolean;
}

const DeliveryFeatureGrid = ({ isVisible }: DeliveryFeatureGridProps) => {
  const features = [
    {
      icon: Zap,
      title: "Instant Sync",
      desc: "Real-time order synchronization"
    },
    {
      icon: Truck,
      title: "Unified Dashboard",
      desc: "Manage all platforms in one place"
    },
    {
      icon: CheckCircle,
      title: "Smart Analytics",
      desc: "Cross-platform performance insights"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transform transition-all duration-700 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <feature.icon className="text-white mb-4 mx-auto" size={40} />
          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-gray-300">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DeliveryFeatureGrid;
