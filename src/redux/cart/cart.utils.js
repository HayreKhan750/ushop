const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCarTItem = cartItems.find(
    (cartItem) => cartItem.id == cartItemToAdd.id
  );

  if (existingCarTItem)
    return cartItems.map((cartItem) =>
      cartItem.id == cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export default addItemToCart;
