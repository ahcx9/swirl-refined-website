
import React from 'react';
import { 
  FileText, QrCode, BarChart, CreditCard, Package,
  Users, Car, Calendar, LayoutDashboard, ChefHat, BadgeDollarSign,
  HelpCircle, BookOpen
} from 'lucide-react';

export const getIconComponent = (iconName: string) => {
  const iconMap: {[key: string]: React.ReactNode} = {
    'file-text': <FileText size={18} className="text-purple" />,
    'qr-code': <QrCode size={18} className="text-purple" />,
    'bar-chart': <BarChart size={18} className="text-purple" />,
    'credit-card': <CreditCard size={18} className="text-purple" />,
    'package': <Package size={18} className="text-purple" />,
    'users': <Users size={18} className="text-purple" />,
    'car': <Car size={18} className="text-purple" />,
    'calendar': <Calendar size={18} className="text-purple" />,
    'layout-dashboard': <LayoutDashboard size={18} className="text-purple" />,
    'chef-hat': <ChefHat size={18} className="text-purple" />,
    'badge-dollar-sign': <BadgeDollarSign size={18} className="text-purple" />,
    'help-circle': <HelpCircle size={18} className="text-purple" />,
    'book': <BookOpen size={18} className="text-purple" />,
  };
  
  return iconMap[iconName] || null;
};
