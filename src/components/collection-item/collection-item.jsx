import "./collection-item.styles.scss";
import { CustomButton } from "../custom-button/custom-button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart.action";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={handleAddToCart}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
