
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
  }
];

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
    { name: 'Contact', path: '/contact' },
  ];

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
          <Link to="/" className="mr-8">
            <img 
              src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png" 
              alt="Swirl Logo" 
              loading="eager"
              fetchPriority="high"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-16' : 'h-20'
              }`}
            />
          </Link>

          <div className="hidden xl:flex items-center">
            <NavigationItems items={mainLinks} textColor="text-black" />
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          {/* Book Demo CTA Button */}
          <div className="btn-conteiner scale-75">
            <a 
              className="btn-content" 
              href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="btn-title">Book Demo</span>
              <span className="icon-arrow">
                <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              </span> 
            </a>
          </div>
        </div>

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
