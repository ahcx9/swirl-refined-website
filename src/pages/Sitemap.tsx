
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
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
            className="flex items-center hover:text-purple transition-colors py-1"
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
    { name: 'Industries', path: '/industries' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const productPages = [
    { name: 'Digital Menu', path: '/products/digital-menu' },
    { name: 'QR Ordering', path: '/products/qr-ordering' },
    { name: 'Analytics', path: '/products/analytics' },
    { name: 'Point of Sale (POS)', path: '/products/pos' },
    { name: 'Financial Reports', path: '/products/financial-reports' },
    { name: 'CRM', path: '/products/crm' },
    { name: 'In-Car Ordering', path: '/products/ordering-from-car' },
    { name: 'Payroll Management', path: '/products/payroll-management' },
    { name: 'Inventory Management', path: '/products/inventory-management' },
    { name: 'Kitchen Display System', path: '/products/kitchen-display' },
    { name: 'Reservations', path: '/products/reservations' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
