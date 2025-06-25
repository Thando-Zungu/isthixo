import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="nav-mobile">
        <div className="mobile-header">
          <button className="menu-button" onClick={toggleMenu}>☰</button>
          <Link to="/" className="logo" onClick={closeMenu}>Isthixo</Link>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/shop" onClick={closeMenu}>Shop</Link>
            <Link to="/cart" onClick={closeMenu}>Cart ({cartCount})</Link>
            <Link to="/login" onClick={closeMenu}>Login</Link>
            <Link to="/register" onClick={closeMenu}>Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;



