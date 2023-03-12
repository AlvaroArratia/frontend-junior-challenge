import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'state/types/storeTypes';

const selectTodosCompleted = createSelector(
  (state: RootState) => state.todos,
  todos => todos.todos.reduce((acc, todo) => (todo.checked ? acc + 1 : acc), 0),
);

export { selectTodosCompleted };
