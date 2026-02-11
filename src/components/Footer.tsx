import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Instagram, TikTok } from "./SocialIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  const productLinks = [
    { label: 'Point of Sale', to: '/products/restaurant-point-of-sale' },
    { label: 'QR Ordering', to: '/products/qr-ordering' },
    { label: 'Kitchen Display', to: '/features/kitchen-display' },
    { label: 'Inventory Management', to: '/products/inventory-management' },
    { label: 'Financial Reports', to: '/products/restaurant-analytics' },
    { label: 'CRM & Loyalty', to: '/features/crm' },
    { label: 'Digital Menu', to: '/features/digital-menu' },
    { label: 'Delivery Integration', to: '/features/car-ordering' },
    { label: 'Swirl Hardware', to: '/products/swirl-hardware' },
  ];

  const industryLinks = [
    { label: 'Fine Dining', to: '/use-cases#fine-dining' },
    { label: 'Casual Dining', to: '/use-cases#casual-dining' },
    { label: 'Quick Service', to: '/use-cases#fast-food' },
    { label: 'Cafés & Bakeries', to: '/use-cases#cafes' },
    { label: 'Cloud Kitchens', to: '/use-cases#cloud-kitchens' },
    { label: 'Food Trucks', to: '/use-cases#food-trucks' },
    { label: 'Hotels & Resorts', to: '/use-cases#hotels' },
  ];

  const resourceLinks = [
    { label: 'Product Overview', to: '/products' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Sitemap', to: '/sitemap' },
  ];

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Top CTA Band */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1">Ready to transform your restaurant?</h3>
            <p className="text-white/60 text-sm">Get started with Swirl — free setup, no commitment.</p>
          </div>
          <a 
            href="https://app.swirl.cx/register" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 whitespace-nowrap"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* About */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-xl font-bold mb-4 block">
              swirl.cx
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              A full-stack restaurant management platform — cloud POS, QR ordering, inventory, analytics, CRM & AI — unified for modern hospitality.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/swirl-cx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.instagram.com/swirl.cx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="https://www.tiktok.com/@swirlcx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-black rounded-full flex items-center justify-center transition-colors" aria-label="TikTok">
                <TikTok size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">Industries</h4>
            <ul className="space-y-2.5">
              {industryLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 text-white/40 mt-0.5" />
                <span className="text-white/50">Hanging Garden Tower, 2nd Floor, Office 13, Abu Dhabi</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0 text-white/40" />
                <span className="text-white/50">+971 54 385 3877</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0 text-white/40" />
                <a href="mailto:hello@swirl.cx" className="text-white/50 hover:text-white transition-colors">
                  hello@swirl.cx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">© {year} swirl.cx. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-white/40 hover:text-white text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
