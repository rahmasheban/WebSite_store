import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productsApi";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, setIsOpen } = useCart(); // <-- add setIsOpen

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(0);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container">
      {/* Left side: Images */}
      <div className="product-images">
        <img
          src={product.images[selectedImage]}
          alt={`${product.title} ${selectedImage + 1}`}
          className="main-image"
        />

        <div className="thumbnails">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.title} ${index + 1}`}
              className={`thumb ${index === selectedImage ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Right side: Product Info */}
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="price">${product.price}</div>

        <select className="size-select">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <button
          className="add-to-cart-btn"
          onClick={() => {
            addToCart(product); // add product to cart
            setIsOpen(true);    // open cart sidebar immediately
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
