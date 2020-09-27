import React, { useContext, useState } from "react";
import { cartContext } from "../Global/cartContext";
import { Link } from "react-router-dom";

const Navbar = ({ cartToggle }) => {
  const { shoppingCart } = useContext(cartContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <h1 className="Logo">
          <Link to="/The-Restro">
            <span>The</span> Restro
          </Link>
        </h1>
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          <i className="fas fa-bars"></i>
        </div>
        <ul
          className="list-item"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <Link to="/The-Restro">Home</Link>
          </li>
          <li>
            <Link to="/The-Restro/special">Special</Link>
          </li>
          <li>
            <Link to="/The-Restro/product">Menu</Link>
          </li>
          <li>
            <Link to="/The-Restro/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/The-Restro/signup">Signup</Link>
          </li>
        </ul>
        <li onClick={cartToggle} className="Cart">
          <Link to="/The-Restro/cart">
            <span className="dollor">
              <i className="fas fa-cart-plus"></i>
            </span>
            <span className="shoppingCartTotal">
              {shoppingCart ? shoppingCart.length : 0}
            </span>
          </Link>
        </li>
      </nav>
    </>
  );
};

export default Navbar;
