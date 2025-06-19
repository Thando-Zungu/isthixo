import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
  const user = JSON.parse(localStorage.getItem('istUser'));

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1>🎉 Order Confirmed!</h1>
      <p>Thank you, {user?.email.split('@')[0] || 'Customer'}.</p>
      <p>Your items will be shipped shortly.</p>
      <Link to="/shop"><button style={{ marginTop: '20px' }}>Continue Shopping</button></Link>
    </div>
  );
}

export default Confirmation;
