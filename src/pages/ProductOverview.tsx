
import React from 'react';
import Seo from '@/components/Seo';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import ProductHero from '@/components/products/ProductHero';
import PlatformShowroom from '@/components/products/PlatformShowroom';
import ProductsList from '@/components/products/ProductsList';

import ProductCTA from '@/components/products/ProductCTA';

const ProductOverview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Products — the full swirl platform"
        description="Explore every swirl module: POS, KDS, QR ordering, digital menu, inventory, accounting, CRM, loyalty, reservations and hardware."
        path="/products"
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <ProductHero />
        
        {/* Trusted Restaurants */}
        <TrustedRestaurants />
        
        {/* Products List */}
        {/* Platform showroom */}
        <section className="py-20 bg-[#F7FAFF]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The swirl platform</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Three layers. One connected system.</h2>
            </div>
            <PlatformShowroom />
          </div>
        </section>

        {/* Products List */}
        <section className="py-20">
          <div className="container-custom">
            <ProductsList />
            <ProductCTA />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ProductOverview;
