import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionsOverview />} />
        <Route path=":collectionRouteName" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};
export default ShopPage;
