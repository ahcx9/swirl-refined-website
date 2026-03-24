import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import SwirlCTA from '@/components/SwirlCTA';
import { Instagram, TikTok } from "./SocialIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  const productLinks = [
    { label: 'Point of Sale', to: '/products/restaurant-point-of-sale' },
    { label: 'QR Ordering', to: '/products/qr-ordering' },
    { label: 'Kitchen Display', to: '/products/kitchen-display' },
    { label: 'Inventory Management', to: '/products/inventory-management' },
    { label: 'Financial Reports', to: '/products/restaurant-analytics' },
    { label: 'CRM & Loyalty', to: '/products/loyalty' },
    { label: 'Digital Menu', to: '/products/digital-menu' },
    { label: 'Delivery Integration', to: '/#delivery-integration' },
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
    { label: 'Support', to: '/support' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Sitemap', to: '/sitemap' },
  ];

  const offices = [
    {
      country: 'UAE',
      phone: '+971 54 385 3877',
      phoneHref: 'tel:+971543853877',
      whatsapp: 'https://wa.me/971543853877?text=I%20would%20like%20to%20see%20demo%20for%20swirl',
      address: 'Abu Dhabi — Office 13, 2nd Floor, Hanging Garden Tower',
    },
    {
      country: 'Saudi Arabia',
      phone: '+966 53 995 0024',
      phoneHref: 'tel:+966539950024',
      whatsapp: 'https://wa.me/966539950024?text=I%20would%20like%20to%20see%20demo%20for%20swirl',
      address: 'Riyadh — REMA6548, 6548 Salahudin Al-Ayyubi, Al-Malaz District, 12836',
    },
    {
      country: 'India',
      phone: '+91 97959 97070',
      phoneHref: 'tel:+919795997070',
      whatsapp: 'https://wa.me/919795997070?text=I%20would%20like%20to%20see%20demo%20for%20swirl',
      address: 'Lucknow',
    },
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
          <SwirlCTA />
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

          {/* Contact — All 3 countries */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">Contact</h4>
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.country} className="space-y-1.5">
                  <p className="text-white/90 text-sm font-semibold">{office.country}</p>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="flex-shrink-0 text-white/40" />
                    <a href={office.phoneHref} className="text-white/50 hover:text-white text-sm transition-colors">
                      {office.phone}
                    </a>
                    <a
                      href={office.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#25D366] hover:text-[#25D366]/80 transition-colors"
                      aria-label={`WhatsApp ${office.country}`}
                    >
                      <MessageCircle size={13} />
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={13} className="flex-shrink-0 text-white/40 mt-0.5" />
                    <span className="text-white/40 text-xs leading-relaxed">{office.address}</span>
                  </div>
                </div>
              ))}
              <div className="pt-2 flex items-center gap-2.5">
                <Mail size={13} className="flex-shrink-0 text-white/40" />
                <a href="mailto:hello@swirl.cx" className="text-white/50 hover:text-white text-sm transition-colors">
                  hello@swirl.cx
                </a>
              </div>
            </div>
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
