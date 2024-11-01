import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

export default function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (prod) => {
    dispatch(add(prod));
  };

  return (
    <div>
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
                  <button
                    className="product-card__btn"
                    onClick={() => addToCart(prod)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
