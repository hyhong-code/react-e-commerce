import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// with redux logger
// const middlewares = [logger];
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// with redux devtool
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
