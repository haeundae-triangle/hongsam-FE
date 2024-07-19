export const ADD_GAME = 'ADD_GAME';
export const SELECT_GAME = 'SELECT_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';

export const addGame = (game) => ({
  type: ADD_GAME,
  payload: game,
});

export const selectGame = (gameId) => ({
  type: SELECT_GAME,
  payload: gameId,
});

export const removeGame = (gameId) => ({
  type: REMOVE_GAME,
  payload: gameId,
});