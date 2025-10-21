import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  addToCart,
  removeFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.action";
const CheckoutItem = ({
  cartItem: { imageUrl, name, quantity, price },
  cartItem,
  addItem,
  removeItem,
  clearItem,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeFromCart(item)),
  addItem: (item) => dispatch(addToCart(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
