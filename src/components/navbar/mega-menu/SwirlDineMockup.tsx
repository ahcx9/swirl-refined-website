import React from 'react';
import dineImage from '@/assets/mega-menu-dine.jpg';

export const SwirlDineMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={dineImage}
        alt="Swirl Dine - Digital menu and QR ordering experience"
        className="w-full h-full object-contain rounded-2xl"
        loading="eager"
      />
    </div>
  );
};
