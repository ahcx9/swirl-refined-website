
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer Section */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-xl font-bold mb-4 block">
              <img 
                src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png" 
                alt="Swirl Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-swirl-gray mb-5 max-w-md text-sm leading-relaxed mt-4">
              Transforming restaurant management with innovative digital solutions. Our integrated platform helps you streamline operations, increase revenue, and enhance customer experience.
            </p>
            <div className="flex space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} className="text-gray-600" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook size={18} className="text-gray-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={18} className="text-gray-600" />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/digital-menu" className="text-swirl-gray hover:text-purple transition-colors inline-block">Digital Menu</Link>
              </li>
              <li>
                <Link to="/products/qr-ordering" className="text-swirl-gray hover:text-purple transition-colors inline-block">QR Ordering</Link>
              </li>
              <li>
                <Link to="/products/analytics" className="text-swirl-gray hover:text-purple transition-colors inline-block">Analytics</Link>
              </li>
              <li>
                <Link to="/products/pos" className="text-swirl-gray hover:text-purple transition-colors inline-block">POS System</Link>
              </li>
              <li>
                <Link to="/products/inventory-management" className="text-swirl-gray hover:text-purple transition-colors inline-block">Inventory Management</Link>
              </li>
            </ul>
          </div>
          
          {/* Use Cases */}
          <div>
            <h3 className="text-base font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/use-cases#fine-dining" className="text-swirl-gray hover:text-purple transition-colors inline-block">Fine Dining</Link>
              </li>
              <li>
                <Link to="/use-cases#casual-dining" className="text-swirl-gray hover:text-purple transition-colors inline-block">Casual Dining</Link>
              </li>
              <li>
                <Link to="/use-cases#fast-food" className="text-swirl-gray hover:text-purple transition-colors inline-block">Fast Food</Link>
              </li>
              <li>
                <Link to="/use-cases#cafes" className="text-swirl-gray hover:text-purple transition-colors inline-block">Cafés</Link>
              </li>
              <li>
                <Link to="/use-cases#food-trucks" className="text-swirl-gray hover:text-purple transition-colors inline-block">Food Trucks</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 flex-shrink-0 text-purple mt-1" />
                <span className="text-swirl-gray">Al Jaber Jewelley Building, Khalidya, Abu Dhabi</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-purple" />
                <span className="text-swirl-gray">+971 54 385 3877</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0 text-purple" />
                <span className="text-swirl-gray">hello@swirl.cx</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-gray-100 py-6">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-swirl-gray text-xs mb-3 md:mb-0">
            © {year} swirl.cx. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <Link to="/privacy" className="text-swirl-gray hover:text-purple text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-swirl-gray hover:text-purple text-xs transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-swirl-gray hover:text-purple text-xs transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
