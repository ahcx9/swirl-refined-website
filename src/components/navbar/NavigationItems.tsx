
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  FileText, ShoppingCart, BarChart, CreditCard, LayoutDashboard,
  Users, Car, Calendar, Package, ChefHat, Utensils
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path?: string;
  items?: {
    title: string;
    path: string;
    description: string;
    icon: string;
  }[];
}

interface NavigationItemsProps {
  items: NavigationItem[];
}

export const NavigationItems = ({ items }: NavigationItemsProps) => {
  // Map for Lucide icons based on icon name
  const getIcon = (iconName: string) => {
    const iconMap: {[key: string]: React.ReactNode} = {
      'restaurant-menu': <FileText size={18} className="mr-2 text-purple" />,
      'qr-code': <ShoppingCart size={18} className="mr-2 text-purple" />,
      'chart-bar': <BarChart size={18} className="mr-2 text-purple" />,
      'credit-card': <CreditCard size={18} className="mr-2 text-purple" />,
      'file-text': <LayoutDashboard size={18} className="mr-2 text-purple" />,
      'users': <Users size={18} className="mr-2 text-purple" />,
      'car': <Car size={18} className="mr-2 text-purple" />,
      'dollar-sign': <Calendar size={18} className="mr-2 text-purple" />,
      'package': <Package size={18} className="mr-2 text-purple" />,
      'chef-hat': <ChefHat size={18} className="mr-2 text-purple" />,
      'calendar': <Utensils size={18} className="mr-2 text-purple" />,
    };
    
    return iconMap[iconName] || null;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-6">
        {items.map((link) => (
          link.items ? (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuTrigger className="text-purple-dark hover:text-purple transition-colors px-0 font-inter text-base font-semibold">
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-3 p-6 w-[650px]">
                  {link.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="flex items-start select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center">
                        {getIcon(item.icon)}
                        <div>
                          <div className="text-base font-medium leading-none font-inter mb-1">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-inter">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={link.name}>
              <Link
                to={link.path!}
                className="text-purple-dark hover:text-purple transition-colors font-inter text-base font-semibold"
              >
                {link.name}
              </Link>
            </NavigationMenuItem>
          )
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
