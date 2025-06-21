import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../products';
import './Shop.css';

function Shop({ addToCart }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products
    .filter((product) =>
      filter === 'all' ? true : product.category === filter
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="shop">
      <h2>Shop Our Collection</h2>

 
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="category-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'men' ? 'active' : ''} onClick={() => setFilter('men')}>Men</button>
        <button className={filter === 'women' ? 'active' : ''} onClick={() => setFilter('women')}>Women</button>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;


