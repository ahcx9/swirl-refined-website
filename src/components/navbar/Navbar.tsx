
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationItems } from './NavigationItems';
import { MobileMenu } from './MobileMenu';

const features = [
  {
    title: 'Digital Menu',
    path: '/products/digital-menu',
    description: 'Create interactive digital menus that are easy to update.',
    icon: 'restaurant-menu'
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
    icon: 'chart-bar'
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
    icon: 'file-text'
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
  { name: 'Features', items: features },
  { name: 'Industries', path: '/industries' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-50/95 shadow-md py-3' : 'bg-blue-50/80 py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-8">
            <img 
              src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png" 
              alt="Swirl Logo" 
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavigationItems items={mainLinks} />
          </div>
        </div>
          
        <Button asChild className="btn-primary font-inter hidden md:flex">
          <Link to="https://app.swirl.cx/register">Get Started For Free</Link>
        </Button>

        <button
          className="md:hidden text-purple-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        activeDropdown={activeDropdown}
        links={mainLinks}
        toggleDropdown={toggleDropdown}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
