import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";

import cartReducer from "./cart/cart.reducer";
const RootReducer = combineReducers({
  user: UserReducer,
  cart: cartReducer,
});

export default RootReducer;
