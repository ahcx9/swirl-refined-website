
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  title: 'Visitor Analytics',
  path: '/products/visitor-analytics',
  description: 'Track visitor behavior and QR scanning patterns.',
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
  title: 'Accounting',
  path: '/products/accounting',
  description: 'Automated accounting built for restaurants.',
  icon: 'dollar-sign'
},
{
  title: 'Kitchen Display',
  path: '/products/kitchen-display',
  description: 'Streamline kitchen operations and order management.',
  icon: 'chef-hat'
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
  title: 'Inventory Management',
  path: '/products/inventory-management',
  description: 'Track and manage your restaurant inventory.',
  icon: 'package'
},
{
  title: 'Swirl Hardware',
  path: '/products/swirl-hardware',
  description: 'Complete POS hardware solutions for your restaurant.',
  icon: 'monitor'
}];


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainLinks = [
  { name: 'Point of Sale', path: '/products/restaurant-point-of-sale' },
  { name: 'Inventory Management', path: '/products/inventory-management' },
  { name: 'Swirl Hardware', path: '/products/swirl-hardware' },
  { name: 'QR Ordering', path: '/products/qr-ordering' },
  { name: 'Features', items: features },
  { name: 'Use Cases', path: '/use-cases' },
  { name: 'Contact', path: '/contact' }];


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
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-5'}`
      }>

      <div className="max-w-[1800px] mx-auto px-4 xl:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <img
              src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png"
              alt="Swirl Logo"
              loading="eager"
              fetchPriority="high"
              className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-20'}`
              } />

          </Link>

          <div className="hidden xl:flex items-center">
            <NavigationItems items={mainLinks} textColor="text-black" />
          </div>
        </div>
        
        






















        <button
          className="xl:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          {isMobileMenuOpen ? <X size={38} /> : <Menu size={38} />}
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeDropdown={activeDropdown}
        links={mainLinks}
        toggleDropdown={toggleDropdown}
        onClose={() => setIsMobileMenuOpen(false)} />

    </nav>);

};

export default Navbar;