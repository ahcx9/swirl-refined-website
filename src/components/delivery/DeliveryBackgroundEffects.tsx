
import React from 'react';
import { Truck, Smartphone, Zap } from 'lucide-react';

const DeliveryBackgroundEffects = () => {
  const deliveryApps = [
    { color: "from-orange-400 to-orange-600" },
    { color: "from-green-400 to-green-600" },
    { color: "from-yellow-400 to-yellow-600" },
    { color: "from-teal-400 to-teal-600" }
  ];

  return (
    <>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${deliveryApps[i % deliveryApps.length].color} opacity-30`} />
          </div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Truck
          className="absolute top-20 left-10 text-white/20 animate-bounce"
          size={40}
          style={{ animationDelay: '0s' }}
        />
        <Smartphone
          className="absolute top-32 right-20 text-white/20 animate-bounce"
          size={35}
          style={{ animationDelay: '1s' }}
        />
        <Zap
          className="absolute bottom-32 left-20 text-white/20 animate-bounce"
          size={30}
          style={{ animationDelay: '2s' }}
        />
      </div>
    </>
  );
};

export default DeliveryBackgroundEffects;
