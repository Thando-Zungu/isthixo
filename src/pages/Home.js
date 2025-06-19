import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Isthixo</h1>
        <p>Urban streetwear crafted for comfort, confidence, and culture.</p>
        <Link to="/shop"><button>Shop Now</button></Link>
      </section>

      <section className="featured">
        <h2>Featured Styles</h2>
        <div className="product-preview">
          {products.slice(0, 3).map(product => (
            <div key={product.id} className="preview-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>R{product.price}</p>
              <Link to={`/product/${product.id}`}><button>View</button></Link>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <h2>About Isthixo</h2>
        <p>
          At Isthixo, we believe fashion is more than fabric. It's a statement. 
          It's identity. Our designs celebrate youth, culture, and bold expression— 
          made for everyday hustle.
        </p>
        <Link to="/shop"><button>Browse Collection</button></Link>
      </section>
    </div>
  );
}

export default Home;
