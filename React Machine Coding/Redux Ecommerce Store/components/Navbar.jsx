import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Navbar() {
  // const prod_count = useSelector((state) => state.cart.length);
  const productAdded = useSelector((state) => state.cart);
  const [totalItems, setTotalItems] = useState(0);

  // // const totalproducts = getCartTotal(prod);

  useEffect(() => {
    const total = 0;

    const count = productAdded.map((item) => {
      return total + item.quantity;
    });

    const sum = count.reduce((partialSum, a) => partialSum + a, 0);

    setTotalItems(sum);
    // console.log(totalItems);
  }, [productAdded]);

  return (
    <>
      <div className="navbar">
        <div className="nav_body">
          <NavLink to="/">
            <div className="nav_logo">🦊 hello</div>
          </NavLink>
          <NavLink to="/cart">
            <div className="nav_cart">🛒 {totalItems}</div>
          </NavLink>
        </div>
        {/* {JSON.stringify(productAdded)} */}
      </div>
    </>
  );
}

