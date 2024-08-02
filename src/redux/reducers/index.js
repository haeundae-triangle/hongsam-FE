import { ADD_GAME } from "../actions";
import { ADD_GAMELIST } from "../actions";
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
    
    case ADD_GAMELIST:
      return action.payload.reduce((newState, game) => {
        const isGameAlreadyAdded = newState.savedGames.some(existingGame => existingGame.game_id === game.game_id);
        return {
          ...newState,
          savedGames: isGameAlreadyAdded ? newState.savedGames : [...newState.savedGames, game],
        };
      }, state);

    case SELECT_GAME:
      const isGameAlreadySelected = state.selectedGames.some(game => game.game_id === action.payload.game_id);
      
      return {
        ...state,
        selectedGames: isGameAlreadySelected
          ? state.selectedGames.filter(game => game.game_id !== action.payload.game_id)
          : [...state.selectedGames, action.payload],
      };

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