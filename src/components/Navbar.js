import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2>Isthixo</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>

        {!currentUser ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <>
            <li>Hello, {currentUser.email.split('@')[0]}</li>
            <li><button onClick={() => signOut(auth)}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;


