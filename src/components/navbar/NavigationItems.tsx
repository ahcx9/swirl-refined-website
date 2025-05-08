
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
      'restaurant-menu': <FileText size={26} className="mr-3 text-swirl-blue" />,
      'qr-code': <ShoppingCart size={26} className="mr-3 text-swirl-blue" />,
      'chart-bar': <BarChart size={26} className="mr-3 text-swirl-blue" />,
      'credit-card': <CreditCard size={26} className="mr-3 text-swirl-blue" />,
      'file-text': <LayoutDashboard size={26} className="mr-3 text-swirl-blue" />,
      'users': <Users size={26} className="mr-3 text-swirl-blue" />,
      'car': <Car size={26} className="mr-3 text-swirl-blue" />,
      'dollar-sign': <Calendar size={26} className="mr-3 text-swirl-blue" />,
      'package': <Package size={26} className="mr-3 text-swirl-blue" />,
      'chef-hat': <ChefHat size={26} className="mr-3 text-swirl-blue" />,
      'calendar': <Utensils size={26} className="mr-3 text-swirl-blue" />,
    };
    
    return iconMap[iconName] || null;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-8 md:gap-10">
        {items.map((link) => (
          link.items ? (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuTrigger className="text-swirl-blue hover:text-blue-600 transition-colors px-0 font-inter text-[18px] font-semibold tracking-wide bg-transparent hover:bg-transparent">
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-4 p-6 w-[800px] bg-gradient-to-br from-blue-50 to-white">
                  {link.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="flex items-start select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center">
                        {getIcon(item.icon)}
                        <div>
                          <div className="text-lg font-medium leading-none font-inter mb-2">{item.title}</div>
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
                className="text-swirl-blue hover:text-blue-600 transition-colors font-inter text-[18px] font-semibold tracking-wide whitespace-nowrap relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-swirl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
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
