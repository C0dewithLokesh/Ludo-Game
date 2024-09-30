import {combineReducers} from '@reduxjs/toolkit';
import gameSlice from './reducers/gameSlice';

export const rootReducer = combineReducers({
  game: gameSlice,
});
