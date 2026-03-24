import React from 'react';
import { Link } from 'react-router-dom';

interface BookDemoCTAProps {
  className?: string;
}

const BookDemoCTA: React.FC<BookDemoCTAProps> = ({ className = '' }) => {
  return (
    <Link
      to="/contact"
      className={`group inline-flex items-center gap-2 h-12 px-6 text-primary text-[15px] font-semibold rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:scale-[1.03] active:scale-[0.98] transition-all duration-250 ease-out ${className}`}
    >
      Book a Demo
    </Link>
  );
};

export default BookDemoCTA;
