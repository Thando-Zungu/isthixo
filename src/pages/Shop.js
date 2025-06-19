import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../products';
import './Shop.css';
const dummyProducts = [
  { id: 1, name: 'Isthixo Hoodie', price: 599, image: '/assets/hoodie.jpg' },
  { id: 2, name: 'Isthixo T-Shirt', price: 299, image: '/assets/tshirt.jpg' },
];
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
