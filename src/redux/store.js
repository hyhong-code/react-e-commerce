import { createStore } from "redux";
// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

// with redux logger
// const middlewares = [logger];
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// with redux devtool
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// persistor is a persisted version of the store
export const persistor = persistStore(store);

export default { store, persistor };
