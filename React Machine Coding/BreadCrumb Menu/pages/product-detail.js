import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <img src={product.thumbnail} />
          <p>{product.description}</p>
          <h5>{product.price}</h5>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
