export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (cartItems.find((item) => item.id === cartItemToAdd.id)) {
    return cartItems.map((item) => {
      return item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
