import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getProductById } from "../api/productsApi";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.images[0]} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>

      <select>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
