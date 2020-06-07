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

export const removeItems = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  } else {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

export const clearItemFromCart = (cartItems, itemId) =>
  cartItems.filter((item) => item.id !== itemId);
