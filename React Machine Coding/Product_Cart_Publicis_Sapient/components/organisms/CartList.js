import { useEffect, useState } from "react";
import ProductCard from "../molecules/ProductCard";
import { fetchCart, fetchProduct } from "../../services/api";

const CartList = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const cart = await fetchCart();
      const productPromises = cart.products.map((p) =>
        fetchProduct(p.productId)
      );
      const products = await Promise.all(productPromises);
      setCartProducts(products);
    };

    loadCart();
  }, []);

  const handleRemove = (productId) => {
    setCartProducts(cartProducts.filter((p) => p.id !== productId));
  };

  return (
    <div>
      {cartProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default CartList;
