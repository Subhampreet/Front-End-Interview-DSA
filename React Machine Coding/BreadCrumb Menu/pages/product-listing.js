import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <div className="prod-grid">
        {products.map((prod) => (
          <div className="prod-card" key={prod.id}>
            <Link to={`/product/${prod.id}`}>
              <img src={prod.thumbnail} />
              <h3>{prod.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
