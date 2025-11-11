import React from 'react';
import { CheckCircle } from 'lucide-react';
const DeliveryBadge = () => {
  return <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 mb-8">
      <CheckCircle className="text-green-400 animate-pulse" size={24} />
      <span className="text-white font-semibold text-lg">Automated Delivery Apps Order into swirl POS</span>
      <div className="flex space-x-1">
        {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{
        animationDelay: `${i * 0.3}s`
      }} />)}
      </div>
    </div>;
};
export default DeliveryBadge;