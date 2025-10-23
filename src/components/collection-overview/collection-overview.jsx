import { CollectionPreview } from "../../components/collection-preview/collection-preview";
import { selectCollections } from "../../redux/shop/shop.selector";
import { useSelector } from "react-redux";
import "./collections-overview.styles.scss";
import { Link } from "react-router-dom";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, routeName, ...otherCollectionProps }) => (
        <Link key={id} to={`/shop/${routeName}`} className="collection-link">
          <CollectionPreview key={id} {...otherCollectionProps} />
        </Link>
      ))}
    </div>
  );
};

export default CollectionsOverview;
