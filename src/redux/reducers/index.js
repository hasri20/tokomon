import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import mainPageReducer from "./mainPageReducer";
import detailPageReducer from "./detailPageReducer";
import myTokomonPageReducer from "./myTokomonPageReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    mainPage: mainPageReducer,
    detailPage: detailPageReducer,
    myTokomonPage: myTokomonPageReducer,
  });

export default createRootReducer;
