import { useSelector } from 'react-redux';

export default function Cart() {
  const products = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div>
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
                    onClick={() => addToCart(prod)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
