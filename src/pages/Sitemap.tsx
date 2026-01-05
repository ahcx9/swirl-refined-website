import React from 'react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SitemapSection = ({ title, links }: { title: string; links: { name: string; path: string }[] }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">{title}</h2>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
            <Link
              to={link.path}
              className="flex items-center hover:text-swirl-blue transition-colors py-1 font-inter"
            >
            <ChevronRight className="h-4 w-4 mr-2" />
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Sitemap = () => {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'Products Overview', path: '/products' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const productPages = [
    { name: 'Digital Menu', path: '/products/digital-menu' },
    { name: 'QR Ordering', path: '/products/qr-ordering' },
    { name: 'Analytics', path: '/products/restaurant-analytics' },
    { name: 'Point of Sale (POS)', path: '/products/restaurant-point-of-sale' },
    { name: 'Financial Reports', path: '/products/financial-reports' },
    { name: 'Customer Relationship Management', path: '/products/customer-relationship-management' },
    { name: 'In-Car Ordering', path: '/products/ordering-from-car' },
    { name: 'Inventory Management', path: '/products/inventory-management' },
    { name: 'Kitchen Display System', path: '/products/kitchen-display' },
    { name: 'Swirl Hardware', path: '/products/swirl-hardware' },
    { name: 'Accounting', path: '/products/accounting' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Sitemap</h1>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg mb-12">
              Welcome to the Swirl.cx sitemap. Here you can find links to all pages and resources on our website.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <SitemapSection title="Main Pages" links={mainPages} />
                <SitemapSection title="Legal Information" links={legalPages} />
              </div>
              
              <div>
                <SitemapSection title="Our Products" links={productPages} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
