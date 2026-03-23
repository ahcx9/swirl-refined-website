import React from 'react';
import posImage from '@/assets/mega-menu-pos.jpg';

export const SwirlPOSMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={posImage}
        alt="Swirl POS - Restaurant point of sale terminal"
        className="w-full h-full object-contain rounded-2xl"
        loading="eager"
      />
    </div>
  );
};
