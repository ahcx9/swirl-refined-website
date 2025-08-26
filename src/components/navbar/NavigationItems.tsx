
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
  Users, Car, Calendar, Package, ChefHat, Utensils, FileBarChart, Monitor
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
  textColor?: string;
}

export const NavigationItems = ({ items, textColor = "text-swirl-blue" }: NavigationItemsProps) => {
  // Map for Lucide icons based on icon name
  const getIcon = (iconName: string) => {
    const iconMap: {[key: string]: React.ReactNode} = {
      'restaurant-menu': <FileText size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'qr-code': <ShoppingCart size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'chart-bar': <BarChart size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'credit-card': <CreditCard size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'file-text': <LayoutDashboard size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'users': <Users size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'car': <Car size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'dollar-sign': <Calendar size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'package': <Package size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'chef-hat': <ChefHat size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'calendar': <Utensils size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'file-chart-bar': <FileBarChart size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
      'monitor': <Monitor size={26} className="mr-3 text-swirl-blue flex-shrink-0" />,
    };
    
    return iconMap[iconName] || null;
  };

  const isExternalLink = (path: string) => {
    return path && path.startsWith('http');
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-6 md:gap-10 lg:gap-14">
        {items.map((link) => (
          link.items ? (
            <NavigationMenuItem key={link.name} className="relative static">
              <NavigationMenuTrigger className={`${textColor} hover:text-blue-600 transition-colors px-0 font-inter text-[18px] font-semibold tracking-wide bg-transparent hover:bg-transparent`}>
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-6 p-6 md:w-[850px] lg:w-[950px] bg-white shadow-2xl rounded-lg border border-gray-100">
                  {link.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="flex items-start select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-start">
                        {getIcon(item.icon)}
                        <div className="flex-1 min-w-0">
                          <div className="text-lg font-medium leading-none font-inter mb-2 text-black">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 font-inter">
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
              {isExternalLink(link.path!) ? (
                <a
                  href={link.path!}
                  className={`${textColor} hover:text-blue-600 transition-colors font-inter text-[18px] font-semibold tracking-wide whitespace-nowrap px-2`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path!}
                  className={`${textColor} hover:text-blue-600 transition-colors font-inter text-[18px] font-semibold tracking-wide whitespace-nowrap px-2`}
                >
                  {link.name}
                </Link>
              )}
            </NavigationMenuItem>
          )
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
