import { createStaticRouter, Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../../components/firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/cart.selector";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
        {/* <span className="logo-text">shop</span> */}
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});
export default connect(mapStateToProps)(Header);

// export default connect((state) => ({
//   currentUser: state.user.currentUser,
// }));
