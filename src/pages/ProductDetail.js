import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
import './ProductDetail.css';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const user = JSON.parse(localStorage.getItem('istUser'));

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem(`reviews-${id}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    const review = {
      text: newReview,
      author: user?.email.split('@')[0] || 'Anonymous',
      date: new Date().toLocaleString(),
    };

    const updated = [...reviews, review];
    setReviews(updated);
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updated));
    setNewReview('');
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>R{product.price}</strong></p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <hr style={{ margin: '40px 0' }} />

      <h3>Customer Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {reviews.map((r, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <strong>{r.author}</strong> ({r.date})<br />
              {r.text}
            </li>
          ))}
        </ul>
      )}

      {user ? (
        <form onSubmit={handleReviewSubmit} style={{ marginTop: '20px' }}>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            rows="3"
            cols="40"
            placeholder="Write a review..."
            required
          />
          <br />
          <button type="submit">Submit Review</button>
        </form>
      ) : (
        <p><i>Log in to leave a review</i></p>
      )}
    </div>
  );
}

export default ProductDetail;


