import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../reducers";

const store = configureStore({
  reducer: {
    games: gameReducer,
  },
});

console.log("스토어 초기 상태 = ", store.getState());
store.subscribe(() => console.log("스토어 상태 변화 = ", store.getState()));

export default store;