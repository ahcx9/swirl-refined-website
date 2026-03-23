import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  onClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, path, onClick }) => {
  return (
    <Link
      to={path}
      onClick={onClick}
      className="group flex items-start gap-3.5 p-3.5 rounded-2xl transition-all duration-300 hover:bg-blue-50/80 hover:shadow-[0_2px_12px_-2px_rgba(37,99,235,0.12)] border border-transparent hover:border-blue-100/60"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/80 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200/80 transition-all duration-300 group-hover:shadow-sm">
        <Icon size={18} className="text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="min-w-0">
        <div className="text-[13.5px] font-semibold text-foreground leading-tight mb-0.5 group-hover:text-primary transition-colors">
          {title}
        </div>
        <p className="text-[11.5px] text-muted-foreground leading-snug line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};
