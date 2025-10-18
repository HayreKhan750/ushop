import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../../components/firebase/firebase";
export const Header = () => {
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
        {auth.currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
