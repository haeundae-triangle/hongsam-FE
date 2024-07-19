import { ADD_GAME, selectGame } from "../actions";
import { SELECT_GAME } from "../actions";
import { REMOVE_GAME } from "../actions";

const initialState = {
  savedGames: [],
  selectedGames: [],
};


const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      const isGameAlreadyAdded = state.savedGames.some(game => game.game_id === action.payload.game_id);
      if (!isGameAlreadyAdded) {
        return {
          ...state,
          savedGames: [...state.savedGames, action.payload],
        };
      }
      // console.log("ADD_GAME 액션 페이로드 = ", action.payload);
      case SELECT_GAME:
        const isGameAlreadySelected = state.selectedGames.some(game => game.game_id === action.payload.game_id);
        if (!isGameAlreadySelected) {
          return {
            ...state,
            selectedGames: [...state.selectedGames, action.payload],
          };
        } else {
          return {
            ...state,
            selectedGames: state.selectedGames.filter(game => game.game_id !== action.payload),
          }
        }
    case REMOVE_GAME:
      return {
        ...state,
        savedGames: state.savedGames.filter(game => game.game_id !== action.payload),
      };
    default:
      // console.log("리듀서에서 액션 타입 = ", action.type);
      return state;
  }
};

export default gameReducer;