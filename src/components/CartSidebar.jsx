import { useCart } from "../context/CartContext";

function CartSidebar() {
  const { cartItems, removeFromCart, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <h2>🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.images?.[0]} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Qty: {item.qty}</p>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))
        )}

        <button className="close-cart" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartSidebar;
