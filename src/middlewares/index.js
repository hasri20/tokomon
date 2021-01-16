import { routerMiddleware } from "connected-react-router";
import loggerMiddleware from "redux-logger";
import history from "./history";

const middlewares = [routerMiddleware(history), loggerMiddleware];

export default middlewares;
