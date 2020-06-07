import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

// export const selectCurrentUser = createSelector(
//   [selectUser, selectOther],
//   (user, other) => user.currentUser.concat(other.otherUser)
// );
