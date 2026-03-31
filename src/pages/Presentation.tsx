import React, { useEffect } from 'react';

const Presentation = () => {
  useEffect(() => {
    // Hide navbar and mobile sticky bar for fullscreen presentation
    const navbar = document.querySelector('nav');
    const stickyBar = document.querySelector('[class*="MobileStickyBar"]');
    if (navbar) navbar.style.display = 'none';
    if (stickyBar) (stickyBar as HTMLElement).style.display = 'none';
    
    return () => {
      if (navbar) navbar.style.display = '';
      if (stickyBar) (stickyBar as HTMLElement).style.display = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-background z-50">
      <iframe
        src="/presentation.html"
        className="w-full h-full border-0"
        title="Swirl Enterprise Product Deep Dive"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Presentation;
