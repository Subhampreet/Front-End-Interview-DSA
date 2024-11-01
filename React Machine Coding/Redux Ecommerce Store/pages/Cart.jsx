import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (prod) => {
    dispatch(remove(prod));
  };

  return (
    <div className="cart">
      {products.length !== 0 ? (
        <div className="prod_list">
          {products?.map((prod) => (
            <div className="prod_card" id={prod.id}>
              <div className="prod_left">
                <img src={prod.image} alt={prod.title} />
              </div>
              <div className="prod_right">
                <h4 className="prod_title">{prod.title}</h4>
                <p className="prod_desc">{prod.description}</p>
                <div className="prod_right_bottom">
                  <h4>$ {prod.price}</h4>
                  <button
                    className="product-card__btn"
                    onClick={() => removeFromCart(prod)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="cart_empty">Cart is empty</h4>
      )}
    </div>
  );
}
