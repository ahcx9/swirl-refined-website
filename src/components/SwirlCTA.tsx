import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SwirlCTAProps {
  className?: string;
}

const SwirlCTA: React.FC<SwirlCTAProps> = ({ className = '' }) => {
  return (
    <a
      href="https://app.swirl.cx/register"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 h-12 px-6 bg-primary text-primary-foreground text-[15px] font-semibold rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-250 ease-out ${className}`}
    >
      Get Started Free
      <ArrowRight size={16} className="transition-transform duration-250 group-hover:translate-x-0.5" />
    </a>
  );
};

export default SwirlCTA;
