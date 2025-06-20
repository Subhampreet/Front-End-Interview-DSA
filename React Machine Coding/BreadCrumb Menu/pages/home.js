import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const sliceTrending = data.products.slice(0, 6);
        setTrendingProducts(sliceTrending);
      });
  }, []);

  return (
    <div>
      <div className="prod-grid">
        {trendingProducts.map((prod) => (
          <div className="prod-card" key={prod.id}>
            <Link to={`/product/${prod.id}`}>
              <img src={prod.thumbnail} />
              <h3>{prod.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <Link to={"/products"}>
        <button style={{ width: "100%", padding: 10 }}>
          View All Products
        </button>
      </Link>
    </div>
  );
}
