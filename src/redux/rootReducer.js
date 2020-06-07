import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // get local storage object

// config obj for redux persist
const persistConfig = {
  key: "root", // start storing from root reducer
  storage, // local storage
  whiteList: ["cart"], // name of reducers want to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// modified version of rootReducer with persistance capabilities
export default persistReducer(persistConfig, rootReducer);
