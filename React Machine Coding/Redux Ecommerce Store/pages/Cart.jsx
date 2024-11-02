import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add, decrementRemove, remove } from '../store/cartSlice';

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (prod) => {
    dispatch(remove(prod));
  };

  const incrementItem = (prod) => {
    dispatch(add(prod));
  };

  const decrementRemoval = (prod) => {
    dispatch(decrementRemove(prod));
  };

  return (
    <div className="cart">
      {/* {JSON.stringify(products)} */}
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
                  <div className="prod_item_action">
                    <p onClick={() => decrementRemoval(prod)}>🗑️</p>
                    <p>{prod.quantity}</p>
                    <p onClick={() => incrementItem(prod)}>➕</p>
                  </div>
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
