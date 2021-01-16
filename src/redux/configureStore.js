import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createReducer from "./reducers";
import middlewares from "../middlewares";
import history from "../middlewares/history";

const reducer = createReducer(history);

export const configureStore = (preloadedState) => {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};
