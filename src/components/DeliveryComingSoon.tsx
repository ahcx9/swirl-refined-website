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
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.3
    });
    const section = document.getElementById('delivery-coming-soon');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/971543853877', '_blank');
  };
  return <section id="delivery-coming-soon" className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
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
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary one-click integration with all major delivery platforms. 
            <br className="hidden md:block" />
            Manage everything from one unified dashboard - available now!
          </p>

          <DeliveryAppShowcase />

          <DeliveryFeatureGrid isVisible={isVisible} />

          {/* CTA */}
          

          <DeliveryProgressBar />
        </div>
      </div>
    </section>;
};
export default DeliveryComingSoon;