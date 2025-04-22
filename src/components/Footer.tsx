
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-display font-bold text-white">Swirl<span className="text-purple">.cx</span></span>
            </Link>
            <p className="text-white/70 mb-6">
              Transforming restaurant management with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-purple transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-purple transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-purple transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-purple transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-white/70 hover:text-purple transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/industries" className="text-white/70 hover:text-purple transition-colors">Industries</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/70 hover:text-purple transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-purple transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/digital-menu" className="text-white/70 hover:text-purple transition-colors">Digital Menu</Link>
              </li>
              <li>
                <Link to="/products/qr-ordering" className="text-white/70 hover:text-purple transition-colors">QR Ordering</Link>
              </li>
              <li>
                <Link to="/products/analytics" className="text-white/70 hover:text-purple transition-colors">Analytics</Link>
              </li>
              <li>
                <Link to="/products/pos" className="text-white/70 hover:text-purple transition-colors">POS System</Link>
              </li>
              <li>
                <Link to="/products/inventory-management" className="text-white/70 hover:text-purple transition-colors">Inventory Management</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 flex-shrink-0 text-purple mt-1" />
                <span className="text-white/70">123 Restaurant Ave, Foodie City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-purple" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-purple" />
                <span className="text-white/70">info@swirl.cx</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {year} Swirl.cx. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-white/70 hover:text-purple text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-purple text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/70 hover:text-purple text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
