// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      {/* Desktop Nav */}
      <nav className="nav-desktop">
        <div className="logo">
          <Link to="/">Isthixo</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="nav-mobile">
        <div className="mobile-header">
          <Link to="/" className="logo">Isthixo</Link>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        </div>
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

