import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: any;
  path: string;
  onClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, path, onClick }) => {
  return (
    <Link
      to={path}
      onClick={onClick}
      className="group flex flex-col gap-0.5 p-3 rounded-xl transition-all duration-300 hover:bg-blue-50/80 hover:shadow-[0_2px_12px_-2px_rgba(37,99,235,0.1)] border border-transparent hover:border-blue-100/60"
    >
      <div className="text-[13px] font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
        {title}
      </div>
      <p className="text-[11px] text-muted-foreground leading-snug">
        {description}
      </p>
    </Link>
  );
};
