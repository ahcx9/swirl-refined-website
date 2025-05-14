
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Instagram, TikTok } from './SocialIcons';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-dark text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto py-14 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-xl font-bold mb-4 block">swirl.cx</Link>
            <p className="text-white/70 mb-5 max-w-md text-sm leading-relaxed">
              Transforming restaurant management with innovative digital solutions. Our integrated platform helps you streamline operations, increase revenue, and enhance customer experience.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/swirl-cx" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-purple p-2 rounded-full transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/swirl.cx?igsh=MTk4dDZlOTZqNHFjcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="https://www.tiktok.com/@swirlcx?_t=ZS-8w7vcghzhWT&_r=1" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-black p-2 rounded-full transition-colors" aria-label="TikTok">
                <TikTok size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Use Cases */}
          <div>
            <h3 className="text-base font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 after:bg-purple after:-mb-2">Use Cases</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/use-cases#fine-dining" className="text-white/70 hover:text-purple transition-colors inline-block">Fine Dining</Link>
              </li>
              <li>
                <Link to="/use-cases#casual-dining" className="text-white/70 hover:text-purple transition-colors inline-block">Casual Dining</Link>
              </li>
              <li>
                <Link to="/use-cases#fast-food" className="text-white/70 hover:text-purple transition-colors inline-block">Fast Food</Link>
              </li>
              <li>
                <Link to="/use-cases#cafes" className="text-white/70 hover:text-purple transition-colors inline-block">Cafés</Link>
              </li>
              <li>
                <Link to="/use-cases#food-trucks" className="text-white/70 hover:text-purple transition-colors inline-block">Food Trucks</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 after:bg-purple after:-mb-2">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/digital-menu" className="text-white/70 hover:text-purple transition-colors inline-block">Digital Menu</Link>
              </li>
              <li>
                <Link to="/products/qr-ordering" className="text-white/70 hover:text-purple transition-colors inline-block">QR Ordering</Link>
              </li>
              <li>
                <Link to="/products/restaurant-analytics" className="text-white/70 hover:text-purple transition-colors inline-block">Analytics</Link>
              </li>
              <li>
                <Link to="/products/restaurant-point-of-sale" className="text-white/70 hover:text-purple transition-colors inline-block">POS System</Link>
              </li>
              <li>
                <Link to="/products/inventory-management" className="text-white/70 hover:text-purple transition-colors inline-block">Inventory Management</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 after:bg-purple after:-mb-2">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 flex-shrink-0 text-purple mt-1" />
                <span className="text-white/70">Al Jaber Jewelley Building, Khalidya, Abu Dhabi</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-purple" />
                <span className="text-white/70">+971 54 385 3877</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0 text-purple" />
                <a href="mailto:hello@swirl.cx" className="text-white/70 hover:text-purple transition-colors">hello@swirl.cx</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-purple-dark border-t border-white/10 py-4">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-xs mb-3 md:mb-0">
            © {year} swirl.cx. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <Link to="/privacy" className="text-white/70 hover:text-purple text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-purple text-xs transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/70 hover:text-purple text-xs transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
