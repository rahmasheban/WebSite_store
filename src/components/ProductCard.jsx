/*import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.images[0]} width={"200px"} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
*/

import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, setIsOpen } = useCart();

  return (
    <div className="product-card">
      <img src={product.images?.[0]} alt={product.title} />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button
        onClick={() => {
          addToCart(product);
          setIsOpen(true);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

