
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-dark text-white">
      {/* Top Section with Newsletter */}
      <div className="container-custom py-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Stay updated with Swirl</h3>
            <p className="text-white/70">Subscribe to our newsletter for updates, tips, and special offers.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 text-white border border-white/20 rounded-md px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-purple"
            />
            <button className="bg-purple text-white px-6 py-3 rounded-md hover:bg-purple-light transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Footer Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-6 block">swirl.cx</Link>
            <p className="text-white/70 mb-6 max-w-md">
              Transforming restaurant management with innovative digital solutions. Our integrated platform helps you streamline operations, increase revenue, and enhance customer experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-purple p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-purple p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-purple p-2 rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Industries */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-purple after:-mb-2">Industries</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/industries#fine-dining" className="text-white/70 hover:text-purple transition-colors inline-block">Fine Dining</Link>
              </li>
              <li>
                <Link to="/industries#casual-dining" className="text-white/70 hover:text-purple transition-colors inline-block">Casual Dining</Link>
              </li>
              <li>
                <Link to="/industries#fast-food" className="text-white/70 hover:text-purple transition-colors inline-block">Fast Food</Link>
              </li>
              <li>
                <Link to="/industries#cafes" className="text-white/70 hover:text-purple transition-colors inline-block">Cafés</Link>
              </li>
              <li>
                <Link to="/industries#food-trucks" className="text-white/70 hover:text-purple transition-colors inline-block">Food Trucks</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-purple after:-mb-2">Our Products</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/products/digital-menu" className="text-white/70 hover:text-purple transition-colors inline-block">Digital Menu</Link>
              </li>
              <li>
                <Link to="/products/qr-ordering" className="text-white/70 hover:text-purple transition-colors inline-block">QR Ordering</Link>
              </li>
              <li>
                <Link to="/products/analytics" className="text-white/70 hover:text-purple transition-colors inline-block">Analytics</Link>
              </li>
              <li>
                <Link to="/products/pos" className="text-white/70 hover:text-purple transition-colors inline-block">POS System</Link>
              </li>
              <li>
                <Link to="/products/inventory-management" className="text-white/70 hover:text-purple transition-colors inline-block">Inventory Management</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-purple after:-mb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 flex-shrink-0 text-purple mt-1" />
                <span className="text-white/70">Al Jaber Jewelley Building, Khalidya, Abu Dhabi</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-purple" />
                <span className="text-white/70">+971 54 385 3877</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-purple" />
                <span className="text-white/70">hello@swirl.cx</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-purple-dark border-t border-white/10 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {year} swirl.cx. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-white/70 hover:text-purple text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/70 hover:text-purple text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-white/70 hover:text-purple text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
