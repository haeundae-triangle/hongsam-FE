export const ADD_GAME = 'ADD_GAME';
export const ADD_GAMELIST = 'ADD_GAMELIST';
export const SELECT_GAME = 'SELECT_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';

export const addGame = (game) => ({
  type: ADD_GAME,
  payload: game,
});

export const addGameList = (gameList) => ({
  type: ADD_GAMELIST,
  payload: gameList,
})

export const selectGame = (game) => ({
  type: SELECT_GAME,
  payload: game,
});

export const removeGame = (gameId) => ({
  type: REMOVE_GAME,
  payload: gameId,
});