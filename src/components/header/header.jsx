import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "./crown.svg";
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
      </div>
    </div>
  );
};
