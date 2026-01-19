import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, setIsOpen } = useCart();

  return (
    <div className="product-card">
      {/* الصورة */}
      <img src={product.images?.[0]} alt={product.title} />

      {/* عنوان المنتج */}
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>

      {/* أزرار */}
      <div className="product-actions">
        <Link to={`/product/${product.id}`} className="details-btn">
          View Details
        </Link>

        <button
          className="add-btn"
          onClick={() => {
            addToCart(product);
            setIsOpen(true);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
