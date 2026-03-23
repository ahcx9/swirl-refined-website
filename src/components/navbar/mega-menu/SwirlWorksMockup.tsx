import React from 'react';
import worksImage from '@/assets/mega-menu-works.jpg';

export const SwirlWorksMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={worksImage}
        alt="Swirl Works - Restaurant analytics and back-office dashboard"
        className="w-full h-full object-contain rounded-2xl"
        loading="eager"
      />
    </div>
  );
};
