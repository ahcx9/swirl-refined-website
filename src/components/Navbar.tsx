import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: 'Digital Menu',
      path: '/products/digital-menu',
      description: 'Create interactive digital menus that are easy to update.',
      icon: 'restaurant'
    },
    {
      title: 'QR Ordering',
      path: '/products/qr-ordering',
      description: 'Enable contactless ordering through QR codes.',
      icon: 'qr-code'
    },
    {
      title: 'Analytics',
      path: '/products/analytics',
      description: 'Track and analyze your restaurant performance.',
      icon: 'chart'
    },
    {
      title: 'Point of Sale',
      path: '/products/pos',
      description: 'Modern POS system for seamless transactions.',
      icon: 'credit-card'
    },
    {
      title: 'Financial Reports',
      path: '/products/financial-reports',
      description: 'Comprehensive financial reporting and analysis.',
      icon: 'file'
    },
    {
      title: 'CRM',
      path: '/products/crm',
      description: 'Manage customer relationships effectively.',
      icon: 'users'
    },
    {
      title: 'Car Ordering',
      path: '/products/ordering-from-car',
      description: 'Enable convenient ordering from vehicles.',
      icon: 'car'
    },
    {
      title: 'Payroll Management',
      path: '/products/payroll-management',
      description: 'Streamline your staff payments and tracking.',
      icon: 'dollar-sign'
    },
    {
      title: 'Inventory Management',
      path: '/products/inventory-management',
      description: 'Track and manage your inventory efficiently.',
      icon: 'package'
    },
    {
      title: 'Kitchen Display',
      path: '/products/kitchen-display',
      description: 'Streamline kitchen operations and order management.',
      icon: 'chef-hat'
    },
    {
      title: 'Reservations',
      path: '/products/reservations',
      description: 'Manage bookings and optimize table turnover.',
      icon: 'calendar'
    }
  ];

  const mainLinks = [
    { name: 'Industries', path: '/industries' },
    { name: 'Features', items: features },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png" 
            alt="Swirl Logo" 
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {mainLinks.map((link) => (
                link.items ? (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger className="text-purple-dark hover:text-purple transition-colors px-0 font-inter text-base">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-3 gap-3 p-6 w-[800px]">
                        {link.items.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none font-inter">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-inter">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.path}
                      className="text-purple-dark hover:text-purple transition-colors font-inter text-base"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button asChild className="btn-primary font-inter">
            <Link to="https://app.swirl.cx/register">Get Started For Free</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-purple-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {mainLinks.map((link) => (
              link.items ? (
                <div key={link.name} className="space-y-2">
                  <div className="font-medium text-purple-dark font-inter">{link.name}</div>
                  <div className="pl-4 space-y-2">
                    {link.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        className="block text-purple-dark hover:text-purple transition-colors py-1 font-inter"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-purple-dark hover:text-purple transition-colors font-medium py-2 font-inter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button asChild className="btn-primary w-full font-inter">
              <Link to="https://app.swirl.cx/register">Get Started For Free</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
