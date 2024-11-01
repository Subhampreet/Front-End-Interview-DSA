import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      <div className="navbar">
        <div className="nav_body">
          <div className="nav_logo">🦊 hello</div>
          <div className="nav_cart">🛒</div>
        </div>
      </div>

      <div className="prod_list">
        {products?.map((prod) => (
          <div className="cont" id={prod.id}>
            <div className="product-card">
              <div className="product-card__image">
                <img src={prod.image} alt={prod.title} />
              </div>
              <div className="product-card__info">
                <h2 className="product-card__title">{prod.title}</h2>
                <p className="product-card__description">{prod.description}</p>
                <div className="product-card__price-row">
                  <span className="product-card__price">$ {prod.price}</span>
                  <button className="product-card__btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
