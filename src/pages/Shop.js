import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../products';
import './Shop.css';

function Shop({ addToCart }) {
  return (
    <div className="shop">
      <h2>Shop Our Collection</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
