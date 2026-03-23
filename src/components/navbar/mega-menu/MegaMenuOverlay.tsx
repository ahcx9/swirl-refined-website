import React from 'react';

interface MegaMenuOverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

export const MegaMenuOverlay: React.FC<MegaMenuOverlayProps> = ({ isVisible, onClick }) => {
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={onClick}
    />
  );
};
