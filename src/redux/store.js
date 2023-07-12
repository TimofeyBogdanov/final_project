import { legacy_createStore as createStore } from "redux";
import menuReducer from "./reducer.js";

const store = createStore(menuReducer);
export default store;