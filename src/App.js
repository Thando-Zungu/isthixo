
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import './App.css';
import Confirmation from './pages/Confirmation';
import ForgotPassword from './pages/ForgotPassword';
import Footer from './components/Footer'; 

const getStoredCart = () => {
  const stored = localStorage.getItem('istCart');
  return stored ? JSON.parse(stored) : [];
};

function App() {
  const [cart, setCart] = useState(getStoredCart);
const [user, setUser] = useState(() => {
  const stored = localStorage.getItem('istUser');
  return stored ? JSON.parse(stored) : null;
});
useEffect(() => {
  localStorage.setItem('istUser', JSON.stringify(user));
}, [user]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

 
  useEffect(() => {
    localStorage.setItem('istCart', JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter basename="/isthixo">
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
  path="/checkout"
  element={
    user ? (
      <Checkout />
    ) : (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Please log in to proceed to checkout</h2>
        <Link to="/login"><button>Go to Login</button></Link>
      </div>
    )
  }
  
/>
<Route path="/confirmation" element={<Confirmation />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
     
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
