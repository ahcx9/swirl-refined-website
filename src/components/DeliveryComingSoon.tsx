
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import DeliveryBadge from './delivery/DeliveryBadge';
import DeliveryAppShowcase from './delivery/DeliveryAppShowcase';
import DeliveryFeatureGrid from './delivery/DeliveryFeatureGrid';
import DeliveryProgressBar from './delivery/DeliveryProgressBar';
import DeliveryBackgroundEffects from './delivery/DeliveryBackgroundEffects';

const DeliveryComingSoon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const section = document.getElementById('delivery-coming-soon');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/971543853877', '_blank');
  };

  return (
    <section id="delivery-coming-soon" className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      <DeliveryBackgroundEffects />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <DeliveryBadge />

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Delivery App
            </span>
            <br />
            <span className="text-white">Integrations</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary one-click integration with all major delivery platforms. 
            <br className="hidden md:block" />
            Manage everything from one unified dashboard.
          </p>

          <DeliveryAppShowcase />

          <DeliveryFeatureGrid isVisible={isVisible} />

          {/* CTA */}
          <div 
            className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full px-8 py-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group cursor-pointer"
            onClick={handleWhatsAppRedirect}
          >
            <span className="text-white font-bold text-lg">Explore Integrations Now</span>
            <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={24} />
          </div>

          <DeliveryProgressBar />
        </div>
      </div>
    </section>
  );
};

export default DeliveryComingSoon;
