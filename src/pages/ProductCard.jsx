import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img
        src={product.images?.[0]}
        alt={product.title}
      />

      <div className="product-card-content">
        <h3>{product.title}</h3>
        <p>{product.description.slice(0, 60)}...</p>
        <div className="price">${product.price}</div>
      </div>
    </Link>
  );
}

export default ProductCard;
