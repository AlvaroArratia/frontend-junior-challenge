import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todos/todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
