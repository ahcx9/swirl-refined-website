
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getIconComponent } from './utils';

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
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-8">
        {items.map((link) => (
          link.items ? (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuTrigger className="text-purple-dark hover:text-purple transition-colors px-0 font-inter text-lg font-semibold">
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-3 gap-4 p-6 w-[800px]">
                  {link.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="flex items-start select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {getIconComponent(item.icon)}
                      <div>
                        <div className="text-lg font-medium leading-none font-inter mb-2">{item.title}</div>
                        <p className="line-clamp-2 text-base leading-snug text-muted-foreground font-inter">
                          {item.description}
                        </p>
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
                className="text-purple-dark hover:text-purple transition-colors font-inter text-lg font-semibold"
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
