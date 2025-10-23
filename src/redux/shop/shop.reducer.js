import SHOP_DATA from "../../pages/shop/shop";
const initialState = {
  collections: SHOP_DATA,
};

const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ShopReducer;
