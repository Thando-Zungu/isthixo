import React, { useState } from 'react';

function Checkout() {
  const [form, setForm] = useState({ name: '', address: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your order has been placed.`);
    // Normally you'd clear cart and send data to backend here
    localStorage.removeItem('istCart');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} />
        <br /><br />
        <input type="text" name="address" placeholder="Shipping Address" required value={form.address} onChange={handleChange} />
        <br /><br />
        <input type="text" name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} />
        <br /><br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
