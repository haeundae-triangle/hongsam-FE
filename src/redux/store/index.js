import { configureStore } from "redux";
import gameReducer from "../reducers";

const store = configureStore(gameReducer);

export default store;