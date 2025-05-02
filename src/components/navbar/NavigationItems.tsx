
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
      'restaurant-menu': <FileText size={22} className="mr-3 text-purple" />,
      'qr-code': <ShoppingCart size={22} className="mr-3 text-purple" />,
      'chart-bar': <BarChart size={22} className="mr-3 text-purple" />,
      'credit-card': <CreditCard size={22} className="mr-3 text-purple" />,
      'file-text': <LayoutDashboard size={22} className="mr-3 text-purple" />,
      'users': <Users size={22} className="mr-3 text-purple" />,
      'car': <Car size={22} className="mr-3 text-purple" />,
      'dollar-sign': <Calendar size={22} className="mr-3 text-purple" />,
      'package': <Package size={22} className="mr-3 text-purple" />,
      'chef-hat': <ChefHat size={22} className="mr-3 text-purple" />,
      'calendar': <Utensils size={22} className="mr-3 text-purple" />,
    };
    
    return iconMap[iconName] || null;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-10 md:space-x-12">
        {items.map((link) => (
          link.items ? (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuTrigger className="text-purple-dark hover:text-purple transition-colors px-0 font-inter text-base font-medium tracking-wide">
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-4 p-5 w-[700px]">
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
                className="text-purple-dark hover:text-purple transition-colors font-inter text-base font-medium tracking-wide relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
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
