import CartActionTypes from "./cartActionTypes";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (newItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: newItem,
});
