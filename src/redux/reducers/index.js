import { ADD_GAME } from "../actions";

const initialState = {
  savedGames: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        savedGames: [...state.savedGames, action.payload],
      };
    default:
      return state;
  }
};

export default gameReducer;