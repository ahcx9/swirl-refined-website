import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const MobileStickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-4 py-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="https://app.swirl.cx/register"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 w-full h-12 bg-primary text-primary-foreground text-[15px] font-semibold rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-250 ease-out"
      >
        Get Started Free
        <ArrowRight size={16} className="transition-transform duration-250 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
};

export default MobileStickyBar;
