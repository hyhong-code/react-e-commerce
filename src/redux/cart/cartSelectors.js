import { createSelector } from "reselect";

// Input selector :
// takes whole state, returns a slice of it, ususlly one layer deep
const selectCart = (state) => state.cart;

// Output selector, uses input selecters
// createSelecor() => Memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems // returns value we want out of this selector
);

// Output selector can also takes in other output selectors
export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);
