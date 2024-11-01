import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const prod_count = useSelector((state) => state.cart.length);
  return (
    <>
      <div className="navbar">
        <div className="nav_body">
          <NavLink to="/">
            <div className="nav_logo">🦊 hello</div>
          </NavLink>
          <NavLink to="/cart">
            <div className="nav_cart">🛒 {prod_count}</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
