import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - R{item.price}
                <button onClick={() => removeItem(index)} style={{ marginLeft: '10px' }}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: R{total}</h3>
          <Link to="/checkout">
            <button style={{ marginTop: '20px', padding: '10px 20px' }}>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;

