import "./collection.styles.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item";

const CollectionPage = () => {
  const { collectionRouteName } = useParams();
  const collection = useSelector(selectCollections).find(
    (collection) =>
      collection.routeName.toLowerCase() === collectionRouteName.toLowerCase()
  );

  if (!collection) return <p>Collection not found</p>;

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
