
import React from 'react';
import ProductCard from './ProductCard';
import products from './productsData';

const ProductsList = () => {
  return (
    <div className="grid gap-12 md:gap-16">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default ProductsList;
