
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustedRestaurants from '@/components/TrustedRestaurants';
import ProductHero from '@/components/products/ProductHero';
import ProductsList from '@/components/products/ProductsList';
import ProductCTA from '@/components/products/ProductCTA';

const ProductOverview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <ProductHero />
        
        {/* Trusted Restaurants */}
        <TrustedRestaurants />
        
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
