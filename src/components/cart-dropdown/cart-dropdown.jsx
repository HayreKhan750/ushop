import React, { Component } from "react";
import "./cart-dropdown.scss";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <button>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropdown;
