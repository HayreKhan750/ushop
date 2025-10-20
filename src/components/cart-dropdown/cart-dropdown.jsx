import React, { Component } from "react";
import "./cart-dropdown.scss";
import { CustomButton } from "../custom-button/custom-button";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton inverted>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
