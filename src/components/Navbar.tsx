
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
      path: '/features/digital-menu',
      description: 'Create interactive digital menus that are easy to update.',
    },
    {
      title: 'QR Ordering',
      path: '/features/qr-ordering',
      description: 'Enable contactless ordering through QR codes.',
    },
  ];

  const otherLinks = [
    { name: 'Industries', path: '/industries' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
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
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    {features.map((feature) => (
                      <Link
                        key={feature.title}
                        to={feature.path}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{feature.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {feature.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {otherLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-purple-dark hover:text-purple font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="btn-primary">
            <Link to="/contact">Request Demo</Link>
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
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.path}
                className="text-purple-dark hover:text-purple font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {feature.title}
              </Link>
            ))}
            {otherLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-purple-dark hover:text-purple font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="btn-primary w-full">
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
