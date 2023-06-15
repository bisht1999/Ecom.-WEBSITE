import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import CartCntxt from "../store/CartContext";
const Header = (props) => {
  const cartCntxt = useContext(CartCntxt);

  let quantity = 0;
  cartCntxt.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <header>
      <div className={classes.header}>
        <ul>
          <li>HOME</li>
          <li>
            <NavLink activeClassName={classes.active} to="/store">
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
        </ul>
        <div className={classes.btn}>
          <button onClick={props.onShowCart} className={classes.button}>
            Cart
          </button>
          <span> {quantity}</span>
        </div>
      </div>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;