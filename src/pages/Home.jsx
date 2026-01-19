/*import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import CartSidebar from "../components/CartSidebar";  

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
*/

import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import CartSidebar from "../components/CartSidebar";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      {/* المنتجات */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* السلة */}
      <CartSidebar />
    </>
  );
}

export default Home;
