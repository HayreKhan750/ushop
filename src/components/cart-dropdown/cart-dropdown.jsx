import React from "react";
import "./cart-dropdown.scss";
import { CustomButton } from "../custom-button/custom-button";
import { CartItem } from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems && cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
