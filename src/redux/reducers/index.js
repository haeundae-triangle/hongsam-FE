import { ADD_GAME } from "../actions";

const initialState = {
  savedGames: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      console.log("ADD_GAME 액션 페이로드 = ", action.payload);
      return {
        ...state,
        savedGames: [...state.savedGames, action.payload],
      };
    default:
      console.log("리듀서에서 액션 타입 = ", action.type);
      return state;
  }
};

export default gameReducer;