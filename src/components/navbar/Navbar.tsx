
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationItems } from './NavigationItems';
import { MobileMenu } from './MobileMenu';

const mainLinks = [
  { name: 'Features', path: '/products' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Resources', items: [
    { title: 'Blog', path: '/blog', description: 'Latest updates and articles', icon: 'file-text' },
    { title: 'Help Center', path: '/help', description: 'Get answers to your questions', icon: 'help-circle' },
    { title: 'Documentation', path: '/docs', description: 'Technical information and guides', icon: 'book' },
  ]},
  { name: 'Testimonials', path: '/testimonials' },
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
        isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-3'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-10 md:mr-16">
            <img 
              src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png" 
              alt="Swirl Logo" 
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center">
            <NavigationItems items={mainLinks} />
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-purple-dark hover:text-purple transition-colors font-medium">
            Login
          </Link>  
          <Button asChild className="bg-purple text-white hover:bg-purple-dark font-medium text-sm px-5 py-2 rounded-lg">
            <Link to="https://app.swirl.cx/register">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-purple-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
