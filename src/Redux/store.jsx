import { createStore } from "redux";
import { authReducer } from "./reducers";

const store = createStore(authReducer); // correct usage

export default store;