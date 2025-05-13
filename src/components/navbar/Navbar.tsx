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
    path: '/products/restaurant-analytics',
    description: 'Track and analyze your restaurant performance.',
    icon: 'chart-bar'
  },
  {
    title: 'Point of Sale',
    path: '/products/restaurant-point-of-sale',
    description: 'Modern point-of-sale for restaurant operations.',
    icon: 'credit-card'
  },
  {
    title: 'Financial Reports',
    path: '/products/financial-reports',
    description: 'Comprehensive financial tracking and reporting.',
    icon: 'file-chart-bar'
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
  },
  {
    title: 'In-Car Ordering',
    path: '/products/ordering-from-car',
    description: 'Enable convenient ordering directly from vehicles.',
    icon: 'car'
  },
  {
    title: 'CRM',
    path: '/products/customer-relationship-management',
    description: 'Manage customer relationships effectively.',
    icon: 'users'
  },
  {
    title: 'Payroll Management',
    path: '/products/payroll-management',
    description: 'Streamline your staff payments and tracking.',
    icon: 'dollar-sign'
  }
];

const mainLinks = [
  { name: 'Point of Sale', path: '/products/restautant-point-of-sale' },
  { name: 'Digital Menu', path: '/products/digital-menu' },
  { name: 'QR Ordering', path: '/products/qr-ordering' },
  { name: 'Inventory Management', path: '/products/inventory-management' },
  { name: 'Features', items: features },
  { name: 'Usecases', path: '/use-cases' },
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
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4 xl:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-8">
            <img 
              src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png" 
              alt="Swirl Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          <div className="hidden xl:flex items-center">
            <NavigationItems items={mainLinks} textColor="text-black" />
          </div>
        </div>
          
        <Button asChild className="hidden md:flex font-inter text-xl bg-gradient-to-r from-swirl-blue to-blue-500 hover:from-swirl-blue/90 hover:to-blue-600 py-6 px-8">
          <a href="https://app.swirl.cx/register">Get Started For Free</a>
        </Button>

        <button
          className="xl:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={38} /> : <Menu size={38} />}
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
