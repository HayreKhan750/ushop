import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import ShopReducer from "./shop/shop.reducer";

const persistConfing = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const RootReducer = combineReducers({
  user: UserReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: ShopReducer,
});

export default persistReducer(persistConfing, RootReducer);
