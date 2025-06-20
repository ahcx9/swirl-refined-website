
import React, { useState, useEffect } from 'react';
import { Star, CheckCircle } from 'lucide-react';

const DeliveryAppShowcase = () => {
  const [currentApp, setCurrentApp] = useState(0);
  
  const deliveryApps = [
    {
      name: "Talabat",
      color: "from-orange-400 to-orange-600",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Talabat-Logo.png"
    },
    {
      name: "Careem",
      color: "from-green-400 to-green-600", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Careem-Logo.png"
    },
    {
      name: "Noon Food",
      color: "from-yellow-400 to-yellow-600",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Noon-Logo.png"
    },
    {
      name: "Deliveroo",
      color: "from-teal-400 to-teal-600",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Deliveroo-Logo.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApp(prev => (prev + 1) % deliveryApps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-16">
      <div className="flex justify-center items-center space-x-4 mb-8">
        {deliveryApps.map((app, index) => (
          <div
            key={app.name}
            className={`relative transition-all duration-500 ${
              index === currentApp ? 'scale-125 z-10' : 'scale-75 opacity-50'
            }`}
          >
            <div className={`w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-2xl border-4 ${
              index === currentApp ? 'border-white' : 'border-transparent'
            }`}>
              <img 
                src={app.logo} 
                alt={app.name}
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'block';
                  }
                }}
              />
              <div className="hidden text-2xl font-bold text-gray-800">
                {app.name.charAt(0)}
              </div>
            </div>
            {index === currentApp && (
              <div className="absolute -top-2 -right-2">
                <CheckCircle className="text-green-400 bg-gray-900 rounded-full" size={24} />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
          <Star className="text-yellow-400" size={20} />
          <span className="text-white font-medium">Connecting to {deliveryApps[currentApp].name}</span>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAppShowcase;
